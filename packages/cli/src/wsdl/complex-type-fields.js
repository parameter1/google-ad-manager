const WSDLComplexTypeField = require('./complex-type-field');

class WSDLComplexTypeFields {
  constructor(elements = []) {
    this.map = elements.reduce((map, element) => {
      const field = new WSDLComplexTypeField(element);
      map.set(field.name, field);
      return map;
    }, new Map());
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
}

module.exports = WSDLComplexTypeFields;
