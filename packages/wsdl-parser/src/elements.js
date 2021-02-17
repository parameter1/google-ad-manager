const { getAsArray } = require('@parameter1/utils');
const ArrayLikeMap = require('./array-like-map');
const WSDLElement = require('./element');

const ELEMENT_TYPE_PATH = 'wsdl:definitions.wsdl:types.0.schema.0.element';

class WSDLElements extends ArrayLikeMap {
  getReturnValueTypesFor(name) {
    const element = this.get(name);
    if (!element) throw new Error(`No element found for ${name}`);
    const types = new Set();
    element.fields.forEach((field) => {
      if (field.name === 'rval') types.add(field.type);
    });
    return [...types];
  }

  getAllReturnValueTypes() {
    const types = new Set();
    this.forEach((element) => {
      element.fields.forEach((field) => {
        if (field.name === 'rval') types.add(field.type);
      });
    });
    return [...types];
  }

  static fromRaw(data = {}) {
    // for now, skip elements associated with an object type
    const elements = getAsArray(data, ELEMENT_TYPE_PATH).filter((element) => {
      const { type } = element.$;
      return !type;
    });

    return new WSDLElements(elements.map((ele) => {
      const element = WSDLElement.fromRaw(ele);
      return [element.name, element];
    }));
  }
}

module.exports = WSDLElements;
