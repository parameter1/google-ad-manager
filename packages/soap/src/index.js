const GoogleAuth = require('@parameter1/google-ad-manager-auth');
const { ROOT_API_PATH } = require('@parameter1/google-ad-manager-constants');
const GoogleServiceAccount = require('./service-account');
const GoogleAdManagerService = require('./service');
const pkg = require('../package.json');

class GoogleAdManagerSOAP {
  /**
   *
   * @param {object} params
   * @param {string} params.version The ad manager API version to use.
   * @param {string} params.jsonKeyFilePath An absolute path to the service account JSON file
   * @param {string} params.networkCode The Google Ad Manager network code to access
   * @param {string} [params.applicationName] The application name.
   */
  constructor({
    version,
    jsonKeyFilePath,
    networkCode,
    applicationName,
  } = {}) {
    if (!networkCode) throw new Error('The Google Ad Manager network code is required.');
    if (!version) throw new Error('The Google Ad Manager API version is required.');
    this.networkCode = networkCode;

    const defaultAppName = `${pkg.name} v${pkg.version}`;
    this.applicationName = applicationName ? `${applicationName} (${defaultAppName})` : defaultAppName;
    this.version = version;
    this.account = new GoogleServiceAccount({ jsonKeyFilePath });
    this.auth = new GoogleAuth({
      privateKey: this.account.get('private_key'),
      clientEmail: this.account.get('client_email'),
    });
  }

  /**
   * Gets a Google Ad Manager API service.
   *
   * @param {string} name The service name, e.g. `Company` or `LineItem`
   */
  service(name) {
    const fullName = `${name}Service`;
    if (!this.services[fullName]) {
      const url = `${ROOT_API_PATH}/${this.version}/${fullName}`;
      this.services[fullName] = new GoogleAdManagerService({
        url,
        networkCode: this.networkCode,
        applicationName: this.applicationName,
        auth: this.auth,
      });
    }
    return this.services[fullName];
  }
}

module.exports = GoogleAdManagerSOAP;
