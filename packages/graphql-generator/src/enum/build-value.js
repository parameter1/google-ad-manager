/**
 *
 * @param {object} enumeration
 * @param {string} enumeration.value
 * @param {string} enumeration.documentation
 * @param {function} cleanDocs
 */
module.exports = ({ value, documentation }, cleanDocs) => {
  const lines = [];
  if (documentation) lines.push(`"${cleanDocs(documentation)}"`);
  lines.push(value);
  return lines.map((line) => `${line}`);
};
