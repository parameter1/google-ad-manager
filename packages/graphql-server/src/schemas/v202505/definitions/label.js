// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"A canonical ad category."
type AdCategoryDto {
  "Canonical ID of the ad category."
  id: BigInt!
  "Localized name of the category."
  displayName: String
  "ID of the category's parent, or 0 if it has no parent."
  parentId: BigInt
}

"A canonical ad category."
input AdCategoryDtoInput {
  "Canonical ID of the ad category."
  id: BigInt!
  "Localized name of the category."
  displayName: String
  "ID of the category's parent, or 0 if it has no parent."
  parentId: BigInt
}

"Creates new Label objects."
input CreateLabelsInput {
  labels: [LabelInput]
}

"Gets a LabelPage of Label objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Label#id   \`type\` Label#type   \`name\` Label#name   \`description\` Label#description   \`isActive\` Label#isActive  "
input GetLabelsByStatementInput {
  filterStatement: StatementInput
}

"A \`Label\` is additional information that can be added to an entity."
type Label {
  "Unique ID of the \`Label\`. This value is readonly and is assigned by Google."
  id: BigInt!
  "Name of the \`Label\`. This is value is required to create a label and has a maximum length of 127 characters."
  name: String
  "A description of the label. This value is optional and its maximum length is 255 characters."
  description: String
  "Specifies whether or not the label is active. This attribute is read-only."
  isActive: Boolean
  "Indicates the Ad Category associated with the label."
  adCategory: AdCategoryDto
  "The types of the \`Label\`."
  types: [LabelTypeEnum]
}

"A \`Label\` is additional information that can be added to an entity."
input LabelInput {
  "Name of the \`Label\`. This is value is required to create a label and has a maximum length of 127 characters."
  name: String
  "A description of the label. This value is optional and its maximum length is 255 characters."
  description: String
  "Indicates the Ad Category associated with the label."
  adCategory: AdCategoryDtoInput
  "The types of the \`Label\`."
  types: [LabelTypeEnum]
}

"Captures a page of Label objects."
type LabelPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of labels contained within this page."
  results: [Label]
}

"Represents the types of labels supported."
enum LabelTypeEnum {
  "Allows for the creation of labels to exclude ads from showing against a tag that specifies the label as an exclusion."
  AD_EXCLUSION
  "Allows for the creation of limits on the frequency that a user sees a particular type of creative over a portion of the inventory."
  AD_UNIT_FREQUENCY_CAP
  "Allows for the creation of labels mapped to a Google canonical ad category, which can be used for competitive exclusions and blocking across Google systems."
  CANONICAL_CATEGORY
  "Allows for the creation of labels to exclude competing ads from showing on the same page."
  COMPETITIVE_EXCLUSION
  "Allows for the creation of labels that can be used to force the wrapping of a delivering creative with header/footer creatives. These labels are paired with a CreativeWrapper."
  CREATIVE_WRAPPER
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Performs actions on Label objects that match the given Statement#query."
input PerformLabelActionInput {
  labelAction: JSONObject
  filterStatement: StatementInput
}

"Updates the specified Label objects."
input UpdateLabelsInput {
  labels: [LabelInput]
}

type _LabelConnection {
  totalCount: Int!
  nodes: [Label!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`Label\` by ID."
  _label(input: _SingleRecordQueryInput!): Label
    @findById(service: "Label", action: "getLabelsByStatement")
}

extend type Query {
  "Finds multiple \`Label\` objects based on the optional input parameters."
  _labels(input: _MultipleRecordsQueryInput!): _LabelConnection!
    @find(service: "Label", action: "getLabelsByStatement")
}

extend type Mutation {
  "Creates new Label objects."
  createLabels(input: CreateLabelsInput!): [Label]
    @soap(service: "Label", action: "createLabels")
}

extend type Query {
  "Gets a LabelPage of Label objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Label#id   \`type\` Label#type   \`name\` Label#name   \`description\` Label#description   \`isActive\` Label#isActive  "
  getLabelsByStatement(input: GetLabelsByStatementInput!): LabelPage
    @soap(service: "Label", action: "getLabelsByStatement")
}

extend type Mutation {
  "Performs actions on Label objects that match the given Statement#query."
  performLabelAction(input: PerformLabelActionInput!): UpdateResult
    @soap(service: "Label", action: "performLabelAction")
}

extend type Mutation {
  "Updates the specified Label objects."
  updateLabels(input: UpdateLabelsInput!): [Label]
    @soap(service: "Label", action: "updateLabels")
}

`;
