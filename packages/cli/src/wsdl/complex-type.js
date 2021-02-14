const { getAsArray } = require('@parameter1/utils');
const getDocs = require('./utils/get-docs');
const WSDLComplexTypeFields = require('./complex-type-fields');

class WSDLComplexType {
  constructor(type = {}) {
    const { name } = type.$;
    this.name = name;
    this.documentation = getDocs(type);
    this.fields = new WSDLComplexTypeFields(getAsArray(type, 'sequence.0.element'));
  }
}

module.exports = WSDLComplexType;
