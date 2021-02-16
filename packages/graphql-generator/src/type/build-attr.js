const createEnumName = require('../enum/create-name');

const scalars = {
  'xsd:boolean': 'Boolean',
  'xsd:double': 'Float',
  'xsd:long': 'BigInt',
  'xsd:string': 'String',
  'xsd:int': 'Int',
  Date: 'Date',
  DateTime: 'GAMDateTime',
};

/**
*
* @param {WSDLTypeField} field
* @param {WSDLTypeFields} referencedTypes
* @param {function} cleanDocs
*/
module.exports = (field, referencedTypes, cleanDocs) => {
  let type;
  if (scalars[field.type]) {
    // explicitally mapped
    type = scalars[field.type];
  } else {
    // either an enum or another object type
    const typeObj = referencedTypes.get(field.type);
    if (!typeObj) throw new Error(`Unable to find a reference type for ${field.type}`);
    type = typeObj.isEnumerated ? createEnumName(typeObj.name) : field.type;
  }
  if (field.multiple) type = `[${type}]`;
  if (field.required) type = `${type}!`;
  const lines = [];
  if (field.documentation) lines.push(`"""\n${cleanDocs(field.documentation)}\n"""`);
  lines.push(`${field.name}: ${type}`);
  return lines.map((line) => `  ${line}`).join('\n');
};
