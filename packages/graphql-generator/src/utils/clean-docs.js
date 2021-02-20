const cheerio = require('cheerio');
// const { DOCS_URI } = require('@parameter1/google-ad-manager-constants');

/**
 * Replaces @code and @link references in documentation.
 *
 * @param {string} str
 */
module.exports = () => (str) => {
  if (!str) return str;
  const $ = cheerio.load(str);
  $('a').each(function processLinks() {
    const href = $(this).attr('href');
    const text = $(this).text();
    $(this).replaceWith(`[${text}](${href})`);
  });

  return $('body').text()
    .replace(/\{@code (.+?)\}/g, '`$1`')
    .replace(/`/g, '\\`')
    .replace(/\{@link (.+?)\}/g, (_, link) => {
      const parts = link.split(' ');
      const linkTo = parts.shift();
      const label = parts.join(' ') || linkTo;
      // const docsUrl = `${DOCS_URI}/${wsdl.version}/${wsdl.name}.${linkTo}`;
      // return `[${label}](${docsUrl})`;
      // @todo For now just return the text until it can be determine how links should generate.
      return label;
    })
    .replace(/\u00A0/g, ' ')
    .replace(/"/g, "'");
};
