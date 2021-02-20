const loadApiInfo = require('./load');

module.exports = async () => {
  const $ = await loadApiInfo();

  const versions = [];
  $('h2').each(function getVersion() {
    const text = $(this).text();
    const matches = /^v\d{6}/.exec(text);
    versions.push({
      name: text,
      value: matches[0],
      deprecated: /deprecated/i.test(text),
    });
  });
  return versions;
};
