const buildAttr = require('./build-attr');
const createName = require('./create-name');
const fileHash = require('../utils/file-hash');

/**
 *
 * @param {object} params
 * @param {WSDLElement} params.element
 * @param {function} params.cleanDocs
 */
module.exports = ({ element, cleanDocs } = {}) => {
  const name = createName(element.name);
  const lines = [];

  lines.push(`"${cleanDocs(element.documentation)}"`);
  lines.push(`input ${name} {`);
  element.fields.filter((field) => !field.readonly).forEach((field) => {
    buildAttr(field, cleanDocs).forEach((line) => lines.push(`  ${line}`));
  });
  lines.push('}');

  const contents = lines.join('\n');
  return { name, hash: fileHash(contents), contents };
};
