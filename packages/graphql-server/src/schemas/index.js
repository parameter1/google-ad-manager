module.exports = (version) => {
  try {
    return require(`./${version}`); // eslint-disable-line
  } catch (e) {
    if (/cannot find module/i.test(e)) throw new Error(`No GraphQL schema has been registered for API version ${version}`);
    throw e;
  }
};
