const {
  bool,
  num,
  port,
  cleanEnv,
  str,
} = require('envalid');

module.exports = cleanEnv(process.env, {
  HOST: str({ desc: 'The host that the service will run on.', default: '0.0.0.0' }),
  JSON_KEY_FILE_PATH: str({ desc: 'An absolute path to the Google Service account JSON file.' }),
  NEW_RELIC_ENABLED: bool({ desc: 'Whether New Relic is enabled.', default: false }),
  NEW_RELIC_LICENSE_KEY: str({ desc: 'The license key for New Relic.', default: '(unset)' }),
  NETWORK_CODE: num({ desc: 'The Google Ad Manager network code to access.' }),
  PORT: port({ desc: 'The port that the service will run on.', default: 80 }),
  VERSION: str({ desc: 'The Google Ad Manager API version to use.' }),
});
