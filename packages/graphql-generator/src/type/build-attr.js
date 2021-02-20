const getAttrType = require('../utils/get-attr-type');

/**
*
* @param {object} params
* @param {WSDL} params.wsdl
* @param {WSDLTypeField} params.field
* @param {WSDLTypeFields} params.referencedTypes
* @param {function} params.cleanDocs
*/
const cleanDocs = require('../utils/clean-docs');

module.exports = ({ wsdl, field }) => {
  let type = getAttrType({ wsdl, type: field.type });
  if (field.multiple) type = `[${type}]`;
  if (field.required) type = `${type}!`;
  const lines = [];
  if (field.documentation) lines.push(`"${cleanDocs(field.documentation)}"`);
  lines.push(`${field.name}: ${type}`);
  return lines;
};
