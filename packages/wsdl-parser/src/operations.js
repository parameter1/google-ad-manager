const { getAsArray } = require('@parameter1/utils');
const WSDLOperation = require('./operation');

class WSDLOperations extends Map {
  filter(...args) {
    return this.toArray().filter(...args);
  }

  map(...args) {
    return this.toArray().map(...args);
  }

  toArray() {
    return Array.from(this).map(([, field]) => field);
  }

  static fromRaw(data = {}) {
    const ops = getAsArray(data, 'wsdl:definitions.wsdl:binding.0.wsdl:operation');

    return new WSDLOperations(ops.map((op) => {
      const operation = WSDLOperation.fromRaw(op);
      return [operation.name, operation];
    }));
  }
}

module.exports = WSDLOperations;
