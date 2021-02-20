const createName = require('./create-name');
const fileHash = require('../utils/file-hash');
const buildAttr = require('../type/build-attr');
const cleanDocs = require('../utils/clean-docs');

/**
 *
 * @param {object} params
 * @param {WSDL} params.wsdl
 * @param {WSDLType} params.type
 */
module.exports = ({ wsdl, type } = {}) => {
  const lines = [];
  lines.push(`"${cleanDocs(type.documentation)}"`);
  const name = createName(type.name);

  // set the interface implementation when this type has an extension
  const interfaces = type.extension ? wsdl.getTypeExtensions(type.extension) : [];
  const impl = interfaces.length ? ` implements ${interfaces.map((parent) => createName(parent.name)).join(' & ')}` : '';
  lines.push(`interface ${name}${impl} {`);

  const needsPlaceholder = !type.hasFields
    || interfaces.some((parent) => !parent.hasFields);
  if (needsPlaceholder) lines.push('  _: Boolean'); // add placeholder field when empty fieldset

  type.fields.forEach((field) => {
    buildAttr({ wsdl, field }).forEach((line) => lines.push(`  ${line}`));
  });
  lines.push('}');

  const contents = lines.join('\n');
  return { name, hash: fileHash(contents), contents };
};
