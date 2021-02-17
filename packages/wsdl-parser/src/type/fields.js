const ArrayLikeMap = require('../array-like-map');
const WSDLTypeField = require('./field');

class WSDLTypeFields extends ArrayLikeMap {
  getAllReferencedTypes(referenceType) {
    return this.toArray().reduce((set, field) => {
      if (!referenceType) {
        set.add(field.type);
      } else if (field.referenceType === referenceType) {
        set.add(field.type);
      }
      return set;
    }, new Set());
  }

  static fromRaw(elements = []) {
    return new WSDLTypeFields(elements.map((element) => {
      const field = WSDLTypeField.fromRaw(element);
      return [field.name, field];
    }, new Map()));
  }
}

module.exports = WSDLTypeFields;
