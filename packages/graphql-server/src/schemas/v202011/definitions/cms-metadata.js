// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Key associated with a piece of content from a publisher's CMS."
type CmsMetadataKey {
  "The ID of this CMS metadata key. This field is read-only and provided by Google."
  id: BigInt!
  "The key of a key-value pair."
  name: String
  "The status of this CMS metadata key. This attribute is read-only."
  status: CmsMetadataKeyStatusEnum
}

"Captures a page of CMS metadata key objects."
type CmsMetadataKeyPage {
  totalResultSetSize: Int
  startIndex: Int
  results: [CmsMetadataKey]
}

"Status for \`CmsMetadataKey\` objects."
enum CmsMetadataKeyStatusEnum {
  ACTIVE
  INACTIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Key value pair associated with a piece of content from a publisher's CMS."
type CmsMetadataValue {
  "The ID of this CMS metadata value, to be used in targeting. This field is read-only and provided by Google."
  cmsMetadataValueId: BigInt
  "The value of this key-value pair."
  valueName: String
  key: CmsMetadataKey
  "The status of this CMS metadata value. This attribute is read-only."
  status: CmsMetadataValueStatusEnum
}

"Captures a page of CMS metadata value objects."
type CmsMetadataValuePage {
  totalResultSetSize: Int
  startIndex: Int
  results: [CmsMetadataValue]
}

"Status for \`CmsMetadataValue\` objects."
enum CmsMetadataValueStatusEnum {
  ACTIVE
  ARCHIVED
  INACTIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Returns a page of CmsMetadataKeys matching the specified Statement. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CmsMetadataKey#cmsMetadataKeyId   \`cmsKey\` CmsMetadataKey#keyName   \`status\` CmsMetadataKey#status  "
input GetCmsMetadataKeysByStatementInput {
  statement: StatementInput
}

"Returns a page of CmsMetadataValues matching the specified Statement. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CmsMetadataValue#cmsMetadataValueId   \`cmsValue\` CmsMetadataValue#valueName   \`cmsKey\` CmsMetadataValue#key#name   \`cmsKeyId\` CmsMetadataValue#key#id   \`keyValueMemberContent\` Content IDs tagged with a CMS metadata key-value   \`status\` CmsMetadataValue#status  "
input GetCmsMetadataValuesByStatementInput {
  statement: StatementInput
}

"Performs actions on CmsMetadataKey objects that match the given Statement#query. @param keyAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of cms metadata keys. @return the result of the action performed"
input PerformCmsMetadataKeyActionInput {
  keyAction: JSONObject
  filterStatement: StatementInput
}

"Performs actions on CmsMetadataValue objects that match the given Statement#query. @param valueAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of cms metadata values. @return the result of the action performed"
input PerformCmsMetadataValueActionInput {
  valueAction: JSONObject
  filterStatement: StatementInput
}

extend type Query {
  "Returns a page of CmsMetadataKeys matching the specified Statement. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CmsMetadataKey#cmsMetadataKeyId   \`cmsKey\` CmsMetadataKey#keyName   \`status\` CmsMetadataKey#status  "
  getCmsMetadataKeysByStatement(input: GetCmsMetadataKeysByStatementInput!): CmsMetadataKeyPage
    @soap(service: "CmsMetadata", action: "getCmsMetadataKeysByStatement")
}

extend type Query {
  "Returns a page of CmsMetadataValues matching the specified Statement. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CmsMetadataValue#cmsMetadataValueId   \`cmsValue\` CmsMetadataValue#valueName   \`cmsKey\` CmsMetadataValue#key#name   \`cmsKeyId\` CmsMetadataValue#key#id   \`keyValueMemberContent\` Content IDs tagged with a CMS metadata key-value   \`status\` CmsMetadataValue#status  "
  getCmsMetadataValuesByStatement(input: GetCmsMetadataValuesByStatementInput!): CmsMetadataValuePage
    @soap(service: "CmsMetadata", action: "getCmsMetadataValuesByStatement")
}

extend type Mutation {
  "Performs actions on CmsMetadataKey objects that match the given Statement#query. @param keyAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of cms metadata keys. @return the result of the action performed"
  performCmsMetadataKeyAction(input: PerformCmsMetadataKeyActionInput!): UpdateResult
    @soap(service: "CmsMetadata", action: "performCmsMetadataKeyAction")
}

extend type Mutation {
  "Performs actions on CmsMetadataValue objects that match the given Statement#query. @param valueAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of cms metadata values. @return the result of the action performed"
  performCmsMetadataValueAction(input: PerformCmsMetadataValueActionInput!): UpdateResult
    @soap(service: "CmsMetadata", action: "performCmsMetadataValueAction")
}

`;
