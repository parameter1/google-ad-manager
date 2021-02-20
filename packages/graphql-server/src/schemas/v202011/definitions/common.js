// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Status of the MCM child publisher's Ad Manager account with respect to delegated serving. In order for the child network to be served ads for MCM, it must have accepted the invite from the parent network, and must have passed Google's policy compliance verifications."
enum AccountStatusEnum {
  "The child publisher accepted the invite, and Google found it to be compliant with its policies, i.e. no policy violations were found, and the child publisher can be served ads."
  APPROVED
  "The association between the parent and child publishers was deactivated by Google Ad Manager."
  DEACTIVATED_BY_AD_MANAGER
  "The child publisher has declined the invite."
  DECLINED
  "The child publisher accepted the invite, but was disapproved by Google for being a duplicate of another account."
  DISAPPROVED_DUPLICATE_ACCOUNT
  "The child publisher accepted the invite, but was disapproved by Google for violating its policies."
  DISAPPROVED_POLICY_VIOLATION
  "The invite was sent to the child publisher more than a month ago, due to which it has been deactivated."
  EXPIRED
  "Either the child publisher disconnected from the parent network, or the parent network withdrew the invite."
  INACTIVE
  "The child publisher has not acted on the invite from the parent."
  INVITED
  "The child publisher has accepted the invite, and is awaiting Google's policy compliance verifications."
  PENDING_GOOGLE_APPROVAL
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Identifies the format of inventory or 'channel' in which ads serve."
enum AdExchangeEnvironmentEnum {
  "Ads serve in a browser."
  DISPLAY
  "Out-stream video ads serve in a browser. Examples include in-feed and in-banner video ads."
  DISPLAY_OUTSTREAM_VIDEO
  "In-stream video ads serve in a game."
  GAMES
  "Ads serve in a mobile app."
  MOBILE
  "Out-stream video ads serve in a mobile app. Examples include mobile app interstitials and mobile app rewarded ads."
  MOBILE_OUTSTREAM_VIDEO
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "In-stream video ads serve in a video."
  VIDEO
}

"The summary of a parent AdUnit."
type AdUnitParent {
  "The ID of the parent \`AdUnit\`. This value is readonly and is populated by Google."
  id: String!
  "The name of the parent \`AdUnit\`. This value is readonly and is populated by Google."
  name: String
  "A string used to uniquely identify the ad unit for the purposes of serving the ad. This attribute is read-only and is assigned by Google when an ad unit is created."
  adUnitCode: String
}

"An \`AdUnitSize\` represents the size of an ad in an ad unit. This also represents the environment and companions of a particular ad in an ad unit. In most cases, it is a simple size with just a width and a height (sometimes representing an aspect ratio)."
type AdUnitSize {
  "The permissible creative size that can be served inside this ad unit."
  size: Size
  "The environment type of the ad unit size. The default value is EnvironmentType#BROWSER."
  environmentType: EnvironmentTypeEnum
  "The companions for this ad unit size. Companions are only valid if the environment is EnvironmentType#VIDEO_PLAYER. If the environment is EnvironmentType#BROWSER including companions results in an error."
  companions: [AdUnitSize]
  "The full (including companion sizes, if applicable) display string of the size, e.g. \`'300x250'\` or \`'300x250v (180x150)'\`"
  fullDisplayString: String
  "Whether the inventory size is audio. If set to true, \`Size\` will be set to \`'1x1'\` and \`EnvironmentType\` will be set to EnvironmentType#VIDEO_PLAYER regardless of user input."
  isAudio: Boolean
}

"Corresponds to an HTML link's \`target\` attribute."
enum AdUnitTargetWindowEnum {
  "Specifies that the link should open in a new window."
  BLANK
  "Specifies that the link should open in the full body of the page."
  TOP
}

"Represents targeted or excluded ad units."
type AdUnitTargeting {
  "Included or excluded ad unit id."
  adUnitId: String
  "Whether or not all descendants are included (or excluded) as part of including (or excluding) this ad unit. By default, the value is \`true\` which means targeting this ad unit will target all of its descendants."
  includeDescendants: Boolean
}

"The formats that a publisher allows on their programmatic LineItem or ProposalLineItem."
enum AllowedFormatsEnum {
  "Audio format. This is only relevant for programmatic video line items."
  AUDIO
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Represents a Label that can be applied to an entity. To negate an inherited label, create an \`AppliedLabel\` with \`labelId\` as the inherited label's ID and \`isNegated\` set to true."
type AppliedLabel {
  "The ID of a created Label."
  labelId: BigInt
  "\`isNegated\` should be set to \`true\` to negate the effects of \`labelId\`."
  isNegated: Boolean
}

"An AudienceSegmentCriteria object is used to target AudienceSegment objects."
type AudienceSegmentCriteria implements CustomCriteriaLeafInterface & CustomCriteriaNodeInterface {
  _: Boolean
  "The comparison operator. This attribute is required."
  operator: AudienceSegmentCriteriaComparisonOperatorEnum!
  "The ids of AudienceSegment objects used to target audience segments. This attribute is required."
  audienceSegmentIds: [BigInt]!
}

"Specifies the available comparison operators."
enum AudienceSegmentCriteriaComparisonOperatorEnum {
  IS
  IS_NOT
}

"Represents a group of bandwidths that are logically organized by some well known generic names such as 'Cable' or 'DSL'."
type BandwidthGroup implements TechnologyInterface {
  "The unique ID of the \`Technology\`. This value is required for all forms of \`TechnologyTargeting\`."
  id: BigInt!
  "The name of the technology being targeting. This value is read-only and is assigned by Google."
  name: String
}

"Represents bandwidth groups that are being targeted or excluded by the LineItem."
type BandwidthGroupTargeting {
  "Indicates whether bandwidth groups should be targeted or excluded. This attribute is optional and defaults to \`true\`."
  isTargeted: Boolean
  "The bandwidth groups that are being targeted or excluded by the LineItem."
  bandwidthGroups: [TechnologyInterface]
}

"The value of a CustomField for a particular entity."
interface BaseCustomFieldValueInterface {
  "Id of the \`CustomField\` to which this value belongs. This attribute is required."
  customFieldId: BigInt!
}

"Contains a boolean value."
type BooleanValue implements ValueInterface {
  _: Boolean
  "The boolean value."
  value: Boolean
}

"Represents an internet browser."
type Browser implements TechnologyInterface {
  "The unique ID of the \`Technology\`. This value is required for all forms of \`TechnologyTargeting\`."
  id: BigInt!
  "The name of the technology being targeting. This value is read-only and is assigned by Google."
  name: String
  "Browser major version."
  majorVersion: String
  "Browser minor version."
  minorVersion: String
}

"Represents a Browser's language."
type BrowserLanguage implements TechnologyInterface {
  "The unique ID of the \`Technology\`. This value is required for all forms of \`TechnologyTargeting\`."
  id: BigInt!
  "The name of the technology being targeting. This value is read-only and is assigned by Google."
  name: String
}

"Represents browser languages that are being targeted or excluded by the LineItem."
type BrowserLanguageTargeting {
  "Indicates whether browsers languages should be targeted or excluded. This attribute is optional and defaults to \`true\`."
  isTargeted: Boolean
  "Browser languages that are being targeted or excluded by the LineItem."
  browserLanguages: [TechnologyInterface]
}

"Represents browsers that are being targeted or excluded by the LineItem."
type BrowserTargeting {
  "Indicates whether browsers should be targeted or excluded. This attribute is optional and defaults to \`true\`."
  isTargeted: Boolean
  "Browsers that are being targeted or excluded by the LineItem."
  browsers: [TechnologyInterface]
}

"The \`BuyerUserListTargeting\` associated with a programmatic LineItem or ProposalLineItem object."
type BuyerUserListTargeting {
  "Whether the programmatic \`LineItem\` or \`ProposalLineItem\` object has buyer user list targeting."
  hasBuyerUserListTargeting: Boolean
}

"A \`ChildPublisher\` represents a network being managed as part of Multiple Customer Management."
type ChildPublisher {
  "Type of delegation the parent has been approved to have over the child. This field is read-only, and set to the proposed delegation type value \`proposedDelegationType\` upon approval by the child network. The value remains null if the parent network has not been approved."
  approvedDelegationType: DelegationTypeEnum
  "Type of delegation the parent has proposed to have over the child, pending approval of the child network. Set the value of this field to the delegation type you intend this network to have over the child network. Upon approval by the child network, its value is copied to \`approvedDelegationType\`, and \`proposedDelegationType\` is set to null."
  proposedDelegationType: DelegationTypeEnum
  "Status of the delegation relationship between parent and child."
  status: DelegationStatusEnum
  "Status of the child publisher's Ad Manager account based on \`ChildPublisher#status\` as well as Google's policy verification results. This field is read-only."
  accountStatus: AccountStatusEnum
  "Network code of child network."
  childNetworkCode: String
}

"A \`CmsMetadataCriteria\` object is used to target \`CmsMetadataValue\` objects."
type CmsMetadataCriteria implements CustomCriteriaLeafInterface & CustomCriteriaNodeInterface {
  _: Boolean
  "The comparison operator. This attribute is required."
  operator: CmsMetadataCriteriaComparisonOperatorEnum!
  "The ids of CmsMetadataValue objects used to target CMS metadata. This attribute is required."
  cmsMetadataValueIds: [BigInt]!
}

"Specifies the available comparison operators."
enum CmsMetadataCriteriaComparisonOperatorEnum {
  EQUALS
  NOT_EQUALS
}

"The delivery option for companions. Used for line items whose environmentType is EnvironmentType#VIDEO_PLAYER."
enum CompanionDeliveryOptionEnum {
  "All companions in the set must be served in order for the creative set to be used. This can still serve to inventory that has more companions than can be filled."
  ALL
  "At least one companion must be served in order for the creative set to be used."
  AT_LEAST_ONE
  "Companions are not required to serve a creative set. The creative set can serve to inventory that has zero or more matching companions."
  OPTIONAL
  "The delivery type is unknown."
  UNKNOWN
}

"Describes the computed LineItem status that is derived from the current state of the line item."
enum ComputedStatusEnum {
  "The LineItem has been canceled and is no longer eligible to serve. This is a legacy status imported from Google Ad Manager orders."
  CANCELED
  "The LineItem has completed its run."
  COMPLETED
  "The LineItem has begun serving."
  DELIVERING
  "The LineItem has past its LineItem#endDateTime with an auto extension, but hasn't met its goal."
  DELIVERY_EXTENDED
  "The LineItem has been disapproved and is not eligible to serve."
  DISAPPROVED
  "The LineItem is still being drafted."
  DRAFT
  "The LineItem is inactive. It is either caused by missing creatives or the network disabling auto-activation."
  INACTIVE
  "The LineItem has been paused from serving."
  PAUSED
  "The LineItem has been paused and its reserved inventory has been released. The \`LineItem\` will not serve."
  PAUSED_INVENTORY_RELEASED
  "The LineItem has been submitted for approval."
  PENDING_APPROVAL
  "The LineItem has been activated and is ready to serve."
  READY
}

"Used to target LineItems to specific videos on a publisher's site."
type ContentTargeting {
  "The IDs of content being targeted by the \`LineItem\`."
  targetedContentIds: [BigInt]
  "The IDs of content being excluded by the \`LineItem\`."
  excludedContentIds: [BigInt]
  "A list of video content bundles, represented by ContentBundle IDs, that are being targeted by the \`LineItem\`."
  targetedVideoContentBundleIds: [BigInt]
  "A list of video content bundles, represented by ContentBundle IDs, that are being excluded by the \`LineItem\`."
  excludedVideoContentBundleIds: [BigInt]
}

"A \`CreativePlaceholder\` describes a slot that a creative is expected to fill. This is used primarily to help in forecasting, and also to validate that the correct creatives are associated with the line item. A \`CreativePlaceholder\` must contain a size, and it can optionally contain companions. Companions are only valid if the line item's environment type is EnvironmentType#VIDEO_PLAYER."
type CreativePlaceholder {
  "The dimensions that the creative is expected to have. This attribute is required."
  size: Size!
  "The native creative template ID. This value is only required if #creativeSizeType is CreativeSizeType#NATIVE."
  creativeTemplateId: BigInt
  "The companions that the creative is expected to have. This attribute can only be set if the line item it belongs to has a LineItem#environmentType of EnvironmentType#VIDEO_PLAYER or LineItem#roadblockingType of RoadblockingType#CREATIVE_SET."
  companions: [CreativePlaceholder]
  "The set of label frequency caps applied directly to this creative placeholder."
  appliedLabels: [AppliedLabel]
  "Contains the set of labels applied directly to this creative placeholder as well as those inherited from the creative template from which this creative placeholder was instantiated. This field is readonly and is assigned by Google."
  effectiveAppliedLabels: [AppliedLabel]
  "Expected number of creatives that will be uploaded corresponding to this creative placeholder. This estimate is used to improve the accuracy of forecasting; for example, if label frequency capping limits the number of times a creative may be served."
  expectedCreativeCount: Int
  "Describes the types of sizes a creative can be. By default, the creative's size is CreativeSizeType#PIXEL, which is a dimension based size (width-height pair)."
  creativeSizeType: CreativeSizeTypeEnum
  "The name of the CreativeTargeting for creatives this placeholder represents. This attribute is optional. Specifying creative targeting here is for forecasting purposes only and has no effect on serving. The same creative targeting should be specified on a LineItemCreativeAssociation when associating a Creative with the LineItem."
  targetingName: String
  "Indicate if the expected creative of this placeholder has an AMP only variant. This attribute is optional. It is for forecasting purposes only and has no effect on serving."
  isAmpOnly: Boolean
}

"The strategy to use for displaying multiple Creative objects that are associated with a LineItem."
enum CreativeRotationTypeEnum {
  "Creatives are displayed roughly the same number of times over the duration of the line item."
  EVEN
  "Creatives are served roughly proportionally to their weights, set on the LineItemCreativeAssociation."
  MANUAL
  "Creatives are served roughly proportionally to their performance."
  OPTIMIZED
  "Creatives are served exactly in sequential order, aka Storyboarding. Set on the LineItemCreativeAssociation."
  SEQUENTIAL
}

"Descriptions of the types of sizes a creative can be. Not all creatives can be described by a height-width pair, this provides additional context."
enum CreativeSizeTypeEnum {
  "Mobile size, that is expressed as a ratio of say 4 by 1, that could be met by a 100 x 25 sized image."
  ASPECT_RATIO
  "Audio size. Used with audio ads. This must be used with 1x1 size."
  AUDIO
  "Out-of-page size, that is not related to the slot it is served. But rather is a function of the snippet, and the values set. This must be used with 1x1 size."
  INTERSTITIAL
  "Native size, which is a function of the how the client renders the creative. This must be used with 1x1 size."
  NATIVE
  "Dimension based size, an actual height and width."
  PIXEL
}

"A CustomCriteria object is used to perform custom criteria targeting on custom targeting keys of type CustomTargetingKey.Type#PREDEFINED or CustomTargetingKey.Type#FREEFORM."
type CustomCriteria implements CustomCriteriaLeafInterface & CustomCriteriaNodeInterface {
  _: Boolean
  "The CustomTargetingKey#id of the CustomTargetingKey object that was created using CustomTargetingService. This attribute is required."
  keyId: BigInt!
  "The ids of CustomTargetingValue objects to target the custom targeting key with id CustomCriteria#keyId. This attribute is required."
  valueIds: [BigInt]!
  "The comparison operator. This attribute is required."
  operator: CustomCriteriaComparisonOperatorEnum!
}

"Specifies the available comparison operators."
enum CustomCriteriaComparisonOperatorEnum {
  IS
  IS_NOT
}

"A CustomCriteriaLeaf object represents a generic leaf of CustomCriteria tree structure."
interface CustomCriteriaLeafInterface implements CustomCriteriaNodeInterface {
  _: Boolean
}

"A CustomCriteriaNode is a node in the custom targeting tree. A custom criteria node can either be a CustomCriteriaSet (a non-leaf node) or a CustomCriteria (a leaf node). The custom criteria targeting tree is subject to the rules defined on Targeting#customTargeting."
interface CustomCriteriaNodeInterface {
  _: Boolean
}

"A CustomCriteriaSet comprises of a set of CustomCriteriaNode objects combined by the CustomCriteriaSet.LogicalOperator#logicalOperator. The custom criteria targeting tree is subject to the rules defined on Targeting#customTargeting."
type CustomCriteriaSet implements CustomCriteriaNodeInterface {
  _: Boolean
  "The logical operator to be applied to CustomCriteriaSet#children. This attribute is required. This attribute is required."
  logicalOperator: CustomCriteriaSetLogicalOperatorEnum!
  "The custom criteria. This attribute is required."
  children: [CustomCriteriaNodeInterface]!
}

"Specifies the available logical operators."
enum CustomCriteriaSetLogicalOperatorEnum {
  AND
  OR
}

"The value of a CustomField that does not have a CustomField#dataType of CustomFieldDataType#DROP_DOWN."
type CustomFieldValue implements BaseCustomFieldValueInterface {
  "Id of the \`CustomField\` to which this value belongs. This attribute is required."
  customFieldId: BigInt!
  "The value for this field. The appropriate type of \`Value\` is determined by the CustomField#dataType of the \`CustomField\` that this conforms to.  CustomFieldDataTypeValue type STRINGTextValue NUMBERNumberValue TOGGLEBooleanValue "
  value: ValueInterface
}

"Represents a range of dates that has an upper and a lower bound. An open ended date range can be described by only setting either one of the bounds, the upper bound or the lower bound."
type DateRange {
  "The start date of this range. This field is optional and if it is not set then there is no lower bound on the date range. If this field is not set then \`endDate\` must be specified."
  startDate: Date
  "The end date of this range. This field is optional and if it is not set then there is no upper bound on the date range. If this field is not set then \`startDate\` must be specified."
  endDate: Date
}

"Represents a range of dates (combined with time of day) that has an upper and/or lower bound."
type DateTimeRange {
  "The start date time of this range. This field is optional and if it is not set then there is no lower bound on the date time range. If this field is not set then \`endDateTime\` must be specified."
  startDateTime: GAMDateTime
  "The end date time of this range. This field is optional and if it is not set then there is no upper bound on the date time range. If this field is not set then \`startDateTime\` must be specified."
  endDateTime: GAMDateTime
}

"The date time ranges that the line item is eligible to serve."
type DateTimeRangeTargeting {
  targetedDateTimeRanges: [DateTimeRange]
}

"Contains a date-time value."
type DateTimeValue implements ValueInterface {
  _: Boolean
  "The \`DateTime\` value."
  value: GAMDateTime
}

"Contains a date value."
type DateValue implements ValueInterface {
  _: Boolean
  "The \`Date\` value."
  value: Date
}

"Days of the week."
enum DayOfWeekEnum {
  "The day of week named Friday."
  FRIDAY
  "The day of week named Monday."
  MONDAY
  "The day of week named Saturday."
  SATURDAY
  "The day of week named Sunday."
  SUNDAY
  "The day of week named Thursday."
  THURSDAY
  "The day of week named Tuesday."
  TUESDAY
  "The day of week named Wednesday."
  WEDNESDAY
}

"\`DayPart\` represents a time-period within a day of the week which is targeted by a LineItem."
type DayPart {
  "Day of the week the target applies to. This field is required."
  dayOfWeek: DayOfWeekEnum
  "Represents the start time of the targeted period (inclusive)."
  startTime: TimeOfDay
  "Represents the end time of the targeted period (exclusive)."
  endTime: TimeOfDay
}

"Modify the delivery times of line items for particular days of the week. By default, line items are served at all days and times."
type DayPartTargeting {
  "Specifies days of the week and times at which a \`LineItem\` will be delivered.  If targeting all days and times, this value will be ignored."
  dayParts: [DayPart]
  "Specifies the time zone to be used for delivering LineItem objects. This attribute is optional and defaults to DeliveryTimeZone#BROWSER.  Setting this has no effect if targeting all days and times."
  timeZone: DeliveryTimeZoneEnum
}

"The declaration about third party data usage on the associated entity."
enum DeclarationTypeEnum {
  "There is a set of RichMediaAdsCompanys associated with this entity."
  DECLARED
  "There are no companies associated. Functionally the same as DECLARED, combined with an empty company list."
  NONE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Status of the association between networks. When a parent network requests access, it is marked as pending. Once the child network approves, it is marked as approved."
enum DelegationStatusEnum {
  "The association request from the parent network is approved by the child network."
  APPROVED
  "The association request from the parent network is pending child network approval or rejection."
  PENDING
  "The association request from the parent network is rejected or revoked by the child network."
  REJECTED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "The association request from the parent network is withdrawn by the parent network."
  WITHDRAWN
}

"The type of delegation of the child network to the parent network in MCM."
enum DelegationTypeEnum {
  "The parent network gets complete access to the child network's account"
  MANAGE_ACCOUNT
  "A subset of the ad requests from the child are delegated to the parent, determined by the tag on the child network's web pages. The parent network does not have access to the child network, as a subset of the inventory could be owned and operated by the child network."
  MANAGE_INVENTORY
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Holds the number of clicks or impressions, determined by LineItem#costType, delivered for a single line item for the last 7 days"
type DeliveryData {
  "Clicks or impressions delivered for the last 7 days."
  units: [BigInt]
}

"Indicates the delivery performance of the LineItem."
type DeliveryIndicator {
  "How much the \`LineItem\` was expected to deliver as a percentage of LineItem#primaryGoal."
  expectedDeliveryPercentage: Float
  "How much the line item actually delivered as a percentage of LineItem#primaryGoal."
  actualDeliveryPercentage: Float
}

"Possible delivery rates for a LineItem, which dictate the manner in which they are served."
enum DeliveryRateTypeEnum {
  "The booked impressions for a line item may be delivered well before the LineItem#endDateTime. Other lower-priority or lower-value line items will be stopped from delivering until this line item meets the number of impressions or clicks it is booked for."
  AS_FAST_AS_POSSIBLE
  "Line items are served as evenly as possible across the number of days specified in a line item's LineItem#duration."
  EVENLY
  "Line items are served more aggressively in the beginning of the flight date."
  FRONTLOADED
}

"Represents the time zone to be used for DayPartTargeting."
enum DeliveryTimeZoneEnum {
  "Use the time zone of the browser."
  BROWSER
  "Use the time zone of the publisher."
  PUBLISHER
}

"Represents a capability of a physical device."
type DeviceCapability implements TechnologyInterface {
  "The unique ID of the \`Technology\`. This value is required for all forms of \`TechnologyTargeting\`."
  id: BigInt!
  "The name of the technology being targeting. This value is read-only and is assigned by Google."
  name: String
}

"Represents device capabilities that are being targeted or excluded by the LineItem."
type DeviceCapabilityTargeting {
  "Device capabilities that are being targeted by the LineItem."
  targetedDeviceCapabilities: [TechnologyInterface]
  "Device capabilities that are being excluded by the LineItem."
  excludedDeviceCapabilities: [TechnologyInterface]
}

"Represents the category of a device."
type DeviceCategory implements TechnologyInterface {
  "The unique ID of the \`Technology\`. This value is required for all forms of \`TechnologyTargeting\`."
  id: BigInt!
  "The name of the technology being targeting. This value is read-only and is assigned by Google."
  name: String
}

"Represents device categories that are being targeted or excluded by the LineItem."
type DeviceCategoryTargeting {
  "Device categories that are being targeted by the LineItem."
  targetedDeviceCategories: [TechnologyInterface]
  "Device categories that are being excluded by the LineItem."
  excludedDeviceCategories: [TechnologyInterface]
}

"Represents a mobile device's manufacturer."
type DeviceManufacturer implements TechnologyInterface {
  "The unique ID of the \`Technology\`. This value is required for all forms of \`TechnologyTargeting\`."
  id: BigInt!
  "The name of the technology being targeting. This value is read-only and is assigned by Google."
  name: String
}

"Represents device manufacturer that are being targeted or excluded by the LineItem."
type DeviceManufacturerTargeting {
  "Indicates whether device manufacturers should be targeted or excluded. This attribute is optional and defaults to \`true\`."
  isTargeted: Boolean
  "Device manufacturers that are being targeted or excluded by the LineItem."
  deviceManufacturers: [TechnologyInterface]
}

"A CustomFieldValue for a CustomField that has a CustomField#dataType of CustomFieldDataType#DROP_DOWN"
type DropDownCustomFieldValue implements BaseCustomFieldValueInterface {
  "Id of the \`CustomField\` to which this value belongs. This attribute is required."
  customFieldId: BigInt!
  "The ID of the CustomFieldOption for this value."
  customFieldOptionId: BigInt
}

"Enum for the valid environments in which ads can be shown."
enum EnvironmentTypeEnum {
  "A regular web browser."
  BROWSER
  "Video players."
  VIDEO_PLAYER
}

"Represents a limit on the number of times a single viewer can be exposed to the same LineItem in a specified time period."
type FrequencyCap {
  "The maximum number of impressions than can be served to a user within a specified time period."
  maxImpressions: Int
  "The number of \`FrequencyCap#timeUnit\` to represent the total time period."
  numTimeUnits: Int
  "The unit of time for specifying the time period."
  timeUnit: TimeUnitEnum
}

"Provides line items the ability to target geographical locations. By default, line items target all countries and their subdivisions. With geographical targeting, you can target line items to specific countries, regions, metro areas, and cities. You can also exclude the same.  The following rules apply for geographical targeting:   You cannot target and exclude the same location. You cannot target a child whose parent has been excluded. For example, if the state of Illinois has been excluded, then you cannot target Chicago. You must not target a location if you are also targeting its parent. For example, if you are targeting New York City, you must not have the state of New York as one of the targeted locations. You cannot explicitly define inclusions or exclusions that are already implicit. For example, if you explicitly include California, you implicitly exclude all other states. You therefore cannot explicitly exclude Florida, because it is already implicitly excluded. Conversely if you explicitly exclude Florida, you cannot explicitly include California. "
type GeoTargeting {
  "The geographical locations being targeted by the LineItem."
  targetedLocations: [Location]
  "The geographical locations being excluded by the LineItem."
  excludedLocations: [Location]
}

"Defines the criteria a LineItem needs to satisfy to meet its delivery goal."
type Goal {
  "The type of the goal for the \`LineItem\`. It defines the period over which the goal for \`LineItem\` should be reached."
  goalType: GoalTypeEnum
  "The type of the goal unit for the \`LineItem\`."
  unitType: UnitTypeEnum
  "If this is a primary goal, it represents the number or percentage of impressions or clicks that will be reserved for the \`LineItem\`. If the line item is of type LineItemType#SPONSORSHIP, it represents the percentage of available impressions reserved. If the line item is of type LineItemType#BULK or LineItemType#PRICE_PRIORITY, it represents the number of remaining impressions reserved. If the line item is of type LineItemType#NETWORK or LineItemType#HOUSE, it represents the percentage of remaining impressions reserved. If this is a secondary goal, it represents the number of impressions or conversions that the line item will stop serving at if reached. For valid line item types, see LineItem#secondaryGoals."
  units: BigInt
}

"Specifies the type of the goal for a LineItem."
enum GoalTypeEnum {
  "There is a daily goal on the number of ads delivered for this line item. The LineItem#lineItemType must be one of:  LineItemType#SPONSORSHIP LineItemType#NETWORK LineItemType#PRICE_PRIORITY LineItemType#HOUSE LineItemType#ADSENSE LineItemType#AD_EXCHANGE LineItemType#ADMOB LineItemType#BUMPER "
  DAILY
  "There is a goal on the number of ads delivered for this line item during its entire lifetime. The LineItem#lineItemType must be one of:  LineItemType#STANDARD LineItemType#BULK LineItemType#PRICE_PRIORITY LineItemType#ADSENSE LineItemType#AD_EXCHANGE LineItemType#ADMOB LineItemType#CLICK_TRACKING "
  LIFETIME
  "No goal is specified for the number of ads delivered. The LineItem#lineItemType must be one of:  LineItemType#PRICE_PRIORITY LineItemType#AD_EXCHANGE LineItemType#CLICK_TRACKING "
  NONE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Represents the status of objects that represent inventory - ad units and placements."
enum InventoryStatusEnum {
  "The object is active."
  ACTIVE
  "The object has been archived."
  ARCHIVED
  "The object is no longer active."
  INACTIVE
}

"A collection of targeted and excluded ad units and placements."
type InventoryTargeting {
  "A list of targeted AdUnitTargeting."
  targetedAdUnits: [AdUnitTargeting]
  "A list of excluded AdUnitTargeting."
  excludedAdUnits: [AdUnitTargeting]
  "A list of targeted Placement ids."
  targetedPlacementIds: [BigInt]
}

"\`LineItemType\` indicates the priority of a LineItem, determined by the way in which impressions are reserved to be served for it."
enum LineItemTypeEnum {
  "A LineItem using dynamic allocation backed by AdMob."
  ADMOB
  "A LineItem using dynamic allocation backed by AdSense."
  ADSENSE
  "A LineItem using dynamic allocation backed by the Google Ad Exchange."
  AD_EXCHANGE
  "The type of LineItem for which a fixed quantity of impressions or clicks will be delivered at a priority lower than the LineItemType#STANDARD type."
  BULK
  "Represents a non-monetizable video LineItem that targets one or more bumper positions, which are short house video messages used by publishers to separate content from ad breaks."
  BUMPER
  "The type of LineItem used for ads that track ads being served externally of Ad Manager, for example an email newsletter. The click through would reference this ad, and the click would be tracked via this ad."
  CLICK_TRACKING
  "The type of LineItem typically used for ads that promote products and services chosen by the publisher. These usually do not generate revenue and have the lowest delivery priority."
  HOUSE
  "Represents a legacy LineItem that has been migrated from the DFP system. Such line items cannot be created any more. Also, these line items cannot be activated or resumed."
  LEGACY_DFP
  "The type of LineItem most commonly used to fill a site's unsold inventory if not contractually obligated to deliver a requested number of impressions. Users specify the daily percentage of unsold impressions or clicks when creating this line item."
  NETWORK
  "The type of LineItem for which there are no impressions reserved, and will serve for a second price bid. All LineItems of type LineItemType#PREFERRED_DEAL should be created via a ProposalLineItem with a matching type. When creating a LineItem of type LineItemType#PREFERRED_DEAL, the ProposalLineItem#estimatedMinimumImpressions field is required."
  PREFERRED_DEAL
  "The type of LineItem most commonly used to fill a site's unsold inventory if not contractually obligated to deliver a requested number of impressions. Users specify the fixed quantity of unsold impressions or clicks when creating this line item."
  PRICE_PRIORITY
  "The type of LineItem for which a percentage of all the impressions that are being sold are reserved."
  SPONSORSHIP
  "The type of LineItem for which a fixed quantity of impressions or clicks are reserved."
  STANDARD
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"A Location represents a geographical entity that can be targeted. If a location type is not available because of the API version you are using, the location will be represented as just the base class, otherwise it will be sub-classed correctly."
type Location {
  "Uniquely identifies each \`Location\`."
  id: BigInt!
  "The location type for this geographical entity (ex. 'COUNTRY', 'CITY', 'STATE', 'COUNTY', etc.)"
  type: String
  "The nearest location parent's ID for this geographical entity."
  canonicalParentId: Int
  "The localized name of the geographical entity."
  displayName: String
}

"Minutes in an hour. Currently, only 0, 15, 30, and 45 are supported. This field is required."
enum MinuteOfHourEnum {
  "Fifteen minutes past hour."
  FIFTEEN
  "Forty-five minutes past hour."
  FORTY_FIVE
  "Thirty minutes past hour."
  THIRTY
  "Zero minutes past hour."
  ZERO
}

"Provides line items the ability to target or exclude users' mobile applications."
type MobileApplicationTargeting {
  "The IDs that are being targeted or excluded by the LineItem."
  mobileApplicationIds: [BigInt]
  "Indicates whether mobile apps should be targeted or excluded. This attribute is optional and defaults to \`true\`."
  isTargeted: Boolean
}

"Represents a mobile carrier. Carrier targeting is only available to Ad Manager mobile publishers. For a list of current mobile carriers, you can use PublisherQueryLanguageService#mobile_carrier."
type MobileCarrier implements TechnologyInterface {
  "The unique ID of the \`Technology\`. This value is required for all forms of \`TechnologyTargeting\`."
  id: BigInt!
  "The name of the technology being targeting. This value is read-only and is assigned by Google."
  name: String
}

"Represents mobile carriers that are being targeted or excluded by the LineItem."
type MobileCarrierTargeting {
  "Indicates whether mobile carriers should be targeted or excluded. This attribute is optional and defaults to \`true\`."
  isTargeted: Boolean
  "Mobile carriers that are being targeted or excluded by the LineItem."
  mobileCarriers: [TechnologyInterface]
}

"Represents a Mobile Device."
type MobileDevice implements TechnologyInterface {
  "The unique ID of the \`Technology\`. This value is required for all forms of \`TechnologyTargeting\`."
  id: BigInt!
  "The name of the technology being targeting. This value is read-only and is assigned by Google."
  name: String
  "Manufacturer Id."
  manufacturerCriterionId: BigInt
}

"Represents a mobile device submodel."
type MobileDeviceSubmodel implements TechnologyInterface {
  "The unique ID of the \`Technology\`. This value is required for all forms of \`TechnologyTargeting\`."
  id: BigInt!
  "The name of the technology being targeting. This value is read-only and is assigned by Google."
  name: String
  "The mobile device id."
  mobileDeviceCriterionId: BigInt
  "The device manufacturer id."
  deviceManufacturerCriterionId: BigInt
}

"Represents mobile devices that are being targeted or excluded by the LineItem."
type MobileDeviceSubmodelTargeting {
  "Mobile device submodels that are being targeted by the LineItem."
  targetedMobileDeviceSubmodels: [TechnologyInterface]
  "Mobile device submodels that are being excluded by the LineItem."
  excludedMobileDeviceSubmodels: [TechnologyInterface]
}

"Represents mobile devices that are being targeted or excluded by the LineItem."
type MobileDeviceTargeting {
  "Mobile devices that are being targeted by the LineItem."
  targetedMobileDevices: [TechnologyInterface]
  "Mobile devices that are being excluded by the LineItem."
  excludedMobileDevices: [TechnologyInterface]
}

"Represents a money amount."
type Money {
  "Three letter currency code in string format."
  currencyCode: String
  "Money values are always specified in terms of micros which are a millionth of the fundamental currency unit. For US dollars, $1 is 1,000,000 micros."
  microAmount: BigInt
}

"Contains a numeric value."
type NumberValue implements ValueInterface {
  _: Boolean
  "The numeric value represented as a string."
  value: String
}

"Contains an object value.  This object is experimental! ObjectValue is an experimental, innovative, and rapidly changing new feature for Ad Manager. Unfortunately, being on the bleeding edge means that we may make backwards-incompatible changes to ObjectValue. We will inform the community when this feature is no longer experimental."
interface ObjectValueInterface implements ValueInterface {
  _: Boolean
}

"Represents an Operating System, such as Linux, Mac OS or Windows."
type OperatingSystem implements TechnologyInterface {
  "The unique ID of the \`Technology\`. This value is required for all forms of \`TechnologyTargeting\`."
  id: BigInt!
  "The name of the technology being targeting. This value is read-only and is assigned by Google."
  name: String
}

"Represents operating systems that are being targeted or excluded by the LineItem."
type OperatingSystemTargeting {
  "Indicates whether operating systems should be targeted or excluded. This attribute is optional and defaults to \`true\`."
  isTargeted: Boolean
  "Operating systems that are being targeted or excluded by the LineItem."
  operatingSystems: [TechnologyInterface]
}

"Represents a specific version of an operating system."
type OperatingSystemVersion implements TechnologyInterface {
  "The unique ID of the \`Technology\`. This value is required for all forms of \`TechnologyTargeting\`."
  id: BigInt!
  "The name of the technology being targeting. This value is read-only and is assigned by Google."
  name: String
  "The operating system major version."
  majorVersion: Int
  "The operating system minor version."
  minorVersion: Int
  "The operating system micro version."
  microVersion: Int
}

"Represents operating system versions that are being targeted or excluded by the LineItem."
type OperatingSystemVersionTargeting {
  "Operating system versions that are being targeted by the LineItem."
  targetedOperatingSystemVersions: [TechnologyInterface]
  "Operating system versions that are being excluded by the LineItem."
  excludedOperatingSystemVersions: [TechnologyInterface]
}

"Types of programmatic creative sources."
enum ProgrammaticCreativeSourceEnum {
  "Indicates that the programmatic line item is associated with creatives provided by the advertiser."
  ADVERTISER
  "Indicates that the programmatic line item is associated with creatives provided by the publisher."
  PUBLISHER
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Represents the platform which requests and renders the ad."
enum RequestPlatformEnum {
  "Represents a request made from a web browser. This includes both desktop and mobile web."
  BROWSER
  "Represents a request made from a mobile application. This includes mobile app interstitial and rewarded video requests."
  MOBILE_APP
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "Represents a request made from a video player that is playing publisher content. This includes video players embedded in web pages and mobile applications, and connected TV screens."
  VIDEO_PLAYER
}

"Provides line items the ability to target the platform that requests and renders the ad. The following rules apply for RequestPlatformTargeting  RequestPlatformTargeting must be specified for video line items. Empty values for RequestPlatformTargeting#targetedRequestPlatforms mean that all request platforms will be targeted. RequestPlatformTargeting is read-only and assigned by Google for non-video line items. RequestPlatformTargeting is read-only and assigned by Google for line items generated from proposal line items. "
type RequestPlatformTargeting {
  targetedRequestPlatforms: [RequestPlatformEnum]
}

"Describes the roadblocking types."
enum RoadblockingTypeEnum {
  "All or none of the creatives from a line item will serve. This option will only work if served to a GPT tag using SRA (single request architecture mode)."
  ALL_ROADBLOCK
  "As many creatives from a line item as can fit on a page will serve. This could mean anywhere from one to all of a line item's creatives given the size constraints of ad slots on a page."
  AS_MANY_AS_POSSIBLE
  "A master/companion CreativeSet roadblocking type. A LineItem#creativePlaceholders must be set accordingly."
  CREATIVE_SET
  "Any number of creatives from a line item can serve together at a time."
  ONE_OR_MORE
  "Only one creative from a line item can serve at a time."
  ONLY_ONE
}

"Contains a set of Values. May not contain duplicates."
type SetValue implements ValueInterface {
  _: Boolean
  "The values. They must all be the same type of \`Value\` and not contain duplicates."
  values: [ValueInterface]
}

"Represents the dimensions of an AdUnit, LineItem or Creative. For interstitial size (out-of-page), native, ignored and fluid size, Size must be 1x1."
type Size {
  "The width of the AdUnit, LineItem or Creative."
  width: Int
  "The height of the AdUnit, LineItem or Creative."
  height: Int
  "Whether this size represents an aspect ratio."
  isAspectRatio: Boolean
}

"The different types of skippable ads."
enum SkippableAdTypeEnum {
  "Any skippable or not skippable. This is only for programmatic case when the creative skippability is decided by the buyside."
  ANY
  "Skippable ad type is disabled."
  DISABLED
  "Skippable ad type is enabled."
  ENABLED
  "Skippable in-stream ad type."
  INSTREAM_SELECT
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Specifies the start type to use for an entity with a start date time field. For example, a LineItem or LineItemCreativeAssociation."
enum StartDateTimeTypeEnum {
  "The entity will start serving immediately. #startDateTime in the request is ignored and will be set to the current time. Additionally, #startDateTimeType will be set to StartDateTimeType#USE_START_DATE_TIME."
  IMMEDIATELY
  "The entity will start serving one hour from now. #startDateTime in the request is ignored and will be set to one hour from the current time. Additionally, #startDateTimeType will be set to StartDateTimeType#USE_START_DATE_TIME."
  ONE_HOUR_FROM_NOW
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "Use the value in #startDateTime."
  USE_START_DATE_TIME
}

"\`Stats\` contains trafficking statistics for LineItem and LineItemCreativeAssociation objects"
type Stats {
  "The number of impressions delivered."
  impressionsDelivered: BigInt
  "The number of clicks delivered."
  clicksDelivered: BigInt
  "The number of video completions delivered."
  videoCompletionsDelivered: BigInt
  "The number of video starts delivered."
  videoStartsDelivered: BigInt
  "The number of viewable impressions delivered."
  viewableImpressionsDelivered: BigInt
}

"Contains targeting criteria for LineItem objects. See LineItem#targeting."
type Targeting {
  "Specifies what geographical locations are targeted by the LineItem. This attribute is optional."
  geoTargeting: GeoTargeting
  "Specifies what inventory is targeted by the LineItem. This attribute is required. The line item must target at least one ad unit or placement."
  inventoryTargeting: InventoryTargeting!
  "Specifies the days of the week and times that are targeted by the LineItem. This attribute is optional."
  dayPartTargeting: DayPartTargeting
  "Specifies the dates and time ranges that are targeted by the LineItem. This attribute is optional."
  dateTimeRangeTargeting: DateTimeRangeTargeting
  "Specifies the browsing technologies that are targeted by the LineItem. This attribute is optional."
  technologyTargeting: TechnologyTargeting
  "Specifies the collection of custom criteria that is targeted by the LineItem.  Once the LineItem is updated or modified with custom targeting, the server may return a normalized, but equivalent representation of the custom targeting expression.  \`customTargeting\` will have up to three levels of expressions including itself.   The top level \`CustomCriteriaSet\` i.e. the \`customTargeting\` object can only contain a CustomCriteriaSet.LogicalOperator#OR of all its children.   The second level of \`CustomCriteriaSet\` objects can only contain CustomCriteriaSet.LogicalOperator#AND of all their children. If a CustomCriteria is placed on this level, the server will wrap it in a CustomCriteriaSet.   The third level can only comprise of CustomCriteria objects.   The resulting custom targeting tree would be of the form:   "
  customTargeting: CustomCriteriaSet
  "Specifies the domains or subdomains that are targeted or excluded by the LineItem. Users visiting from an IP address associated with those domains will be targeted or excluded. This attribute is optional."
  userDomainTargeting: UserDomainTargeting
  "Specifies the video categories and individual videos targeted by the LineItem."
  contentTargeting: ContentTargeting
  "Specifies targeting against video position types."
  videoPositionTargeting: VideoPositionTargeting
  "Specifies targeting against mobile applications."
  mobileApplicationTargeting: MobileApplicationTargeting
  "Specifies whether buyer user lists are targeted on a programmatic LineItem or ProposalLineItem. This attribute is readonly and is populated by Google."
  buyerUserListTargeting: BuyerUserListTargeting
  "Specifies the request platforms that are targeted by the LineItem. This attribute is required for video line items. This value is modifiable for video line items, but read-only for non-video line items. This value is read-only for video line items generated from proposal line items."
  requestPlatformTargeting: RequestPlatformTargeting!
}

"Represents the types of team access supported for orders."
enum TeamAccessTypeEnum {
  "The level of access in which team members cannot view or edit a team's orders."
  NONE
  "The level of access in which team members can only view a team's orders."
  READ_ONLY
  "The level of access in which team members can view and edit a team's orders."
  READ_WRITE
}

"Represents a technology entity that can be targeted."
interface TechnologyInterface {
  "The unique ID of the \`Technology\`. This value is required for all forms of \`TechnologyTargeting\`."
  id: BigInt!
  "The name of the technology being targeting. This value is read-only and is assigned by Google."
  name: String
}

"Provides LineItem objects the ability to target or exclude technologies."
type TechnologyTargeting {
  "The bandwidth groups being targeted by the LineItem."
  bandwidthGroupTargeting: BandwidthGroupTargeting
  "The browsers being targeted by the LineItem."
  browserTargeting: BrowserTargeting
  "The languages of browsers being targeted by the LineItem."
  browserLanguageTargeting: BrowserLanguageTargeting
  "The device capabilities being targeted by the LineItem."
  deviceCapabilityTargeting: DeviceCapabilityTargeting
  "The device categories being targeted by the LineItem."
  deviceCategoryTargeting: DeviceCategoryTargeting
  "The device manufacturers being targeted by the LineItem."
  deviceManufacturerTargeting: DeviceManufacturerTargeting
  "The mobile carriers being targeted by the LineItem."
  mobileCarrierTargeting: MobileCarrierTargeting
  "The mobile devices being targeted by the LineItem."
  mobileDeviceTargeting: MobileDeviceTargeting
  "The mobile device submodels being targeted by the LineItem."
  mobileDeviceSubmodelTargeting: MobileDeviceSubmodelTargeting
  "The operating systems being targeted by the LineItem."
  operatingSystemTargeting: OperatingSystemTargeting
  "The operating system versions being targeted by the LineItem."
  operatingSystemVersionTargeting: OperatingSystemVersionTargeting
}

"Contains a string value."
type TextValue implements ValueInterface {
  _: Boolean
  "The string value."
  value: String
}

"Represents a set of declarations about what (if any) third party companies are associated with a given creative. This can be set at the network level, as a default for all creatives, or overridden for a particular creative."
type ThirdPartyDataDeclaration {
  declarationType: DeclarationTypeEnum
  thirdPartyCompanyIds: [BigInt]
}

"Contains third party auto-pixeling settings for cross-sell Partners."
type ThirdPartyMeasurementSettings {
  "A field to determine the type of ThirdPartyViewabilityIntegrationPartner. This field default is NONE."
  viewabilityPartner: ThirdPartyViewabilityIntegrationPartnerEnum
  "The third party partner id for YouTube viewability verification."
  viewabilityClientId: String
  "The reporting id that maps viewability partner data with a campaign (or a group of related campaigns) specific data."
  viewabilityReportingId: String
  "A field to determine the type of advertiser's ThirdPartyReachIntegrationPartner. This field default is UNKNOWN."
  reachPartner: ThirdPartyReachIntegrationPartnerEnum
  "The third party partner id for YouTube reach verification for advertiser."
  reachClientId: String
  "The reporting id that maps reach partner data with a campaign (or a group of related campaigns) specific data for advertiser."
  reachReportingId: String
  "A field to determine the type of publisher's ThirdPartyReachIntegrationPartner. This field default is UNKNOWN."
  publisherReachPartner: ThirdPartyReachIntegrationPartnerEnum
  "The third party partner id for YouTube reach verification for publisher."
  publisherReachClientId: String
  "The reporting id that maps reach partner data with a campaign (or a group of related campaigns) specific data for publisher."
  publisherReachReportingId: String
}

"Possible options for third-party reach integration."
enum ThirdPartyReachIntegrationPartnerEnum {
  "Indicates third-party reach integration partner Comscore."
  COMSCORE
  "Indicates third-party reach integration partner Nielsen."
  NIELSEN
  "Indicates there's no third-party reach integration partner."
  NONE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Possible options for third-party viewabitility integration."
enum ThirdPartyViewabilityIntegrationPartnerEnum {
  "Indicates third-party viewability integration partner Double Verify."
  DOUBLE_VERIFY
  "Indicates third-party viewability integration partner Integral Ad Science."
  INTEGRAL_AD_SCIENCE
  "Indicates third-party viewability integration partner Oracle Moat."
  MOAT
  "Indicates there's no third-party viewability integration partner."
  NONE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Represents a specific time in a day."
type TimeOfDay {
  "Hour in 24 hour time (0..24). This field must be between 0 and 24, inclusive. This field is required."
  hour: Int
  "Minutes in an hour. Currently, only 0, 15, 30, and 45 are supported. This field is required."
  minute: MinuteOfHourEnum
}

"Represent the possible time units for frequency capping."
enum TimeUnitEnum {
  DAY
  HOUR
  LIFETIME
  MINUTE
  MONTH
  "Per pod of ads in a video stream. Only valid for entities in a EnvironmentType#VIDEO_PLAYER environment."
  POD
  "Per video stream. Only valid for entities in a EnvironmentType#VIDEO_PLAYER environment."
  STREAM
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  WEEK
}

"Indicates the type of unit used for defining a reservation. The CostType can differ from the UnitType - an ad can have an impression goal, but be billed by its click. Usually CostType and UnitType will refer to the same unit."
enum UnitTypeEnum {
  "The number of clicks reported by creatives associated with the line item. The LineItem#lineItemType must be LineItemType#STANDARD, LineItemType#BULK or LineItemType#PRICE_PRIORITY."
  CLICKS
  "The number of click-through Cost-Per-Action (CPA) conversions from creatives associated with the line item. This is only supported as secondary goal and the LineItem#costType must be CostType#CPA."
  CLICK_THROUGH_CPA_CONVERSIONS
  "The number of impressions served by creatives associated with the line item. Line items of all LineItemType support this \`UnitType\`."
  IMPRESSIONS
  "The number of total Cost-Per-Action (CPA) conversions from creatives associated with the line item. This is only supported as secondary goal and the LineItem#costType must be CostType#CPA."
  TOTAL_CPA_CONVERSIONS
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "The number of viewable impressions reported by creatives associated with the line item. The LineItem#lineItemType must be LineItemType#STANDARD."
  VIEWABLE_IMPRESSIONS
  "The number of view-through Cost-Per-Action (CPA) conversions from creatives associated with the line item. This is only supported as secondary goal and the LineItem#costType must be CostType#CPA."
  VIEW_THROUGH_CPA_CONVERSIONS
}

"Represents the result of performing an action on objects."
type UpdateResult {
  "The number of objects that were changed as a result of performing the action."
  numChanges: Int
}

"Provides line items the ability to target or exclude users visiting their websites from a list of domains or subdomains."
type UserDomainTargeting {
  "The domains or subdomains that are being targeted or excluded by the LineItem. This attribute is required and the maximum length of each domain is 67 characters."
  domains: [String]!
  "Indicates whether domains should be targeted or excluded. This attribute is optional and defaults to \`true\`."
  targeted: Boolean
}

"\`Value\` represents a value."
interface ValueInterface {
  _: Boolean
}

"Represents the options for targetable bumper positions, surrounding an ad pod, within a video stream. This includes before and after the supported ad pod positions, VideoPositionType#PREROLL, VideoPositionType#MIDROLL, and VideoPositionType#POSTROLL."
enum VideoBumperTypeEnum {
  "Represents the bumper position after the ad pod."
  AFTER
  "Represents the bumper position before the ad pod."
  BEFORE
}

"Represents a targetable position within a video. A video ad can be targeted to a position (pre-roll, all mid-rolls, or post-roll), or to a specific mid-roll index."
type VideoPosition {
  "The type of video position (pre-roll, mid-roll, or post-roll)."
  positionType: VideoPositionTypeEnum
  "The index of the mid-roll to target. Only valid if the positionType is VideoPositionType#MIDROLL, otherwise this field will be ignored."
  midrollIndex: Int
}

"Represents the options for targetable positions within a video."
type VideoPositionTarget {
  "The video position to target. This attribute is required."
  videoPosition: VideoPosition!
  "The video bumper type to target. To target a video position or a pod position, this value must be null. To target a bumper position this value must be populated and the line item must have a bumper type. To target a custom ad spot, this value must be null."
  videoBumperType: VideoBumperTypeEnum
  "The video position within a pod to target. To target a video position or a bumper position, this value must be null. To target a position within a pod this value must be populated. To target a custom ad spot, this value must be null."
  videoPositionWithinPod: VideoPositionWithinPod
  "A custom spot AdSpot to target. To target a video position, a bumper type or a video position within a pod this value must be null."
  adSpotId: BigInt
}

"Represents positions within and around a video where ads can be targeted to. Example positions could be \`pre-roll\` (before the video plays), \`post-roll\` (after a video has completed playback) and \`mid-roll\` (during video playback). Empty video position targeting means that all video positions are allowed. If a bumper line item has empty video position targeting it will be updated to target all bumper positions."
type VideoPositionTargeting {
  "The VideoTargetingPosition objects being targeted by the video LineItem."
  targetedPositions: [VideoPositionTarget]
}

"Represents a targetable position within a video."
enum VideoPositionTypeEnum {
  "This position targets all of the above video positions."
  ALL
  "The position defined as showing within the middle of the playing video."
  MIDROLL
  "The position defined as showing after the video is completed."
  POSTROLL
  "The position defined as showing before the video starts playing."
  PREROLL
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Represents a targetable position within a pod within a video stream. A video ad can be targeted to any position in the pod (first, second, third ... last). If there is only 1 ad in a pod, either first or last will target that position."
type VideoPositionWithinPod {
  "The specific index of the pod. The index is defined as: 1 = first 2 = second 3 = third .... 100 = last 100 will always be the last position. For example, for a pod with 5 positions, 100 would target position 5. Multiple targets against the index 100 can exist. Positions over 100 are not supported."
  index: Int
}

`;
