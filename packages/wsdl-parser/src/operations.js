const { getAsArray } = require('@parameter1/utils');
const ArrayLikeMap = require('./array-like-map');
const WSDLOperation = require('./operation');

class WSDLOperations extends ArrayLikeMap {
  static fromRaw(data = {}) {
    const ops = getAsArray(data, 'wsdl:definitions.wsdl:binding.0.wsdl:operation');

    return new WSDLOperations(ops.map((op) => {
      const operation = WSDLOperation.fromRaw(op);
      return [operation.name, operation];
    }));
  }
}

module.exports = WSDLOperations;
