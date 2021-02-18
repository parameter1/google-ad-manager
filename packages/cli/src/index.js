const path = require('path');
const mkdirp = require('mkdirp');
const { writeFile } = require('fs').promises;
const graphQLGenerator = require('@parameter1/google-ad-manager-graphql-generator');
const inquirer = require('inquirer');
const loadServices = require('./load-services');
const loadVersions = require('./load-versions');

const { log } = console;

process.on('unhandledRejection', (e) => {
  throw e;
});

const run = async () => {
  const questions = [
    {
      type: 'checkbox',
      name: 'actions',
      message: 'Which actions would you like to perform?',
      choices: [
        { name: 'Generate GraphQL schema.', value: 'generateGraphQL' },
      ],
    },
    {
      type: 'list',
      name: 'version',
      message: 'Select API version',
      choices: async () => {
        const versions = await loadVersions();
        return versions;
      },
      when: (answers) => answers.actions.includes('generateGraphQL'),
    },
    // {
    //   type: 'checkbox',
    //   name: 'services',
    //   message: 'Which services would you like to process?',
    //   choices: async ({ version }) => {
    //     const services = await loadServices({ version });
    //     return services;
    //   },
    //   when: (answers) => answers.actions.includes('generateGraphQL'),
    // },
    {
      type: 'input',
      name: 'directory',
      message: 'Enter a directory to save the generated files to',
      default: (answers) => path.resolve(__dirname, `../../graphql-server/src/schemas/${answers.version}/definitions`),
      when: (answers) => answers.actions.includes('generateGraphQL'),
    },
  ];

  const {
    actions,
    version,
    directory,
  } = await inquirer.prompt(questions);

  if (actions.includes('generateGraphQL')) {
    const services = await loadServices({ version });
    const fileMap = await graphQLGenerator
      .buildAll({ urls: services.map(({ value: url }) => url) });
    const files = Array.from(fileMap).map(([filename, contents]) => ({ filename, contents }));

    await Promise.all(files.map(async ({ filename, contents }) => {
      const location = path.resolve(directory, filename);
      await mkdirp(path.dirname(location));
      await writeFile(location, contents, 'utf8');
      log(`Wrote GraphQL definitions to ${location}`);
    }));
  }
};

run().catch((e) => setImmediate(() => { throw e; }));
