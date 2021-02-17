const build = require('./build-one');

module.exports = async ({ urls } = {}) => {
  const results = new Map();
  await Promise.all(urls.map(async (url) => {
    const result = await build({ url });
    results.set(result.name, result);
  }));

  const keys = ['queries', 'mutations', 'types', 'enums', 'inputs'];
  const map = new Map();

  results.forEach((result) => {
    keys.forEach((key) => {
      result[key].forEach(({ hash, contents }, name) => {
        const loaded = map.get(name);
        const toSet = {
          target: loaded && loaded.count > 1 ? 'common.js' : result.filename,
          count: loaded ? loaded.count + 1 : 1,
          hashes: loaded ? loaded.hashes.add(hash) : new Set([hash]),
          contents,
        };
        map.set(name, toSet);
      });
    });
  });
  return results;
};
