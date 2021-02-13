const merge = require('lodash.merge');
const GraphQLBigInt = require('apollo-type-bigint');
const GraphQLDate = require('@parameter1/graphql-type-date');

module.exports = merge(
  {
    BigInt: GraphQLBigInt,
    Date: GraphQLDate,

    /**
     *
     */
    Mutation: {
      /**
       *
       */
      ping() {
        return 'pong';
      },
    },

    /**
     *
     */
    Query: {
      /**
       *
       */
      ping() {
        return 'pong';
      },
    },
  },
);
