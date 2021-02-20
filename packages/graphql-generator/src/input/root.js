const buildAttr = require('./build-attr');
const createName = require('./create-name');
const fileHash = require('../utils/file-hash');
const cleanDocs = require('../utils/clean-docs');

/**
 *
 * @param {object} params
 * @param {WSDL} params.wsdl
 * @param {WSDLElement} params.element
 */
module.exports = ({ wsdl, element } = {}) => {
  const lines = [];
  lines.push(`"${cleanDocs(element.documentation)}"`);

  const name = createName(element.name);
  lines.push(`input ${name} {`);
  element.fields.forEach((field) => {
    // skip read-only fields, as these shouldn't allow input.
    if (field.readonly) return;
    const attr = buildAttr({ wsdl, field });
    // allow for lines to be skipped (e.g. fields with references to non-writeable objects)
    if (attr) attr.forEach((line) => lines.push(`  ${line}`));
  });
  lines.push('}');

  const contents = lines.join('\n');
  return { name, hash: fileHash(contents), contents };
};
