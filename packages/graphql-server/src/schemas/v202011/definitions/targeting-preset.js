// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Gets a TargetingPresetPage of TargetingPreset objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` TargetingPreset#id   \`name\` TargetingPreset#name   @param filterStatement a Publisher Query Language statement used to filter a set of labels. @return the targeting presets that match the given filter"
input GetTargetingPresetsByStatementInput {
  _: Boolean
  filterStatement: JSONObject
}

"User-defined preset targeting criteria."
type TargetingPreset {
  "The unique ID of the \`TargetingPreset\`. This value is readonly and is assigned by Google."
  id: BigInt!
  "The name of the \`TargetingPreset\`. This value is required to create a targeting preset and has a maximum length of 255 characters."
  name: String!
  "Contains the targeting criteria for the \`TargetingPreset\`. This attribute is required."
  targeting: Targeting!
}

"Captures a paged query of TargetingPresetDto objects."
type TargetingPresetPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of line items contained within this page."
  results: [TargetingPreset]
}

extend type Query {
  "Gets a TargetingPresetPage of TargetingPreset objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` TargetingPreset#id   \`name\` TargetingPreset#name   @param filterStatement a Publisher Query Language statement used to filter a set of labels. @return the targeting presets that match the given filter"
  getTargetingPresetsByStatement(input: GetTargetingPresetsByStatementInput!): TargetingPresetPage
    @soap(service: "TargetingPreset", action: "getTargetingPresetsByStatement")
}

`;
