const { getAsArray } = require('@parameter1/utils');
const getDocs = require('./utils/get-docs');
const cleanType = require('./utils/clean-type');
const WSDLComplexTypeFields = require('./complex-type-fields');

class WSDLComplexType {
  constructor({
    name,
    documentation,
    extension,
    fields,
  } = {}) {
    this.name = name;
    this.documentation = documentation;
    this.extension = extension;
    this.fields = fields;
  }

  static fromRaw(type = {}) {
    const name = cleanType(type.$.name);
    const documentation = getDocs(type);

    const complexContents = getAsArray(type, 'complexContent');
    if (complexContents.length > 1) throw new Error('Complex content with more than one entry is NYI');

    const extensions = getAsArray(complexContents[0], 'extension');
    if (extensions.length > 1) throw new Error('Extensions with more than one entry are NYI');

    const extensionObj = extensions[0];
    const extension = extensionObj ? cleanType(extensionObj.$.base) : null;
    const fields = extension
      ? WSDLComplexTypeFields.fromRaw(getAsArray(extensionObj, 'sequence.0.element'))
      : WSDLComplexTypeFields.fromRaw(getAsArray(type, 'sequence.0.element'));

    return new WSDLComplexType({
      name,
      documentation,
      extension,
      fields,
    });
  }
}

module.exports = WSDLComplexType;
