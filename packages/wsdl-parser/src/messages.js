const { getAsArray } = require('@parameter1/utils');
const ArrayLikeMap = require('./array-like-map');
const WSDLMessage = require('./message');

class WSDLMessages extends ArrayLikeMap {
  static fromRaw(data = {}) {
    const messages = getAsArray(data, 'wsdl:definitions.wsdl:message');
    return new WSDLMessages(messages.map((msg) => {
      const message = WSDLMessage.fromRaw(msg);
      return [message.name, message];
    }));
  }
}

module.exports = WSDLMessages;
