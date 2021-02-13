const GoogleAuth = require('@parameter1/google-ad-manager-auth');
const GoogleServiceAccount = require('./service-account');
const pkg = require('../package.json');

class GoogleAdManagerSOAP {
  /**
   *
   * @param {object} params
   * @param {string} params.jsonKeyFilePath An absolute path to the service account JSON file
   * @param {string} params.networkCode The Google Ad Manager network code to access
   * @param {string} [params.applicationName] The application name.
   */
  constructor({
    jsonKeyFilePath,
    networkCode,
    applicationName,
  } = {}) {
    if (!networkCode) throw new Error('The Google Ad Manager network code is required.');
    this.networkCode = networkCode;

    const defaultAppName = `${pkg.name} v${pkg.version}`;
    this.applicationName = applicationName ? `${applicationName} (${defaultAppName})` : defaultAppName;

    this.account = new GoogleServiceAccount({ jsonKeyFilePath });
    this.auth = new GoogleAuth({
      privateKey: this.account.get('private_key'),
      clientEmail: this.account.get('client_email'),
    });
  }
}

module.exports = GoogleAdManagerSOAP;
