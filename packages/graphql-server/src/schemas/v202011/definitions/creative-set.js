// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates a new CreativeSet. @param creativeSet the creative set to create @return the creative set with its ID filled in"
input CreateCreativeSetInput {
  _: Boolean
  creativeSet: JSONObject
}

"A creative set is comprised of a master creative and its companion creatives."
type CreativeSet {
  "Uniquely identifies the \`CreativeSet\`. This attribute is read-only and is assigned by Google when a creative set is created."
  id: BigInt!
  "The name of the creative set. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "The ID of the master creative associated with this creative set. This attribute is required."
  masterCreativeId: BigInt!
  "The IDs of the companion creatives associated with this creative set. This attribute is required."
  companionCreativeIds: [BigInt]!
  "The date and time this creative set was last modified."
  lastModifiedDateTime: GAMDateTime
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

"Gets a CreativeSetPage of CreativeSet objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CreativeSet#id   \`name\` CreativeSet#name   \`masterCreativeId\` CreativeSet#masterCreativeId   \`lastModifiedDateTime\` CreativeSet#lastModifiedDateTime   @param statement a Publisher Query Language statement used to filter a set of creative sets @return the creative sets that match the given filter"
input GetCreativeSetsByStatementInput {
  _: Boolean
  statement: JSONObject
}

"Updates the specified CreativeSet. @param creativeSet the creative set to update @return the updated creative set"
input UpdateCreativeSetInput {
  _: Boolean
  creativeSet: JSONObject
}

extend type Mutation {
  "Creates a new CreativeSet. @param creativeSet the creative set to create @return the creative set with its ID filled in"
  createCreativeSet(input: CreateCreativeSetInput!): CreativeSet
    @soap(service: "CreativeSet", action: "createCreativeSet")
}

extend type Query {
  "Gets a CreativeSetPage of CreativeSet objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CreativeSet#id   \`name\` CreativeSet#name   \`masterCreativeId\` CreativeSet#masterCreativeId   \`lastModifiedDateTime\` CreativeSet#lastModifiedDateTime   @param statement a Publisher Query Language statement used to filter a set of creative sets @return the creative sets that match the given filter"
  getCreativeSetsByStatement(input: GetCreativeSetsByStatementInput!): CreativeSetPage
    @soap(service: "CreativeSet", action: "getCreativeSetsByStatement")
}

extend type Mutation {
  "Updates the specified CreativeSet. @param creativeSet the creative set to update @return the updated creative set"
  updateCreativeSet(input: UpdateCreativeSetInput!): CreativeSet
    @soap(service: "CreativeSet", action: "updateCreativeSet")
}

`;
