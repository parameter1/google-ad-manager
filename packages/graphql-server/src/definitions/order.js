const { gql } = require('apollo-server-express');

module.exports = gql`

extend type Query {
  "Finds a single order by ID."
  order(input: SingleRecordQueryInput!): Order
    @findById(service: "Order")
  "Finds multiple orders based on the (optional) input parameters."
  orders(input: MultipleRecordsQueryInput = {}): OrderConnection!
    @find(service: "Order")
}

"An Order represents a grouping of individual LineItem objects, each of which fulfill an ad request from a particular advertiser."
type Order {
  "The unique ID of the Order. This value is readonly and is assigned by Google."
  id: BigInt!
  "The name of the Order. This value is required to create an order and has a maximum length of 255 characters."
  name: String!
  "The unique ID of the Company, which is of type Company.Type.ADVERTISER, to which this order belongs. This attribute is required."
  advertiserId: BigInt!
  "The Advertiser that owns this Order."
  advertiser: Company! @refOne(service: "Company", localField: "advertiserId")
  "The date and time this order was last modified."
  lastModifiedDateTime: GAMDateTime!
}

"Represents multiple orders."
type OrderConnection {
  totalCount: Int!
  nodes: [Order!]!
  statement: StatementInfo!
  pageInfo: PageInfo!
}

`;
