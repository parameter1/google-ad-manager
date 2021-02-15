const WSDLType = require('./type');
const WSDLTypeFields = require('./type/fields');
const WSDLTypes = require('./types');
const cleanType = require('./utils/clean-type');

class WSDL {
  /**
   *
   * @param {object} params
   * @param {WSDLTypes} params.types
   */
  constructor({ types } = {}) {
    this.types = types;
  }

  getType(name, merged = false) {
    if (!merged) return this.types.get(cleanType(name));
    const tree = this.getTypeExtensions(name);
    const fields = tree.reverse().reduce((arr, type) => [...arr, ...type.fields], []);
    const primary = tree.shift();
    return new WSDLType({
      ...primary,
      fields: new WSDLTypeFields(fields),
    });
  }

  getAllReferencedTypesFor(name, types = new WSDLTypes()) {
    if (types.has(name)) return types;
    const type = this.getType(name, true);
    if (!type) throw new Error(`No type found for '${name}'`);
    types.set(name, type);
    const refs = type.fields.getAllReferencedTypes('object');
    refs.forEach((refName) => {
      this.getAllReferencedTypesFor(refName, types);
    });
    return types;
  }

  getTypeExtensions(name, tree = []) {
    const n = cleanType(name);
    const type = this.types.get(n);
    if (!type) return tree;
    tree.push(type);
    if (!type.extension) return tree;
    return this.getTypeExtensions(type.extension, tree);
  }

  static fromRaw(data = {}) {
    const types = WSDLTypes.fromRaw(data);
    return new WSDL({ types });
  }
}

module.exports = WSDL;
