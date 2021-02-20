const path = require('path');
const mkdirp = require('mkdirp');
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const apiInfo = require('@parameter1/google-ad-manager-api-info');
const graphQLGenerator = require('./index');

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
        const versions = await apiInfo.versions();
        return versions;
      },
      when: (answers) => answers.actions.includes('generateGraphQL'),
    },
    {
      type: 'confirm',
      name: 'generateAll',
      message: 'Generate all services',
      default: true,
      when: (answers) => answers.actions.includes('generateGraphQL'),
    },
    {
      type: 'checkbox',
      name: 'servicesToGenerate',
      message: 'Which services would you like to generate?',
      choices: async ({ version }) => {
        const services = await apiInfo.services({ version });
        return services;
      },
      when: (answers) => !answers.generateAll,
    },
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
    generateAll,
    servicesToGenerate,
  } = await inquirer.prompt(questions);

  if (actions.includes('generateGraphQL')) {
    const services = await apiInfo.services({ version });

    const urls = services
      .filter((service) => {
        if (generateAll) return true;
        return servicesToGenerate.includes(service.value);
      })
      .map(({ value: url }) => url);

    const fileMap = await graphQLGenerator.buildAll({ urls });
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
