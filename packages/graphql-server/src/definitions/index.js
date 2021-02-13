const { gql } = require('apollo-server-express');

const company = require('./company');

module.exports = gql`

scalar Date
scalar BigInt

directive @find(service: String!) on FIELD_DEFINITION
directive @findById(service: String!) on FIELD_DEFINITION

type Query {
  "A generic ping/pong test query."
  ping: String!
}

type Mutation {
  "A generic ping/pong test mutation."
  ping: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  nextOffset: Int
  previousOffset: Int
}

type StatementInfo {
  query: String
  where: String
  orderBy: String
  limit: Int
  offset: Int
}

input SingleRecordQueryInput {
  "The ID of the record to retrieve."
  id: BigInt!
  "When in strict mode (default), the query will throw an error when the item is not found."
  strict: Boolean = true
}

input MultipleRecordsQueryInput {
  "An (optional) where clause to add to the query statement."
  where: String
  "An (optiona) order by clause to add to the query statement."
  orderBy: String
  "The number of records to limit by."
  limit: Int = 20
  "The number of records to skip."
  offset: Int
}

${company}

`;
