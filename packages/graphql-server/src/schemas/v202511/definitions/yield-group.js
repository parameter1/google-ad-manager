// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Base class for information necessary to call an ad network as part of mediation or open bidding."
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

"Configuration for Open Bidding in a YieldAdSource."
type OpenBiddingSetting implements AbstractDisplaySettingsInterface {
  _: Boolean
  "Integration type of the demand syndication setting. This must be either \`EXCHANGE_BIDDING\` or \`NETWORK_BIDDING\`."
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

"Display settings for mobile SDK adapters."
type SdkMediationSettings implements AbstractDisplaySettingsInterface {
  _: Boolean
  "A map of key-value pairs to be used by this mobile adapter."
  parameters: [YieldParameter_StringMapEntry]
  "The integration type of the adapter. This may be \`CUSTOM_EVENT\` or \`SDK\`."
  yieldIntegrationType: YieldIntegrationTypeEnum
  "The platform of the adapter."
  platform: YieldPlatformEnum
}

"Updates a list of yield groups."
input UpdateYieldGroupsInput {
  yieldGroups: [YieldGroupInput]
}

"A yield ad source represents an opportunity for a third party network to be mediated on a segment of inventory described in a YieldGroupDto."
type YieldAdSource {
  "The unique ID of the ad source. This attribute is read-only and is assigned by Google when the ad source is created."
  adSourceId: BigInt
  "The id of the partner owning the ad source. This should be the ID of the Company representing the yield partner."
  companyId: BigInt
  "Data that describe how to call an ad network."
  displaySettings: AbstractDisplaySettingsInterface
  "User-assigned status of the ad source. Note that this can be different than the status on the YieldGroup this ad source belongs to. Set this to \`DELETED\` to remove it from the YieldGroup."
  status: YieldEntityStatusEnum
  "CPM manually assigned to this source. This will be used as a default CPM until automatic data collection is available for the ad source, or always if \`overrideDynamicCpm\` is set to true."
  manualCpm: Money
  "If true, then the automatically collected CPM, if available, is ignored in favor of \`manualCpm\`."
  overrideDynamicCpm: Boolean
}

"A yield ad source represents an opportunity for a third party network to be mediated on a segment of inventory described in a YieldGroupDto."
input YieldAdSourceInput {
  "The id of the partner owning the ad source. This should be the ID of the Company representing the yield partner."
  companyId: BigInt
  "Data that describe how to call an ad network."
  displaySettings: JSONObject
  "User-assigned status of the ad source. Note that this can be different than the status on the YieldGroup this ad source belongs to. Set this to \`DELETED\` to remove it from the YieldGroup."
  status: YieldEntityStatusEnum
  "CPM manually assigned to this source. This will be used as a default CPM until automatic data collection is available for the ad source, or always if \`overrideDynamicCpm\` is set to true."
  manualCpm: MoneyInput
  "If true, then the automatically collected CPM, if available, is ignored in favor of \`manualCpm\`."
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

"A Yield Group represents a segment of inventory and a set of networks to which the inventory is made available for yield."
type YieldGroup {
  "The unique ID of the \`YieldGroup\`. This attribute is read-only and is assigned by Google."
  yieldGroupId: BigInt
  "The display name of the yield group."
  yieldGroupName: String
  "Status of the Ad Exchange on for this yield group. This can be used to create a yield group with only the Ad Exchange enabled. If there are any active \`adSources\`, this must be \`ACTIVE\`."
  exchangeStatus: YieldEntityStatusEnum
  "The format for the group."
  format: YieldFormatEnum
  "The environment type of the group."
  environmentType: YieldEnvironmentTypeEnum
  "This yield's group targeting. Only the following targeting types are available: TODO: List them"
  targeting: Targeting
  "The ad sources belonging to this yield group."
  adSources: [YieldAdSource]
}

"A Yield Group represents a segment of inventory and a set of networks to which the inventory is made available for yield."
input YieldGroupInput {
  "The display name of the yield group."
  yieldGroupName: String
  "Status of the Ad Exchange on for this yield group. This can be used to create a yield group with only the Ad Exchange enabled. If there are any active \`adSources\`, this must be \`ACTIVE\`."
  exchangeStatus: YieldEntityStatusEnum
  "The format for the group."
  format: YieldFormatEnum
  "The environment type of the group."
  environmentType: YieldEnvironmentTypeEnum
  "This yield's group targeting. Only the following targeting types are available: TODO: List them"
  targeting: TargetingInput
  "The ad sources belonging to this yield group."
  adSources: [YieldAdSourceInput]
}

"Captures a page of YieldGroup objects."
type YieldGroupPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of yield groups contained within this page."
  results: [YieldGroup]
}

""
enum YieldIntegrationTypeEnum {
  CUSTOM_EVENT
  OPEN_BIDDING
  SDK
  UNKNOWN
}

"Class that describes a field used by a mobile adapter to call an ad network, e.g. pubid."
type YieldParameter {
  "Identifier of the parameter."
  name: String
  "Whether or not this parameter is optional."
  isOptional: Boolean
}

"Class that describes a field used by a mobile adapter to call an ad network, e.g. pubid."
input YieldParameterInput {
  "Identifier of the parameter."
  name: String
  "Whether or not this parameter is optional."
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

"A Partner that can be added to a yield group."
type YieldPartner {
  "The company id of the partner, uniquely identifying it in the publisher network. If this id is null, then this represents a canonical third party company ad network."
  companyId: BigInt
  "The settings of the partner, representing its capabilities."
  settings: [YieldPartnerSettings]
}

"Settings for a yield partner."
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
