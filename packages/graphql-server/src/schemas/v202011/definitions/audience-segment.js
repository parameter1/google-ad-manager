// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Approval status values for ThirdPartyAudienceSegment objects."
enum AudienceSegmentApprovalStatusEnum {
  "Specifies that this segment is approved and can be targeted."
  APPROVED
  "Specifies that this segment is rejected and cannot be targeted."
  REJECTED
  "Specifies that this segment is waiting to be approved or rejected. It cannot be targeted."
  UNAPPROVED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Data provider that owns this segment. For a FirstPartyAudienceSegment, it would be the publisher network. For a SharedAudienceSegment or a ThirdPartyAudienceSegment, it would be the entity that provides that AudienceSegment."
type AudienceSegmentDataProvider {
  "Name of the data provider. This attribute is readonly and is assigned by Google."
  name: String
}

"An AudienceSegment represents audience segment object."
interface AudienceSegmentInterface {
  "Id of the AudienceSegment. This attribute is readonly and is populated by Google."
  id: BigInt!
  "Name of the AudienceSegment. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "The ids of the categories this segment belongs to. This field is optional, it may be empty."
  categoryIds: [BigInt]
  "Description of the AudienceSegment. This attribute is optional and has a maximum length of 8192 characters."
  description: String
  "Status of the AudienceSegment. This controls whether the given segment is available for targeting or not. During creation this attribute is optional and defaults to \`ACTIVE\`. This attribute is readonly for updates."
  status: AudienceSegmentStatusEnum
  "Number of unique identifiers in the AudienceSegment. This attribute is readonly and is populated by Google."
  size: BigInt
  "Number of unique identifiers in the AudienceSegment for mobile web. This attribute is read-only."
  mobileWebSize: BigInt
  "Number of unique IDFA identifiers in the AudienceSegment. This attribute is read-only."
  idfaSize: BigInt
  "Number of unique AdID identifiers in the AudienceSegment. This attribute is read-only."
  adIdSize: BigInt
  "Number of unique PPID (publisher provided identifiers) in the AudienceSegment. This attribute is read-only."
  ppidSize: BigInt
  "Owner data provider of this segment. This attribute is readonly and is assigned by Google."
  dataProvider: AudienceSegmentDataProvider
  "Type of the segment. This attribute is readonly and is assigned by Google."
  type: AudienceSegmentTypeEnum
}

"Represents a page of AudienceSegment objects."
type AudienceSegmentPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of audience segments contained within this page."
  results: [AudienceSegmentInterface]
}

"Specifies the statuses for AudienceSegment objects."
enum AudienceSegmentStatusEnum {
  "Active status means this audience segment is available for targeting."
  ACTIVE
  "Inactive status means this audience segment is not available for targeting."
  INACTIVE
}

"Specifies types for AudienceSegment objects."
enum AudienceSegmentTypeEnum {
  "First party segments created and owned by the publisher."
  FIRST_PARTY
  "First party segments shared by other clients."
  SHARED
  "Third party segments licensed by the publisher from data providers. This doesn't include Google-provided licensed segments."
  THIRD_PARTY
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Creates new RuleBasedFirstPartyAudienceSegment objects. @param segments first-party audience segments to create @return created first-party audience segments"
input CreateAudienceSegmentsInput {
  _: Boolean
  segments: [JSONObject]
}

"A FirstPartyAudienceSegment is an AudienceSegment owned by the publisher network."
interface FirstPartyAudienceSegmentInterface implements AudienceSegmentInterface {
  "Id of the AudienceSegment. This attribute is readonly and is populated by Google."
  id: BigInt!
  "Name of the AudienceSegment. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "The ids of the categories this segment belongs to. This field is optional, it may be empty."
  categoryIds: [BigInt]
  "Description of the AudienceSegment. This attribute is optional and has a maximum length of 8192 characters."
  description: String
  "Status of the AudienceSegment. This controls whether the given segment is available for targeting or not. During creation this attribute is optional and defaults to \`ACTIVE\`. This attribute is readonly for updates."
  status: AudienceSegmentStatusEnum
  "Number of unique identifiers in the AudienceSegment. This attribute is readonly and is populated by Google."
  size: BigInt
  "Number of unique identifiers in the AudienceSegment for mobile web. This attribute is read-only."
  mobileWebSize: BigInt
  "Number of unique IDFA identifiers in the AudienceSegment. This attribute is read-only."
  idfaSize: BigInt
  "Number of unique AdID identifiers in the AudienceSegment. This attribute is read-only."
  adIdSize: BigInt
  "Number of unique PPID (publisher provided identifiers) in the AudienceSegment. This attribute is read-only."
  ppidSize: BigInt
  "Owner data provider of this segment. This attribute is readonly and is assigned by Google."
  dataProvider: AudienceSegmentDataProvider
  "Type of the segment. This attribute is readonly and is assigned by Google."
  type: AudienceSegmentTypeEnum
}

"Rule of a FirstPartyAudienceSegment that defines user's eligibility criteria to be part of a segment."
type FirstPartyAudienceSegmentRule {
  "Specifies the inventory (i.e. ad units and placements) that are part of the rule of a FirstPartyAudienceSegment. This attribute is required."
  inventoryRule: InventoryTargeting!
  "Specifies the collection of custom criteria that are part of the rule of a FirstPartyAudienceSegment.  Once the FirstPartyAudienceSegment is updated or modified with custom criteria, the server may return a normalized, but equivalent representation of the custom criteria rule.   \`customCriteriaRule\` will have up to three levels including itself.  The top level CustomCriteriaSet i.e. the \`customTargeting\` object can only contain a CustomCriteriaSet.LogicalOperator#OR of all its children.  The second level of CustomCriteriaSet objects can only contain CustomCriteriaSet.LogicalOperator#AND of all their children. If a CustomCriteria is placed on this level, the server will wrap it in a CustomCriteriaSet.  The third level can only comprise of CustomCriteria objects.   The resulting custom criteria rule would be of the form:   "
  customCriteriaRule: CustomCriteriaSet
}

"Gets an AudienceSegmentPage of AudienceSegment objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` AudienceSegment#id   \`name\` AudienceSegment#name   \`status\` AudienceSegment#status   \`type\` AudienceSegment#type   \`size\` AudienceSegment#size   \`dataProviderName\` AudienceSegmentDataProvider#name   \`segmentType\` AudienceSegment#type   \`approvalStatus\` ThirdPartyAudienceSegment#approvalStatus   \`cost\` ThirdPartyAudienceSegment#cost   \`startDateTime\` ThirdPartyAudienceSegment#startDateTime   \`endDateTime\` ThirdPartyAudienceSegment#endDateTime   @param filterStatement a Publisher Query Language statement used to filter a set of audience segments (the only supported operator is AND) @return the audience segments that match the given filter"
input GetAudienceSegmentsByStatementInput {
  _: Boolean
  filterStatement: JSONObject
}

"Specifies the license type of a ThirdPartyAudienceSegment."
enum LicenseTypeEnum {
  "A direct license is the result of a direct contract between the data provider and the publisher."
  DIRECT_LICENSE
  "A global license is the result of an agreement between Google and the data provider, which agrees to license their audience segments to all the publishers and/or advertisers of the Google ecosystem."
  GLOBAL_LICENSE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"A NonRuleBasedFirstPartyAudienceSegment is a FirstPartyAudienceSegment owned by the publisher network. It doesn't contain a rule. Cookies are usually added to this segment via cookie upload. These segments are created by data management platforms or Google Analytics. They cannot be created using the Ad Manager API."
type NonRuleBasedFirstPartyAudienceSegment implements FirstPartyAudienceSegmentInterface & AudienceSegmentInterface {
  _: Boolean
  "Id of the AudienceSegment. This attribute is readonly and is populated by Google."
  id: BigInt!
  "Name of the AudienceSegment. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "The ids of the categories this segment belongs to. This field is optional, it may be empty."
  categoryIds: [BigInt]
  "Description of the AudienceSegment. This attribute is optional and has a maximum length of 8192 characters."
  description: String
  "Status of the AudienceSegment. This controls whether the given segment is available for targeting or not. During creation this attribute is optional and defaults to \`ACTIVE\`. This attribute is readonly for updates."
  status: AudienceSegmentStatusEnum
  "Number of unique identifiers in the AudienceSegment. This attribute is readonly and is populated by Google."
  size: BigInt
  "Number of unique identifiers in the AudienceSegment for mobile web. This attribute is read-only."
  mobileWebSize: BigInt
  "Number of unique IDFA identifiers in the AudienceSegment. This attribute is read-only."
  idfaSize: BigInt
  "Number of unique AdID identifiers in the AudienceSegment. This attribute is read-only."
  adIdSize: BigInt
  "Number of unique PPID (publisher provided identifiers) in the AudienceSegment. This attribute is read-only."
  ppidSize: BigInt
  "Owner data provider of this segment. This attribute is readonly and is assigned by Google."
  dataProvider: AudienceSegmentDataProvider
  "Type of the segment. This attribute is readonly and is assigned by Google."
  type: AudienceSegmentTypeEnum
  "Specifies the number of days after which a user's cookie will be removed from the audience segment due to inactivity. This attribute is required and can be between 1 and 540."
  membershipExpirationDays: Int!
}

"Performs the given AudienceSegmentAction on the set of segments identified by the given statement. @param action AudienceSegmentAction to perform @param filterStatement a Publisher Query Language statement used to filter a set of audience segments (the only supported operator is AND) @return UpdateResult indicating the result"
input PerformAudienceSegmentActionInput {
  _: Boolean
  action: JSONObject
  filterStatement: JSONObject
}

"A RuleBasedFirstPartyAudienceSegment is a FirstPartyAudienceSegment owned by the publisher network. It contains a rule."
type RuleBasedFirstPartyAudienceSegment implements RuleBasedFirstPartyAudienceSegmentSummaryInterface & FirstPartyAudienceSegmentInterface & AudienceSegmentInterface {
  _: Boolean
  "Id of the AudienceSegment. This attribute is readonly and is populated by Google."
  id: BigInt!
  "Name of the AudienceSegment. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "The ids of the categories this segment belongs to. This field is optional, it may be empty."
  categoryIds: [BigInt]
  "Description of the AudienceSegment. This attribute is optional and has a maximum length of 8192 characters."
  description: String
  "Status of the AudienceSegment. This controls whether the given segment is available for targeting or not. During creation this attribute is optional and defaults to \`ACTIVE\`. This attribute is readonly for updates."
  status: AudienceSegmentStatusEnum
  "Number of unique identifiers in the AudienceSegment. This attribute is readonly and is populated by Google."
  size: BigInt
  "Number of unique identifiers in the AudienceSegment for mobile web. This attribute is read-only."
  mobileWebSize: BigInt
  "Number of unique IDFA identifiers in the AudienceSegment. This attribute is read-only."
  idfaSize: BigInt
  "Number of unique AdID identifiers in the AudienceSegment. This attribute is read-only."
  adIdSize: BigInt
  "Number of unique PPID (publisher provided identifiers) in the AudienceSegment. This attribute is read-only."
  ppidSize: BigInt
  "Owner data provider of this segment. This attribute is readonly and is assigned by Google."
  dataProvider: AudienceSegmentDataProvider
  "Type of the segment. This attribute is readonly and is assigned by Google."
  type: AudienceSegmentTypeEnum
  "Specifies the number of times a user's cookie must match the segment rule before it's associated with the audience segment. This is used in combination with FirstPartyAudienceSegment#recencyDays to determine eligibility of the association. This attribute is required and can be between 1 and 12."
  pageViews: Int!
  "Specifies the number of days within which a user's cookie must match the segment rule before it's associated with the audience segment. This is used in combination with FirstPartyAudienceSegment#pageViews to determine eligibility of the association. This attribute is required only if FirstPartyAudienceSegment#pageViews is greater than 1. When required, it can be between 1 and 90."
  recencyDays: Int!
  "Specifies the number of days after which a user's cookie will be removed from the audience segment due to inactivity. This attribute is required and can be between 1 and 540."
  membershipExpirationDays: Int!
  "Specifies the rule of the segment which determines user's eligibility criteria to be part of the segment. This attribute is required."
  rule: FirstPartyAudienceSegmentRule!
}

"A RuleBasedFirstPartyAudienceSegmentSummary is a FirstPartyAudienceSegment owned by the publisher network."
interface RuleBasedFirstPartyAudienceSegmentSummaryInterface implements FirstPartyAudienceSegmentInterface & AudienceSegmentInterface {
  _: Boolean
  "Id of the AudienceSegment. This attribute is readonly and is populated by Google."
  id: BigInt!
  "Name of the AudienceSegment. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "The ids of the categories this segment belongs to. This field is optional, it may be empty."
  categoryIds: [BigInt]
  "Description of the AudienceSegment. This attribute is optional and has a maximum length of 8192 characters."
  description: String
  "Status of the AudienceSegment. This controls whether the given segment is available for targeting or not. During creation this attribute is optional and defaults to \`ACTIVE\`. This attribute is readonly for updates."
  status: AudienceSegmentStatusEnum
  "Number of unique identifiers in the AudienceSegment. This attribute is readonly and is populated by Google."
  size: BigInt
  "Number of unique identifiers in the AudienceSegment for mobile web. This attribute is read-only."
  mobileWebSize: BigInt
  "Number of unique IDFA identifiers in the AudienceSegment. This attribute is read-only."
  idfaSize: BigInt
  "Number of unique AdID identifiers in the AudienceSegment. This attribute is read-only."
  adIdSize: BigInt
  "Number of unique PPID (publisher provided identifiers) in the AudienceSegment. This attribute is read-only."
  ppidSize: BigInt
  "Owner data provider of this segment. This attribute is readonly and is assigned by Google."
  dataProvider: AudienceSegmentDataProvider
  "Type of the segment. This attribute is readonly and is assigned by Google."
  type: AudienceSegmentTypeEnum
  "Specifies the number of times a user's cookie must match the segment rule before it's associated with the audience segment. This is used in combination with FirstPartyAudienceSegment#recencyDays to determine eligibility of the association. This attribute is required and can be between 1 and 12."
  pageViews: Int!
  "Specifies the number of days within which a user's cookie must match the segment rule before it's associated with the audience segment. This is used in combination with FirstPartyAudienceSegment#pageViews to determine eligibility of the association. This attribute is required only if FirstPartyAudienceSegment#pageViews is greater than 1. When required, it can be between 1 and 90."
  recencyDays: Int!
  "Specifies the number of days after which a user's cookie will be removed from the audience segment due to inactivity. This attribute is required and can be between 1 and 540."
  membershipExpirationDays: Int!
}

"A SharedAudienceSegment is an AudienceSegment owned by another entity and shared with the publisher network."
type SharedAudienceSegment implements AudienceSegmentInterface {
  "Id of the AudienceSegment. This attribute is readonly and is populated by Google."
  id: BigInt!
  "Name of the AudienceSegment. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "The ids of the categories this segment belongs to. This field is optional, it may be empty."
  categoryIds: [BigInt]
  "Description of the AudienceSegment. This attribute is optional and has a maximum length of 8192 characters."
  description: String
  "Status of the AudienceSegment. This controls whether the given segment is available for targeting or not. During creation this attribute is optional and defaults to \`ACTIVE\`. This attribute is readonly for updates."
  status: AudienceSegmentStatusEnum
  "Number of unique identifiers in the AudienceSegment. This attribute is readonly and is populated by Google."
  size: BigInt
  "Number of unique identifiers in the AudienceSegment for mobile web. This attribute is read-only."
  mobileWebSize: BigInt
  "Number of unique IDFA identifiers in the AudienceSegment. This attribute is read-only."
  idfaSize: BigInt
  "Number of unique AdID identifiers in the AudienceSegment. This attribute is read-only."
  adIdSize: BigInt
  "Number of unique PPID (publisher provided identifiers) in the AudienceSegment. This attribute is read-only."
  ppidSize: BigInt
  "Owner data provider of this segment. This attribute is readonly and is assigned by Google."
  dataProvider: AudienceSegmentDataProvider
  "Type of the segment. This attribute is readonly and is assigned by Google."
  type: AudienceSegmentTypeEnum
}

"A ThirdPartyAudienceSegment is an AudienceSegment owned by a data provider and licensed to the Ad Manager publisher."
type ThirdPartyAudienceSegment implements AudienceSegmentInterface {
  "Id of the AudienceSegment. This attribute is readonly and is populated by Google."
  id: BigInt!
  "Name of the AudienceSegment. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "The ids of the categories this segment belongs to. This field is optional, it may be empty."
  categoryIds: [BigInt]
  "Description of the AudienceSegment. This attribute is optional and has a maximum length of 8192 characters."
  description: String
  "Status of the AudienceSegment. This controls whether the given segment is available for targeting or not. During creation this attribute is optional and defaults to \`ACTIVE\`. This attribute is readonly for updates."
  status: AudienceSegmentStatusEnum
  "Number of unique identifiers in the AudienceSegment. This attribute is readonly and is populated by Google."
  size: BigInt
  "Number of unique identifiers in the AudienceSegment for mobile web. This attribute is read-only."
  mobileWebSize: BigInt
  "Number of unique IDFA identifiers in the AudienceSegment. This attribute is read-only."
  idfaSize: BigInt
  "Number of unique AdID identifiers in the AudienceSegment. This attribute is read-only."
  adIdSize: BigInt
  "Number of unique PPID (publisher provided identifiers) in the AudienceSegment. This attribute is read-only."
  ppidSize: BigInt
  "Owner data provider of this segment. This attribute is readonly and is assigned by Google."
  dataProvider: AudienceSegmentDataProvider
  "Type of the segment. This attribute is readonly and is assigned by Google."
  type: AudienceSegmentTypeEnum
  "Specifies if the publisher has approved or rejected the segment."
  approvalStatus: AudienceSegmentApprovalStatusEnum
  "Specifies CPM cost for the given segment. This attribute is readonly and is assigned by the data provider.  The CPM cost comes from the active pricing, if there is one; otherwise it comes from the latest pricing."
  cost: Money
  "Specifies the license type of the external segment. This attribute is read-only."
  licenseType: LicenseTypeEnum
  "Specifies the date and time at which this segment becomes available for use. This attribute is readonly and is assigned by the data provider."
  startDateTime: GAMDateTime
  "Specifies the date and time at which this segment ceases to be available for use. This attribute is readonly and is assigned by the data provider."
  endDateTime: GAMDateTime
}

"Updates the given RuleBasedFirstPartyAudienceSegment objects. @param segments first-party audience segments to update @return updated first-party audience segments"
input UpdateAudienceSegmentsInput {
  _: Boolean
  segments: [JSONObject]
}

extend type Mutation {
  "Creates new RuleBasedFirstPartyAudienceSegment objects. @param segments first-party audience segments to create @return created first-party audience segments"
  createAudienceSegments(input: CreateAudienceSegmentsInput!): [FirstPartyAudienceSegmentInterface]
    @soap(service: "AudienceSegment", action: "createAudienceSegments")
}

extend type Query {
  "Gets an AudienceSegmentPage of AudienceSegment objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` AudienceSegment#id   \`name\` AudienceSegment#name   \`status\` AudienceSegment#status   \`type\` AudienceSegment#type   \`size\` AudienceSegment#size   \`dataProviderName\` AudienceSegmentDataProvider#name   \`segmentType\` AudienceSegment#type   \`approvalStatus\` ThirdPartyAudienceSegment#approvalStatus   \`cost\` ThirdPartyAudienceSegment#cost   \`startDateTime\` ThirdPartyAudienceSegment#startDateTime   \`endDateTime\` ThirdPartyAudienceSegment#endDateTime   @param filterStatement a Publisher Query Language statement used to filter a set of audience segments (the only supported operator is AND) @return the audience segments that match the given filter"
  getAudienceSegmentsByStatement(input: GetAudienceSegmentsByStatementInput!): AudienceSegmentPage
    @soap(service: "AudienceSegment", action: "getAudienceSegmentsByStatement")
}

extend type Mutation {
  "Performs the given AudienceSegmentAction on the set of segments identified by the given statement. @param action AudienceSegmentAction to perform @param filterStatement a Publisher Query Language statement used to filter a set of audience segments (the only supported operator is AND) @return UpdateResult indicating the result"
  performAudienceSegmentAction(input: PerformAudienceSegmentActionInput!): UpdateResult
    @soap(service: "AudienceSegment", action: "performAudienceSegmentAction")
}

extend type Mutation {
  "Updates the given RuleBasedFirstPartyAudienceSegment objects. @param segments first-party audience segments to update @return updated first-party audience segments"
  updateAudienceSegments(input: UpdateAudienceSegmentsInput!): [FirstPartyAudienceSegmentInterface]
    @soap(service: "AudienceSegment", action: "updateAudienceSegments")
}

`;
