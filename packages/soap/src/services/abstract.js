const soap = require('soap');
const { getAsObject } = require('@parameter1/utils');
const { serviceUrlInfo } = require('@parameter1/google-ad-manager-wsdl-parser/utils');

class GoogleAdManagerService {
  /**
   *
   * @param {object} params
   * @param {string} params.url The service URL, e.g. CompanyService or LineItemService
   * @param {string} params.networkCode The Google Ad Manager network code to access
   * @param {string} params.applicationName The application name.
   * @param {GoogleAuth} params.auth The Google authetication object (contains the access token)
   */
  constructor({
    url,
    networkCode,
    applicationName,
    auth,
  } = {}) {
    if (!url) throw new Error('The service URL is required.');
    this.url = url;
    const info = serviceUrlInfo(url);

    this.name = info.name;
    this.version = info.version;
    this.networkCode = networkCode;
    this.applicationName = applicationName;

    this.auth = auth;
    this.wsdl = info.toWSDL();
    this.namespace = info.namespace;
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
        }, '', 'ns1', this.namespace);
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
