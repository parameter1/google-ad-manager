// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Gets a LineItemTemplatePage of LineItemTemplate objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` LineItemTemplate#id   @param filterStatement a Publisher Query Language statement used to filter a set of line item templates @return the line item templates that match the given filter @throws ApiException if a RuntimeException is thrown"
input GetLineItemTemplatesByStatementInput {
  filterStatement: JSONObject
}

"Represents the template that populates the fields of a new line item being created."
type LineItemTemplate {
  "Uniquely identifies the \`LineItemTemplate\`. This attribute is read-only and is assigned by Google when a template is created."
  id: BigInt!
  "The name of the \`LineItemTemplate\`. This attribute is required."
  name: String!
  "Whether or not the \`LineItemTemplate\` represents the default choices for creating a \`LineItem\`. Only one default \`LineItemTemplate\` is allowed per \`Network\`. This attribute is readonly."
  isDefault: Boolean
  "The default name of a new \`LineItem\`. This attribute is optional and has a maximum length of 127 characters."
  lineItemName: String
  "The default value for the LineItem#enabledForSameAdvertiserException field of a new \`LineItem\`. This attribute is required."
  enabledForSameAdvertiserException: Boolean!
  "The default notes for a new \`LineItem\`. This attribute is optional and has a maximum length of 65,535 characters."
  notes: String
  "The default type of a new \`LineItem\`. This attribute is required."
  lineItemType: LineItemTypeEnum!
  "The default delivery strategy for a new \`LineItem\`. This attribute is required."
  deliveryRateType: DeliveryRateTypeEnum!
  "The default roadblocking strategy for a new \`LineItem\`. This attribute is required."
  roadblockingType: RoadblockingTypeEnum!
  "The default creative rotation strategy for a new \`LineItem\`. This attribute is required."
  creativeRotationType: CreativeRotationTypeEnum!
}

"Captures a page of LineItemTemplate objects."
type LineItemTemplatePage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of line item templates contained within this page."
  results: [LineItemTemplate]
}

extend type Query {
  "Gets a LineItemTemplatePage of LineItemTemplate objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` LineItemTemplate#id   @param filterStatement a Publisher Query Language statement used to filter a set of line item templates @return the line item templates that match the given filter @throws ApiException if a RuntimeException is thrown"
  getLineItemTemplatesByStatement(input: GetLineItemTemplatesByStatementInput!): LineItemTemplatePage
    @soap(service: "LineItemTemplate", action: "getLineItemTemplatesByStatement")
}

`;
