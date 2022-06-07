// THIS FILE IS GENERATED. DO NOT EDIT.
const { makeExecutableSchema } = require('apollo-server-express');
const resolvers = require('./resolvers');
const schemaDirectives = require('../../directives');
const typeDefs = require('./definitions');
const addInterfaceResolvers = require('../add-interface-resolvers');

module.exports = makeExecutableSchema({
  typeDefs,
  schemaDirectives,
  resolvers: addInterfaceResolvers({ typeDefs, resolvers }),
});
