module.exports = {
  /**
   *
   */
  Query: {
    /**
     *
     */
    async company(_, { input }, { soap }) {
      const { id, strict } = input;
      const service = soap.service('Company');
      const obj = await service.findById(input.id);
      if (strict && !obj) {
        const err = new Error(`No record found for id ${id}`);
        err.statusCode = 404;
        throw err;
      }
      return obj;
    },

    /**
     *
     */
    async companies(_, { input }, { soap }) {
      const {
        where,
        orderBy,
        limit,
        offset,
      } = input;
      const service = soap.service('Company');
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
    },
  },
};
