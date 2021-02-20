const fileHash = require('../utils/file-hash');
const getAttrType = require('../utils/get-attr-type');
const cleanDocs = require('../utils/clean-docs');

module.exports = ({
  wsdl,
  opType,
  service,
  operationName,
  element,
  inputName,
  returnField,
}) => {
  let returnType = getAttrType({ wsdl, type: returnField.type });
  if (returnField.multiple) returnType = `[${returnType}]`;

  const lines = [];
  const inputArg = inputName ? `(input: ${inputName}!)` : '';
  lines.push(`extend type ${opType} {`);
  lines.push(`  "${cleanDocs(element.documentation)}"`);
  lines.push(`  ${operationName}${inputArg}: ${returnType}`);
  lines.push(`    @soap(service: "${service}", action: "${operationName}")`);
  lines.push('}');

  const contents = lines.join('\n');
  return { name: operationName, hash: fileHash(contents), contents };
};
