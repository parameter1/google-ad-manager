module.exports = ({
  version,
  networkCode,
  applicationName,
  auth,
} = {}) => {
  const factory = require(`./${version}`); // eslint-disable-line
  return factory({ networkCode, applicationName, auth });
};
