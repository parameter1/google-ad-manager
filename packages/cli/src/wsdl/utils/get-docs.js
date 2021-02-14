const { get } = require('@parameter1/utils');

module.exports = (obj) => {
  const docs = get(obj, 'annotation.0.documentation.0', '');
  return docs.replace(/\r?\n|\r/g, ' ').replace(/\s\s+/g, ' ').trim();
};
