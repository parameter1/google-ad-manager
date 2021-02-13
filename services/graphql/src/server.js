const createServer = require('@parameter1/google-ad-manager-graphql-server');
const http = require('http');
const helmet = require('helmet');
const { isProduction } = require('./env');

const path = '/';
const { app } = createServer({
  path,
  debug: isProduction ? false : { endpoint: path },
  playground: !isProduction,

  beforeApply: ({ app: express }) => {
    express.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);
    express.use(helmet({ contentSecurityPolicy: false }));
  },
});

module.exports = http.createServer(app);
