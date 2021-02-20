const cleanDocs = require('../utils/clean-docs');

/**
 *
 * @param {object} enumeration
 * @param {string} enumeration.value
 * @param {string} enumeration.documentation
 */
module.exports = ({ value, documentation }) => {
  const lines = [];
  if (documentation) lines.push(`"${cleanDocs(documentation)}"`);
  lines.push(value);
  return lines.map((line) => `${line}`);
};
