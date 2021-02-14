const getDocs = require('./utils/get-docs');
const cleanType = require('./utils/clean-type');

class WSDLComplexTypeField {
  constructor({
    name,
    type,
    documentation,
    required,
    multiple,
  }) {
    this.name = name;
    this.type = type;
    this.documentation = documentation;
    this.required = required;
    this.multiple = multiple;
  }

  static fromRaw(element = {}) {
    const { name } = element.$;
    const type = cleanType(element.$.type);
    const documentation = getDocs(element);

    const required = /attribute is required/i.test(documentation);
    const multiple = element.$.maxOccurs === 'unbounded';

    return new WSDLComplexTypeField({
      name,
      type,
      documentation,
      required,
      multiple,
    });
  }
}

module.exports = WSDLComplexTypeField;
