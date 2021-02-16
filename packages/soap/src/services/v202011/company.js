const GoogleAdManagerService = require('../abstract');

class CompanyService extends GoogleAdManagerService {
  /**
   * THIS FILE IS GENERATED. DO NOT EDIT.
   *
   * @param {object} params
   * @param {string} params.networkCode The Google Ad Manager network code to access
   * @param {string} params.applicationName The application name.
   * @param {GoogleAuth} params.auth The Google authetication object (contains the access token)
   */
  constructor({
    networkCode,
    applicationName,
    auth,
  } = {}) {
    super({
      url: 'https://ads.google.com/apis/ads/publisher/v202011/CompanyService',
      networkCode,
      applicationName,
      auth,
    });
  }
}

module.exports = CompanyService;
