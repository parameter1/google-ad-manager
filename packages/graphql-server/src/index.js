const { ApolloServer } = require('apollo-server-express');
const { get, set, isFunction: isFn } = require('@parameter1/utils');
const { STATUS_CODES } = require('http');
const express = require('express');
const schema = require('./schema');

module.exports = ({
  path,

  context,
  tracing = false,
  cacheControl = false,
  introspection = true,
  debug = false,
  playground = false,

  formatError,

  beforeApply,
} = {}) => {
  const app = express();

  const server = new ApolloServer({
    schema,
    context,
    tracing,
    cacheControl,
    introspection,
    debug,
    playground,
    formatError: isFn(formatError) ? formatError : (err) => {
      const code = get(err, 'extensions.exception.statusCode');
      if (code) set(err, 'extensions.code', STATUS_CODES[code].replace(/\s/g, '_').toUpperCase());
      return err;
    },
  });
  if (isFn(beforeApply)) beforeApply({ app, server });
  server.applyMiddleware({ app, path });
  return { app, server };
};
