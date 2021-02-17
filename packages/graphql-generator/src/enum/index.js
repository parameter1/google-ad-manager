const createName = require('./create-name');
const buildValue = require('./build-value');
const fileHash = require('../utils/file-hash');

/**
 *
 * @param {object} params
 * @param {WSDLType} params.type
 * @param {function} params.cleanDocs
 */
module.exports = ({ type, cleanDocs } = {}) => {
  const name = createName(type.name);
  const lines = [];
  lines.push(`"${cleanDocs(type.documentation)}"`);
  lines.push(`enum ${name} {`);
  type.enumeration.forEach((enumer) => {
    buildValue(enumer, cleanDocs).forEach((line) => lines.push(`  ${line}`));
  });
  lines.push('}');

  const contents = lines.join('\n');
  return { name, hash: fileHash(contents), contents };
};
