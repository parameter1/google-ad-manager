const createServer = require('@parameter1/google-ad-manager-graphql-server');
const http = require('http');
const helmet = require('helmet');
const {
  isProduction,
  JSON_KEY_FILE_PATH,
  NETWORK_CODE,
  VERSION,
} = require('./env');

const { log } = console;

const path = '/';
const { app } = createServer({
  jsonKeyFilePath: JSON_KEY_FILE_PATH,
  networkCode: NETWORK_CODE,
  apiVersion: VERSION,

  path,
  debug: isProduction ? false : { endpoint: path },
  playground: !isProduction,

  beforeApply: ({ app: express }) => {
    express.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);
    express.use(helmet({ contentSecurityPolicy: false }));
  },

  afterApply: () => log(`Using GAM API version ${VERSION}`),
});

module.exports = http.createServer(app);
