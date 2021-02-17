class WSDLOperation {
  constructor({ name } = {}) {
    this.name = name;
  }

  static fromRaw(op = {}) {
    const { name } = op.$;
    return new WSDLOperation({ name });
  }
}

module.exports = WSDLOperation;
