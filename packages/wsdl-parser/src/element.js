const { getAsArray } = require('@parameter1/utils');
const WSDLTypeFields = require('./type/fields');
const cleanDocs = require('./utils/clean-docs');

class WSDLElement {
  constructor({ name, documentation, fields } = {}) {
    this.name = name;
    this.documentation = documentation;
    this.fields = fields || new WSDLTypeFields();
  }

  static fromRaw(element = {}) {
    const { name } = element.$;
    const documentation = cleanDocs(element);

    const elements = getAsArray(element, 'complexType.0.sequence.0.element');
    const fields = WSDLTypeFields.fromRaw(elements);

    return new WSDLElement({ name, documentation, fields });
  }
}

module.exports = WSDLElement;
