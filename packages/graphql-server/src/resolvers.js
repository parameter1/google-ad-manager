const GraphQLBigInt = require('apollo-type-bigint');
const GraphQLDate = require('@parameter1/graphql-type-date');
const { GraphQLGAMDateTime } = require('./types');

module.exports = {
  BigInt: GraphQLBigInt,
  Date: GraphQLDate,
  GAMDateTime: GraphQLGAMDateTime,

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
};
