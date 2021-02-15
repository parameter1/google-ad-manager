const { ROOT_API_PATH } = require('@parameter1/google-ad-manager-constants');

module.exports = (url) => {
  const parsed = new URL(url);
  const [, primaryType] = /\/([a-z]+)service$/i.exec(parsed.pathname);
  const [version, name] = parsed.pathname.replace(`/${ROOT_API_PATH}/`, '').split('/');
  return { name, primaryType, version };
};
