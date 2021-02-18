const fileHash = require('../utils/file-hash');

module.exports = ({
  opType,
  service,
  operationName,
  element,
  inputName,
  returnField,
  cleanDocs,
}) => {
  let returnType = `${returnField.type}!`;
  if (returnField.multiple) returnType = `[${returnType}]!`;

  const lines = [];
  lines.push(`extend type ${opType} {`);
  lines.push(`  "${cleanDocs(element.documentation)}"`);
  lines.push(`  ${operationName}(input: ${inputName}!): ${returnType}`);
  lines.push(`    @soap(service: "${service}", action: "${operationName}")`);
  lines.push('}');

  const contents = lines.join('\n');
  return { name: operationName, hash: fileHash(contents), contents };
};
