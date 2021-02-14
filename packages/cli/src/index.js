const inquirer = require('inquirer');
const loadServices = require('./load-services');
const loadVersions = require('./load-versions');
const graphQLType = require('./graphql-type');

const { log } = console;

process.on('unhandledRejection', (e) => {
  throw e;
});

const run = async () => {
  // const def = await graphQLType({
  //   url: 'https://ads.google.com/apis/ads/publisher/v202011/LineItemService?wsdl',
  // });
  // log(def);
  // return;

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
  ];

  const { actions, version, services } = await inquirer.prompt(questions);

  if (actions.includes('generateGraphQL')) {
    const defs = await Promise.all(services.map(async (url) => {
      const def = await graphQLType({ version, url });
      return def;
    }));
    log(defs.join('\n\n\n'));
  }
};

run().catch((e) => setImmediate(() => { throw e; }));
