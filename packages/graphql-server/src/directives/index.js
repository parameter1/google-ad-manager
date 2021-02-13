const FindDirective = require('./find');
const FindByIdDirective = require('./find-by-id');

module.exports = {
  find: FindDirective,
  findById: FindByIdDirective,
};
