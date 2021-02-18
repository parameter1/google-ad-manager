const { camelize, underscore } = require('inflected');
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
          key,
          target: loaded && loaded.count > 1 ? 'common.js' : result.filename,
          count: loaded ? loaded.count + 1 : 1,
          hashes: loaded ? loaded.hashes.add(hash) : new Set([hash]),
          contents,
        };
        map.set(name, toSet);
      });
    });
  });

  const itemMap = new Map();
  map.forEach(({ target, contents }) => {
    const items = itemMap.has(target) ? itemMap.get(target) : [];
    items.push(contents);
    itemMap.set(target, items);
  });

  const fileMap = new Map();
  let filenames = [];
  itemMap.forEach((items, filename) => {
    items.unshift(
      '// THIS FILE IS GENERATED. DO NOT EDIT.',
      "const { gql } = require('apollo-server-express');",
      'module.exports = gql`',
    );
    items.push('`;');
    fileMap.set(filename, `${items.join('\n\n')}\n`);
    const file = filename.replace('.js', '');
    filenames.push({ filename: file, varName: camelize(underscore(file), false) });
  });

  filenames = filenames.sort((a, b) => {
    if (a.filename > b.filename) return 1;
    if (a.filename < b.filename) return -1;
    return 0;
  });
  const index = [];
  index.push(
    '// THIS FILE IS GENREATED. DO NOT EDIT.',
    "const { gql } = require('apollo-server-express');\n",
    "const globalDefinitions = require('../../../definitions');",
  );

  index.push(...filenames.map(({ filename, varName }) => `const ${varName} = require('./${filename}');`));
  index.push('\nmodule.exports = gql`\n');
  index.push('${globalDefinitions}'); // eslint-disable-line
  index.push(...filenames.map(({ varName }) => `\${${varName}}`));
  index.push('\n`;');

  fileMap.set('index.js', `${index.join('\n')}\n`);

  return fileMap;
};
