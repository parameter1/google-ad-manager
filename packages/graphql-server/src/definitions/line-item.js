const { gql } = require('apollo-server-express');

module.exports = gql`

extend type Query {
  "Finds a single line item by ID."
  lineItem(input: SingleRecordQueryInput!): LineItem
    @findById(service: "LineItem")
  "Finds multiple line items based on the (optional) input parameters."
  lineItems(input: MultipleRecordsQueryInput = {}): LineItemConnection!
    @find(service: "LineItem")
}

"LineItem is an advertiser's commitment to purchase a specific number of ad impressions, clicks, or time."
type LineItem {
  "Uniquely identifies the LineItem. This attribute is read-only and is assigned by Google when a line item is created."
  id: BigInt!
  "The ID of the Order to which the LineItem belongs. This attribute is required."
  orderId: BigInt!
  "The Order that owns this LineItem."
  order: Order! @refOne(service: "Order", localField: "orderId")
  "The name of the line item. This attribute is required and has a maximum length of 255 characters."
  name: String!
}

"Represents multiple line items."
type LineItemConnection {
  totalCount: Int!
  nodes: [LineItem!]!
  statement: StatementInfo!
  pageInfo: PageInfo!
}

`;
