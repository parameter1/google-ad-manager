const createEnumName = require('../enum/create-name');
const createInterfaceName = require('../interface/create-name');
const scalars = require('./scalar-type-map');

/**
 *
 * @param {object} params
 * @param {WSDL} params.wsdl The parsed service WSDL object
 * @param {string} params.type The attribute reference type
 */
module.exports = ({ wsdl, type }) => {
  // explicitly mapped to a scalar.
  if (scalars[type]) return scalars[type];
  const obj = wsdl.getType(type, false);
  if (!obj) throw new Error(`Unable to find a type for ${type} when building attribute type value.`);
  // enumerated. reference the enum name
  if (obj.isEnumerated) return createEnumName(obj.name);
  // when abstract, reference the interface name
  if (obj.abstract) return createInterfaceName(obj.name);
  // if the type has child, extended objects, reference the interface name
  if (wsdl.getAllChildTypesFor(obj.name, false).size) return createInterfaceName(obj.name);
  // otherwise, return the type as-is
  return type;
};
