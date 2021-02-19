const createEnumName = require('../enum/create-name');
const createInterfaceName = require('../interface/create-name');
const fileHash = require('../utils/file-hash');
const scalars = require('../utils/scalar-type-map');

module.exports = ({
  wsdl,
  opType,
  service,
  operationName,
  element,
  inputName,
  returnField,
  cleanDocs,
}) => {
  let returnType;
  if (scalars[returnField.type]) {
    returnType = scalars[returnField.type];
  } else if (returnField.isEnumerated) {
    // reference the enum
    returnType = createEnumName(returnField.type);
  } else if (returnField.abstract) {
    // when abstract, reference the interface
    returnType = createInterfaceName(returnField.type);
  } else if (wsdl.getAllChildTypesFor(returnField.type, false).size) {
    // if the type has child, extended objects, reference the interface
    returnType = createInterfaceName(returnField.type);
  } else {
    // otherwise, use the type as-is
    returnType = returnField.type;
  }

  if (returnField.multiple) returnType = `[${returnType}]`;

  const lines = [];
  lines.push(`extend type ${opType} {`);
  lines.push(`  "${cleanDocs(element.documentation)}"`);
  lines.push(`  ${operationName}(input: ${inputName}!): ${returnType}`);
  lines.push(`    @soap(service: "${service}", action: "${operationName}")`);
  lines.push('}');

  const contents = lines.join('\n');
  return { name: operationName, hash: fileHash(contents), contents };
};
