const { SchemaDirectiveVisitor } = require('apollo-server-express');

class SoapDirective extends SchemaDirectiveVisitor {
  /**
   *
   * @param {*} field
   */
  visitFieldDefinition(field) {
    // eslint-disable-next-line no-param-reassign
    field.resolve = async (_, { input }, { soap }) => {
      const service = soap.service(this.args.service);
      const { data } = await service.request(this.args.action, input);
      return data;
    };
  }
}

module.exports = SoapDirective;
