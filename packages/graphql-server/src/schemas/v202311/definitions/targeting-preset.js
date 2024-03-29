// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Gets a TargetingPresetPage of TargetingPreset objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` TargetingPreset#id   \`name\` TargetingPreset#name  "
input GetTargetingPresetsByStatementInput {
  filterStatement: StatementInput
}

"User-defined preset targeting criteria."
type TargetingPreset {
  "The unique ID of the \`TargetingPreset\`. This value is readonly and is assigned by Google."
  id: BigInt!
  "The name of the \`TargetingPreset\`. This value is required to create a targeting preset and has a maximum length of 255 characters."
  name: String
  "Contains the targeting criteria for the \`TargetingPreset\`. This attribute is required."
  targeting: Targeting
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

type _TargetingPresetConnection {
  totalCount: Int!
  nodes: [TargetingPreset!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`TargetingPreset\` by ID."
  _targetingPreset(input: _SingleRecordQueryInput!): TargetingPreset
    @findById(service: "TargetingPreset", action: "getTargetingPresetsByStatement")
}

extend type Query {
  "Finds multiple \`TargetingPreset\` objects based on the optional input parameters."
  _targetingPresets(input: _MultipleRecordsQueryInput!): _TargetingPresetConnection!
    @find(service: "TargetingPreset", action: "getTargetingPresetsByStatement")
}

extend type Query {
  "Gets a TargetingPresetPage of TargetingPreset objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` TargetingPreset#id   \`name\` TargetingPreset#name  "
  getTargetingPresetsByStatement(input: GetTargetingPresetsByStatementInput!): TargetingPresetPage
    @soap(service: "TargetingPreset", action: "getTargetingPresetsByStatement")
}

`;
