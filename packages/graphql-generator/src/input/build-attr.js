const scalars = require('../utils/scalar-type-map');
const cleanDocs = require('../utils/clean-docs');

/**
 *
 * @param {object} params
 * @param {WSDLTypeField} params.field
 */
module.exports = ({ field }) => {
  let type;
  if (scalars[field.type]) {
    // explicitally mapped
    type = scalars[field.type];
  } else {
    // Force a JSON input type.
    // Because the SOAP supports empty objects (e.g. ActivateLineItem: {} <ActiveLineItem />)
    // we cannot strictly type the inputs because graph doesn't support empty input objects
    type = 'JSONObject';
  }
  if (field.multiple) type = `[${type}]`;
  if (field.required) type = `${type}!`;
  const lines = [];
  if (field.documentation) lines.push(`"${cleanDocs(field.documentation)}"`);
  lines.push(`${field.name}: ${type}`);
  return lines;
};
