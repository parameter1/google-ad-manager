const graphQLGenerator = require('@parameter1/google-ad-manager-graphql-generator');
const inquirer = require('inquirer');
const loadServices = require('./load-services');
const loadVersions = require('./load-versions');

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
    {
      type: 'checkbox',
      name: 'services',
      message: 'Which services would you like to process?',
      choices: async ({ version }) => {
        const services = await loadServices({ version });
        return services;
      },
      when: (answers) => answers.actions.includes('generateGraphQL'),
    },
    {
      type: 'input',
      name: 'directory',
      message: 'Enter a directory to save the generated files to',
      when: (answers) => answers.actions.includes('generateGraphQL'),
    },
  ];

  const {
    actions,
    version,
    services,
  } = await inquirer.prompt(questions);

  if (actions.includes('generateGraphQL')) {
    await Promise.all(services.map(async (url) => {
      await graphQLGenerator({ version, url });
    }));
  }
};

run().catch((e) => setImmediate(() => { throw e; }));
