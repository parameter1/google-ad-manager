# Google Ad Manager Monorepo

To generate updated GraphQL schema files, execute the following within the `packages/graphql-generator` directory:
```sh
node ./bin/cli.js
```

## Releases/updates
No active CI/CD. To build:
1. run `lerna` version and publish commands
2. Execute `node scripts/deploy.js graphql`, specifying the following ENVs
3. Update any services using the GraphQL server service (such as leads)

```sh
export DOCKER_PASSWORD=dockerhub-password
export DOCKER_USERNAME=dockerhub-username
export ENVIRONMENT=production
export SLACK_WEBHOOK_URL=https://hooks.slack.com/#doesnt-matter
export TRAVIS_REPO_SLUG=parameter1/google-ad-manager
export TRAVIS_TAG= < new.version.number >

node scripts/deploy.js graphql
```
