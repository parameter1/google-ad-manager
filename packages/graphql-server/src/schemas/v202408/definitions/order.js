// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates new Order objects."
input CreateOrdersInput {
  orders: [OrderInput]
}

"Gets an OrderPage of Order objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`advertiserId\` Order#advertiserId   \`endDateTime\` Order#endDateTime   \`id\` Order#id   \`name\` Order#name   \`salespersonId\` Order#salespersonId   \`startDateTime\` Order#startDateTime   \`status\` Order#status   \`traffickerId\` Order#traffickerId   \`lastModifiedDateTime\` Order#lastModifiedDateTime  "
input GetOrdersByStatementInput {
  filterStatement: StatementInput
}

"An \`Order\` represents a grouping of individual LineItem objects, each of which fulfill an ad request from a particular advertiser."
type Order {
  "The unique ID of the \`Order\`. This value is readonly and is assigned by Google."
  id: BigInt!
  "The name of the \`Order\`. This value is required to create an order and has a maximum length of 255 characters."
  name: String
  "The date and time at which the \`Order\` and its associated line items are eligible to begin serving. This attribute is readonly and is derived from the line item of the order which has the earliest LineItem#startDateTime."
  startDateTime: DateTime
  "The date and time at which the \`Order\` and its associated line items stop being served. This attribute is readonly and is derived from the line item of the order which has the latest LineItem#endDateTime."
  endDateTime: DateTime
  "Specifies whether or not the \`Order\` has an unlimited end date. This attribute is readonly and is \`true\` if any of the order's line items has LineItem#unlimitedEndDateTime set to \`true\`."
  unlimitedEndDateTime: Boolean
  "The status of the \`Order\`. This attribute is read-only."
  status: OrderStatusEnum
  "The archival status of the \`Order\`. This attribute is readonly."
  isArchived: Boolean
  "Provides any additional notes that may annotate the \`Order\`. This attribute is optional and has a maximum length of 65,535 characters."
  notes: String
  "An arbitrary ID to associate to the \`Order\`, which can be used as a key to an external system. This value is optional."
  externalOrderId: Int
  "The purchase order number for the \`Order\`. This value is optional and has a maximum length of 63 characters."
  poNumber: String
  "The ISO currency code for the currency used by the \`Order\`. This value is read-only and is the network's currency code."
  currencyCode: String
  "The unique ID of the Company, which is of type Company.Type#ADVERTISER, to which this order belongs. This attribute is required."
  advertiserId: BigInt
  "List of IDs for advertiser contacts of the order."
  advertiserContactIds: [BigInt]
  "The unique ID of the Company, which is of type Company.Type#AGENCY, with which this order is associated. This attribute is optional."
  agencyId: BigInt
  "List of IDs for agency contacts of the order."
  agencyContactIds: [BigInt]
  "The unique ID of the User who created the \`Order\` on behalf of the advertiser. This value is readonly and is assigned by Google."
  creatorId: BigInt
  "The unique ID of the User responsible for trafficking the \`Order\`. This value is required for creating an order."
  traffickerId: BigInt
  "The IDs of the secondary traffickers associated with the order. This value is optional."
  secondaryTraffickerIds: [BigInt]
  "The unique ID of the User responsible for the sales of the \`Order\`. This value is optional."
  salespersonId: BigInt
  "The IDs of the secondary salespeople associated with the order. This value is optional."
  secondarySalespersonIds: [BigInt]
  "Total impressions delivered for all line items of this \`Order\`. This value is read-only and is assigned by Google."
  totalImpressionsDelivered: BigInt
  "Total clicks delivered for all line items of this \`Order\`. This value is read-only and is assigned by Google."
  totalClicksDelivered: BigInt
  "Total viewable impressions delivered for all line items of this \`Order\`. This value is read-only and is assigned by Google. Starting in v201705, this will be \`null\` when the order does not have line items trafficked against a viewable impressions goal."
  totalViewableImpressionsDelivered: BigInt
  "Total budget for all line items of this \`Order\`. This value is a readonly field assigned by Google and is calculated from the associated LineItem#costPerUnit values."
  totalBudget: Money
  "The set of labels applied directly to this order."
  appliedLabels: [AppliedLabel]
  "Contains the set of labels applied directly to the order as well as those inherited from the company that owns the order. If a label has been negated, only the negated label is returned. This field is readonly and is assigned by Google."
  effectiveAppliedLabels: [AppliedLabel]
  "The application which modified this order. This attribute is read only and is assigned by Google."
  lastModifiedByApp: String
  "Specifies whether or not the \`Order\` is a programmatic order. This value is optional and defaults to false."
  isProgrammatic: Boolean
  "The IDs of all teams that this order is on directly."
  appliedTeamIds: [BigInt]
  "The date and time this order was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this order."
  customFieldValues: [BaseCustomFieldValueInterface]
}

"An \`Order\` represents a grouping of individual LineItem objects, each of which fulfill an ad request from a particular advertiser."
input OrderInput {
  "The name of the \`Order\`. This value is required to create an order and has a maximum length of 255 characters."
  name: String
  "Provides any additional notes that may annotate the \`Order\`. This attribute is optional and has a maximum length of 65,535 characters."
  notes: String
  "An arbitrary ID to associate to the \`Order\`, which can be used as a key to an external system. This value is optional."
  externalOrderId: Int
  "The purchase order number for the \`Order\`. This value is optional and has a maximum length of 63 characters."
  poNumber: String
  "The unique ID of the Company, which is of type Company.Type#ADVERTISER, to which this order belongs. This attribute is required."
  advertiserId: BigInt
  "List of IDs for advertiser contacts of the order."
  advertiserContactIds: [BigInt]
  "The unique ID of the Company, which is of type Company.Type#AGENCY, with which this order is associated. This attribute is optional."
  agencyId: BigInt
  "List of IDs for agency contacts of the order."
  agencyContactIds: [BigInt]
  "The unique ID of the User responsible for trafficking the \`Order\`. This value is required for creating an order."
  traffickerId: BigInt
  "The IDs of the secondary traffickers associated with the order. This value is optional."
  secondaryTraffickerIds: [BigInt]
  "The unique ID of the User responsible for the sales of the \`Order\`. This value is optional."
  salespersonId: BigInt
  "The IDs of the secondary salespeople associated with the order. This value is optional."
  secondarySalespersonIds: [BigInt]
  "Total budget for all line items of this \`Order\`. This value is a readonly field assigned by Google and is calculated from the associated LineItem#costPerUnit values."
  totalBudget: MoneyInput
  "The set of labels applied directly to this order."
  appliedLabels: [AppliedLabelInput]
  "Contains the set of labels applied directly to the order as well as those inherited from the company that owns the order. If a label has been negated, only the negated label is returned. This field is readonly and is assigned by Google."
  effectiveAppliedLabels: [AppliedLabelInput]
  "The application which modified this order. This attribute is read only and is assigned by Google."
  lastModifiedByApp: String
  "Specifies whether or not the \`Order\` is a programmatic order. This value is optional and defaults to false."
  isProgrammatic: Boolean
  "The IDs of all teams that this order is on directly."
  appliedTeamIds: [BigInt]
  "The date and time this order was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this order."
  customFieldValues: [JSONObject]
}

"Captures a page of Order objects."
type OrderPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of orders contained within this page."
  results: [Order]
}

"Describes the order statuses."
enum OrderStatusEnum {
  "Indicates that the Order has been approved and is ready to serve."
  APPROVED
  "Indicates that the Order has been canceled and cannot serve."
  CANCELED
  "Indicates that the Order has been deleted by DSM."
  DELETED
  "Indicates that the Order has been disapproved and is not eligible to serve."
  DISAPPROVED
  "Indicates that the Order has just been created but no approval has been requested yet."
  DRAFT
  "This is a legacy state. Paused status should be checked on LineItemss within the order."
  PAUSED
  "Indicates that a request for approval for the Order has been made."
  PENDING_APPROVAL
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Performs actions on Order objects that match the given Statement#query."
input PerformOrderActionInput {
  orderAction: JSONObject
  filterStatement: StatementInput
}

"Updates the specified Order objects."
input UpdateOrdersInput {
  orders: [OrderInput]
}

type _OrderConnection {
  totalCount: Int!
  nodes: [Order!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`Order\` by ID."
  _order(input: _SingleRecordQueryInput!): Order
    @findById(service: "Order", action: "getOrdersByStatement")
}

extend type Query {
  "Finds multiple \`Order\` objects based on the optional input parameters."
  _orders(input: _MultipleRecordsQueryInput!): _OrderConnection!
    @find(service: "Order", action: "getOrdersByStatement")
}

extend type Mutation {
  "Creates new Order objects."
  createOrders(input: CreateOrdersInput!): [Order]
    @soap(service: "Order", action: "createOrders")
}

extend type Query {
  "Gets an OrderPage of Order objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`advertiserId\` Order#advertiserId   \`endDateTime\` Order#endDateTime   \`id\` Order#id   \`name\` Order#name   \`salespersonId\` Order#salespersonId   \`startDateTime\` Order#startDateTime   \`status\` Order#status   \`traffickerId\` Order#traffickerId   \`lastModifiedDateTime\` Order#lastModifiedDateTime  "
  getOrdersByStatement(input: GetOrdersByStatementInput!): OrderPage
    @soap(service: "Order", action: "getOrdersByStatement")
}

extend type Mutation {
  "Performs actions on Order objects that match the given Statement#query."
  performOrderAction(input: PerformOrderActionInput!): UpdateResult
    @soap(service: "Order", action: "performOrderAction")
}

extend type Mutation {
  "Updates the specified Order objects."
  updateOrders(input: UpdateOrdersInput!): [Order]
    @soap(service: "Order", action: "updateOrders")
}

`;
