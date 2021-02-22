const GraphQLBigInt = require('apollo-type-bigint');
const GraphQLDate = require('@parameter1/graphql-type-date');
const GraphQLJSON = require('graphql-type-json');
const { GraphQLGAMDateTime, GraphQLJSONObject } = require('./types');

module.exports = {
  BigInt: GraphQLBigInt,
  Date: GraphQLDate,
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
