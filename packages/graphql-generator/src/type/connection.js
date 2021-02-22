const fileHash = require('../utils/file-hash');
const getAttrType = require('../utils/get-attr-type');

module.exports = ({ wsdl, resultType }) => {
  const returnType = getAttrType({ wsdl, type: resultType.name });

  const name = `_${returnType}Connection`;

  const lines = [];
  lines.push(`type ${name} {`);
  lines.push('  totalCount: Int!');
  lines.push(`  nodes: [${returnType}!]!`);
  lines.push('  statement: _StatementInfo!');
  lines.push('  pageInfo: _PageInfo!');
  lines.push('}');

  const contents = lines.join('\n');
  return { name, hash: fileHash(contents), contents };
};
