// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates new NativeStyle objects. @param nativeStyles the native styles to create @return the created native styles with their IDs filled in"
input CreateNativeStylesInput {
  nativeStyles: [NativeStyleInput]
}

"Gets a NativeStylePage of NativeStyle objects that satisfy the given Statement. The following fields are supported for filtering:   PQL Property Object Property   \`id\` NativeStyle#id   \`name\` NativeStyle#name   @param filterStatement a Publisher Query Language statement used to filter a set of native styles. @return the native styles that match the given filter"
input GetNativeStylesByStatementInput {
  filterStatement: StatementInput
}

"Used to define the look and feel of native ads, for both web and apps. Native styles determine how native creatives look for a segment of inventory."
type NativeStyle {
  "Uniquely identifies the \`NativeStyle\`. This attribute is read-only and is assigned by Google when a native style is created."
  id: BigInt!
  "The name of the native style. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "The HTML snippet of the native style with placeholders for the associated variables. This attribute is required."
  htmlSnippet: String!
  "The CSS snippet of the native style, with placeholders for the associated variables. This attribute is required."
  cssSnippet: String!
  "The creative template ID this native style associated with. This attribute is required on creation and is read-only afterwards."
  creativeTemplateId: BigInt!
  "Whether this is a fluid size native style. If \`true\`, this must be used with 1x1 size."
  isFluid: Boolean
  "The targeting criteria for this native style. Only ad unit and key-value targeting are supported at this time."
  targeting: Targeting
  "The status of the native style. This attribute is read-only."
  status: NativeStyleStatusEnum
  "The size of the native style. This attribute is required."
  size: Size!
}

"Used to define the look and feel of native ads, for both web and apps. Native styles determine how native creatives look for a segment of inventory."
input NativeStyleInput {
  "The name of the native style. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "The HTML snippet of the native style with placeholders for the associated variables. This attribute is required."
  htmlSnippet: String!
  "The CSS snippet of the native style, with placeholders for the associated variables. This attribute is required."
  cssSnippet: String!
  "Whether this is a fluid size native style. If \`true\`, this must be used with 1x1 size."
  isFluid: Boolean
  "The targeting criteria for this native style. Only ad unit and key-value targeting are supported at this time."
  targeting: TargetingInput
  "The size of the native style. This attribute is required."
  size: SizeInput!
}

"Captures a page of NativeStyle objects."
type NativeStylePage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of native styles contained within this page."
  results: [NativeStyle]
}

"Describes status of the native style."
enum NativeStyleStatusEnum {
  "The native style is active. Active native styles are used in ad serving."
  ACTIVE
  "The native style is archived. Archived native styles are not visible in the UI and not used in ad serving."
  ARCHIVED
  "The native style is inactive. Inactive native styles are not used in ad serving, but visible in the UI."
  INACTIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Performs actions on native styles that match the given Statement. @param nativeStyleAction the action to perform @param filterStatement a Publisher Query Language statement to filter a set of native styles @return the result of the action performed"
input PerformNativeStyleActionInput {
  nativeStyleAction: JSONObject
  filterStatement: StatementInput
}

"Updates the specified NativeStyle objects. @param nativeStyles the native styles to be updated @return the updated native styles"
input UpdateNativeStylesInput {
  nativeStyles: [NativeStyleInput]
}

type _NativeStyleConnection {
  totalCount: Int!
  nodes: [NativeStyle!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`NativeStyle\` by ID."
  _nativeStyle(input: _SingleRecordQueryInput!): NativeStyle
    @findById(service: "NativeStyle", action: "getNativeStylesByStatement")
}

extend type Query {
  "Finds multiple \`NativeStyle\` objects based on the optional input parameters."
  _nativeStyles(input: _MultipleRecordsQueryInput!): _NativeStyleConnection!
    @find(service: "NativeStyle", action: "getNativeStylesByStatement")
}

extend type Mutation {
  "Creates new NativeStyle objects. @param nativeStyles the native styles to create @return the created native styles with their IDs filled in"
  createNativeStyles(input: CreateNativeStylesInput!): [NativeStyle]
    @soap(service: "NativeStyle", action: "createNativeStyles")
}

extend type Query {
  "Gets a NativeStylePage of NativeStyle objects that satisfy the given Statement. The following fields are supported for filtering:   PQL Property Object Property   \`id\` NativeStyle#id   \`name\` NativeStyle#name   @param filterStatement a Publisher Query Language statement used to filter a set of native styles. @return the native styles that match the given filter"
  getNativeStylesByStatement(input: GetNativeStylesByStatementInput!): NativeStylePage
    @soap(service: "NativeStyle", action: "getNativeStylesByStatement")
}

extend type Mutation {
  "Performs actions on native styles that match the given Statement. @param nativeStyleAction the action to perform @param filterStatement a Publisher Query Language statement to filter a set of native styles @return the result of the action performed"
  performNativeStyleAction(input: PerformNativeStyleActionInput!): UpdateResult
    @soap(service: "NativeStyle", action: "performNativeStyleAction")
}

extend type Mutation {
  "Updates the specified NativeStyle objects. @param nativeStyles the native styles to be updated @return the updated native styles"
  updateNativeStyles(input: UpdateNativeStylesInput!): [NativeStyle]
    @soap(service: "NativeStyle", action: "updateNativeStyles")
}

`;
