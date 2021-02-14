const { getAsArray } = require('@parameter1/utils');
const WSDLComplexType = require('./complex-type');
const WSDLSimpleType = require('./simple-type');

const COMPLEX_TYPE_PATH = 'wsdl:definitions.wsdl:types.0.schema.0.complexType';
const SIMPLE_TYPE_PATH = 'wsdl:definitions.wsdl:types.0.schema.0.simpleType';

class WSDL {
  constructor(data) {
    this.buildSimpleTypes(data);
    this.buildComplexTypes(data);
  }

  getComplexType(name) {
    return this.complexTypes.get(name);
  }

  buildComplexTypes(data) {
    const types = getAsArray(data, COMPLEX_TYPE_PATH);
    this.complexTypes = types.reduce((map, def) => {
      const type = new WSDLComplexType(def);
      map.set(type.name, type);
      return map;
    }, new Map());
  }

  buildSimpleTypes(data) {
    const types = getAsArray(data, SIMPLE_TYPE_PATH);
    this.simpleTypes = types.reduce((map, def) => {
      const type = new WSDLSimpleType(def);
      map.set(type.name, type);
      return map;
    }, new Map());
  }
}

module.exports = WSDL;
