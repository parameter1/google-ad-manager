const CompanyService = require('./company');

/**
 * THIS FILE IS GENERATED. DO NOT EDIT.
 *
 * @param {object} params
 * @param {string} params.networkCode The Google Ad Manager network code to access
 * @param {string} params.applicationName The application name.
 * @param {GoogleAuth} params.auth The Google authetication object (contains the access token)
 */
module.exports = ({ networkCode, applicationName, auth } = {}) => ({
  CompanyService: new CompanyService({ networkCode, applicationName, auth }),
});
