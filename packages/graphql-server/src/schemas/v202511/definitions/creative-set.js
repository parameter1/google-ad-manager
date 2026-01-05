// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates a new CreativeSet."
input CreateCreativeSetInput {
  creativeSet: CreativeSetInput
}

"A creative set is comprised of a master creative and its companion creatives."
type CreativeSet {
  "Uniquely identifies the \`CreativeSet\`. This attribute is read-only and is assigned by Google when a creative set is created."
  id: BigInt!
  "The name of the creative set. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The ID of the master creative associated with this creative set. This attribute is required."
  masterCreativeId: BigInt
  "The IDs of the companion creatives associated with this creative set. This attribute is required."
  companionCreativeIds: [BigInt]
  "The date and time this creative set was last modified."
  lastModifiedDateTime: DateTime
}

"A creative set is comprised of a master creative and its companion creatives."
input CreativeSetInput {
  "The name of the creative set. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The ID of the master creative associated with this creative set. This attribute is required."
  masterCreativeId: BigInt
  "The IDs of the companion creatives associated with this creative set. This attribute is required."
  companionCreativeIds: [BigInt]
  "The date and time this creative set was last modified."
  lastModifiedDateTime: DateTime
}

"Captures a page of CreativeSet objects."
type CreativeSetPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of creative sets contained within this page."
  results: [CreativeSet]
}

"Gets a CreativeSetPage of CreativeSet objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CreativeSet#id   \`name\` CreativeSet#name   \`masterCreativeId\` CreativeSet#masterCreativeId   \`lastModifiedDateTime\` CreativeSet#lastModifiedDateTime  "
input GetCreativeSetsByStatementInput {
  statement: StatementInput
}

"Updates the specified CreativeSet."
input UpdateCreativeSetInput {
  creativeSet: CreativeSetInput
}

type _CreativeSetConnection {
  totalCount: Int!
  nodes: [CreativeSet!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`CreativeSet\` by ID."
  _creativeSet(input: _SingleRecordQueryInput!): CreativeSet
    @findById(service: "CreativeSet", action: "getCreativeSetsByStatement")
}

extend type Query {
  "Finds multiple \`CreativeSet\` objects based on the optional input parameters."
  _creativeSets(input: _MultipleRecordsQueryInput!): _CreativeSetConnection!
    @find(service: "CreativeSet", action: "getCreativeSetsByStatement")
}

extend type Mutation {
  "Creates a new CreativeSet."
  createCreativeSet(input: CreateCreativeSetInput!): CreativeSet
    @soap(service: "CreativeSet", action: "createCreativeSet")
}

extend type Query {
  "Gets a CreativeSetPage of CreativeSet objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CreativeSet#id   \`name\` CreativeSet#name   \`masterCreativeId\` CreativeSet#masterCreativeId   \`lastModifiedDateTime\` CreativeSet#lastModifiedDateTime  "
  getCreativeSetsByStatement(input: GetCreativeSetsByStatementInput!): CreativeSetPage
    @soap(service: "CreativeSet", action: "getCreativeSetsByStatement")
}

extend type Mutation {
  "Updates the specified CreativeSet."
  updateCreativeSet(input: UpdateCreativeSetInput!): CreativeSet
    @soap(service: "CreativeSet", action: "updateCreativeSet")
}

`;
