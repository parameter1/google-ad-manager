const { SchemaDirectiveVisitor } = require('apollo-server-express');
const { StatementBuilder } = require('@parameter1/google-ad-manager-soap/utils');

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

      const query = new StatementBuilder({ where: `id = ${id}`, limit: 1 }).build();
      const { data } = await service.request(this.args.method, { filterStatement: { query } });
      const { results } = data;
      const obj = results && results[0] ? results[0] : null;
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
