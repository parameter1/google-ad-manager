const WSDL = require('@parameter1/google-ad-manager-wsdl-parser');
const { underscore, dasherize } = require('inflected');
const cleanDocsHoc = require('./utils/clean-docs');
const buildEnums = require('./enum');
const buildTypes = require('./type');

/**
 *
 * @param {object} definitions
 * @param {string[]} definitions.enums
 * @param {string[]} definitions.types
 */
const buildFile = ({ enums, types }) => `const { gql } = require('apollo-server-express');

module.exports = gql\`
${types.join('')}
${enums.join('')}
\`;
`;

/**
 *
 * @param {object} params
 * @param {string} params.url The WSDL URL of the ad manager service.
 *                            e.g. `https://ads.google.com/apis/ads/publisher/v202011/LineItemService?wsdl`
 */
module.exports = async ({ url, version } = {}) => {
  const wsdl = await WSDL.loadFromUrl(url);
  const primaryType = wsdl.getPrimaryType();
  if (!primaryType) throw new Error(`Unable to extract target type ${wsdl.primaryTypeName} from ${url}`);

  // Get all type definitions (but skip Date and DateTime... these will be treated as scalars)
  const skip = ['Date', 'DateTime'];
  const referencedTypes = wsdl.getAllReferencedTypesFor(primaryType.name);
  const filteredTypes = referencedTypes.filter((type) => !skip.includes(type.name));

  const cleanDocs = cleanDocsHoc(wsdl);

  const definitions = filteredTypes.reduce((o, type) => {
    if (type.enumeration.length) {
      o.enums.push(buildEnums({ type, cleanDocs }));
      return o;
    }
    o.types.push(buildTypes({ type, referencedTypes, cleanDocs }));
    return o;
  }, { types: [], enums: [] });
  const filename = `${version}/${dasherize(underscore(primaryType.name))}.js`;
  return { filename, contents: buildFile(definitions) };
};
