const fetch = require('node-fetch');
const { parseString } = require('xml2js');
const { getAsObject } = require('@parameter1/utils');
const WSDLType = require('./type');
const WSDLTypeFields = require('./type/fields');
const WSDLTypes = require('./types');
const cleanType = require('./utils/clean-type');
const infoFromURL = require('./utils/service-url-info');

class WSDL {
  /**
   *
   * @param {object} params
   * @param {string} params.url The service URL, e.g. `https://ads.google.com/apis/ads/publisher/v202011/CompanyService`
   * @param {WSDLTypes} params.types
   */
  constructor({ url, types } = {}) {
    if (!url) throw new Error('The WSDL service URL is required.');
    const info = infoFromURL(url);
    this.url = url;
    this.name = info.name;
    this.version = info.version;
    this.primaryTypeName = info.primaryType;
    this.types = types;
  }

  getPrimaryType() {
    return this.getType(this.primaryTypeName, true);
  }

  getType(name, merged = false) {
    if (!merged) return this.types.get(cleanType(name));
    const tree = this.getTypeExtensions(name);
    const fields = tree.reverse().reduce((arr, type) => [...arr, ...type.fields], []);
    const primary = tree.shift();
    return new WSDLType({
      ...primary,
      fields: new WSDLTypeFields(fields),
    });
  }

  getAllReferencedTypesFor(name, types = new WSDLTypes()) {
    if (types.has(name)) return types;
    const type = this.getType(name, true);
    if (!type) throw new Error(`No type found for '${name}'`);
    types.set(name, type);
    const refs = type.fields.getAllReferencedTypes('object');
    refs.forEach((refName) => {
      this.getAllReferencedTypesFor(refName, types);
    });
    return types;
  }

  getTypeExtensions(name, tree = []) {
    const n = cleanType(name);
    const type = this.types.get(n);
    if (!type) return tree;
    tree.push(type);
    if (!type.extension) return tree;
    return this.getTypeExtensions(type.extension, tree);
  }

  static async loadFromUrl(url) {
    const res = await fetch(url);
    const xml = await res.text();
    return WSDL.loadFromXML(xml);
  }

  static async loadFromXML(xml) {
    const parsed = await new Promise((resolve, reject) => {
      parseString(xml, (e, data) => (e ? reject(e) : resolve(data)));
    });
    const { location } = getAsObject(parsed, 'wsdl:definitions.wsdl:service.0.wsdl:port.0.wsdlsoap:address.0.$');
    const types = WSDLTypes.fromRaw(parsed);
    return new WSDL({ url: location, types });
  }
}

module.exports = WSDL;
