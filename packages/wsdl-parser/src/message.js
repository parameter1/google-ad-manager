const { get } = require('@parameter1/utils');
const cleanType = require('./utils/clean-type');

class WSDLMessage {
  constructor({ name, elementName } = {}) {
    this.name = name;
    this.elementName = elementName;
  }

  static fromRaw(msg = {}) {
    const { name } = msg.$;
    const part = get(msg, 'wsdl:part.0');
    if (!part) throw new Error(`Unable to extract message part for ${name}`);
    const { element } = part.$;
    if (!element) throw new Error(`Unable to extract a message part element for ${name}`);
    return new WSDLMessage({ name, elementName: cleanType(element) });
  }
}

module.exports = WSDLMessage;
