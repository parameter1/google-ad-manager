// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"The type of entity a change occurred on."
enum ChangeHistoryEntityTypeEnum {
  AD_UNIT
  BASE_RATE
  COMPANY
  CONTACT
  CREATIVE
  CREATIVE_SET
  CUSTOM_FIELD
  CUSTOM_KEY
  CUSTOM_VALUE
  LABEL
  LINE_ITEM
  NETWORK
  ORDER
  PACKAGE
  PLACEMENT
  PREMIUM_RATE
  PRODUCT
  PRODUCT_PACKAGE
  PRODUCT_PACKAGE_ITEM
  PRODUCT_TEMPLATE
  PROPOSAL
  PROPOSAL_LINE_ITEM
  PROPOSAL_LINK
  RATE_CARD
  ROLE
  TEAM
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  USER
  WORKFLOW
}

"An operation that was performed on an entity."
enum ChangeHistoryOperationEnum {
  CREATE
  DELETE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  UPDATE
}

""
type ChangeHistoryValue implements ObjectValueInterface & ValueInterface {
  _: Boolean
  entityType: ChangeHistoryEntityTypeEnum
  operation: ChangeHistoryOperationEnum
}

"Contains information about a column in a ResultSet."
type ColumnType {
  "Represents the column's name."
  labelName: String
}

"The \`ResultSet\` represents a table of data obtained from the execution of a PQL Statement."
type ResultSet {
  "A collection of ColumnType objects."
  columnTypes: [ColumnType]
  "A collection of Row objects."
  rows: [Row]
}

"Each Row object represents data about one entity in a ResultSet."
type Row {
  "Represents a collection of values belonging to one entity."
  values: [ValueInterface]
}

"Retrieves rows of data that satisfy the given Statement#query from the system. @param selectStatement a Publisher Query Language statement used to specify what data needs to returned @return a result set of data that matches the given filter"
input SelectInput {
  selectStatement: StatementInput
}

"Contains a Targeting value. This object is experimental! TargetingValue is an experimental, innovative, and rapidly changing new feature for Ad Manager. Unfortunately, being on the bleeding edge means that we may make backwards-incompatible changes to TargetingValue. We will inform the community when this feature is no longer experimental."
type TargetingValue implements ObjectValueInterface & ValueInterface {
  _: Boolean
  "The \`Targeting\` value."
  value: Targeting
}

extend type Query {
  "Retrieves rows of data that satisfy the given Statement#query from the system. @param selectStatement a Publisher Query Language statement used to specify what data needs to returned @return a result set of data that matches the given filter"
  select(input: SelectInput!): ResultSet
    @soap(service: "PublisherQueryLanguage", action: "select")
}

`;
