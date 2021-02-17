const { get } = require('@parameter1/utils');

class WSDLOperation {
  constructor({ name, inputMessageName, outputMessageName } = {}) {
    this.name = name;
    this.inputMessageName = inputMessageName;
    this.outputMessageName = outputMessageName;
  }

  static fromRaw(op = {}) {
    const { name } = op.$;

    const output = op['wsdl:output'];
    if (output.length > 1) throw new Error(`Operation outpouts with more than one message are NYI. [${name}]`);
    const outputMessageName = get(output[0], '$.name');
    if (!outputMessageName) throw new Error(`Unable to get an output message for operation ${name}`);

    const input = op['wsdl:input'];
    if (input.length > 1) throw new Error(`Operation inputs with more than one message are NYI. [${name}]`);
    const inputMessageName = get(input[0], '$.name');
    if (!inputMessageName) throw new Error(`Unable to get an input message for operation ${name}`);

    return new WSDLOperation({ name, inputMessageName, outputMessageName });
  }
}

module.exports = WSDLOperation;
