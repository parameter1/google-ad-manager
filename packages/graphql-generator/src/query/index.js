const fileHash = require('../utils/file-hash');
const getAttrType = require('../utils/get-attr-type');

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
  let returnType = getAttrType({ wsdl, type: returnField.type });
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
