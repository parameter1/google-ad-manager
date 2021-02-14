const { get, getAsArray } = require('@parameter1/utils');
const getDocs = require('./utils/get-docs');
const cleanType = require('./utils/clean-type');

class WSDLSimpleType {
  constructor({ name, documentation, enumeration }) {
    this.name = name;
    this.documentation = documentation;
    this.enumeration = enumeration;
  }

  static fromRaw(type = {}) {
    const name = cleanType(type.$.name);
    const documentation = getDocs(type);

    const restriction = get(type, 'restriction.0');
    if (!restriction || !restriction.$.base === 'xsd:string') {
      throw new Error('Simple types without string restrictions are NYI.');
    }
    const enumeration = getAsArray(restriction, 'enumeration');
    if (!enumeration.length) throw new Error('Simple type with empty enum encountered.');

    return new WSDLSimpleType({
      name,
      documentation,
      enumeration: enumeration.map((en) => ({
        value: en.$.value,
        documentation: getDocs(en),
      })),
    });
  }
}

module.exports = WSDLSimpleType;
