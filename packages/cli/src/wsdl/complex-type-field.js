const getDocs = require('./utils/get-docs');

class WSDLComplexTypeField {
  constructor(element = {}) {
    const { name, type } = element.$;
    this.name = name;
    this.type = type;

    const docs = getDocs(element);

    this.required = /attribute is required/i.test(docs);
    this.multiple = element.$.maxOccurs === 'unbounded';
    this.documentation = docs;
  }
}

module.exports = WSDLComplexTypeField;
