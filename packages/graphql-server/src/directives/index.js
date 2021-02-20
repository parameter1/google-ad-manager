const FindDirective = require('./find');
const FindByIdDirective = require('./find-by-id');
const RefOneDirective = require('./ref-one');
const SoapDirective = require('./soap');

module.exports = {
  find: FindDirective,
  findById: FindByIdDirective,
  refOne: RefOneDirective,
  soap: SoapDirective,
};
