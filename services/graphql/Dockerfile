FROM node:14.17-alpine as build
WORKDIR /gam
ENV NODE_ENV production

ADD package.json yarn.lock /gam/
ADD packages /gam/packages
ADD services/graphql /gam/services/graphql
RUN yarn --production --frozen-lockfile

WORKDIR /gam/services/graphql

FROM node:14.17-alpine
ENV NODE_ENV production
ENV PORT 80
COPY --from=build /gam /gam
WORKDIR /gam/services/graphql
ENTRYPOINT [ "node", "src/index.js" ]
