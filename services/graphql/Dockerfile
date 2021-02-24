FROM node:14.15-alpine as build
WORKDIR /gam
ENV NODE_ENV production
ARG SERVICE

ADD package.json yarn.lock /gam/
ADD packages /gam/packages
ADD services/$SERVICE /gam/services/$SERVICE
RUN yarn --production --pure-lockfile

WORKDIR /gam/services/$SERVICE

FROM node:14.15-alpine
ENV NODE_ENV production
ENV PORT 80
ARG SERVICE
COPY --from=build /gam /gam
WORKDIR /gam/services/$SERVICE
ENTRYPOINT [ "node", "src/index.js" ]
