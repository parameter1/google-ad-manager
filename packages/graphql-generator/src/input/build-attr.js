const scalars = require('../utils/scalar-type-map');
const createEnumName = require('../enum/create-name');
const createInputName = require('./create-name');
const cleanDocs = require('../utils/clean-docs');

/**
 *
 * @param {object} params
 * @param {WSDL} params.wsdl
 * @param {WSDLTypeField} params.field
 */
module.exports = ({ wsdl, field }) => {
  const inputsUsed = new Set();
  const referencedEnumTypes = new Set();
  let type;
  let skip = false;
  if (scalars[field.type]) {
    // explicitly mapped to a scalar.
    type = scalars[field.type];
  } else {
    const obj = wsdl.getType(field.type, true);
    if (!obj) throw new Error(`Unable to find a type for ${type} when building input attribute type value.`);
    if (obj.isEnumerated) {
      // enumerated. reference the enum name
      type = createEnumName(obj.name);
      referencedEnumTypes.add(obj.name);
    } else if (obj.abstract || wsdl.getAllChildTypesFor(obj.name, false).size) {
      // the reference is abstract or uses some form of extensions. force JSONObject.
      type = 'JSONObject';
    } else {
      // reference the type input name
      type = createInputName(obj.name);
      if (!obj.hasWriteableFields) skip = true; // skip field ref when nothing is writeable
      if (!skip) inputsUsed.add(type);
    }
  }
  if (skip) return null;
  if (field.multiple) type = `[${type}]`;
  if (field.required) type = `${type}!`;
  const lines = [];
  // only add reference if it has writeable fields.
  if (field.documentation) lines.push(`"${cleanDocs(field.documentation)}"`);
  lines.push(`${field.name}: ${type}`);
  return { lines, inputsUsed, referencedEnumTypes };
};
