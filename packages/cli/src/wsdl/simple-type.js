const { get, getAsArray } = require('@parameter1/utils');
const getDocs = require('./utils/get-docs');

class WSDLSimpleType {
  constructor(type = {}) {
    const { name } = type.$;
    this.name = name;
    this.documentation = getDocs(type);

    const restriction = get(type, 'restriction.0');
    if (!restriction || !restriction.$.base === 'xsd:string') {
      throw new Error('Simple types without string restrictions are NYI.');
    }
    const enumeration = getAsArray(restriction, 'enumeration');
    if (!enumeration.length) throw new Error('Simple type with empty enum encountered.');
    this.enumeration = enumeration.map((en) => ({
      value: en.$.value,
      documentation: getDocs(en),
    }));
  }
}

module.exports = WSDLSimpleType;
