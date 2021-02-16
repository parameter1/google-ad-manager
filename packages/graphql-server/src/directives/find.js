const { SchemaDirectiveVisitor } = require('apollo-server-express');
const { StatementBuilder } = require('@parameter1/google-ad-manager-soap/utils');

class FindDirective extends SchemaDirectiveVisitor {
  /**
   *
   * @param {*} field
   */
  visitFieldDefinition(field) {
    // eslint-disable-next-line no-param-reassign
    field.resolve = async (_, { input }, { soap }) => {
      const service = soap.service(this.args.service);

      const statement = new StatementBuilder({
        where: input.where,
        orderBy: input.orderBy,
        limit: input.limit,
        offset: input.offset,
      });
      const query = statement.build();
      const { data } = await service.request(this.args.method, { filterStatement: { query } });
      const results = data.results || [];
      const { totalResultSetSize: totalCount } = data;
      const { clauses } = statement;

      const hasNextPage = totalCount > results.length + clauses.offset;
      const hasPreviousPage = Boolean(clauses.offset);
      const previousOffset = clauses.offset - clauses.limit;
      return {
        totalCount,
        nodes: results,
        statement: {
          query,
          ...clauses,
        },
        pageInfo: {
          hasNextPage,
          ...(hasNextPage && { nextOffset: clauses.offset + clauses.limit }),
          hasPreviousPage,
          ...(hasPreviousPage && { previousOffset: previousOffset > 0 ? previousOffset : 0 }),
        },
      };
    };
  }
}

module.exports = FindDirective;
