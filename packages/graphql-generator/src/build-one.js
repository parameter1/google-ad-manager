const WSDL = require('@parameter1/google-ad-manager-wsdl-parser');
const { underscore, dasherize } = require('inflected');
const buildEnum = require('./enum');
const buildInput = require('./input');
const buildInterface = require('./interface');
const buildType = require('./type');
const buildQuery = require('./query');
const createDocsFn = require('./utils/clean-docs');
const createInputName = require('./input/create-name');

/**
 *
 * @param {object} params
 * @param {string} params.url The WSDL URL of the ad manager service.
 *                            e.g. `https://www.google.com/apis/ads/publisher/v202011/LineItemService?wsdl`
 */
module.exports = async ({ url } = {}) => {
  const wsdl = await WSDL.loadFromUrl(url);

  const cleanDocs = createDocsFn(wsdl);

  // returns as [operationName, WSDLElement]
  const inputElements = wsdl.getAllOperationInputElements();

  // Build input definitions.
  const inputs = inputElements
    .reduce((map, element) => {
      const inputObj = buildInput({ element, cleanDocs });
      map.set(inputObj.name, inputObj);
      return map;
    }, new Map());

  // Build query and mutation definitions.
  const mutationPrefixes = ['create', 'perform', 'update'];
  const queries = new Map();
  const mutations = new Map();
  const returnTypeNames = new Set();
  inputElements.forEach((element, operationName) => {
    const inputName = createInputName(element.name);
    const returnField = wsdl.getReturnFieldForOperation(operationName);
    // save all return types. will be used to recrusively build types + enums
    returnTypeNames.add(returnField.type);
    const isMutation = mutationPrefixes.some((prefix) => operationName.startsWith(prefix));

    const built = buildQuery({
      wsdl,
      opType: isMutation ? 'Mutation' : 'Query',
      service: wsdl.shortName,
      operationName,
      element,
      inputName,
      returnField,
      cleanDocs,
    });
    const map = isMutation ? mutations : queries;
    map.set(built.name, built);
  });

  // Recursively find all types related to the return types.
  // This essentially finds all types used by this service.
  const referencedTypes = wsdl.getAllReferencedTypesFor([...returnTypeNames]);
  // Skip Date and DateTime types... these will be treated as scalars
  const skip = ['Date', 'DateTime'];
  const filteredTypes = referencedTypes
    .filter((type) => !skip.includes(type.name));

  const definitions = filteredTypes.reduce((o, type) => {
    const extendedTypes = wsdl.getAllChildTypesFor(type.name, false);
    const hasChildClasses = Boolean(extendedTypes.size);

    if (type.abstract || hasChildClasses) {
      const interfaceObj = buildInterface({ wsdl, type, cleanDocs });
      o.interfaces.set(interfaceObj.name, interfaceObj);
      return o;
    }
    if (type.enumeration.length) {
      const enumObj = buildEnum({ type, cleanDocs });
      o.enums.set(enumObj.name, enumObj);
      return o;
    }
    const typeObj = buildType({ wsdl, type, cleanDocs });
    o.types.set(typeObj.name, typeObj);
    return o;
  }, {
    interfaces: new Map(),
    types: new Map(),
    enums: new Map(),
    inputs,
  });
  const filename = `${dasherize(underscore(wsdl.shortName))}.js`;
  return {
    name: wsdl.name,
    shortName: wsdl.shortName,
    filename,
    ...definitions,
    queries,
    mutations,
  };
};
