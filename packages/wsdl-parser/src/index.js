const fetch = require('node-fetch');
const { parseString } = require('xml2js');
const { getAsObject } = require('@parameter1/utils');
const { pluralize } = require('inflected');
const WSDLElements = require('./elements');
const WSDLOperations = require('./operations');
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
   * @param {WSDLElements} params.elements
   * @param {WSDLOperations} params.operations
   */
  constructor({
    url,
    types,
    elements,
    operations,
  } = {}) {
    if (!url) throw new Error('The WSDL service URL is required.');
    const info = infoFromURL(url);
    this.url = url;
    this.name = info.name;
    this.shortName = info.shortName;
    this.version = info.version;
    this.pluralized = pluralize(info.shortName);
    this.types = types;
    this.elements = elements;
    this.operations = operations;
  }

  getByStatementOps() {
    return this.operations.filter((op) => /get.+?ByStatement/.test(op.name));
  }

  getType(name, merged = false) {
    if (!merged) return this.types.get(cleanType(name));
    const tree = this.getTypeExtensions(name);
    const fields = tree.reverse().reduce((arr, type) => [...arr, ...type.fields], []);
    const primary = tree.pop();
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
    const elements = WSDLElements.fromRaw(parsed);
    const operations = WSDLOperations.fromRaw(parsed);
    return new WSDL({
      url: location,
      elements,
      types,
      operations,
    });
  }
}

module.exports = WSDL;
