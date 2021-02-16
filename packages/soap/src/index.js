const GoogleAuth = require('@parameter1/google-ad-manager-auth');
const GoogleServiceAccount = require('./service-account');
const loadServices = require('./services/load');
const pkg = require('../package.json');

class GoogleAdManagerSOAP {
  /**
   *
   * @param {object} params
   * @param {string} params.jsonKeyFilePath An absolute path to the service account JSON file
   * @param {string} params.networkCode The Google Ad Manager network code to access
   * @param {string} [params.applicationName] The application name.
   * @param {string} [params.version=v202011] The ad manager API version to use.
   */
  constructor({
    jsonKeyFilePath,
    networkCode,
    applicationName,
    version = 'v202011',
  } = {}) {
    if (!networkCode) throw new Error('The Google Ad Manager network code is required.');
    this.networkCode = networkCode;

    const defaultAppName = `${pkg.name} v${pkg.version}`;
    this.applicationName = applicationName ? `${applicationName} (${defaultAppName})` : defaultAppName;
    this.version = version;
    this.account = new GoogleServiceAccount({ jsonKeyFilePath });
    this.services = loadServices({
      version,
      networkCode,
      applicationName,
      auth: new GoogleAuth({
        privateKey: this.account.get('private_key'),
        clientEmail: this.account.get('client_email'),
      }),
    });
  }

  /**
   * Gets a Google Ad Manager API service.
   *
   * @param {string} name The service name, e.g. `Company` or `LineItem`
   */
  service(name) {
    const service = this.services[`${name}Service`];
    if (!service) throw new Error(`No Ad Manager service registered for '${name}' (${this.version})`);
    return service;
  }
}

module.exports = GoogleAdManagerSOAP;
