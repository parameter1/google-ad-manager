const GraphQLBigInt = require('apollo-type-bigint');
const GraphQLDate = require('@parameter1/graphql-type-date');
const GraphQLJSON = require('graphql-type-json');
const { GraphQLGAMDateTime } = require('./types');
const { GraphQLJSONObject } = GraphQLJSON;

module.exports = {
  BigInt: GraphQLBigInt,
  Date: GraphQLDate,
  GAMDateTime: GraphQLGAMDateTime,
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
