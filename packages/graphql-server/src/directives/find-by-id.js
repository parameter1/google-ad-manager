const { SchemaDirectiveVisitor } = require('apollo-server-express');

class FindByIdDirective extends SchemaDirectiveVisitor {
  /**
   *
   * @param {*} field
   */
  visitFieldDefinition(field) {
    // eslint-disable-next-line no-param-reassign
    field.resolve = async (_, { input }, { soap }) => {
      const service = soap.service(this.args.service);
      const { id, strict } = input;

      const obj = await service.findById(input.id);
      if (strict && !obj) {
        const err = new Error(`No record found for id ${id}`);
        err.statusCode = 404;
        throw err;
      }
      return obj;
    };
  }
}

module.exports = FindByIdDirective;
