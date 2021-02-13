const { SchemaDirectiveVisitor } = require('apollo-server-express');
const { get } = require('@parameter1/utils');

class RefOneDirective extends SchemaDirectiveVisitor {
  /**
   *
   * @param {*} field
   */
  visitFieldDefinition(field) {
    // eslint-disable-next-line no-param-reassign
    field.resolve = async (doc, _, { soap }) => {
      const service = soap.service(this.args.service);
      const id = get(doc, this.args.localField);
      if (!id) return null;
      return service.findById(id);
    };
  }
}

module.exports = RefOneDirective;
