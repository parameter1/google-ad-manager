const soap = require('soap');
const { getAsObject } = require('@parameter1/utils');

const ROOT_URI = 'https://www.google.com/apis/ads/publisher';

class GoogleAdManagerService {
  /**
   *
   * @param {object} params
   * @param {string} params.name The service name, e.g. Company or LineItem
   * @param {string} params.version The API version in use, e.g. v2020211
   * @param {string} params.networkCode The Google Ad Manager network code to access
   * @param {string} params.applicationName The application name.
   * @param {GoogleAuth} params.auth The Google authetication object (contains the access token)
   */
  constructor({
    name,
    version,
    networkCode,
    applicationName,
    auth,
  } = {}) {
    this.name = name;
    this.version = version;
    this.networkCode = networkCode;
    this.applicationName = applicationName;

    this.auth = auth;
    this.wsdl = `${ROOT_URI}/${version}/${name}Service?wsdl`;
  }

  /**
   *
   * @param {string} action The API action name, e.g. `getCompaniesByStatement`
   * @param {object} params Parameters to pass to the SOAP call.
   */
  async request(action, params = {}) {
    if (!action) throw new Error('A request action must be provided.');
    const client = await this.client();
    const method = `${action}Async`;
    const [result, rawResponse, soapHeader, rawRequest] = await client[method](params);
    return {
      data: getAsObject(result, 'rval'),
      headers: getAsObject(soapHeader, 'ResponseHeader'),
      raw: { request: rawRequest, response: rawResponse },
    };
  }

  /**
   * Describes the available SOAP web services.
   */
  async describe() {
    const client = await this.client();
    return client.describe();
  }

  /**
   * Inits and returns the SOAP client for this ad manager service.
   */
  async client() {
    try {
      this.token = await this.auth.retrieve();
      if (!this.promise) this.promise = soap.createClientAsync(this.wsdl, {});
      const client = await this.promise;
      // force set the client to use the WSDL endpoint (which includes `?wsdl`)
      client.setEndpoint(this.wsdl);

      // add soap headers when not previously set.
      const headers = client.getSoapHeaders();
      if (!headers || !headers.length) {
        client.addSoapHeader({
          RequestHeader: {
            networkCode: this.networkCode,
            applicationName: this.applicationName,
          },
        }, '', 'ns1', `${ROOT_URI}/${this.version}`);
      }

      // add the bearer access token.
      client.setSecurity(new soap.BearerSecurity(this.token.value));
      return client;
    } catch (e) {
      this.promise = undefined;
      throw e;
    }
  }
}

module.exports = GoogleAdManagerService;
