const { pluralize } = require('inflected');
const fileHash = require('../utils/file-hash');
const lcFirst = require('../utils/lc-first');
const getAttrType = require('../utils/get-attr-type');

module.exports = ({
  wsdl,
  service,
  action,
  resultType,
}) => {
  const operationName = `_${lcFirst(pluralize(resultType.name))}`;
  const returnType = getAttrType({ wsdl, type: resultType.name });

  const lines = [];
  lines.push('extend type Query {');
  lines.push(`  "Finds multiple \\\`${returnType}\\\` objects based on the optional input parameters."`);
  lines.push(`  ${operationName}(input: _MultipleRecordsQueryInput!): _${returnType}Connection!`);
  lines.push(`    @find(service: "${service}", action: "${action}")`);
  lines.push('}');

  const contents = lines.join('\n');
  return { name: operationName, hash: fileHash(contents), contents };
};
