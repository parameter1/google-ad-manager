const { URL } = require('url');

module.exports = (url) => {
  const parsed = new URL(url);
  const matches = /\/([a-z]+)service$/i.exec(parsed.pathname);
  return matches[1];
};
