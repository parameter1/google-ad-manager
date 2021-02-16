const buildAttr = require('./build-attr');

/**
 *
 * @param {object} params
 * @param {WSDLType} params.type
 * @param {WSDLTypeFields} params.referencedTypes
 * @param {function} params.cleanDocs
 */
module.exports = ({ type, referencedTypes, cleanDocs } = {}) => `
"""
${cleanDocs(type.documentation)}
"""
type ${type.name} {
${type.fields.map((field) => buildAttr(field, referencedTypes, cleanDocs)).join('\n')}
}
`;
