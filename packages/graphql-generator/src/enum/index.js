const createName = require('./create-name');
const buildValue = require('./build-value');

/**
 *
 * @param {object} params
 * @param {WSDLType} params.type
 * @param {function} params.cleanDocs
 */
module.exports = ({ type, cleanDocs } = {}) => `
"${cleanDocs(type.documentation)}"
enum ${createName(type.name)}Enum {
${type.enumeration.map((enumer) => buildValue(enumer, cleanDocs)).join('\n')}
}
`;
