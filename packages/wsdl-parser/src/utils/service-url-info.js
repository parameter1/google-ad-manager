const { ROOT_URI, ROOT_API_PATH } = require('@parameter1/google-ad-manager-constants');

module.exports = (url) => {
  const parsed = new URL(url);
  const [version, name] = parsed.pathname.replace(`/${ROOT_API_PATH}/`, '').split('/');
  return {
    name,
    shortName: name.replace(/Service$/, ''),
    version,
    parsed,
    namespace: `${ROOT_URI}/${version}`,
    toWSDL: () => {
      const { protocol, hostname, pathname } = parsed;
      return `${protocol}//${hostname}${pathname}?wsdl`;
    },
  };
};
