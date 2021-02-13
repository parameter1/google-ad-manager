const GoogleAuth = require('@parameter1/google-ad-manager-auth');
const GoogleServiceAccount = require('./service-account');
const GoogleAdManagerService = require('./service');
const versions = require('./versions');
const pkg = require('../package.json');

class GoogleAdManagerSOAP {
  /**
   *
   * @param {object} params
   * @param {string} params.jsonKeyFilePath An absolute path to the service account JSON file
   * @param {string} params.networkCode The Google Ad Manager network code to access
   * @param {string} [params.applicationName] The application name.
   * @param {string} [params.apiVersion=v202011] The ad manager API version to use.
   */
  constructor({
    jsonKeyFilePath,
    networkCode,
    applicationName,
    apiVersion = 'v202011',
  } = {}) {
    if (!networkCode) throw new Error('The Google Ad Manager network code is required.');
    this.networkCode = networkCode;

    const defaultAppName = `${pkg.name} v${pkg.version}`;
    this.applicationName = applicationName ? `${applicationName} (${defaultAppName})` : defaultAppName;

    this.version = versions[apiVersion];
    if (!this.version) throw new Error(`Unable to load API version ${apiVersion}`);

    this.account = new GoogleServiceAccount({ jsonKeyFilePath });
    this.auth = new GoogleAuth({
      privateKey: this.account.get('private_key'),
      clientEmail: this.account.get('client_email'),
    });
    this.services = {};
  }

  /**
   * Gets a Google Ad Manager API service.
   *
   * @param {string} name The service name, e.g. `Company` or `LineItem`
   */
  service(name) {
    const { services, key } = this.version;
    if (!services[name]) throw new Error(`No Ad Manager service registered for '${name}'`);
    if (!this.services[name]) {
      this.services[name] = new GoogleAdManagerService({
        name,
        version: key,
        networkCode: this.networkCode,
        applicationName: this.applicationName,
        auth: this.auth,
      });
    }
    return this.services[name];
  }
}

module.exports = GoogleAdManagerSOAP;
