const { camelize, underscore } = require('inflected');
const build = require('./build-one');

module.exports = async ({ urls } = {}) => {
  const results = new Map();
  await Promise.all(urls.map(async (url) => {
    const result = await build({ url });
    results.set(result.name, result);
  }));

  const keys = ['queries', 'mutations', 'interfaces', 'types', 'enums', 'inputs'];
  const map = new Map();

  results.forEach((result) => {
    keys.forEach((key) => {
      result[key].forEach(({ hash, contents }, name) => {
        const loaded = map.get(name);
        const toSet = {
          key,
          filename: loaded ? 'common.js' : result.filename,
          count: loaded ? loaded.count + 1 : 1,
          hashes: loaded ? loaded.hashes.add(hash) : new Set([hash]),
          contents,
        };
        map.set(name, toSet);
      });
    });
  });

  const itemMap = new Map();
  Array
    .from(map)
    .map(([name, o]) => ({ name, ...o }))
    .sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    }).forEach(({ filename, contents }) => {
      const items = itemMap.has(filename) ? itemMap.get(filename) : [];
      items.push(contents);
      itemMap.set(filename, items);
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
    fileMap.set(`definitions/${filename}`, `${items.join('\n\n')}\n`.replace(/\\\\/g, '\\'));
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
    '// THIS FILE IS GENERATED. DO NOT EDIT.',
    "const { gql } = require('apollo-server-express');\n",
    "const globalDefinitions = require('../../../definitions');",
  );

  index.push(...filenames.map(({ filename, varName }) => `const ${varName} = require('./${filename}');`));
  index.push('\nmodule.exports = gql`\n');
  index.push('${globalDefinitions}'); // eslint-disable-line
  index.push(...filenames.map(({ varName }) => `\${${varName}}`));
  index.push('\n`;');

  fileMap.set('definitions/index.js', `${index.join('\n')}\n`);

  const resolvers = [];
  resolvers.push(
    '// THIS FILE IS GENERATED. DO NOT EDIT.',
    "const merge = require('lodash.merge');",
    "const common = require('../../../resolvers');",
    '',
    'module.exports = merge(',
    '  common,',
    ');',
  );
  fileMap.set('resolvers/index.js', `${resolvers.join('\n')}\n`);

  const root = [];
  root.push(
    '// THIS FILE IS GENERATED. DO NOT EDIT.',
    "const { makeExecutableSchema } = require('apollo-server-express');",
    "const resolvers = require('./resolvers');",
    "const schemaDirectives = require('../../directives');",
    "const typeDefs = require('./definitions');",
    "const addInterfaceResolvers = require('../add-interface-resolvers');",
    '',
    'module.exports = makeExecutableSchema({',
    '  typeDefs,',
    '  schemaDirectives,',
    '  resolvers: addInterfaceResolvers({ typeDefs, resolvers }),',
    '});',
  );
  fileMap.set('index.js', `${root.join('\n')}\n`);

  return fileMap;
};
