const GoogleAdManagerSOAP = require('@parameter1/google-ad-manager-soap');
const pkg = require('../package.json');

const defaultAppName = `${pkg.name} v${pkg.version}`;

module.exports = ({
  jsonKeyFilePath,
  networkCode,
  applicationName,
  version,
} = {}) => new GoogleAdManagerSOAP({
  jsonKeyFilePath,
  networkCode,
  applicationName: applicationName ? `${applicationName} (${defaultAppName})` : defaultAppName,
  version,
});
