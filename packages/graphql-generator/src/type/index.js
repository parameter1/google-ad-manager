const fileHash = require('../utils/file-hash');
const buildAttr = require('./build-attr');

/**
 *
 * @param {object} params
 * @param {WSDLType} params.type
 * @param {WSDLTypeFields} params.referencedTypes
 * @param {function} params.cleanDocs
 */
module.exports = ({ type, referencedTypes, cleanDocs } = {}) => {
  const lines = [];
  lines.push(`"${cleanDocs(type.documentation)}"`);
  lines.push(`type ${type.name} {`);
  type.fields.forEach((field) => {
    buildAttr(field, referencedTypes, cleanDocs).forEach((line) => lines.push(`  ${line}`));
  });
  lines.push('}');

  const contents = lines.join('\n');
  return { name: type.name, hash: fileHash(contents), contents };
};
