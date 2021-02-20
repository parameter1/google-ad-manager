const buildAttr = require('./build-attr');
const createName = require('./create-name');
const fileHash = require('../utils/file-hash');
const cleanDocs = require('../utils/clean-docs');

/**
 *
 * @param {object} params
 * @param {WSDL} params.wsdl
 * @param {WSDLType|WSDLElement} params.type
 */
module.exports = ({ wsdl, type } = {}) => {
  const lines = [];
  let inputsUsed = new Set();
  lines.push(`"${cleanDocs(type.documentation)}"`);

  const name = createName(type.name);
  lines.push(`input ${name} {`);
  type.fields.forEach((field) => {
    // skip read-only fields, as these shouldn't allow input.
    if (field.readonly) return;
    const attr = buildAttr({ wsdl, field });
    // allow for lines to be skipped (e.g. fields with references to non-writeable objects)
    if (attr) {
      attr.lines.forEach((line) => lines.push(`  ${line}`));
      inputsUsed = new Set([...inputsUsed, ...attr.inputsUsed]);
    }
  });
  lines.push('}');

  const contents = lines.join('\n');
  return {
    name,
    hash: fileHash(contents),
    inputsUsed,
    contents,
  };
};
