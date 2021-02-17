const build = require('./build-one');

module.exports = async ({ urls } = {}) => {
  const results = new Map();
  await Promise.all(urls.map(async (url) => {
    const result = await build({ url });
    results.set(result.name, result);
  }));
  return results;
};
