const WSDLComplexTypeField = require('./complex-type-field');

class WSDLComplexTypeFields {
  constructor({ map } = {}) {
    this.map = map;
  }

  get(name) {
    return this.map.get(name);
  }

  has(name) {
    return this.map.has(name);
  }

  toArray() {
    return Array.from(this.map).map(([, field]) => field);
  }

  getAllTypes() {
    return this.toArray().reduce((set, field) => {
      set.add(field.type);
      return set;
    }, new Set());
  }

  static fromRaw(elements = []) {
    const fieldMap = elements.reduce((map, element) => {
      const field = WSDLComplexTypeField.fromRaw(element);
      map.set(field.name, field);
      return map;
    }, new Map());
    return new WSDLComplexTypeFields({ map: fieldMap });
  }
}

module.exports = WSDLComplexTypeFields;
