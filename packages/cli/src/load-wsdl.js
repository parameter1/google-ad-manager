const fetch = require('node-fetch');
const { parseString } = require('xml2js');
const WSDL = require('./wsdl');

/**
 * @todo some complex types extend others
 *       for example, the LineItem type extends LineItemSummary
 *       Need to account for this when building.
 */
module.exports = async ({ url } = {}) => {
  const res = await fetch(url);
  const xml = await res.text();
  const parsed = await new Promise((resolve, reject) => {
    parseString(xml, (e, data) => (e ? reject(e) : resolve(data)));
  });
  return WSDL.fromRaw(parsed);
};
