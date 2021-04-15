const GraphQLBigInt = require('apollo-type-bigint');
const {
  GraphQLGAMDate,
  GraphQLGAMDateTime,
  GraphQLJSONObject,
  GraphQLJSON,
} = require('./types');

module.exports = {
  BigInt: GraphQLBigInt,
  Date: GraphQLGAMDate,
  DateTime: GraphQLGAMDateTime,
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,

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
