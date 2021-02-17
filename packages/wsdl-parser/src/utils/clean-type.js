module.exports = (type) => {
  if (!type) return '';
  return type.replace(/^tns:/, '');
};
