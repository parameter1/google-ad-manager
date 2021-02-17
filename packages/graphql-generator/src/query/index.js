const fileHash = require('../utils/file-hash');

module.exports = ({
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
  lines.push(`"${cleanDocs(element.documentation)}"`);
  lines.push(`${operationName}(input: ${inputName}!): ${returnType}`);
  lines.push(`  @soap(service: "${service}", action: "${operationName}")`);

  const contents = lines.join('\n');
  return { name: operationName, hash: fileHash(contents), contents };
};
