const WSDL = require('@parameter1/google-ad-manager-wsdl-parser');
const { underscore, dasherize } = require('inflected');
const buildConnectionType = require('./type/connection');
const buildEnum = require('./enum');
const buildFindByIdQuery = require('./query/find-by-id');
const buildFindQuery = require('./query/find');
const buildInput = require('./input');
const buildInterface = require('./interface');
const buildType = require('./type');
const buildQuery = require('./query');
const createInputName = require('./input/create-name');

/**
 *
 * @param {object} params
 * @param {string} params.url The WSDL URL of the ad manager service.
 *                            e.g. `https://www.google.com/apis/ads/publisher/v202011/LineItemService?wsdl`
 */
module.exports = async ({ url } = {}) => {
  const wsdl = await WSDL.loadFromUrl(url);

  // Skip Date and DateTime types for Input and Type definitions.
  // These will be treated as scalars
  const treatAsScalars = ['Date', 'DateTime'];

  // returns as [operationName, WSDLElement]
  const rootInputElements = wsdl.getAllOperationInputElements();

  const inputs = new Map();
  let inputsUsed = new Set();
  let referencedEnumTypes = new Set();
  // Build root input definitions from operation elements.
  rootInputElements.forEach((element) => {
    // skip building the root input when the operation doesn't have fields
    if (!element.hasFields) return;
    const input = buildInput({ wsdl, type: element });
    // merge the used inputs and always inlcude root inputs
    inputsUsed = new Set([...inputsUsed, input.name, ...input.inputsUsed]);
    // merge referenced enum types. this is needed in case inputs exclusively
    // use an enum that regular types do not.
    referencedEnumTypes = new Set([...referencedEnumTypes, ...input.referencedEnumTypes]);
    inputs.set(input.name, input);
  });

  // get all referenced input types, skipping any that are abstract or have child classes.
  // graphql does not currently support interfaces or unions on inputs.
  // so these types will ultimately be converted to generic JSONObject inputs.
  // enums and mapped scalars will also be skipped as these will be referenced directly.
  // types without any writeable fields will also be skipped,
  // since these would result in an empty input definitions.
  wsdl.getAllOperationInputTypes().filter((type) => {
    if (treatAsScalars.includes(type.name)) return false;
    if (type.isEnumerated) return false;
    if (type.abstract) return false;
    if (!type.hasWriteableFields) return false;
    const children = wsdl.getAllChildTypesFor(type.name);
    return !children.length;
  }).forEach((type) => {
    const input = buildInput({ wsdl, type });
    inputsUsed = new Set([...inputsUsed, ...input.inputsUsed]);
    referencedEnumTypes = new Set([...referencedEnumTypes, ...input.referencedEnumTypes]);
    inputs.set(input.name, input);
  });
  inputs.forEach((input) => {
    const { name } = input;
    if (!inputsUsed.has(name)) inputs.delete(name);
  });

  // Build query and mutation definitions.
  const mutationPrefixes = ['create', 'perform', 'update'];
  const queries = new Map();
  const mutations = new Map();
  const returnTypeNames = new Set();
  rootInputElements.forEach((element, operationName) => {
    const inputName = element.hasFields ? createInputName(element.name) : null;
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
    });
    const map = isMutation ? mutations : queries;
    map.set(built.name, built);
  });

  // Recursively find all types related to the return types.
  // This essentially finds all types used by this service.
  const referencedTypes = wsdl
    .getAllReferencedTypesFor([...new Set([...returnTypeNames, ...referencedEnumTypes])]);
  const filteredTypes = referencedTypes
    .filter((type) => !treatAsScalars.includes(type.name));

  const definitions = filteredTypes.reduce((o, type) => {
    const extendedTypes = wsdl.getAllChildTypesFor(type.name, false);
    const hasChildClasses = Boolean(extendedTypes.size);

    if (type.abstract || hasChildClasses) {
      const interfaceObj = buildInterface({ wsdl, type });
      o.interfaces.set(interfaceObj.name, interfaceObj);
      return o;
    }
    if (type.enumeration.length) {
      const enumObj = buildEnum({ type });
      o.enums.set(enumObj.name, enumObj);
      return o;
    }
    const typeObj = buildType({ wsdl, type });
    o.types.set(typeObj.name, typeObj);
    return o;
  }, {
    interfaces: new Map(),
    types: new Map(),
    enums: new Map(),
  });

  // Create custom findById and find queries
  const queryPattern = /^get([A-Za-z].+)ByStatement$/;
  rootInputElements.forEach((element, opName) => {
    const matches = queryPattern.exec(opName);
    if (!matches) return;

    const page = wsdl.getReturnFieldForOperation(opName);
    const resultField = wsdl.getType(page.type).fields.get('results');
    if (!resultField) return; // skip operations that do not have a paging result type
    const resultType = wsdl.getType(resultField.type);

    const findById = buildFindByIdQuery({
      wsdl,
      service: wsdl.shortName,
      action: opName,
      resultType,
    });
    queries.set(findById.name, findById);
    const find = buildFindQuery({
      wsdl,
      service: wsdl.shortName,
      action: opName,
      resultType,
    });
    queries.set(find.name, find);
    const connection = buildConnectionType({ wsdl, resultType });
    definitions.types.set(connection.name, connection);
  });

  const filename = `${dasherize(underscore(wsdl.shortName))}.js`;
  return {
    name: wsdl.name,
    shortName: wsdl.shortName,
    filename,
    ...definitions,
    inputs,
    queries,
    mutations,
  };
};
