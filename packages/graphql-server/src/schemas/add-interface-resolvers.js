const { get } = require('@parameter1/utils');
const { Kind } = require('graphql');

module.exports = ({ typeDefs, resolvers: originalResolvers } = {}) => {
  const interfaces = typeDefs.definitions
    .filter(({ kind }) => kind === Kind.INTERFACE_TYPE_DEFINITION);

  return interfaces.reduce((o, iface) => {
    const { value: name } = iface.name;
    const resolveType = (doc) => get(doc, 'attributes.xsi:type');
    return {
      ...o,
      [name]: {
        ...o[name],
        __resolveType: resolveType,
      },
    };
  }, originalResolvers);
};
