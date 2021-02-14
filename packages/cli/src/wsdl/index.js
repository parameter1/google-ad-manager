const { getAsArray } = require('@parameter1/utils');
const WSDLComplexType = require('./complex-type');
const WSDLSimpleType = require('./simple-type');
const WSDLComplexTypeFields = require('./complex-type-fields');
const cleanType = require('./utils/clean-type');

const COMPLEX_TYPE_PATH = 'wsdl:definitions.wsdl:types.0.schema.0.complexType';
const SIMPLE_TYPE_PATH = 'wsdl:definitions.wsdl:types.0.schema.0.simpleType';

class WSDL {
  constructor({ complexTypes, simpleTypes } = {}) {
    this.complexTypes = complexTypes;
    this.simpleTypes = simpleTypes;
  }

  getComplexType(name, merged = false) {
    if (!merged) return this.complexTypes.get(cleanType(name));
    const tree = this.getComplexTypeExtensions(name);

    const fields = tree.reverse().reduce((arr, type) => [...arr, ...type.fields.map], []);
    const primary = tree.shift();
    return new WSDLComplexType({
      ...primary,
      fields: new WSDLComplexTypeFields({ map: new Map(fields) }),
    });
  }

  getComplexTypeExtensions(name, tree = []) {
    const n = cleanType(name);
    const type = this.complexTypes.get(n);
    if (!type) return tree;
    tree.push(type);
    if (!type.extension) return tree;
    return this.getComplexTypeExtensions(type.extension, tree);
  }

  static fromRaw(data = {}) {
    const complexTypes = getAsArray(data, COMPLEX_TYPE_PATH).reduce((map, def) => {
      const type = WSDLComplexType.fromRaw(def);
      map.set(type.name, type);
      return map;
    }, new Map());

    const simpleTypes = getAsArray(data, SIMPLE_TYPE_PATH).reduce((map, def) => {
      const type = WSDLSimpleType.fromRaw(def);
      map.set(type.name, type);
      return map;
    }, new Map());

    return new WSDL({ complexTypes, simpleTypes });
  }
}

module.exports = WSDL;
