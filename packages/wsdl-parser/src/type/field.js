const cleanDocs = require('../utils/clean-docs');
const cleanType = require('../utils/clean-type');

class WSDLTypeField {
  constructor({
    name,
    type,
    documentation,
    required,
    readonly,
    multiple,
  }) {
    this.name = name;
    this.type = type;
    this.referenceType = /^xsd:/.test(type) ? 'scalar' : 'object';
    this.documentation = documentation;
    this.required = required;
    this.readonly = readonly;
    this.multiple = multiple;
  }

  static fromRaw(element = {}) {
    const { name } = element.$;
    const type = cleanType(element.$.type);
    const documentation = cleanDocs(element);

    let required = [
      /attribute is required/i,
      /value is required/i,
    ].some((pattern) => pattern.test(documentation));
    if (name === 'id') required = true;

    const readonly = [
      /read-only/i,
      /value is readonly/i,
      /attribute is readonly/i,
    ].some((pattern) => pattern.test(documentation));

    const multiple = element.$.maxOccurs === 'unbounded';

    return new WSDLTypeField({
      name,
      type,
      documentation,
      required,
      readonly,
      multiple,
    });
  }
}

module.exports = WSDLTypeField;
