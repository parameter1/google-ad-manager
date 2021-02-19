const createEnumName = require('../enum/create-name');
const createInterfaceName = require('../interface/create-name');
const scalars = require('../utils/scalar-type-map');

/**
*
* @param {object} params
* @param {WSDL} params.wsdl
* @param {WSDLTypeField} params.field
* @param {WSDLTypeFields} params.referencedTypes
* @param {function} params.cleanDocs
*/
module.exports = ({
  wsdl,
  field,
  referencedTypes,
  cleanDocs,
}) => {
  let type;
  if (scalars[field.type]) {
    // explicitally mapped
    type = scalars[field.type];
  } else {
    const typeObj = referencedTypes.get(field.type);
    if (!typeObj) throw new Error(`Unable to find a reference type for ${field.type}`);
    if (typeObj.isEnumerated) {
      // reference the enum
      type = createEnumName(typeObj.name);
    } else if (typeObj.abstract) {
      // when abstract, reference the interface
      type = createInterfaceName(typeObj.name);
    } else if (wsdl.getAllChildTypesFor(typeObj.name, false).size) {
      // if the type has child, extended objects, reference the interface
      type = createInterfaceName(typeObj.name);
    } else {
      // otherwise, use the type as-is
      type = field.type;
    }
  }
  if (field.multiple) type = `[${type}]`;
  if (field.required) type = `${type}!`;
  const lines = [];
  if (field.documentation) lines.push(`"${cleanDocs(field.documentation)}"`);
  lines.push(`${field.name}: ${type}`);
  return lines;
};
