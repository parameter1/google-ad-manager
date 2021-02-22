const fileHash = require('../utils/file-hash');
const lcFirst = require('../utils/lc-first');
const getAttrType = require('../utils/get-attr-type');

module.exports = ({
  wsdl,
  service,
  action,
  resultType,
}) => {
  const operationName = `_${lcFirst(resultType.name)}`;
  const returnType = getAttrType({ wsdl, type: resultType.name });

  const lines = [];
  lines.push('extend type Query {');
  lines.push(`  "Finds a single \\\`${returnType}\\\` by ID."`);
  lines.push(`  ${operationName}(input: _SingleRecordQueryInput!): ${returnType}`);
  lines.push(`    @findById(service: "${service}", action: "${action}")`);
  lines.push('}');

  const contents = lines.join('\n');
  return { name: operationName, hash: fileHash(contents), contents };
};
