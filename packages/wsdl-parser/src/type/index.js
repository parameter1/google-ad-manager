const { get, getAsArray } = require('@parameter1/utils');
const cleanType = require('../utils/clean-type');
const cleanDocs = require('../utils/clean-docs');
const WSDLTypeFields = require('./fields');

class WSDLType {
  constructor({
    name,
    documentation,
    abstract,
    extension,
    fields,
    enumeration,
  } = {}) {
    this.name = name;
    this.documentation = documentation;
    this.abstract = abstract || false;
    this.extension = extension || null;
    this.fields = fields || new WSDLTypeFields();
    this.enumeration = (enumeration || []).sort((a, b) => {
      if (a.value > b.value) return 1;
      if (a.value < b.value) return -1;
      return 0;
    });
  }

  get isEnumerated() {
    return Boolean(this.enumeration.length);
  }

  get hasFields() {
    return Boolean(this.fields.size);
  }

  static fromRaw(type = {}) {
    const name = cleanType(type.$.name);
    const abstract = type.$.abstract === 'true';
    const documentation = cleanDocs(type);

    let enumeration = [];
    const restriction = get(type, 'restriction.0');
    if (restriction) {
      // has enum values
      if (restriction.$.base !== 'xsd:string') throw new Error('Simple enum types without string restrictions are NYI.');
      const enumArr = getAsArray(restriction, 'enumeration');
      if (!enumArr.length) throw new Error(`Simple type ${name} did not provide any enumerated values.`);
      enumeration = enumArr.map((en) => ({
        value: en.$.value,
        documentation: cleanDocs(en),
      }));
    }

    const complexContents = getAsArray(type, 'complexContent');
    if (complexContents.length > 1) throw new Error('Complex content with more than one entry is NYI');

    const extensions = getAsArray(complexContents[0], 'extension');
    if (extensions.length > 1) throw new Error('Extensions with more than one entry are NYI');

    const extensionObj = extensions[0];
    const extension = extensionObj ? cleanType(extensionObj.$.base) : null;
    const fields = extension
      ? WSDLTypeFields.fromRaw(getAsArray(extensionObj, 'sequence.0.element'))
      : WSDLTypeFields.fromRaw(getAsArray(type, 'sequence.0.element'));

    return new WSDLType({
      name,
      documentation,
      abstract,
      extension,
      fields,
      enumeration,
    });
  }
}

module.exports = WSDLType;
