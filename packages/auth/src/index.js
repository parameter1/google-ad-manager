const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');
const { URLSearchParams } = require('url');
const GoogleAccessToken = require('./access-token');

const GRANT_TYPE = 'urn:ietf:params:oauth:grant-type:jwt-bearer';
const SCOPE = 'https://www.googleapis.com/auth/dfp';
const ACCESS_TOKEN_URI = 'https://oauth2.googleapis.com/token';
const DEFAULT_SKEW_SECONDS = 60;
const EXPIRY_SECONDS = 3600;

class GoogleAuth {
  /**
   *
   * @param {object} params
   * @param {string} params.privateKey The `private_key` value from the Google service account
   * @param {string} params.clientEmail The `client_email` value from the Google service account
   * @param {number} [params.skew=60] The number of seconds to skew the token issued time
   */
  constructor({ privateKey, clientEmail, skew } = {}) {
    if (!privateKey || !clientEmail) throw new Error('The private key and client email are required from the Google service account.');
    this.privateKey = privateKey;
    this.clientEmail = clientEmail;
    this.skew = skew || DEFAULT_SKEW_SECONDS;
  }

  /**
   * Retrieves an access token.
   * Will only make a request if the token is falsy, expired, or the method
   * forces the request.
   *
   * @param {object} options
   * @param {boolean} options.force Whether to force a new auth token request.
   * @param {?object} options.fetchOptions Additional options to send to `fetch`.
   */
  async retrieve({ force = false, fetchOptions } = {}) {
    if ((this.token && this.token.hasExpired()) || force) {
      this.fetchPromise = this.fetch(fetchOptions);
    }
    if (!this.fetchPromise) {
      this.fetchPromise = this.fetch(fetchOptions);
    }

    try {
      const { accessToken, expiresIn, retrievedAt } = await this.fetchPromise;
      this.token = new GoogleAccessToken({
        value: accessToken,
        expiresIn,
        retrievedAt,
      });
      return this.token;
    } catch (e) {
      this.fetchPromise = undefined;
      throw e;
    }
  }

  /**
   * Executes an authentication fetch request to Google.
   *
   * @param {object} options Additional options to send to `fetch`.
   * @return {Promise<string>} The Google access token.
   */
  async fetch(options = {}) {
    const retrievedAt = new Date();
    const query = new URLSearchParams({
      grant_type: GRANT_TYPE,
      assertion: this.buildJWT(),
    });

    const res = await fetch(ACCESS_TOKEN_URI, {
      ...options,
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Cache-Control': 'no-store' },
      body: `${query}`,
    });
    const {
      access_token: accessToken,
      expires_in: expiresIn,
    } = await res.json();
    return { accessToken, expiresIn, retrievedAt };
  }

  /**
   * Builds the JWT token to send with the access token request.
   *
   * @return {string}
   */
  buildJWT() {
    const now = Math.floor(Date.now() / 1000);
    return jwt.sign({
      iss: this.clientEmail,
      aud: ACCESS_TOKEN_URI,
      exp: now + EXPIRY_SECONDS,
      iat: now - this.skew,
      scope: SCOPE,
    }, this.privateKey, { algorithm: 'RS256' });
  }
}

module.exports = GoogleAuth;
