// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates makegood proposal line items given the specifications provided."
input CreateMakegoodsInput {
  makegoodInfos: [ProposalLineItemMakegoodInfoInput]
}

"Creates new ProposalLineItem objects."
input CreateProposalLineItemsInput {
  proposalLineItems: [ProposalLineItemInput]
}

"Gets a ProposalLineItemPage of ProposalLineItem objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` ProposalLineItem#id   \`name\` ProposalLineItem#name   \`proposalId\` ProposalLineItem#proposalId   \`startDateTime\` ProposalLineItem#startDateTime   \`endDateTime\` ProposalLineItem#endDateTime   \`isArchived\` ProposalLineItem#isArchived   \`lastModifiedDateTime\` ProposalLineItem#lastModifiedDateTime   \`isProgrammatic\` ProposalLineItem#isProgrammatic  "
input GetProposalLineItemsByStatementInput {
  filterStatement: StatementInput
}

"The role (buyer or seller) that performed an action in the negotiation of a \`Proposal\`."
enum NegotiationRoleEnum {
  BUYER
  SELLER
  UNKNOWN
}

"Performs actions on ProposalLineItem objects that match the given Statement#query."
input PerformProposalLineItemActionInput {
  proposalLineItemAction: JSONObject
  filterStatement: StatementInput
}

"A \`ProposalLineItem\` is added to a programmatic Proposal and is similar to a delivery LineItem. It contains delivery details including information like impression goal or quantity, start and end times, and targeting."
type ProposalLineItem {
  "The unique ID of the \`ProposalLineItem\`. This attribute is read-only."
  id: BigInt!
  "The unique ID of the Proposal, to which the \`ProposalLineItem\` belongs. This attribute is required for creation and then is readonly. This attribute is required."
  proposalId: BigInt
  "The name of the \`ProposalLineItem\` which should be unique under the same Proposal. This attribute has a maximum length of 255 characters. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration. This attribute is required."
  name: String
  "The date and time at which the line item associated with the \`ProposalLineItem\` is enabled to begin serving. This attribute is optional during creation, but required and must be in the future when it turns into a line item. The DateTime#timeZoneID is required if start date time is not \`null\`. This attribute becomes readonly once the \`ProposalLineItem\` has started delivering."
  startDateTime: DateTime
  "The date and time at which the line item associated with the \`ProposalLineItem\` stops beening served. This attribute is optional during creation, but required and must be after the #startDateTime. The DateTime#timeZoneID is required if end date time is not \`null\`."
  endDateTime: DateTime
  "Provides any additional notes that may annotate the \`ProposalLineItem\`. This attribute is optional and has a maximum length of 65,535 characters. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  internalNotes: String
  "The archival status of the \`ProposalLineItem\`. This attribute is read-only."
  isArchived: Boolean
  "The goal(i.e. contracted quantity, quantity or limit) that this \`ProposalLineItem\` is associated with, which is used in its pacing and budgeting. Goal#units must be greater than 0 when the proposal line item turns into a line item, Goal#goalType and Goal#unitType are readonly. For a Preferred deal \`ProposalLineItem\`, the goal type can only be GoalType#NONE. This attribute is required."
  goal: Goal
  "The secondary goals that this \`ProposalLineItem\` is associated with. For a programmatic line item with the properties RateType#CPM and LineItemType#SPONSORSHIP, this field will have one goal which describes the impressions cap. For other cases, this field is an empty list."
  secondaryGoals: [Goal]
  "The contracted number of daily minimum impressions used for LineItemType#SPONSORSHIP \`ProposalLineItem\` deals with a rate type of RateType#CPD. This attribute is required for percentage-based-goal proposal line items. It does not impact ad-serving and is for reporting purposes only."
  contractedUnitsBought: BigInt
  "The strategy for delivering ads over the course of the \`ProposalLineItem\`'s duration. This attribute is required. For a Preferred deal \`ProposalLineItem\`, the value can only be DeliveryRateType#FRONTLOADED."
  deliveryRateType: DeliveryRateTypeEnum
  "The strategy for serving roadblocked creatives, i.e. instances where multiple creatives must be served together on a single web page. This attribute is optional during creation and defaults to the product's roadblocking type, or RoadblockingType#ONE_OR_MORE if not specified by the product."
  roadblockingType: RoadblockingTypeEnum
  "The options for allowing buyers to transact on the deal.  BuyerPermissionType#NEGOTIATOR_ONLY means that only the buyer listed on the deal can bid on the deal. BuyerPermissionType#BIDDER means that all buyers under the listed buyer's bidder can bid on the deal. "
  buyerPermissionType: BuyerPermissionTypeEnum
  "The delivery option for companions. This is only valid if the roadblocking type is RoadblockingType#CREATIVE_SET. The default value for roadblocking creatives is CompanionDeliveryOption#OPTIONAL. The default value in other cases is CompanionDeliveryOption#UNKNOWN. Providing something other than CompanionDeliveryOption#UNKNOWN will cause an error."
  companionDeliveryOption: CompanionDeliveryOptionEnum
  "The max duration of a video creative associated with this \`ProposalLineItem\` in milliseconds. This attribute is optional, defaults to the Product#videoMaxDuration on the Product it was created with, and only meaningful if this is a video proposal line item."
  videoMaxDuration: BigInt
  "The proposal line item's creatives' skippability. This attribute is optional, only applicable for video proposal line items, and defaults to SkippableAdType#NOT_SKIPPABLE."
  videoCreativeSkippableAdType: SkippableAdTypeEnum
  "The set of frequency capping units for this \`ProposalLineItem\`. This attribute is optional during creation and defaults to the product's frequency caps if Product#allowFrequencyCapsCustomization is \`false\`."
  frequencyCaps: [FrequencyCap]
  "The unique ID of corresponding LineItem. This will be \`null\` if the Proposal has not been pushed to Ad Manager. This attribute is read-only."
  dfpLineItemId: BigInt
  "The corresponding LineItemType of the \`ProposalLineItem\`. For a programmatic \`ProposalLineItem\`, the value can only be one of:  LineItemType#SPONSORSHIP LineItemType#STANDARD LineItemType#PREFERRED_DEAL  This attribute is required."
  lineItemType: LineItemTypeEnum
  "The priority for the corresponding LineItem of the \`ProposalLineItem\`. This attribute is optional during creation and defaults to the default priority of the #lineItemType. For forecasting, this attribute is optional and has a default value assigned by Google. See LineItem#priority for more information."
  lineItemPriority: Int
  "The method used for billing the \`ProposalLineItem\`. This attribute is read-only. This attribute is required."
  rateType: RateTypeEnum
  "Details about the creatives that are expected to serve through the \`ProposalLineItem\`. This attribute is optional during creation and defaults to the product's creative placeholders. This attribute is required."
  creativePlaceholders: [CreativePlaceholder]
  "Contains the targeting criteria for the \`ProposalLineItem\`. This attribute is required."
  targeting: Targeting
  "The values of the custom fields associated with the \`ProposalLineItem\`. This attribute is optional. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The set of labels applied directly to the \`ProposalLineItem\`. This attribute is optional."
  appliedLabels: [AppliedLabel]
  "Contains the set of labels applied directly to the proposal as well as those inherited ones. If a label has been negated, only the negated label is returned. This attribute is read-only."
  effectiveAppliedLabels: [AppliedLabel]
  "If a line item has a series of competitive exclusions on it, it could be blocked from serving with line items from the same advertiser. Setting this to \`true\` will allow line items from the same advertiser to serve regardless of the other competitive exclusion labels being applied. This attribute is optional and defaults to false."
  disableSameAdvertiserCompetitiveExclusion: Boolean
  "Indicates whether this \`ProposalLineItem\` has been sold. This attribute is read-only."
  isSold: Boolean
  "The amount of money to spend per impression or click in proposal currency. It supports precision of 4 decimal places in terms of the fundamental currency unit, so the Money#getAmountInMicros must be multiples of 100. It doesn't include agency commission. For example, if Proposal#currencyCode is 'USD', then $123.4567 could be represented as 123456700, but further precision is not supported. The field ProposalLineItem#netRate is required, and used to calculate ProposalLineItem#netCost if unspecified."
  netRate: Money
  "The cost of the \`ProposalLineItem\` in proposal currency. It supports precision of 2 decimal places in terms of the fundamental currency unit, so the Money#getAmountInMicros must be multiples of 10000. It doesn't include agency commission. For example, if Proposal#currencyCode is 'USD', then $123.45 could be represented as 123450000, but further precision is not supported. The field ProposalLineItem#netRate is required, and used to calculate ProposalLineItem#netCost if unspecified."
  netCost: Money
  "Indicates how well the line item generated from this proposal line item has been performing. This will be \`null\` if the delivery indicator information is not available due to one of the following reasons:  The proposal line item has not pushed to Ad Manager. The line item is not delivering. The line item has an unlimited goal or cap. The line item has a percentage based goal or cap.  This attribute is read-only."
  deliveryIndicator: DeliveryIndicator
  "Delivery data provides the number of clicks or impressions delivered for the LineItem generated from this proposal line item in the last 7 days. This will be \`null\` if the delivery data cannot be computed due to one of the following reasons:  The proposal line item has not pushed to Ad Manager. The line item is not deliverable. The line item has completed delivering more than 7 days ago. The line item has an absolute-based goal. ProposalLineItem#deliveryIndicator should be used to track its progress in this case. This attribute is read-only."
  deliveryData: DeliveryData
  "The status of the LineItem generated from this proposal line item. This will be \`null\` if the proposal line item has not pushed to Ad Manager. This attribute is read-only."
  computedStatus: ComputedStatusEnum
  "The date and time this \`ProposalLineItem\` was last modified. This attribute is assigned by Google when a \`ProposalLineItem\` is updated. This attribute is read-only."
  lastModifiedDateTime: DateTime
  "The reservation status of the ProposalLineItem. This attribute is read-only."
  reservationStatus: ReservationStatusEnum
  "The last DateTime when the ProposalLineItem reserved inventory. This attribute is read-only."
  lastReservationDateTime: DateTime
  "The environment that the \`ProposalLineItem\` is targeting. The default value is EnvironmentType#BROWSER. If this value is EnvironmentType#VIDEO_PLAYER, then this \`ProposalLineItem\` can only target ad units that have sizes whose AdUnitSize#environmentType is also EnvironmentType#VIDEO_PLAYER. This field is read-only and set to Product#environmentType of the product this proposal line item was created from."
  environmentType: EnvironmentTypeEnum
  "The set of AllowedFormats that this proposal line item can have. If the set is empty, this proposal line item allows all formats."
  allowedFormats: [AllowedFormatsEnum]
  "Additional terms shown to the buyer in Marketplace."
  additionalTerms: String
  "Indicates the ProgrammaticCreativeSource of the programmatic line item."
  programmaticCreativeSource: ProgrammaticCreativeSourceEnum
  "Contains the information for a proposal line item which has a target GRP demographic."
  grpSettings: GrpSettings
  "The estimated minimum impressions that should be delivered for a proposal line item."
  estimatedMinimumImpressions: BigInt
  "Contains third party measurement settings for cross-sell Partners"
  thirdPartyMeasurementSettings: ThirdPartyMeasurementSettings
  "Makegood info for this proposal line item. Immutable once created. Null if this proposal line item is not a makegood."
  makegoodInfo: ProposalLineItemMakegoodInfo
  "Whether this proposal line item has an associated makegood. This attribute is read-only."
  hasMakegood: Boolean
  "Whether a new makegood associated with this line item can be created. This attribute is read-only."
  canCreateMakegood: Boolean
  "The NegotiationRole that paused the proposal line item, i.e. NegotiationRole#seller or NegotiationRole#buyer, or \`null\` when the proposal is not paused. This attribute is read-only."
  pauseRole: NegotiationRoleEnum
  "The reason for pausing the ProposalLineItem, provided by the pauseRole. It is \`null\` when the ProposalLineItem is not paused. This attribute is read-only."
  pauseReason: String
}

"Makegood info for a ProposalLineItemDto."
type ProposalLineItemMakegoodInfo {
  "The ID of the original proposal line item on which this makegood is based. This attribute is read-only."
  originalProposalLineItemId: BigInt
  "The publisher-provided reason why this makegood was initiated. This is free form text. The following predefined values can be used to render predefined options in the UI. UNDERDELIVERY: 'Impression underdelivery', SECONDARY_DELIVERY_TERMS: 'Did not meet secondary delivery terms ', PERFORMANCE: 'Performance issues',"
  reason: String
}

"Captures a page of ProposalLineItem objects."
type ProposalLineItemPage {
  "The collection of proposal line items contained within this page."
  results: [ProposalLineItem]
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
}

"Describes the type of event the advertiser is paying for. The values here correspond to the values for the LineItem#costType field."
enum RateTypeEnum {
  "The rate applies to cost per day (CPD) revenue."
  CPD
  "The rate applies to cost per mille (CPM) revenue."
  CPM
  "The rate applies to cost per mille in-target (CPM In-Target)."
  CPM_IN_TARGET
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "The rate applies to Active View viewable cost per mille (vCPM) revenue."
  VCPM
}

"Represents the inventory reservation status for ProposalLineItem objects."
enum ReservationStatusEnum {
  "The reservation status of the corresponding LineItem should be used for this ProposalLineItem."
  CHECK_LINE_ITEM_RESERVATION_STATUS
  "The proposal line item's inventory is never reserved."
  NOT_RESERVED
  "The inventory is once reserved and now released."
  RELEASED
  "The inventory is reserved."
  RESERVED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Updates the specified ProposalLineItem objects."
input UpdateProposalLineItemsInput {
  proposalLineItems: [ProposalLineItemInput]
}

type _ProposalLineItemConnection {
  totalCount: Int!
  nodes: [ProposalLineItem!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`ProposalLineItem\` by ID."
  _proposalLineItem(input: _SingleRecordQueryInput!): ProposalLineItem
    @findById(service: "ProposalLineItem", action: "getProposalLineItemsByStatement")
}

extend type Query {
  "Finds multiple \`ProposalLineItem\` objects based on the optional input parameters."
  _proposalLineItems(input: _MultipleRecordsQueryInput!): _ProposalLineItemConnection!
    @find(service: "ProposalLineItem", action: "getProposalLineItemsByStatement")
}

extend type Mutation {
  "Creates makegood proposal line items given the specifications provided."
  createMakegoods(input: CreateMakegoodsInput!): [ProposalLineItem]
    @soap(service: "ProposalLineItem", action: "createMakegoods")
}

extend type Mutation {
  "Creates new ProposalLineItem objects."
  createProposalLineItems(input: CreateProposalLineItemsInput!): [ProposalLineItem]
    @soap(service: "ProposalLineItem", action: "createProposalLineItems")
}

extend type Query {
  "Gets a ProposalLineItemPage of ProposalLineItem objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` ProposalLineItem#id   \`name\` ProposalLineItem#name   \`proposalId\` ProposalLineItem#proposalId   \`startDateTime\` ProposalLineItem#startDateTime   \`endDateTime\` ProposalLineItem#endDateTime   \`isArchived\` ProposalLineItem#isArchived   \`lastModifiedDateTime\` ProposalLineItem#lastModifiedDateTime   \`isProgrammatic\` ProposalLineItem#isProgrammatic  "
  getProposalLineItemsByStatement(input: GetProposalLineItemsByStatementInput!): ProposalLineItemPage
    @soap(service: "ProposalLineItem", action: "getProposalLineItemsByStatement")
}

extend type Mutation {
  "Performs actions on ProposalLineItem objects that match the given Statement#query."
  performProposalLineItemAction(input: PerformProposalLineItemActionInput!): UpdateResult
    @soap(service: "ProposalLineItem", action: "performProposalLineItemAction")
}

extend type Mutation {
  "Updates the specified ProposalLineItem objects."
  updateProposalLineItems(input: UpdateProposalLineItemsInput!): [ProposalLineItem]
    @soap(service: "ProposalLineItem", action: "updateProposalLineItems")
}

`;
