const loadWSDL = require('./load-wsdl');
const typeFromURL = require('./type-from-url');

const typeMap = {
  'xsd:long': 'BigInt',
  'xsd:string': 'String',
  'xsd:int': 'Int',
  'tns:DateTime': 'GAMDateTime',
};

const buildAttr = (field) => {
  let type = typeMap[field.type];
  if (field.required) type = `${type}!`;
  const lines = [];
  if (field.documentation) lines.push(`"${field.documentation}"`);
  lines.push(`${field.name}: ${type}`);
  return lines.map((line) => `  ${line}`).join('\n');
};

const buildAttrs = (fields) => {
  const lines = fields
    .toArray()
    .filter((field) => typeMap[field.type])
    .map((field) => buildAttr(field))
    .join('\n');
  return lines;
};

const buildRootType = (type) => `

"${type.documentation}"
type ${type.name} {
${buildAttrs(type.fields)}
}

`;

module.exports = async ({ url } = {}) => {
  const wsdl = await loadWSDL({ url });
  const target = typeFromURL(url);
  const primaryType = wsdl.getComplexType(target);
  if (!primaryType) throw new Error(`Unable to extract target type ${target} from ${url}`);
  console.log(primaryType);
  return buildRootType(primaryType);
};