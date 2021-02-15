const WSDL = require('./wsdl');
const { DOCS_URI } = require('./constants');

const typeMap = {
  'xsd:boolean': 'Boolean',
  'xsd:double': 'Float',
  'xsd:long': 'BigInt',
  'xsd:string': 'String',
  'xsd:int': 'Int',
  DateTime: 'GAMDateTime',
};

const createEnumName = (name) => `${name.replace(/\./g, '')}Enum`;

const buildAttr = (field, referencedTypes, cleanDocs) => {
  let type;
  if (typeMap[field.type]) {
    // explicitally mapped
    type = typeMap[field.type];
  } else {
    // either an enum or another object type
    const typeObj = referencedTypes.get(field.type);
    if (!typeObj) throw new Error(`Unable to find a reference type for ${field.type}`);
    type = typeObj.isEnumerated ? createEnumName(typeObj.name) : field.type;
  }
  if (field.multiple) type = `[${type}]`;
  if (field.required) type = `${type}!`;
  const lines = [];
  if (field.documentation) lines.push(`"${cleanDocs(field.documentation)}"`);
  lines.push(`${field.name}: ${type}`);
  return lines.map((line) => `  ${line}`).join('\n');
};

/**
 *
 * @param {WSDLType} type
 */
const buildTypeDefinition = (type, referencedTypes, cleanDocs) => `
"${cleanDocs(type.documentation)}"
type ${type.name} {
${type.fields.map((field) => buildAttr(field, referencedTypes, cleanDocs)).join('\n')}
}
`;

/**
 *
 * @param {object} enumeration
 */
const buildEnumValue = ({ value, documentation }, cleanDocs) => {
  const lines = [];
  if (documentation) lines.push(`"${cleanDocs(documentation)}"`);
  lines.push(value);
  return lines.map((line) => `  ${line}`).join('\n');
};

/**
 *
 * @param {WSDLType} type
 */
const buildEnumDefinition = (type, cleanDocs) => `
"${cleanDocs(type.documentation)}"
enum ${createEnumName(type.name)}Enum {
${type.enumeration.map((enumer) => buildEnumValue(enumer, cleanDocs)).join('\n')}
}
`;

module.exports = async ({ url } = {}) => {
  const wsdl = await WSDL.loadFromUrl(url);
  const primaryType = wsdl.getPrimaryType();
  if (!primaryType) throw new Error(`Unable to extract target type ${wsdl.primaryTypeName} from ${url}`);

  // Get all type definitions (but skip Date and DateTime... these will be treated as scalars)
  const skip = ['Date', 'DateTime'];
  const referencedTypes = wsdl.getAllReferencedTypesFor(primaryType.name);
  const filteredTypes = referencedTypes.filter((type) => !skip.includes(type.name));

  /**
   * Replaces @code and @link references in documentation.
   *
   * @param {string} str
   */
  const cleanDocs = (str) => {
    if (!str) return str;
    return str
      .replace(/\{@code (.+?)\}/g, '`$1`')
      .replace(/`/g, '\\`')
      .replace(/\{@link (.+?)\}/g, (_, link) => {
        const parts = link.split(' ');
        const linkTo = parts.shift();
        const label = parts.join(' ') || linkTo;
        const docsUrl = `${DOCS_URI}/${wsdl.version}/${wsdl.name}.${linkTo}`;
        return `[${label}](${docsUrl})`;
      });
  };

  return filteredTypes.reduce((o, type) => {
    if (type.enumeration.length) {
      o.enums.push(buildEnumDefinition(type, cleanDocs));
      return o;
    }
    o.types.push(buildTypeDefinition(type, referencedTypes, cleanDocs));
    return o;
  }, { types: [], enums: [] });
};
