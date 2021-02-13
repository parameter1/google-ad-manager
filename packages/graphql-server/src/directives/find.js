const { SchemaDirectiveVisitor } = require('apollo-server-express');

class FindDirective extends SchemaDirectiveVisitor {
  /**
   *
   * @param {*} field
   */
  visitFieldDefinition(field) {
    // eslint-disable-next-line no-param-reassign
    field.resolve = async (_, { input }, { soap }) => {
      const service = soap.service(this.args.service);

      const {
        where,
        orderBy,
        limit,
        offset,
      } = input;

      const { totalResultSetSize: totalCount, results, statement } = await service.find({
        where,
        orderBy,
        limit,
        offset,
      });

      const hasNextPage = totalCount > results.length + statement.offset;
      const hasPreviousPage = Boolean(statement.offset);
      const previousOffset = statement.offset - statement.limit;
      return {
        totalCount,
        nodes: results,
        statement,
        pageInfo: {
          hasNextPage,
          ...(hasNextPage && { nextOffset: statement.offset + statement.limit }),
          hasPreviousPage,
          ...(hasPreviousPage && { previousOffset: previousOffset > 0 ? previousOffset : 0 }),
        },
      };
    };
  }
}

module.exports = FindDirective;
