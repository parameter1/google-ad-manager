const buildAttr = require('./build-attr');
const createName = require('./create-name');
const fileHash = require('../utils/file-hash');
const cleanDocs = require('../utils/clean-docs');

/**
 *
 * @param {object} params
 * @param {WSDLElement} params.element
 */
module.exports = ({ element } = {}) => {
  const name = createName(element.name);
  const lines = [];

  lines.push(`"${cleanDocs(element.documentation)}"`);
  lines.push(`input ${name} {`);

  const needsPlaceholder = !element.hasFields;
  if (needsPlaceholder) lines.push('  _: Boolean'); // add placeholder field when empty fieldset

  element.fields.filter((field) => !field.readonly).forEach((field) => {
    buildAttr({ field }).forEach((line) => lines.push(`  ${line}`));
  });
  lines.push('}');

  const contents = lines.join('\n');
  return { name, hash: fileHash(contents), contents };
};
