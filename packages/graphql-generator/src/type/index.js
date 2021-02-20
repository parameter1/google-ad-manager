const createInterfaceName = require('../interface/create-name');
const fileHash = require('../utils/file-hash');
const buildAttr = require('./build-attr');

/**
 *
 * @param {object} params
 * @param {WSDL} params.wsdl
 * @param {WSDLType} params.type
 * @param {function} params.cleanDocs
 */
module.exports = ({ wsdl, type, cleanDocs } = {}) => {
  const lines = [];
  lines.push(`"${cleanDocs(type.documentation)}"`);

  // set the interface implementation when this type has an extension
  const interfaces = type.extension ? wsdl.getTypeExtensions(type.extension) : [];
  const impl = interfaces.length ? ` implements ${interfaces.map((parent) => createInterfaceName(parent.name)).join(' & ')}` : '';
  lines.push(`type ${type.name}${impl} {`);

  const needsPlaceholder = !type.hasFields
    || interfaces.some((parent) => !parent.hasFields);
  if (needsPlaceholder) lines.push('  _: Boolean'); // add placeholder field when empty fieldset

  type.fields.forEach((field) => {
    buildAttr({ wsdl, field, cleanDocs }).forEach((line) => lines.push(`  ${line}`));
  });
  lines.push('}');

  const contents = lines.join('\n');
  return { name: type.name, hash: fileHash(contents), contents };
};
