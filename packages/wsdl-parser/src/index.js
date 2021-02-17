const fetch = require('node-fetch');
const { parseString } = require('xml2js');
const { getAsObject } = require('@parameter1/utils');
const { pluralize } = require('inflected');
const ArrayLikeMap = require('./array-like-map');
const WSDLElements = require('./elements');
const WSDLMessages = require('./messages');
const WSDLOperations = require('./operations');
const WSDLType = require('./type');
const WSDLTypeFields = require('./type/fields');
const WSDLTypes = require('./types');
const cleanType = require('./utils/clean-type');
const infoFromURL = require('./utils/service-url-info');

const { isArray } = Array;

class WSDL {
  /**
   *
   * @param {object} params
   * @param {string} params.url The service URL, e.g. `https://ads.google.com/apis/ads/publisher/v202011/CompanyService`
   * @param {WSDLTypes} params.types
   * @param {WSDLElements} params.elements
   * @param {WSDLOperations} params.operations
   * @param {WSDLMessages} params.messages
   */
  constructor({
    url,
    types,
    elements,
    operations,
    messages,
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
    this.messages = messages;
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

  getReturnFieldForOperation(name) {
    const op = this.operations.get(name);
    if (!op) throw new Error(`No operation found for ${op}`);
    const message = this.messages.get(op.outputMessageName);
    const element = this.elements.get(message.elementName);
    const field = element.fields.get('rval');
    if (!field) throw new Error(`No rval field was found for ${element.name}`);
    return field;
  }

  getAllOperationInputElements() {
    return this.operations.reduce((map, operation) => {
      const message = this.messages.get(operation.inputMessageName);
      if (!message) throw new Error(`Unable to get an input message for ${operation.name}.${operation.inputMessageName}`);
      const element = this.elements.get(message.elementName);
      if (!element) throw new Error(`Unable to get a message element for ${operation.name}.${operation.inputMessageName}.${message.elementName}`);
      map.set(operation.name, element);
      return map;
    }, new ArrayLikeMap());
  }

  getAllReferencedTypesFor(name, types = new WSDLTypes()) {
    const names = isArray(name) ? name : [name];
    names.forEach((n) => {
      if (types.has(n)) return;
      const type = this.getType(n, true);
      if (!type) throw new Error(`No type found for '${n}'`);
      types.set(n, type);
      const refs = type.fields.getAllReferencedTypes('object');
      refs.forEach((refName) => {
        this.getAllReferencedTypesFor(refName, types);
      });
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
    const messages = WSDLMessages.fromRaw(parsed);
    const elements = WSDLElements.fromRaw(parsed);
    const operations = WSDLOperations.fromRaw(parsed);
    return new WSDL({
      url: location,
      elements,
      types,
      operations,
      messages,
    });
  }
}

module.exports = WSDL;
