const { getAsArray } = require('@parameter1/utils');
const ArrayLikeMap = require('./array-like-map');
const WSDLType = require('./type');

const COMPLEX_TYPE_PATH = 'wsdl:definitions.wsdl:types.0.schema.0.complexType';
const SIMPLE_TYPE_PATH = 'wsdl:definitions.wsdl:types.0.schema.0.simpleType';

class WSDLTypes extends ArrayLikeMap {
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
