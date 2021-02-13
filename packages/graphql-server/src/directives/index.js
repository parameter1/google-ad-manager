const FindDirective = require('./find');
const FindByIdDirective = require('./find-by-id');
const RefOneDirective = require('./ref-one');

module.exports = {
  find: FindDirective,
  findById: FindByIdDirective,
  refOne: RefOneDirective,
};
