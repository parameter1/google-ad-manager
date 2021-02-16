const Service = require('./service');

/**
 * THIS FILE IS GENERATED. DO NOT EDIT.
 *
 * @param {object} params
 * @param {string} params.networkCode The Google Ad Manager network code to access
 * @param {string} params.applicationName The application name.
 * @param {GoogleAuth} params.auth The Google authetication object (contains the access token)
 */
module.exports = ({ networkCode, applicationName, auth } = {}) => ({
  CompanyService: new Service({
    url: 'https://www.google.com/apis/ads/publisher/v202011/CompanyService',
    networkCode,
    applicationName,
    auth,
  }),
});
