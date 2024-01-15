// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

""
interface AbstractDisplaySettingsInterface {
  _: Boolean
}

""
input BuyerUserListTargetingInput {
  hasBuyerUserListTargeting: Boolean
}

"Creates yield groups in bulk."
input CreateYieldGroupsInput {
  yieldGroups: [YieldGroupInput]
}

"Gets a page of yield groups, with child tags, filtered by the given statement."
input GetYieldGroupsByStatementInput {
  statement: StatementInput
}

""
type OpenBiddingSetting implements AbstractDisplaySettingsInterface {
  _: Boolean
  yieldIntegrationType: YieldIntegrationTypeEnum
}

""
enum PartnerSettingStatusEnum {
  ACTIVE
  DEPRECATED
  PENDING
  UNKNOWN
}

""
input RequestPlatformTargetingInput {
  targetedRequestPlatforms: [RequestPlatformEnum]
}

""
type SdkMediationSettings implements AbstractDisplaySettingsInterface {
  _: Boolean
  parameters: [YieldParameter_StringMapEntry]
  yieldIntegrationType: YieldIntegrationTypeEnum
  platform: YieldPlatformEnum
}

"Updates a list of yield groups."
input UpdateYieldGroupsInput {
  yieldGroups: [YieldGroupInput]
}

""
type YieldAdSource {
  adSourceId: BigInt
  companyId: BigInt
  displaySettings: AbstractDisplaySettingsInterface
  status: YieldEntityStatusEnum
  manualCpm: Money
  overrideDynamicCpm: Boolean
}

""
input YieldAdSourceInput {
  adSourceId: BigInt
  companyId: BigInt
  displaySettings: JSONObject
  status: YieldEntityStatusEnum
  manualCpm: MoneyInput
  overrideDynamicCpm: Boolean
}

""
enum YieldEntityStatusEnum {
  ACTIVE
  DELETED
  EXPERIMENTING
  INACTIVE
  UNKNOWN
}

""
enum YieldEnvironmentTypeEnum {
  MOBILE
  UNKNOWN
  VIDEO_VAST
  WEB
}

""
enum YieldFormatEnum {
  APP_OPEN
  BANNER
  INTERSTITIAL
  NATIVE
  REWARDED
  REWARDED_INTERSTITIAL
  UNKNOWN
  VIDEO_VAST
}

""
type YieldGroup {
  yieldGroupId: BigInt
  yieldGroupName: String
  exchangeStatus: YieldEntityStatusEnum
  format: YieldFormatEnum
  environmentType: YieldEnvironmentTypeEnum
  targeting: Targeting
  adSources: [YieldAdSource]
}

""
input YieldGroupInput {
  yieldGroupId: BigInt
  yieldGroupName: String
  exchangeStatus: YieldEntityStatusEnum
  format: YieldFormatEnum
  environmentType: YieldEnvironmentTypeEnum
  targeting: TargetingInput
  adSources: [YieldAdSourceInput]
}

""
type YieldGroupPage {
  totalResultSetSize: Int
  startIndex: Int
  results: [YieldGroup]
}

""
enum YieldIntegrationTypeEnum {
  CUSTOM_EVENT
  NETWORK_BIDDING
  OPEN_BIDDING
  SDK
  UNKNOWN
}

""
type YieldParameter {
  name: String
  isOptional: Boolean
}

""
input YieldParameterInput {
  name: String
  isOptional: Boolean
}

"This represents an entry in a map with a key of type YieldParameter and value of type String."
type YieldParameter_StringMapEntry {
  key: YieldParameter
  value: String
}

"This represents an entry in a map with a key of type YieldParameter and value of type String."
input YieldParameter_StringMapEntryInput {
  key: YieldParameterInput
  value: String
}

""
type YieldPartner {
  companyId: BigInt
  settings: [YieldPartnerSettings]
}

""
type YieldPartnerSettings {
  status: PartnerSettingStatusEnum
  environment: YieldEnvironmentTypeEnum
  format: YieldFormatEnum
  integrationType: YieldIntegrationTypeEnum
  platform: YieldPlatformEnum
  parameters: [YieldParameter]
}

""
enum YieldPlatformEnum {
  ANDROID
  IOS
  UNKNOWN
}

type _YieldGroupConnection {
  totalCount: Int!
  nodes: [YieldGroup!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`YieldGroup\` by ID."
  _yieldGroup(input: _SingleRecordQueryInput!): YieldGroup
    @findById(service: "YieldGroup", action: "getYieldGroupsByStatement")
}

extend type Query {
  "Finds multiple \`YieldGroup\` objects based on the optional input parameters."
  _yieldGroups(input: _MultipleRecordsQueryInput!): _YieldGroupConnection!
    @find(service: "YieldGroup", action: "getYieldGroupsByStatement")
}

extend type Mutation {
  "Creates yield groups in bulk."
  createYieldGroups(input: CreateYieldGroupsInput!): [YieldGroup]
    @soap(service: "YieldGroup", action: "createYieldGroups")
}

extend type Query {
  "Gets a page of yield groups, with child tags, filtered by the given statement."
  getYieldGroupsByStatement(input: GetYieldGroupsByStatementInput!): YieldGroupPage
    @soap(service: "YieldGroup", action: "getYieldGroupsByStatement")
}

extend type Query {
  "Returns the available partners for yield groups, each one of them is backed by a company."
  getYieldPartners: [YieldPartner]
    @soap(service: "YieldGroup", action: "getYieldPartners")
}

extend type Mutation {
  "Updates a list of yield groups."
  updateYieldGroups(input: UpdateYieldGroupsInput!): [YieldGroup]
    @soap(service: "YieldGroup", action: "updateYieldGroups")
}

`;
