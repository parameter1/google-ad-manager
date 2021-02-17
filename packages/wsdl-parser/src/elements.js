const { getAsArray } = require('@parameter1/utils');
const WSDLElement = require('./element');

const ELEMENT_TYPE_PATH = 'wsdl:definitions.wsdl:types.0.schema.0.element';

class WSDLElements extends Map {
  filter(...args) {
    return this.toArray().filter(...args);
  }

  map(...args) {
    return this.toArray().map(...args);
  }

  toArray() {
    return Array.from(this).map(([, field]) => field);
  }

  static fromRaw(data = {}) {
    // for now, skip elements associated with an object type
    const elements = getAsArray(data, ELEMENT_TYPE_PATH).filter((element) => {
      const { type } = element.$;
      return !type;
    });

    return new WSDLElements(elements.map((ele) => {
      const element = WSDLElement.fromRaw(ele);
      return [element.name, element];
    }));
  }
}

module.exports = WSDLElements;
