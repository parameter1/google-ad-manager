const cleanDocs = require('../utils/clean-docs');
const cleanType = require('../utils/clean-type');

class WSDLTypeField {
  constructor({
    name,
    type,
    documentation,
    required,
    multiple,
  }) {
    this.name = name;
    this.type = type;
    this.referenceType = /^xsd:/.test(type) ? 'scalar' : 'object';
    this.documentation = documentation;
    this.required = required;
    this.multiple = multiple;
  }

  static fromRaw(element = {}) {
    const { name } = element.$;
    const type = cleanType(element.$.type);
    const documentation = cleanDocs(element);

    const required = /attribute is required/i.test(documentation);
    const multiple = element.$.maxOccurs === 'unbounded';

    return new WSDLTypeField({
      name,
      type,
      documentation,
      required,
      multiple,
    });
  }
}

module.exports = WSDLTypeField;
