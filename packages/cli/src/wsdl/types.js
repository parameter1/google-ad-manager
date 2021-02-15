const { getAsArray } = require('@parameter1/utils');
const WSDLType = require('./type');

const COMPLEX_TYPE_PATH = 'wsdl:definitions.wsdl:types.0.schema.0.complexType';
const SIMPLE_TYPE_PATH = 'wsdl:definitions.wsdl:types.0.schema.0.simpleType';

class WSDLTypes extends Map {
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
    const defs = [
      ...getAsArray(data, SIMPLE_TYPE_PATH),
      ...getAsArray(data, COMPLEX_TYPE_PATH),
    ];

    return new WSDLTypes(defs.map((def) => {
      const type = WSDLType.fromRaw(def);
      return [type.name, type];
    }));
  }
}

module.exports = WSDLTypes;
