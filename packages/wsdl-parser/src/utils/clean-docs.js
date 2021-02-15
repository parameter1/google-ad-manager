const { get } = require('@parameter1/utils');

/**
 *
 */
module.exports = (obj) => get(obj, 'annotation.0.documentation.0', '')
  .replace(/\r?\n|\r/g, ' ')
  .replace(/\s\s+/g, ' ')
  .trim();
