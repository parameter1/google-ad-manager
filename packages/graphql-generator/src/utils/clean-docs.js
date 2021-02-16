const { DOCS_URI } = require('@parameter1/google-ad-manager-constants');

/**
 * Replaces @code and @link references in documentation.
 *
 * @param {string} str
 */
module.exports = (wsdl) => (str) => {
  if (!str) return str;
  return str
    .replace(/\{@code (.+?)\}/g, '`$1`')
    .replace(/`/g, '\\`')
    .replace(/\{@link (.+?)\}/g, (_, link) => {
      const parts = link.split(' ');
      const linkTo = parts.shift();
      const label = parts.join(' ') || linkTo;
      const docsUrl = `${DOCS_URI}/${wsdl.version}/${wsdl.name}.${linkTo}`;
      return `[${label}](${docsUrl})`;
    });
};
