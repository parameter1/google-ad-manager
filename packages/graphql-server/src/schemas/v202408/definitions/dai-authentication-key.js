// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates new DaiAuthenticationKey objects. The following fields are required:  DaiAuthenticationKey#name "
input CreateDaiAuthenticationKeysInput {
  daiAuthenticationKeys: [DaiAuthenticationKeyInput]
}

"A \`DaiAuthenticationKey\` is used to authenticate stream requests to the IMA SDK API."
type DaiAuthenticationKey {
  "The unique ID of the DaiAuthenticationKey. This value is read-only and is assigned by Google."
  id: BigInt!
  "The value of the secure key. This value is read-only and is assigned by Google."
  key: String
  "The date and time this DaiAuthenticationKey was created. This value is read-only and is assigned by Google."
  creationDateTime: DateTime
  "The status of this DaiAuthenticationKey. This value is read-only and is assigned by Google. DAI authentication keys are created in the DaiAuthenticationKeyStatus#ACTIVE state. The status can only be modified through the DaiAuthenticationKeyService#performDaiAuthenticationKeyAction method. Only active keys will be accepted by the IMA SDK API as valid."
  status: DaiAuthenticationKeyStatusEnum
  "The name for this DaiAuthenticationKey."
  name: String
  "The type of this key, which determines how it should be used on stream create requests."
  keyType: DaiAuthenticationKeyTypeEnum
}

"A \`DaiAuthenticationKey\` is used to authenticate stream requests to the IMA SDK API."
input DaiAuthenticationKeyInput {
  "The name for this DaiAuthenticationKey."
  name: String
  "The type of this key, which determines how it should be used on stream create requests."
  keyType: DaiAuthenticationKeyTypeEnum
}

"Captures a page of DaiAuthenticationKey objects."
type DaiAuthenticationKeyPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of live stream events contained within this page."
  results: [DaiAuthenticationKey]
}

"Statuses associated with DaiAuthenticationKey objects."
enum DaiAuthenticationKeyStatusEnum {
  "Indicates that the API key is actively in use and that the IMA SDK API should accept it as a valid key in requests."
  ACTIVE
  "Indicates that the API key is no longer is use and that the IMA SDK API should not accept it as a valid key in requests."
  INACTIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Key types associated with DaiAuthenticationKey objects."
enum DaiAuthenticationKeyTypeEnum {
  "Indicates that the key is a standard API key and should be used with the api-key SDK parameter when authenticating stream create requests."
  API
  "Indicates that the key is an HMAC key and should be used to generate a signature for the stream create request with the auth-token SDK parameter."
  HMAC
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Gets a DaiAuthenticationKeyPage of DaiAuthenticationKey objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` DaiAuthenticationKey#id   \`status\` DaiAuthenticationKey#status   \`name\` DaiAuthenticationKey#name  "
input GetDaiAuthenticationKeysByStatementInput {
  filterStatement: StatementInput
}

"Performs actions on DaiAuthenticationKey objects that match the given Statement#query. DAI authentication keys cannot be deactivated if there are active LiveStreamEvents or Content Sources that are using them."
input PerformDaiAuthenticationKeyActionInput {
  daiAuthenticationKeyAction: JSONObject
  filterStatement: StatementInput
}

"Updates the specified DaiAuthenticationKey objects."
input UpdateDaiAuthenticationKeysInput {
  daiAuthenticationKeys: [DaiAuthenticationKeyInput]
}

type _DaiAuthenticationKeyConnection {
  totalCount: Int!
  nodes: [DaiAuthenticationKey!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`DaiAuthenticationKey\` by ID."
  _daiAuthenticationKey(input: _SingleRecordQueryInput!): DaiAuthenticationKey
    @findById(service: "DaiAuthenticationKey", action: "getDaiAuthenticationKeysByStatement")
}

extend type Query {
  "Finds multiple \`DaiAuthenticationKey\` objects based on the optional input parameters."
  _daiAuthenticationKeys(input: _MultipleRecordsQueryInput!): _DaiAuthenticationKeyConnection!
    @find(service: "DaiAuthenticationKey", action: "getDaiAuthenticationKeysByStatement")
}

extend type Mutation {
  "Creates new DaiAuthenticationKey objects. The following fields are required:  DaiAuthenticationKey#name "
  createDaiAuthenticationKeys(input: CreateDaiAuthenticationKeysInput!): [DaiAuthenticationKey]
    @soap(service: "DaiAuthenticationKey", action: "createDaiAuthenticationKeys")
}

extend type Query {
  "Gets a DaiAuthenticationKeyPage of DaiAuthenticationKey objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` DaiAuthenticationKey#id   \`status\` DaiAuthenticationKey#status   \`name\` DaiAuthenticationKey#name  "
  getDaiAuthenticationKeysByStatement(input: GetDaiAuthenticationKeysByStatementInput!): DaiAuthenticationKeyPage
    @soap(service: "DaiAuthenticationKey", action: "getDaiAuthenticationKeysByStatement")
}

extend type Mutation {
  "Performs actions on DaiAuthenticationKey objects that match the given Statement#query. DAI authentication keys cannot be deactivated if there are active LiveStreamEvents or Content Sources that are using them."
  performDaiAuthenticationKeyAction(input: PerformDaiAuthenticationKeyActionInput!): UpdateResult
    @soap(service: "DaiAuthenticationKey", action: "performDaiAuthenticationKeyAction")
}

extend type Mutation {
  "Updates the specified DaiAuthenticationKey objects."
  updateDaiAuthenticationKeys(input: UpdateDaiAuthenticationKeysInput!): [DaiAuthenticationKey]
    @soap(service: "DaiAuthenticationKey", action: "updateDaiAuthenticationKeys")
}

`;
