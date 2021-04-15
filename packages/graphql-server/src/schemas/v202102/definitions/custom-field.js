// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates new CustomFieldOption objects. The following fields are required:  CustomFieldOption#displayName CustomFieldOption#customFieldId  @param customFieldOptions the custom fields to create @return the created custom field options with their IDs filled in"
input CreateCustomFieldOptionsInput {
  customFieldOptions: [CustomFieldOptionInput]
}

"Creates new CustomField objects. The following fields are required:  CustomField#name CustomField#entityType CustomField#dataType CustomField#visibility  @param customFields the custom fields to create @return the created custom fields with their IDs filled in"
input CreateCustomFieldsInput {
  customFields: [JSONObject]
}

"The data types allowed for CustomField objects."
enum CustomFieldDataTypeEnum {
  "A drop-down field. Values may only be the ids of CustomFieldOption objects."
  DROP_DOWN
  "A number field."
  NUMBER
  "A string field. The max length is 255 characters."
  STRING
  "A boolean field. Values may be 'true', 'false', or empty."
  TOGGLE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Entity types recognized by custom fields"
enum CustomFieldEntityTypeEnum {
  "Represents the Creative type."
  CREATIVE
  "Represents the LineItem type."
  LINE_ITEM
  "Represents the Order type."
  ORDER
  "Represents the Product type."
  PRODUCT
  "Represents the ProductTemplate type."
  PRODUCT_TEMPLATE
  "Represents the Proposal type."
  PROPOSAL
  "Represents the ProposalLineItem type."
  PROPOSAL_LINE_ITEM
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"An additional, user-created field on an entity."
interface CustomFieldInterface {
  "Unique ID of the \`CustomField\`. This value is readonly and is assigned by Google."
  id: BigInt!
  "Name of the \`CustomField\`. This is value is required to create a custom field. The max length is 127 characters."
  name: String
  "A description of the custom field. This value is optional. The maximum length is 511 characters"
  description: String
  "Specifies whether or not the custom fields is active. This attribute is read-only."
  isActive: Boolean
  "The type of entity that this custom field is associated with. This attribute is read-only if there exists a CustomFieldValue for this field."
  entityType: CustomFieldEntityTypeEnum
  "The type of data this custom field contains. This attribute is read-only if there exists a CustomFieldValue for this field."
  dataType: CustomFieldDataTypeEnum
  "How visible/accessible this field is in the UI."
  visibility: CustomFieldVisibilityEnum
}

"An option represents a permitted value for a custom field that has a CustomField#dataType of CustomFieldDataType#DROP_DOWN."
type CustomFieldOption {
  "Unique ID of this option. This value is readonly and is assigned by Google."
  id: BigInt!
  "The id of the custom field this option belongs to."
  customFieldId: BigInt
  "The display name of this option."
  displayName: String
}

"An option represents a permitted value for a custom field that has a CustomField#dataType of CustomFieldDataType#DROP_DOWN."
input CustomFieldOptionInput {
  "The id of the custom field this option belongs to."
  customFieldId: BigInt
  "The display name of this option."
  displayName: String
}

"Captures a page of CustomField objects."
type CustomFieldPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of custom fields contained within this page."
  results: [CustomFieldInterface]
}

"The visibility levels of a custom field."
enum CustomFieldVisibilityEnum {
  "Only visible through the API."
  API_ONLY
  "Visible and editable both in the API and the UI."
  FULL
  "Visible in the UI, but only editable through the API"
  READ_ONLY
}

"A custom field that has the drop-down data type."
type DropDownCustomField implements CustomFieldInterface {
  "Unique ID of the \`CustomField\`. This value is readonly and is assigned by Google."
  id: BigInt!
  "Name of the \`CustomField\`. This is value is required to create a custom field. The max length is 127 characters."
  name: String
  "A description of the custom field. This value is optional. The maximum length is 511 characters"
  description: String
  "Specifies whether or not the custom fields is active. This attribute is read-only."
  isActive: Boolean
  "The type of entity that this custom field is associated with. This attribute is read-only if there exists a CustomFieldValue for this field."
  entityType: CustomFieldEntityTypeEnum
  "The type of data this custom field contains. This attribute is read-only if there exists a CustomFieldValue for this field."
  dataType: CustomFieldDataTypeEnum
  "How visible/accessible this field is in the UI."
  visibility: CustomFieldVisibilityEnum
  "The options allowed for this custom field. This is read only."
  options: [CustomFieldOption]
}

"Returns the CustomFieldOption uniquely identified by the given ID. @param customFieldOptionId the ID of the custom field option, which must already exist @return the \`CustomFieldOption\` uniquely identified by the given ID"
input GetCustomFieldOptionInput {
  customFieldOptionId: BigInt
}

"Gets a CustomFieldPage of CustomField objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CustomField#id   \`entityType\` CustomField#entityType   \`name\` CustomField#name   \`isActive\` CustomField#isActive   \`visibility\` CustomField#visibility   @param filterStatement a Publisher Query Language statement used to filter a set of custom fields. @return the custom fields that match the given filter"
input GetCustomFieldsByStatementInput {
  filterStatement: StatementInput
}

"Performs actions on CustomField objects that match the given Statement#query. @param customFieldAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of custom fields @return the result of the action performed"
input PerformCustomFieldActionInput {
  customFieldAction: JSONObject
  filterStatement: StatementInput
}

"Updates the specified CustomFieldOption objects. @param customFieldOptions the custom field options to update @return the updated custom field options"
input UpdateCustomFieldOptionsInput {
  customFieldOptions: [CustomFieldOptionInput]
}

"Updates the specified CustomField objects. @param customFields the custom fields to update @return the updated custom fields"
input UpdateCustomFieldsInput {
  customFields: [JSONObject]
}

type _CustomFieldInterfaceConnection {
  totalCount: Int!
  nodes: [CustomFieldInterface!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`CustomFieldInterface\` by ID."
  _customField(input: _SingleRecordQueryInput!): CustomFieldInterface
    @findById(service: "CustomField", action: "getCustomFieldsByStatement")
}

extend type Query {
  "Finds multiple \`CustomFieldInterface\` objects based on the optional input parameters."
  _customFields(input: _MultipleRecordsQueryInput!): _CustomFieldInterfaceConnection!
    @find(service: "CustomField", action: "getCustomFieldsByStatement")
}

extend type Mutation {
  "Creates new CustomFieldOption objects. The following fields are required:  CustomFieldOption#displayName CustomFieldOption#customFieldId  @param customFieldOptions the custom fields to create @return the created custom field options with their IDs filled in"
  createCustomFieldOptions(input: CreateCustomFieldOptionsInput!): [CustomFieldOption]
    @soap(service: "CustomField", action: "createCustomFieldOptions")
}

extend type Mutation {
  "Creates new CustomField objects. The following fields are required:  CustomField#name CustomField#entityType CustomField#dataType CustomField#visibility  @param customFields the custom fields to create @return the created custom fields with their IDs filled in"
  createCustomFields(input: CreateCustomFieldsInput!): [CustomFieldInterface]
    @soap(service: "CustomField", action: "createCustomFields")
}

extend type Query {
  "Returns the CustomFieldOption uniquely identified by the given ID. @param customFieldOptionId the ID of the custom field option, which must already exist @return the \`CustomFieldOption\` uniquely identified by the given ID"
  getCustomFieldOption(input: GetCustomFieldOptionInput!): CustomFieldOption
    @soap(service: "CustomField", action: "getCustomFieldOption")
}

extend type Query {
  "Gets a CustomFieldPage of CustomField objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CustomField#id   \`entityType\` CustomField#entityType   \`name\` CustomField#name   \`isActive\` CustomField#isActive   \`visibility\` CustomField#visibility   @param filterStatement a Publisher Query Language statement used to filter a set of custom fields. @return the custom fields that match the given filter"
  getCustomFieldsByStatement(input: GetCustomFieldsByStatementInput!): CustomFieldPage
    @soap(service: "CustomField", action: "getCustomFieldsByStatement")
}

extend type Mutation {
  "Performs actions on CustomField objects that match the given Statement#query. @param customFieldAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of custom fields @return the result of the action performed"
  performCustomFieldAction(input: PerformCustomFieldActionInput!): UpdateResult
    @soap(service: "CustomField", action: "performCustomFieldAction")
}

extend type Mutation {
  "Updates the specified CustomFieldOption objects. @param customFieldOptions the custom field options to update @return the updated custom field options"
  updateCustomFieldOptions(input: UpdateCustomFieldOptionsInput!): [CustomFieldOption]
    @soap(service: "CustomField", action: "updateCustomFieldOptions")
}

extend type Mutation {
  "Updates the specified CustomField objects. @param customFields the custom fields to update @return the updated custom fields"
  updateCustomFields(input: UpdateCustomFieldsInput!): [CustomFieldInterface]
    @soap(service: "CustomField", action: "updateCustomFields")
}

`;
