// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Child content eligibility designation. This field is optional and defaults to ChildContentEligibility#DISALLOWED. This field has no effect on serving enforcement unless you opt to 'Child content enforcement' in the network's Child Content settings."
enum ChildContentEligibilityEnum {
  "This line item is eligible to serve on requests that are child-directed."
  ALLOWED
  "This line item is not eligible to serve on any requests that are child-directed."
  DISALLOWED
  UNKNOWN
}

"The scope to which the assignment of any competitive exclusion labels for a video line item is limited."
enum CompetitiveConstraintScopeEnum {
  "The competitive exclusion label applies to all line items within a single pod (or group)."
  POD
  "The competitive exclusion label applies to all line items within the entire stream of content."
  STREAM
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Describes the LineItem actions that are billable."
enum CostTypeEnum {
  "Cost per action. The LineItem#lineItemType must be one of:  LineItemType#SPONSORSHIP LineItemType#STANDARD LineItemType#BULK LineItemType#NETWORK "
  CPA
  "Cost per click. The LineItem#lineItemType must be one of:  LineItemType#SPONSORSHIP LineItemType#STANDARD LineItemType#BULK LineItemType#NETWORK LineItemType#PRICE_PRIORITY LineItemType#HOUSE "
  CPC
  "Cost per day. The LineItem#lineItemType must be one of:  LineItemType#SPONSORSHIP LineItemType#NETWORK "
  CPD
  "Cost per mille (cost per thousand impressions). The LineItem#lineItemType must be one of:  LineItemType#SPONSORSHIP LineItemType#STANDARD LineItemType#BULK LineItemType#NETWORK LineItemType#PRICE_PRIORITY LineItemType#HOUSE "
  CPM
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "Cost per thousand Active View viewable impressions. The LineItem#lineItemType must be LineItemType#STANDARD."
  VCPM
}

"Creates new LineItem objects. @param lineItems the line items to create @return the created line items with their IDs filled in"
input CreateLineItemsInput {
  lineItems: [JSONObject]
}

"Represents the creative targeting criteria for a LineItem."
type CreativeTargeting {
  "The name of this creative targeting. This attribute is required."
  name: String!
  "The Targeting criteria of this creative targeting. This attribute is required."
  targeting: Targeting!
}

"A curve consisting of CustomPacingGoal objects that is used to pace line item delivery."
type CustomPacingCurve {
  "The unit of the CustomPacingGoalDto#amount values."
  customPacingGoalUnit: CustomPacingGoalUnitEnum
  "The list of goals that make up the custom pacing curve."
  customPacingGoals: [CustomPacingGoal]
}

"An interval of a CustomPacingCurve. A custom pacing goal contains a start time and an amount. The goal will apply until either the next custom pacing goal's \`getStartTime\` or the line item's end time if it is the last goal."
type CustomPacingGoal {
  "The start date and time of the goal. This field is required unless \`useLineItemStartDateTime\` is true."
  startDateTime: GAMDateTime
  "Whether the LineItem#startDateTime should be used for the start date and time of this goal. This field is not persisted and if it is set to true, the \`startDateTime\` field will be populated by the line item's start time."
  useLineItemStartDateTime: Boolean
  amount: BigInt
}

"Options for the unit of the custom pacing goal amounts."
enum CustomPacingGoalUnitEnum {
  "The custom pacing goal amounts represent absolute numbers corresponding to the line item's Goal#unitType."
  ABSOLUTE
  "The custom pacing goal amounts represent a millipercent. For example, 15000 millipercent equals 15%."
  MILLI_PERCENT
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Strategies for choosing forecasted traffic shapes to pace line items."
enum DeliveryForecastSourceEnum {
  "A user specified custom pacing curve will be used to pace line item delivery."
  CUSTOM_PACING_CURVE
  "The line item's projected future traffic will be used to pace line item delivery."
  FORECASTING
  "The line item's historical traffic shape will be used to pace line item delivery."
  HISTORICAL
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Gets a LineItemPage of LineItem objects that satisfy the given Statement#query. The following fields are supported for filtering:    PQL property Entity property    \`CostType\`   LineItem#costType     \`CreationDateTime\`   LineItem#creationDateTime     \`DeliveryRateType\`   LineItem#deliveryRateType     \`EndDateTime\`   LineItem#endDateTime     \`ExternalId\`   LineItem#externalId     \`Id\`   LineItem#id     \`IsMissingCreatives\`   LineItem#isMissingCreatives     \`IsSetTopBoxEnabled\`   LineItem#isSetTopBoxEnabled     \`LastModifiedDateTime\`   LineItem#lastModifiedDateTime     \`LineItemType\`   LineItem#lineItemType     \`Name\`   LineItem#name     \`OrderId\`   LineItem#orderId     \`StartDateTime\`   LineItem#startDateTime     \`Status\`   LineItem#status     \`UnitsBought\`   LineItem#unitsBought     @param filterStatement a Publisher Query Language statement used to filter a set of line items. @return the line items that match the given filter"
input GetLineItemsByStatementInput {
  filterStatement: JSONObject
}

"Represents available GRP providers that a line item will have its target demographic measured by."
enum GrpProviderEnum {
  "Renamed to \`GOOGLE\` beginning in V201608."
  GOOGLE
  NIELSEN
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"\`GrpSettings\` contains information for a line item that will have a target demographic when serving. This information will be used to set up tracking and enable reporting on the demographic information."
type GrpSettings {
  "Specifies the minimum target age (in years) of the LineItem. This field is only applicable if #provider is not null."
  minTargetAge: BigInt
  "Specifies the maximum target age (in years) of the LineItem. This field is only applicable if #provider is not null."
  maxTargetAge: BigInt
  "Specifies the target gender of the LineItem. This field is only applicable if #provider is not null."
  targetGender: GrpTargetGenderEnum
  "Specifies the GRP provider of the LineItem."
  provider: GrpProviderEnum
  "Specifies the impression goal for the given target demographic. This field is only applicable if #provider is not null and demographics-based goal is selected by the user. If this field is set, LineItem#primaryGoal will have its Goal#units value set by Google to represent the estimated total quantity."
  targetImpressionGoal: BigInt
  "Specifies which pacing computation to apply in pacing to impressions from connected devices. This field is required if \`enableNielsenCoViewingSupport\` is true."
  nielsenCtvPacingType: NielsenCtvPacingTypeEnum
  "Specifies whether to use Google or Nielsen device breakdown in Nielsen Line Item auto pacing."
  pacingDeviceCategorizationType: PacingDeviceCategorizationTypeEnum
  applyTrueCoview: Boolean
}

"Represents the target gender for a GRP demographic targeted line item."
enum GrpTargetGenderEnum {
  "Indicates that the GRP target gender is both male and female."
  BOTH
  "Indicates that the GRP target gender is Female."
  FEMALE
  "Indicates that the GRP target gender is Male."
  MALE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"\`LineItem\` is an advertiser's commitment to purchase a specific number of ad impressions, clicks, or time."
type LineItem implements LineItemSummaryInterface {
  "The ID of the Order to which the \`LineItem\` belongs. This attribute is required."
  orderId: BigInt!
  "Uniquely identifies the \`LineItem\`. This attribute is read-only and is assigned by Google when a line item is created."
  id: BigInt!
  "The name of the line item. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "An identifier for the \`LineItem\` that is meaningful to the publisher. This attribute is optional and has a maximum length of 255 characters."
  externalId: String
  "The name of the Order. This value is read-only."
  orderName: String
  "The date and time on which the \`LineItem\` is enabled to begin serving. This attribute is required and must be in the future."
  startDateTime: GAMDateTime!
  "Specifies whether to start serving to the \`LineItem\` right away, in an hour, etc. This attribute is optional and defaults to StartDateTimeType#USE_START_DATE_TIME."
  startDateTimeType: StartDateTimeTypeEnum
  "The date and time on which the \`LineItem\` will stop serving. This attribute is required unless LineItem#unlimitedEndDateTime is set to \`true\`. If specified, it must be after the LineItem#startDateTime. This end date and time does not include auto extension days."
  endDateTime: GAMDateTime!
  "The number of days to allow a line item to deliver past its #endDateTime. A maximum of 7 days is allowed. This is feature is only available for Ad Manager 360 accounts."
  autoExtensionDays: Int
  "Specifies whether or not the \`LineItem\` has an end time. This attribute is optional and defaults to false. It can be be set to \`true\` for only line items of type LineItemType#SPONSORSHIP, LineItemType#NETWORK, LineItemType#PRICE_PRIORITY and LineItemType#HOUSE."
  unlimitedEndDateTime: Boolean
  "The strategy used for displaying multiple Creative objects that are associated with the \`LineItem\`. This attribute is required."
  creativeRotationType: CreativeRotationTypeEnum!
  "The strategy for delivering ads over the course of the line item's duration. This attribute is optional and defaults to DeliveryRateType#EVENLY or DeliveryRateType#FRONTLOADED depending on the network's configuration."
  deliveryRateType: DeliveryRateTypeEnum
  "Strategy for choosing forecasted traffic shapes to pace line items. This field is optional and defaults to DeliveryForecastSource#HISTORICAL."
  deliveryForecastSource: DeliveryForecastSourceEnum
  "The curve that is used to pace the line item's delivery. This field is required if and only if the delivery forecast source is DeliveryForecastSource#CUSTOM_PACING_CURVE."
  customPacingCurve: CustomPacingCurve
  "The strategy for serving roadblocked creatives, i.e. instances where multiple creatives must be served together on a single web page. This attribute is optional and defaults to RoadblockingType#ONE_OR_MORE."
  roadblockingType: RoadblockingTypeEnum
  "The nature of the line item's creatives' skippability. This attribute is optional, only applicable for video line items, and defaults to SkippableAdType#NOT_SKIPPABLE."
  skippableAdType: SkippableAdTypeEnum
  "The set of frequency capping units for this \`LineItem\`. This attribute is optional."
  frequencyCaps: [FrequencyCap]
  "Indicates the line item type of a \`LineItem\`. This attribute is required. The line item type determines the default priority of the line item. More information can be found on the [ Ad Manager Help Center](https://support.google.com/dfp_premium/answer/177279)."
  lineItemType: LineItemTypeEnum!
  "The priority for the line item. Valid values range from 1 to 16. This field is optional and defaults to the default priority of the LineItemType. The following table shows the default, minimum, and maximum priority values are for each line item type:    LineItemType - default priority (minimum priority, maximum priority)    LineItemType#SPONSORSHIP 4 (2, 5)   LineItemType#STANDARD 8 (6, 10)   LineItemType#NETWORK 12 (11, 14)   LineItemType#BULK 12 (11, 14)   LineItemType#PRICE_PRIORITY 12 (11, 14)   LineItemType#HOUSE 16 (15, 16)   LineItemType#CLICK_TRACKING 16 (1, 16)   LineItemType#AD_EXCHANGE 12 (1, 16)  LineItemType#ADSENSE 12 (1, 16)  LineItemType#BUMPER 16 (15, 16)   This field can only be edited by certain networks, otherwise a PermissionError will occur."
  priority: Int
  "The amount of money to spend per impression or click. This attribute is required for creating a \`LineItem\`."
  costPerUnit: Money!
  "An amount to help the adserver rank inventory. LineItem#valueCostPerUnit artificially raises the value of inventory over the LineItem#costPerUnit but avoids raising the actual LineItem#costPerUnit. This attribute is optional and defaults to a Money object in the local currency with Money#microAmount 0."
  valueCostPerUnit: Money
  "The method used for billing this \`LineItem\`. This attribute is required."
  costType: CostTypeEnum!
  "The type of discount being applied to a \`LineItem\`, either percentage based or absolute. This attribute is optional and defaults to LineItemDiscountType#PERCENTAGE."
  discountType: LineItemDiscountTypeEnum
  "The number here is either a percentage or an absolute value depending on the \`LineItemDiscountType\`. If the \`LineItemDiscountType\` is LineItemDiscountType#PERCENTAGE, then only non-fractional values are supported."
  discount: Float
  "This attribute is only applicable for certain line item types and acts as an 'FYI' or note, which does not impact adserving or other backend systems.  For LineItemType#SPONSORSHIP line items, this represents the minimum quantity, which is a lifetime impression volume goal for reporting purposes only.  For LineItemType#STANDARD line items, this represent the contracted quantity, which is the number of units specified in the contract the advertiser has bought for this \`LineItem\`. This field is just a 'FYI' for traffickers to manually intervene with the \`LineItem\` when needed. This attribute is only available for LineItemType#STANDARD line items if you have this feature enabled on your network."
  contractedUnitsBought: BigInt
  "Details about the creatives that are expected to serve through this \`LineItem\`. This attribute is required and replaces the \`creativeSizes\` attribute."
  creativePlaceholders: [CreativePlaceholder]!
  "This attribute is required and meaningful only if the LineItem#costType is CostType.CPA."
  activityAssociations: [LineItemActivityAssociation]!
  "The environment that the \`LineItem\` is targeting. The default value is EnvironmentType#BROWSER. If this value is EnvironmentType#VIDEO_PLAYER, then this line item can only target \`AdUnits\` that have \`AdUnitSizes\` whose \`environmentType\` is also \`VIDEO_PLAYER\`."
  environmentType: EnvironmentTypeEnum
  "The set of allowedFormats that this programmatic line item can have. If the set is empty, this line item allows all formats."
  allowedFormats: [AllowedFormatsEnum]
  "The delivery option for companions. Setting this field is only meaningful if the following conditions are met:   The Guaranteed roadblocks feature is enabled on your network.   One of the following is true (both cannot be true, these are mutually exclusive).   The #environmentType is EnvironmentType#VIDEO_PLAYER.   The #roadblockingType is RoadblockingType#CREATIVE_SET.      This field is optional and defaults to CompanionDeliveryOption#OPTIONAL if the above conditions are met. In all other cases it defaults to CompanionDeliveryOption#UNKNOWN and is not meaningful."
  companionDeliveryOption: CompanionDeliveryOptionEnum
  "The flag indicates whether overbooking should be allowed when creating or updating reservations of line item types LineItemType#SPONSORSHIP and LineItemType#STANDARD. When true, operations on this line item will never trigger a ForecastError, which corresponds to an overbook warning in the UI. The default value is false. Note: this field will not persist on the line item itself, and the value will only affect the current request."
  allowOverbook: Boolean
  "The flag indicates whether the inventory check should be skipped when creating or updating a line item. The default value is false. Note: this field will not persist on the line item itself, and the value will only affect the current request."
  skipInventoryCheck: Boolean
  "True to skip checks for warnings from rules applied to line items targeting inventory shared by a distributor partner for cross selling when performing an action on this line item. The default is false."
  skipCrossSellingRuleWarningChecks: Boolean
  "The flag indicates whether inventory should be reserved when creating a line item of types LineItemType#SPONSORSHIP and LineItemType#STANDARD in an unapproved Order. The default value is false."
  reserveAtCreation: Boolean
  "Contains trafficking statistics for the line item. This attribute is readonly and is populated by Google. This will be \`null\` in case there are no statistics for a line item yet."
  stats: Stats
  "Indicates how well the line item has been performing. This attribute is readonly and is populated by Google. This will be \`null\` if the delivery indicator information is not available due to one of the following reasons:  The line item is not delivering. The line item has an unlimited goal or cap. The line item has a percentage based goal or cap. "
  deliveryIndicator: DeliveryIndicator
  "Delivery data provides the number of clicks or impressions delivered for a LineItem in the last 7 days. This attribute is readonly and is populated by Google. This will be \`null\` if the delivery data cannot be computed due to one of the following reasons:   The line item is not deliverable.  The line item has completed delivering more than 7 days ago.  The line item has an absolute-based goal. LineItem#deliveryIndicator should be used to track its progress in this case."
  deliveryData: DeliveryData
  "The amount of money allocated to the \`LineItem\`. This attribute is readonly and is populated by Google. The currency code is readonly."
  budget: Money
  "The status of the \`LineItem\`. This attribute is readonly."
  status: ComputedStatusEnum
  "Describes whether or not inventory has been reserved for the \`LineItem\`. This attribute is readonly and is assigned by Google."
  reservationStatus: LineItemSummaryReservationStatusEnum
  "The archival status of the \`LineItem\`. This attribute is readonly."
  isArchived: Boolean
  "The web property code used for dynamic allocation line items. This web property is only required with line item types LineItemType#AD_EXCHANGE and LineItemType#ADSENSE."
  webPropertyCode: String
  "The set of labels applied directly to this line item."
  appliedLabels: [AppliedLabel]
  "Contains the set of labels inherited from the order that contains this line item and the advertiser that owns the order. If a label has been negated, only the negated label is returned. This field is readonly and is assigned by Google."
  effectiveAppliedLabels: [AppliedLabel]
  "If a line item has a series of competitive exclusions on it, it could be blocked from serving with line items from the same advertiser. Setting this to \`true\` will allow line items from the same advertiser to serve regardless of the other competitive exclusion labels being applied."
  disableSameAdvertiserCompetitiveExclusion: Boolean
  "The application that last modified this line item. This attribute is read only and is assigned by Google."
  lastModifiedByApp: String
  "Provides any additional notes that may annotate the \`LineItem\`. This attribute is optional and has a maximum length of 65,535 characters."
  notes: String
  "The \`CompetitiveConstraintScope\` for the competitive exclusion labels assigned to this line item. This field is optional, defaults to CompetitiveConstraintScope#POD, and only applies to video line items."
  competitiveConstraintScope: CompetitiveConstraintScopeEnum
  "The date and time this line item was last modified."
  lastModifiedDateTime: GAMDateTime
  "This attribute may be \`null\` for line items created before this feature was introduced."
  creationDateTime: GAMDateTime
  "Whether an AdExchange line item has prioritized preferred deals enabled. This attribute is optional and defaults to false."
  isPrioritizedPreferredDealsEnabled: Boolean
  "The priority at which an Ad Exchange line item enters the open Ad Exchange auction if the preferred deal fails to transact. This attribute is optional. If prioritized preferred deals are enabled, it defaults to 12. Otherwise, it is ignored."
  adExchangeAuctionOpeningPriority: Int
  "The values of the custom fields associated with this line item."
  customFieldValues: [BaseCustomFieldValueInterface]
  "Indicates if a \`LineItem\` is missing any creatives for the \`creativePlaceholders\` specified. Creatives can be considered missing for several reasons including:  Not enough creatives of a certain size have been uploaded, as determined by CreativePlaceholder#expectedCreativeCount. For example a \`LineItem\` specifies 750x350, 400x200 but only a 750x350 was uploaded. Or \`LineItem\` specifies 750x350 with an expected count of 2, but only one was uploaded. The Creative#appliedLabels of an associated \`Creative\` do not match the CreativePlaceholder#effectiveAppliedLabels of the \`LineItem\`. For example \`LineItem\` specifies 750x350 with a Foo \`AppliedLabel\` but a 750x350 creative without a \`AppliedLabel\` was uploaded. "
  isMissingCreatives: Boolean
  "Indicates the ProgrammaticCreativeSource of the programmatic line item. This is a read-only field. Any changes must be made on the ProposalLineItem."
  programmaticCreativeSource: ProgrammaticCreativeSourceEnum
  thirdPartyMeasurementSettings: ThirdPartyMeasurementSettings
  "The max duration of a video creative associated with this \`LineItem\` in milliseconds. This attribute is only meaningful for video line items. For version v202011 and earlier, this attribute is optional and defaults to 0. For version v202102 and later, this attribute is required for video line items and must be greater than 0."
  videoMaxDuration: BigInt!
  "The primary goal that this \`LineItem\` is associated with, which is used in its pacing and budgeting."
  primaryGoal: Goal
  "The secondary goals that this \`LineItem\` is associated with. It is required and meaningful only if the LineItem#costType is CostType.CPA or if the LineItem#lineItemType is LineItemType#SPONSORSHIP and LineItem#costType is CostType.CPM."
  secondaryGoals: [Goal]
  "Contains the information for a line item which has a target GRP demographic."
  grpSettings: GrpSettings
  "The deal information associated with this line item, if it is programmatic."
  dealInfo: LineItemDealInfoDto
  "Optional IDs of the Company that provide ad verification for this line item. Company.Type#VIEWABILITY_PROVIDER."
  viewabilityProviderCompanyIds: [BigInt]
  "Child content eligibility designation for this line item. This field is optional and defaults to ChildContentEligibility#DISALLOWED."
  childContentEligibility: ChildContentEligibilityEnum
  "Custom XML to be rendered in a custom VAST response at serving time."
  customVastExtension: String
  "Contains the targeting criteria for the ad campaign. This attribute is required."
  targeting: Targeting!
  "A list of CreativeTargeting objects that can be used to specify creative level targeting for this line item. Creative level targeting is specified in a creative placeholder's CreativePlaceholder#targetingName field by referencing the creative targeting's name. It also needs to be re-specified in the LineItemCreativeAssociation#targetingName field when associating a line item with a creative that fits into that placeholder."
  creativeTargetings: [CreativeTargeting]
}

"A \`LineItemActivityAssociation\` associates a LineItem with an Activity so that the conversions of the Activity can be counted against the LineItem."
type LineItemActivityAssociation {
  "The ID of the Activity to which the LineItem should be associated. This attribute is required."
  activityId: Int!
  "The amount of money to attribute per click through conversion. This attribute is required for creating a \`LineItemActivityAssociation\`. The currency code is readonly and should match the LineItem."
  clickThroughConversionCost: Money!
  "The amount of money to attribute per view through conversion. This attribute is required for creating a \`LineItemActivityAssociation\`. The currency code is readonly and should match the LineItem."
  viewThroughConversionCost: Money!
}

"Data transfer object for the exchange deal info of a line item."
type LineItemDealInfoDto {
  "The external deal ID shared between seller and buyer. This field is only present if the deal has been finalized. This attribute is read-only and is assigned by Google."
  externalDealId: BigInt
}

"Describes the possible discount types on the cost of booking a LineItem."
enum LineItemDiscountTypeEnum {
  "An absolute value will be discounted from the line item's cost."
  ABSOLUTE_VALUE
  "A percentage of the cost will be applied as discount for booking the line item."
  PERCENTAGE
}

"Captures a page of LineItem objects."
type LineItemPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of line items contained within this page."
  results: [LineItem]
}

"The \`LineItemSummary\` represents the base class from which a \`LineItem\` is derived."
interface LineItemSummaryInterface {
  "The ID of the Order to which the \`LineItem\` belongs. This attribute is required."
  orderId: BigInt!
  "Uniquely identifies the \`LineItem\`. This attribute is read-only and is assigned by Google when a line item is created."
  id: BigInt!
  "The name of the line item. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "An identifier for the \`LineItem\` that is meaningful to the publisher. This attribute is optional and has a maximum length of 255 characters."
  externalId: String
  "The name of the Order. This value is read-only."
  orderName: String
  "The date and time on which the \`LineItem\` is enabled to begin serving. This attribute is required and must be in the future."
  startDateTime: GAMDateTime!
  "Specifies whether to start serving to the \`LineItem\` right away, in an hour, etc. This attribute is optional and defaults to StartDateTimeType#USE_START_DATE_TIME."
  startDateTimeType: StartDateTimeTypeEnum
  "The date and time on which the \`LineItem\` will stop serving. This attribute is required unless LineItem#unlimitedEndDateTime is set to \`true\`. If specified, it must be after the LineItem#startDateTime. This end date and time does not include auto extension days."
  endDateTime: GAMDateTime!
  "The number of days to allow a line item to deliver past its #endDateTime. A maximum of 7 days is allowed. This is feature is only available for Ad Manager 360 accounts."
  autoExtensionDays: Int
  "Specifies whether or not the \`LineItem\` has an end time. This attribute is optional and defaults to false. It can be be set to \`true\` for only line items of type LineItemType#SPONSORSHIP, LineItemType#NETWORK, LineItemType#PRICE_PRIORITY and LineItemType#HOUSE."
  unlimitedEndDateTime: Boolean
  "The strategy used for displaying multiple Creative objects that are associated with the \`LineItem\`. This attribute is required."
  creativeRotationType: CreativeRotationTypeEnum!
  "The strategy for delivering ads over the course of the line item's duration. This attribute is optional and defaults to DeliveryRateType#EVENLY or DeliveryRateType#FRONTLOADED depending on the network's configuration."
  deliveryRateType: DeliveryRateTypeEnum
  "Strategy for choosing forecasted traffic shapes to pace line items. This field is optional and defaults to DeliveryForecastSource#HISTORICAL."
  deliveryForecastSource: DeliveryForecastSourceEnum
  "The curve that is used to pace the line item's delivery. This field is required if and only if the delivery forecast source is DeliveryForecastSource#CUSTOM_PACING_CURVE."
  customPacingCurve: CustomPacingCurve
  "The strategy for serving roadblocked creatives, i.e. instances where multiple creatives must be served together on a single web page. This attribute is optional and defaults to RoadblockingType#ONE_OR_MORE."
  roadblockingType: RoadblockingTypeEnum
  "The nature of the line item's creatives' skippability. This attribute is optional, only applicable for video line items, and defaults to SkippableAdType#NOT_SKIPPABLE."
  skippableAdType: SkippableAdTypeEnum
  "The set of frequency capping units for this \`LineItem\`. This attribute is optional."
  frequencyCaps: [FrequencyCap]
  "Indicates the line item type of a \`LineItem\`. This attribute is required. The line item type determines the default priority of the line item. More information can be found on the [ Ad Manager Help Center](https://support.google.com/dfp_premium/answer/177279)."
  lineItemType: LineItemTypeEnum!
  "The priority for the line item. Valid values range from 1 to 16. This field is optional and defaults to the default priority of the LineItemType. The following table shows the default, minimum, and maximum priority values are for each line item type:    LineItemType - default priority (minimum priority, maximum priority)    LineItemType#SPONSORSHIP 4 (2, 5)   LineItemType#STANDARD 8 (6, 10)   LineItemType#NETWORK 12 (11, 14)   LineItemType#BULK 12 (11, 14)   LineItemType#PRICE_PRIORITY 12 (11, 14)   LineItemType#HOUSE 16 (15, 16)   LineItemType#CLICK_TRACKING 16 (1, 16)   LineItemType#AD_EXCHANGE 12 (1, 16)  LineItemType#ADSENSE 12 (1, 16)  LineItemType#BUMPER 16 (15, 16)   This field can only be edited by certain networks, otherwise a PermissionError will occur."
  priority: Int
  "The amount of money to spend per impression or click. This attribute is required for creating a \`LineItem\`."
  costPerUnit: Money!
  "An amount to help the adserver rank inventory. LineItem#valueCostPerUnit artificially raises the value of inventory over the LineItem#costPerUnit but avoids raising the actual LineItem#costPerUnit. This attribute is optional and defaults to a Money object in the local currency with Money#microAmount 0."
  valueCostPerUnit: Money
  "The method used for billing this \`LineItem\`. This attribute is required."
  costType: CostTypeEnum!
  "The type of discount being applied to a \`LineItem\`, either percentage based or absolute. This attribute is optional and defaults to LineItemDiscountType#PERCENTAGE."
  discountType: LineItemDiscountTypeEnum
  "The number here is either a percentage or an absolute value depending on the \`LineItemDiscountType\`. If the \`LineItemDiscountType\` is LineItemDiscountType#PERCENTAGE, then only non-fractional values are supported."
  discount: Float
  "This attribute is only applicable for certain line item types and acts as an 'FYI' or note, which does not impact adserving or other backend systems.  For LineItemType#SPONSORSHIP line items, this represents the minimum quantity, which is a lifetime impression volume goal for reporting purposes only.  For LineItemType#STANDARD line items, this represent the contracted quantity, which is the number of units specified in the contract the advertiser has bought for this \`LineItem\`. This field is just a 'FYI' for traffickers to manually intervene with the \`LineItem\` when needed. This attribute is only available for LineItemType#STANDARD line items if you have this feature enabled on your network."
  contractedUnitsBought: BigInt
  "Details about the creatives that are expected to serve through this \`LineItem\`. This attribute is required and replaces the \`creativeSizes\` attribute."
  creativePlaceholders: [CreativePlaceholder]!
  "This attribute is required and meaningful only if the LineItem#costType is CostType.CPA."
  activityAssociations: [LineItemActivityAssociation]!
  "The environment that the \`LineItem\` is targeting. The default value is EnvironmentType#BROWSER. If this value is EnvironmentType#VIDEO_PLAYER, then this line item can only target \`AdUnits\` that have \`AdUnitSizes\` whose \`environmentType\` is also \`VIDEO_PLAYER\`."
  environmentType: EnvironmentTypeEnum
  "The set of allowedFormats that this programmatic line item can have. If the set is empty, this line item allows all formats."
  allowedFormats: [AllowedFormatsEnum]
  "The delivery option for companions. Setting this field is only meaningful if the following conditions are met:   The Guaranteed roadblocks feature is enabled on your network.   One of the following is true (both cannot be true, these are mutually exclusive).   The #environmentType is EnvironmentType#VIDEO_PLAYER.   The #roadblockingType is RoadblockingType#CREATIVE_SET.      This field is optional and defaults to CompanionDeliveryOption#OPTIONAL if the above conditions are met. In all other cases it defaults to CompanionDeliveryOption#UNKNOWN and is not meaningful."
  companionDeliveryOption: CompanionDeliveryOptionEnum
  "The flag indicates whether overbooking should be allowed when creating or updating reservations of line item types LineItemType#SPONSORSHIP and LineItemType#STANDARD. When true, operations on this line item will never trigger a ForecastError, which corresponds to an overbook warning in the UI. The default value is false. Note: this field will not persist on the line item itself, and the value will only affect the current request."
  allowOverbook: Boolean
  "The flag indicates whether the inventory check should be skipped when creating or updating a line item. The default value is false. Note: this field will not persist on the line item itself, and the value will only affect the current request."
  skipInventoryCheck: Boolean
  "True to skip checks for warnings from rules applied to line items targeting inventory shared by a distributor partner for cross selling when performing an action on this line item. The default is false."
  skipCrossSellingRuleWarningChecks: Boolean
  "The flag indicates whether inventory should be reserved when creating a line item of types LineItemType#SPONSORSHIP and LineItemType#STANDARD in an unapproved Order. The default value is false."
  reserveAtCreation: Boolean
  "Contains trafficking statistics for the line item. This attribute is readonly and is populated by Google. This will be \`null\` in case there are no statistics for a line item yet."
  stats: Stats
  "Indicates how well the line item has been performing. This attribute is readonly and is populated by Google. This will be \`null\` if the delivery indicator information is not available due to one of the following reasons:  The line item is not delivering. The line item has an unlimited goal or cap. The line item has a percentage based goal or cap. "
  deliveryIndicator: DeliveryIndicator
  "Delivery data provides the number of clicks or impressions delivered for a LineItem in the last 7 days. This attribute is readonly and is populated by Google. This will be \`null\` if the delivery data cannot be computed due to one of the following reasons:   The line item is not deliverable.  The line item has completed delivering more than 7 days ago.  The line item has an absolute-based goal. LineItem#deliveryIndicator should be used to track its progress in this case."
  deliveryData: DeliveryData
  "The amount of money allocated to the \`LineItem\`. This attribute is readonly and is populated by Google. The currency code is readonly."
  budget: Money
  "The status of the \`LineItem\`. This attribute is readonly."
  status: ComputedStatusEnum
  "Describes whether or not inventory has been reserved for the \`LineItem\`. This attribute is readonly and is assigned by Google."
  reservationStatus: LineItemSummaryReservationStatusEnum
  "The archival status of the \`LineItem\`. This attribute is readonly."
  isArchived: Boolean
  "The web property code used for dynamic allocation line items. This web property is only required with line item types LineItemType#AD_EXCHANGE and LineItemType#ADSENSE."
  webPropertyCode: String
  "The set of labels applied directly to this line item."
  appliedLabels: [AppliedLabel]
  "Contains the set of labels inherited from the order that contains this line item and the advertiser that owns the order. If a label has been negated, only the negated label is returned. This field is readonly and is assigned by Google."
  effectiveAppliedLabels: [AppliedLabel]
  "If a line item has a series of competitive exclusions on it, it could be blocked from serving with line items from the same advertiser. Setting this to \`true\` will allow line items from the same advertiser to serve regardless of the other competitive exclusion labels being applied."
  disableSameAdvertiserCompetitiveExclusion: Boolean
  "The application that last modified this line item. This attribute is read only and is assigned by Google."
  lastModifiedByApp: String
  "Provides any additional notes that may annotate the \`LineItem\`. This attribute is optional and has a maximum length of 65,535 characters."
  notes: String
  "The \`CompetitiveConstraintScope\` for the competitive exclusion labels assigned to this line item. This field is optional, defaults to CompetitiveConstraintScope#POD, and only applies to video line items."
  competitiveConstraintScope: CompetitiveConstraintScopeEnum
  "The date and time this line item was last modified."
  lastModifiedDateTime: GAMDateTime
  "This attribute may be \`null\` for line items created before this feature was introduced."
  creationDateTime: GAMDateTime
  "Whether an AdExchange line item has prioritized preferred deals enabled. This attribute is optional and defaults to false."
  isPrioritizedPreferredDealsEnabled: Boolean
  "The priority at which an Ad Exchange line item enters the open Ad Exchange auction if the preferred deal fails to transact. This attribute is optional. If prioritized preferred deals are enabled, it defaults to 12. Otherwise, it is ignored."
  adExchangeAuctionOpeningPriority: Int
  "The values of the custom fields associated with this line item."
  customFieldValues: [BaseCustomFieldValueInterface]
  "Indicates if a \`LineItem\` is missing any creatives for the \`creativePlaceholders\` specified. Creatives can be considered missing for several reasons including:  Not enough creatives of a certain size have been uploaded, as determined by CreativePlaceholder#expectedCreativeCount. For example a \`LineItem\` specifies 750x350, 400x200 but only a 750x350 was uploaded. Or \`LineItem\` specifies 750x350 with an expected count of 2, but only one was uploaded. The Creative#appliedLabels of an associated \`Creative\` do not match the CreativePlaceholder#effectiveAppliedLabels of the \`LineItem\`. For example \`LineItem\` specifies 750x350 with a Foo \`AppliedLabel\` but a 750x350 creative without a \`AppliedLabel\` was uploaded. "
  isMissingCreatives: Boolean
  "Indicates the ProgrammaticCreativeSource of the programmatic line item. This is a read-only field. Any changes must be made on the ProposalLineItem."
  programmaticCreativeSource: ProgrammaticCreativeSourceEnum
  thirdPartyMeasurementSettings: ThirdPartyMeasurementSettings
  "The max duration of a video creative associated with this \`LineItem\` in milliseconds. This attribute is only meaningful for video line items. For version v202011 and earlier, this attribute is optional and defaults to 0. For version v202102 and later, this attribute is required for video line items and must be greater than 0."
  videoMaxDuration: BigInt!
  "The primary goal that this \`LineItem\` is associated with, which is used in its pacing and budgeting."
  primaryGoal: Goal
  "The secondary goals that this \`LineItem\` is associated with. It is required and meaningful only if the LineItem#costType is CostType.CPA or if the LineItem#lineItemType is LineItemType#SPONSORSHIP and LineItem#costType is CostType.CPM."
  secondaryGoals: [Goal]
  "Contains the information for a line item which has a target GRP demographic."
  grpSettings: GrpSettings
  "The deal information associated with this line item, if it is programmatic."
  dealInfo: LineItemDealInfoDto
  "Optional IDs of the Company that provide ad verification for this line item. Company.Type#VIEWABILITY_PROVIDER."
  viewabilityProviderCompanyIds: [BigInt]
  "Child content eligibility designation for this line item. This field is optional and defaults to ChildContentEligibility#DISALLOWED."
  childContentEligibility: ChildContentEligibilityEnum
  "Custom XML to be rendered in a custom VAST response at serving time."
  customVastExtension: String
}

"Specifies the reservation status of the LineItem."
enum LineItemSummaryReservationStatusEnum {
  "Indicates that inventory has been reserved for the line item."
  RESERVED
  "Indicates that inventory has not been reserved for the line item."
  UNRESERVED
}

"Represents the pacing computation method for impressions on connected devices for a Nielsen measured line item. This only applies when Nielsen measurement is enabled for connected devices."
enum NielsenCtvPacingTypeEnum {
  "Indicates that Nielsen impressions on connected devices are included, and we apply coviewing in pacing."
  COVIEW
  "The value returned if Nielsen measurement is disabled for connected devices."
  NONE
  "Indicates that Nielsen impressions on connected devices are included, and we apply strict coviewing in pacing."
  STRICT_COVIEW
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Represents whose device categorization to use on Nielsen measured line item with auto-pacing enabled."
enum PacingDeviceCategorizationTypeEnum {
  "Use Google's device categorization in auto-pacing."
  GOOGLE
  "Use Nielsen device categorization in auto-pacing"
  NIELSEN
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Performs actions on LineItem objects that match the given Statement#query. @param lineItemAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of line items @return the result of the action performed"
input PerformLineItemActionInput {
  lineItemAction: JSONObject
  filterStatement: JSONObject
}

"Updates the specified LineItem objects. @param lineItems the line items to update @return the updated line items"
input UpdateLineItemsInput {
  lineItems: [JSONObject]
}

extend type Mutation {
  "Creates new LineItem objects. @param lineItems the line items to create @return the created line items with their IDs filled in"
  createLineItems(input: CreateLineItemsInput!): [LineItem]
    @soap(service: "LineItem", action: "createLineItems")
}

extend type Query {
  "Gets a LineItemPage of LineItem objects that satisfy the given Statement#query. The following fields are supported for filtering:    PQL property Entity property    \`CostType\`   LineItem#costType     \`CreationDateTime\`   LineItem#creationDateTime     \`DeliveryRateType\`   LineItem#deliveryRateType     \`EndDateTime\`   LineItem#endDateTime     \`ExternalId\`   LineItem#externalId     \`Id\`   LineItem#id     \`IsMissingCreatives\`   LineItem#isMissingCreatives     \`IsSetTopBoxEnabled\`   LineItem#isSetTopBoxEnabled     \`LastModifiedDateTime\`   LineItem#lastModifiedDateTime     \`LineItemType\`   LineItem#lineItemType     \`Name\`   LineItem#name     \`OrderId\`   LineItem#orderId     \`StartDateTime\`   LineItem#startDateTime     \`Status\`   LineItem#status     \`UnitsBought\`   LineItem#unitsBought     @param filterStatement a Publisher Query Language statement used to filter a set of line items. @return the line items that match the given filter"
  getLineItemsByStatement(input: GetLineItemsByStatementInput!): LineItemPage
    @soap(service: "LineItem", action: "getLineItemsByStatement")
}

extend type Mutation {
  "Performs actions on LineItem objects that match the given Statement#query. @param lineItemAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of line items @return the result of the action performed"
  performLineItemAction(input: PerformLineItemActionInput!): UpdateResult
    @soap(service: "LineItem", action: "performLineItemAction")
}

extend type Mutation {
  "Updates the specified LineItem objects. @param lineItems the line items to update @return the updated line items"
  updateLineItems(input: UpdateLineItemsInput!): [LineItem]
    @soap(service: "LineItem", action: "updateLineItems")
}

`;
