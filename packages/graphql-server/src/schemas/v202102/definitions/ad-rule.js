// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"An AdRule contains data that the ad server will use to generate a playlist of video ads."
type AdRule {
  "The unique ID of the AdRule. This value is readonly and is assigned by Google."
  id: BigInt!
  "The unique name of the AdRule. This attribute is required to create an ad rule and has a maximum length of 255 characters."
  name: String!
  "The priority of the AdRule. This attribute is required and can range from 1 to 1000, with 1 being the highest possible priority. Changing an ad rule's priority can affect the priorities of other ad rules. For example, increasing an ad rule's priority from 5 to 1 will shift the ad rules that were previously in priority positions 1 through 4 down one."
  priority: Int!
  "The targeting criteria of the AdRule. This attribute is required."
  targeting: Targeting!
  "This AdRule object's start date and time. This attribute is required and must be a date in the future for new ad rules."
  startDateTime: DateTime!
  "Specifies whether to start using the AdRule right away, in an hour, etc. This attribute is optional and defaults to StartDateTimeType#USE_START_DATE_TIME."
  startDateTimeType: StartDateTimeTypeEnum
  "This AdRule object's end date and time. This attribute is required unless \`unlimitedEndDateTime\` is set to \`true\`. If specified, it must be after the \`startDateTime\`."
  endDateTime: DateTime!
  "Specifies whether the AdRule has an end time. This attribute is optional and defaults to false."
  unlimitedEndDateTime: Boolean
  "The AdRuleStatus of the ad rule. This attribute is read-only and defaults to AdRuleStatus#INACTIVE."
  status: AdRuleStatusEnum
  "The FrequencyCapBehavior of the AdRule. This attribute is optional and defaults to FrequencyCapBehavior#DEFER."
  frequencyCapBehavior: FrequencyCapBehaviorEnum
  "This AdRule object's frequency cap for the maximum impressions per stream. This attribute is optional and defaults to 0."
  maxImpressionsPerLineItemPerStream: Int
  "This AdRule object's frequency cap for the maximum impressions per pod. This attribute is optional and defaults to 0."
  maxImpressionsPerLineItemPerPod: Int
  "This AdRule object's pre-roll slot. This attribute is required."
  preroll: BaseAdRuleSlotInterface!
  "This AdRule object's mid-roll slot. This attribute is required."
  midroll: BaseAdRuleSlotInterface!
  "This AdRule object's post-roll slot. This attribute is required."
  postroll: BaseAdRuleSlotInterface!
}

"An AdRule contains data that the ad server will use to generate a playlist of video ads."
input AdRuleInput {
  "The unique name of the AdRule. This attribute is required to create an ad rule and has a maximum length of 255 characters."
  name: String!
  "The priority of the AdRule. This attribute is required and can range from 1 to 1000, with 1 being the highest possible priority. Changing an ad rule's priority can affect the priorities of other ad rules. For example, increasing an ad rule's priority from 5 to 1 will shift the ad rules that were previously in priority positions 1 through 4 down one."
  priority: Int!
  "The targeting criteria of the AdRule. This attribute is required."
  targeting: TargetingInput!
  "This AdRule object's start date and time. This attribute is required and must be a date in the future for new ad rules."
  startDateTime: DateTime!
  "Specifies whether to start using the AdRule right away, in an hour, etc. This attribute is optional and defaults to StartDateTimeType#USE_START_DATE_TIME."
  startDateTimeType: StartDateTimeTypeEnum
  "This AdRule object's end date and time. This attribute is required unless \`unlimitedEndDateTime\` is set to \`true\`. If specified, it must be after the \`startDateTime\`."
  endDateTime: DateTime!
  "Specifies whether the AdRule has an end time. This attribute is optional and defaults to false."
  unlimitedEndDateTime: Boolean
  "The FrequencyCapBehavior of the AdRule. This attribute is optional and defaults to FrequencyCapBehavior#DEFER."
  frequencyCapBehavior: FrequencyCapBehaviorEnum
  "This AdRule object's frequency cap for the maximum impressions per stream. This attribute is optional and defaults to 0."
  maxImpressionsPerLineItemPerStream: Int
  "This AdRule object's frequency cap for the maximum impressions per pod. This attribute is optional and defaults to 0."
  maxImpressionsPerLineItemPerPod: Int
  "This AdRule object's pre-roll slot. This attribute is required."
  preroll: JSONObject!
  "This AdRule object's mid-roll slot. This attribute is required."
  midroll: JSONObject!
  "This AdRule object's post-roll slot. This attribute is required."
  postroll: JSONObject!
}

"Captures a page of AdRule objects."
type AdRulePage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of ad rules contained within this page."
  results: [AdRule]
}

"The types of behaviors for ads within a ad rule slot."
enum AdRuleSlotBehaviorEnum {
  "This ad rule always includes this slot's ads."
  ALWAYS_SHOW
  "Defer to lower priority rules. This ad rule doesn't specify guidelines for this slot's ads."
  DEFER
  "This ad rule never includes this slot's ads."
  NEVER_SHOW
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Types of bumper ads on an ad rule slot."
enum AdRuleSlotBumperEnum {
  "Show a bumper ad after the slot's other ads."
  AFTER
  "Show a bumper ad before the slot's other ads."
  BEFORE
  "Show a bumper before and after the slot's other ads."
  BEFORE_AND_AFTER
  "Do not show a bumper ad."
  NONE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Represents the status of ad rules and ad rule slots."
enum AdRuleStatusEnum {
  "Created and ready to be served. Is user-visible."
  ACTIVE
  "Marked as deleted, not user-visible."
  DELETED
  "Paused, user-visible."
  INACTIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"A AdSpot is a targetable entity used in the creation of AdRule objects. A ad spot contains a variable number of ads and has constraints (ad duration, reservation type, etc) on the ads that can appear in it."
type AdSpot {
  "The unique ID of the AdSpot. This value is readonly and is assigned by Google."
  id: BigInt!
  "Name of the AdSpot. The name is case insenstive and can be referenced in ad tags. This value is required if \`customSpot\` is true, and cannot be set otherwise. You can use alphanumeric characters and symbols other than the following: ', ', =, !, +, #, *, ~, ;, ^, (, ), <, >, [, ], the white space character."
  name: String!
  "Descriptive name for the AdSpot.This value is optional if \`customSpot\` is true, and cannot be set otherwise."
  displayName: String
  "Whether this ad spot is a custom spot. This field is optional and defaults to false. Custom spots can be reused and targeted in the targeting picker."
  customSpot: Boolean
  "Whether this ad spot is a flexible spot. This field is optional and defaults to false. Flexible spots are allowed to have no max number of ads."
  flexible: Boolean
  "The maximum total duration for this AdSpot. This field is optional, defaults to 0, and supports precision to the nearest second."
  maxDurationMillis: BigInt
  "The maximum number of ads allowed in the AdSpot. This field is optional and defaults to O. A \`maxNumberOfAds\` of 0 means that there is no maximum for the number of ads in the ad spot. No max ads is only supported for ad spots that have \`flexible\` set to true."
  maxNumberOfAds: Int
  "The SubpodTargetingType determines how this ad spot can be targeted. This field is required."
  targetingType: AdSpotTargetingTypeEnum
  "Whether backfill is blocked in this ad spot. This field is optional and defaults to false."
  backfillBlocked: Boolean
  "The set of line item types that may appear in the ad spot. This field is optional and defaults to an empty set, which means that all types are allowed. Note, backfill reservation types are controlled via the \`backfillBlocked\` field."
  allowedLineItemTypes: [LineItemTypeEnum]
  "Whether inventory sharing is blocked in this ad spot. This field is optional and defaults to false."
  inventorySharingBlocked: Boolean
}

"The different options for how ad spots are filled. Only some allocations of ads to subpods produce a valid final pod."
enum AdSpotFillTypeEnum {
  "The ad spot is always 'satisfied', whether empty or nonempty."
  OPTIONAL
  "If this ad spot is empty, the overall pod is invalid."
  REQUIRED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"A AdSpot is a targetable entity used in the creation of AdRule objects. A ad spot contains a variable number of ads and has constraints (ad duration, reservation type, etc) on the ads that can appear in it."
input AdSpotInput {
  "Name of the AdSpot. The name is case insenstive and can be referenced in ad tags. This value is required if \`customSpot\` is true, and cannot be set otherwise. You can use alphanumeric characters and symbols other than the following: ', ', =, !, +, #, *, ~, ;, ^, (, ), <, >, [, ], the white space character."
  name: String!
  "Descriptive name for the AdSpot.This value is optional if \`customSpot\` is true, and cannot be set otherwise."
  displayName: String
  "Whether this ad spot is a custom spot. This field is optional and defaults to false. Custom spots can be reused and targeted in the targeting picker."
  customSpot: Boolean
  "Whether this ad spot is a flexible spot. This field is optional and defaults to false. Flexible spots are allowed to have no max number of ads."
  flexible: Boolean
  "The maximum total duration for this AdSpot. This field is optional, defaults to 0, and supports precision to the nearest second."
  maxDurationMillis: BigInt
  "The maximum number of ads allowed in the AdSpot. This field is optional and defaults to O. A \`maxNumberOfAds\` of 0 means that there is no maximum for the number of ads in the ad spot. No max ads is only supported for ad spots that have \`flexible\` set to true."
  maxNumberOfAds: Int
  "The SubpodTargetingType determines how this ad spot can be targeted. This field is required."
  targetingType: AdSpotTargetingTypeEnum
  "Whether backfill is blocked in this ad spot. This field is optional and defaults to false."
  backfillBlocked: Boolean
  "The set of line item types that may appear in the ad spot. This field is optional and defaults to an empty set, which means that all types are allowed. Note, backfill reservation types are controlled via the \`backfillBlocked\` field."
  allowedLineItemTypes: [LineItemTypeEnum]
  "Whether inventory sharing is blocked in this ad spot. This field is optional and defaults to false."
  inventorySharingBlocked: Boolean
}

"Captures a page of AdSpot objects."
type AdSpotPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of ad spot contained within this page."
  results: [AdSpot]
}

"Defines the targeting behavior of an ad spot."
enum AdSpotTargetingTypeEnum {
  "Only line items targeting this ad spots explicitly may serve in it"
  EXPLICITLY_TARGETED
  "If house ads are an allowed reservation type, they may serve in the ad spot regardless of whether they explicitly target it. Ads of other reservation types (whose type is allowed in the ad spot), may serve in the ad spot only if explicitly targeted."
  EXPLICITLY_TARGETED_EXCEPT_HOUSE
  "Line items not targeting this ad spot explicitly may serve in it."
  NOT_REQUIRED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Simple object representing an ad slot within an AdRule. Ad rule slots contain information about the types/number of ads to display, as well as additional information on how the ad server will generate playlists."
interface BaseAdRuleSlotInterface {
  "The AdRuleSlotBehavior for video ads for this slot. This attribute is optional and defaults to AdRuleSlotBehavior#DEFER. Indicates whether video ads are allowed for this slot, or if the decision is deferred to a lower-priority ad rule."
  slotBehavior: AdRuleSlotBehaviorEnum
  "The maximum duration in milliseconds of video ads within this slot. This attribute is optional and defaults to 0."
  maxVideoAdDuration: BigInt
  "The frequency type for video ads in this ad rule slot. This attribute is required for mid-rolls, but if this is not a mid-roll, the value is set to MidrollFrequencyType#NONE."
  videoMidrollFrequencyType: MidrollFrequencyTypeEnum!
  "The mid-roll frequency of this ad rule slot for video ads. This attribute is required for mid-rolls, but if MidrollFrequencyType is set to MidrollFrequencyType#NONE, this value should be ignored. For example, if this slot has a frequency type of MidrollFrequencyType#EVERY_N_SECONDS and \`#videoMidrollFrequency\` = '60', this would mean ' play a mid-roll every 60 seconds.'"
  videoMidrollFrequency: String!
  "The AdRuleSlotBumper for this slot. This attribute is optional and defaults to AdRuleSlotBumper#NONE."
  bumper: AdRuleSlotBumperEnum
  "The maximum duration of bumper ads within this slot. This attribute is optional and defaults to 0."
  maxBumperDuration: BigInt
  "The maximum pod duration in milliseconds for this slot. This attribute is optional and defaults to 0."
  maxPodDuration: BigInt
  "The maximum number of ads allowed in a pod in this slot. This attribute is optional and defaults to 0."
  maxAdsInPod: Int
  "ID of a BreakTemplate that defines what kinds of ads show at which positions within this slot. This field is optional and only supported on OptimizedPoddingAdRuleSlot entities."
  breakTemplateId: BigInt
}

"A BreakTemplate defines what kinds of ads show at which positions within a pod. Break templates are made up of AdSpot objects. A break template must have a single ad spot that has \`AdSpot#flexible\` set to true."
type BreakTemplate {
  "The unique ID of the BreakTemplate. This value is readonly and is assigned by Google."
  id: BigInt!
  "Whether this is custom template. Custom templates get created outside of the ad rule workflow and can be referenced in ad tags. Only custom templates can have names and display names."
  customTemplate: Boolean
  "Name of the BreakTemplate. The name is case insenstive and can be referenced in ad tags. This value is required if \`customTemplate\` is true, and cannot be set otherwise. You can use alphanumeric characters and symbols other than the following: ', ', =, !, +, #, *, ~, ;, ^, (, ), <, >, [, ], the white space character."
  name: String!
  "Descriptive name for the BreakTemplateDto. This value is optional if \`customTemplate\` is true, and cannot be set otherwise."
  displayName: String
  "The list of the BreakTemplateMember objects in the order in which they should appear in the ad pod. Each BreakTemplateMember has a reference to a AdSpot, which defines what kinds of ads can appear at that position, as well as other metadata that defines how each ad spot should be filled."
  breakTemplateMembers: [BreakTemplateBreakTemplateMember]
}

"A building block of a pod template."
type BreakTemplateBreakTemplateMember {
  "The ID of the AdSpot that has the settings about what kinds of ads can appear in this position of the BreakTemplate."
  adSpotId: BigInt
  "The behavior for how the AdSpot should be filled in the context of the BreakTemplate."
  adSpotFillType: AdSpotFillTypeEnum
}

"A building block of a pod template."
input BreakTemplateBreakTemplateMemberInput {
  "The ID of the AdSpot that has the settings about what kinds of ads can appear in this position of the BreakTemplate."
  adSpotId: BigInt
  "The behavior for how the AdSpot should be filled in the context of the BreakTemplate."
  adSpotFillType: AdSpotFillTypeEnum
}

"A BreakTemplate defines what kinds of ads show at which positions within a pod. Break templates are made up of AdSpot objects. A break template must have a single ad spot that has \`AdSpot#flexible\` set to true."
input BreakTemplateInput {
  "Whether this is custom template. Custom templates get created outside of the ad rule workflow and can be referenced in ad tags. Only custom templates can have names and display names."
  customTemplate: Boolean
  "Name of the BreakTemplate. The name is case insenstive and can be referenced in ad tags. This value is required if \`customTemplate\` is true, and cannot be set otherwise. You can use alphanumeric characters and symbols other than the following: ', ', =, !, +, #, *, ~, ;, ^, (, ), <, >, [, ], the white space character."
  name: String!
  "Descriptive name for the BreakTemplateDto. This value is optional if \`customTemplate\` is true, and cannot be set otherwise."
  displayName: String
  "The list of the BreakTemplateMember objects in the order in which they should appear in the ad pod. Each BreakTemplateMember has a reference to a AdSpot, which defines what kinds of ads can appear at that position, as well as other metadata that defines how each ad spot should be filled."
  breakTemplateMembers: [BreakTemplateBreakTemplateMemberInput]
}

"Captures a page of BreakTemplate objects."
type BreakTemplatePage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of break templates contained within this page."
  results: [BreakTemplate]
}

"Creates new AdRule objects. @param adRules the ad rules to create @return the created ad rules with their IDs filled in"
input CreateAdRulesInput {
  adRules: [AdRuleInput]
}

"Creates new AdSpot objects. @param adSpots the ad spots to create @return the created ad spots with their IDs filled in"
input CreateAdSpotsInput {
  adSpots: [AdSpotInput]
}

"Creates new breakTemplate objects. @param breakTemplate the break template to create @return the created break template with their IDs filled in"
input CreateBreakTemplatesInput {
  breakTemplate: [BreakTemplateInput]
}

"Types of behavior for frequency caps within ad rules."
enum FrequencyCapBehaviorEnum {
  "Defer frequency cap decisions to the next ad rule in priority order."
  DEFER
  "Turn off all frequency caps."
  TURN_OFF
  "Turn on at least one of the frequency caps."
  TURN_ON
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Gets an AdRulePage of AdRule objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` AdRule#id (AdRule#adRuleId beginning in v201702)   \`name\` AdRule#name   \`priority\` AdRule#priority   \`status\` AdRule#status  @param filterStatement a Publisher Query Language statement used to filter a set of ad rules @return the ad rules that match the given filter @throws ApiException if the ID of the active network does not exist or there is a backend error"
input GetAdRulesByStatementInput {
  statement: StatementInput
}

"Gets a AdSpotPage of AdSpot objects that satisfy the given Statement#query. @param filterStatement a Publisher Query Language statement to filter a list of ad spots @return the ad spots that match the filter"
input GetAdSpotsByStatementInput {
  filterStatement: StatementInput
}

"Gets a BreakTemplatePage of BreakTemplate objects that satisfy the given Statement#query. @param filterStatement a Publisher Query Language statement to filter a list of breakTemplate @return the break template that match the filter"
input GetBreakTemplatesByStatementInput {
  filterStatement: StatementInput
}

"Frequency types for mid-roll ad rule slots."
enum MidrollFrequencyTypeEnum {
  "\`MidrollFrequency\` is a cue point interval and is a single integer value, such as '5', which means 'play a mid-roll every 5th cue point'."
  EVERY_N_CUEPOINTS
  "\`MidrollFrequency\` is a time interval and mentioned as a single numeric value in seconds. For example, '100' would mean 'play a mid-roll every 100 seconds'."
  EVERY_N_SECONDS
  "Same as #FIXED_TIME, except the values represent the ordinal cue points ('1,3,5', for example)."
  FIXED_CUE_POINTS
  "\`MidrollFrequency\` is a comma-delimited list of points in time (in seconds) when an ad should play. For example, '100,300' would mean 'play an ad at 100 seconds and 300 seconds'."
  FIXED_TIME
  "The ad rule slot is not a mid-roll and hence \`MidrollFrequency\` should be ignored."
  NONE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"An ad rule slot with no podding. It is defined by a BaseAdRuleSlot#maxVideoAdDuration."
type NoPoddingAdRuleSlot implements BaseAdRuleSlotInterface {
  "The AdRuleSlotBehavior for video ads for this slot. This attribute is optional and defaults to AdRuleSlotBehavior#DEFER. Indicates whether video ads are allowed for this slot, or if the decision is deferred to a lower-priority ad rule."
  slotBehavior: AdRuleSlotBehaviorEnum
  "The maximum duration in milliseconds of video ads within this slot. This attribute is optional and defaults to 0."
  maxVideoAdDuration: BigInt
  "The frequency type for video ads in this ad rule slot. This attribute is required for mid-rolls, but if this is not a mid-roll, the value is set to MidrollFrequencyType#NONE."
  videoMidrollFrequencyType: MidrollFrequencyTypeEnum!
  "The mid-roll frequency of this ad rule slot for video ads. This attribute is required for mid-rolls, but if MidrollFrequencyType is set to MidrollFrequencyType#NONE, this value should be ignored. For example, if this slot has a frequency type of MidrollFrequencyType#EVERY_N_SECONDS and \`#videoMidrollFrequency\` = '60', this would mean ' play a mid-roll every 60 seconds.'"
  videoMidrollFrequency: String!
  "The AdRuleSlotBumper for this slot. This attribute is optional and defaults to AdRuleSlotBumper#NONE."
  bumper: AdRuleSlotBumperEnum
  "The maximum duration of bumper ads within this slot. This attribute is optional and defaults to 0."
  maxBumperDuration: BigInt
  "The maximum pod duration in milliseconds for this slot. This attribute is optional and defaults to 0."
  maxPodDuration: BigInt
  "The maximum number of ads allowed in a pod in this slot. This attribute is optional and defaults to 0."
  maxAdsInPod: Int
  "ID of a BreakTemplate that defines what kinds of ads show at which positions within this slot. This field is optional and only supported on OptimizedPoddingAdRuleSlot entities."
  breakTemplateId: BigInt
}

"Ad rule slot with optimized podding. Optimized pods are defined by a BaseAdRuleSlot#maxPodDuration and a BaseAdRuleSlot#maxAdsInPod, and the ad server chooses the best ads for the alloted duration."
type OptimizedPoddingAdRuleSlot implements BaseAdRuleSlotInterface {
  "The AdRuleSlotBehavior for video ads for this slot. This attribute is optional and defaults to AdRuleSlotBehavior#DEFER. Indicates whether video ads are allowed for this slot, or if the decision is deferred to a lower-priority ad rule."
  slotBehavior: AdRuleSlotBehaviorEnum
  "The maximum duration in milliseconds of video ads within this slot. This attribute is optional and defaults to 0."
  maxVideoAdDuration: BigInt
  "The frequency type for video ads in this ad rule slot. This attribute is required for mid-rolls, but if this is not a mid-roll, the value is set to MidrollFrequencyType#NONE."
  videoMidrollFrequencyType: MidrollFrequencyTypeEnum!
  "The mid-roll frequency of this ad rule slot for video ads. This attribute is required for mid-rolls, but if MidrollFrequencyType is set to MidrollFrequencyType#NONE, this value should be ignored. For example, if this slot has a frequency type of MidrollFrequencyType#EVERY_N_SECONDS and \`#videoMidrollFrequency\` = '60', this would mean ' play a mid-roll every 60 seconds.'"
  videoMidrollFrequency: String!
  "The AdRuleSlotBumper for this slot. This attribute is optional and defaults to AdRuleSlotBumper#NONE."
  bumper: AdRuleSlotBumperEnum
  "The maximum duration of bumper ads within this slot. This attribute is optional and defaults to 0."
  maxBumperDuration: BigInt
  "The maximum pod duration in milliseconds for this slot. This attribute is optional and defaults to 0."
  maxPodDuration: BigInt
  "The maximum number of ads allowed in a pod in this slot. This attribute is optional and defaults to 0."
  maxAdsInPod: Int
  "ID of a BreakTemplate that defines what kinds of ads show at which positions within this slot. This field is optional and only supported on OptimizedPoddingAdRuleSlot entities."
  breakTemplateId: BigInt
}

"Performs actions on AdRule objects that match the given Statement#query. @param adRuleAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of ad rules @return the result of the action performed"
input PerformAdRuleActionInput {
  adRuleAction: JSONObject
  filterStatement: StatementInput
}

"An ad rule slot with standard podding. A standard pod is a series of video ads played back to back. Standard pods are defined by a BaseAdRuleSlot#maxAdsInPod and a BaseAdRuleSlot#maxVideoAdDuration."
type StandardPoddingAdRuleSlot implements BaseAdRuleSlotInterface {
  "The AdRuleSlotBehavior for video ads for this slot. This attribute is optional and defaults to AdRuleSlotBehavior#DEFER. Indicates whether video ads are allowed for this slot, or if the decision is deferred to a lower-priority ad rule."
  slotBehavior: AdRuleSlotBehaviorEnum
  "The maximum duration in milliseconds of video ads within this slot. This attribute is optional and defaults to 0."
  maxVideoAdDuration: BigInt
  "The frequency type for video ads in this ad rule slot. This attribute is required for mid-rolls, but if this is not a mid-roll, the value is set to MidrollFrequencyType#NONE."
  videoMidrollFrequencyType: MidrollFrequencyTypeEnum!
  "The mid-roll frequency of this ad rule slot for video ads. This attribute is required for mid-rolls, but if MidrollFrequencyType is set to MidrollFrequencyType#NONE, this value should be ignored. For example, if this slot has a frequency type of MidrollFrequencyType#EVERY_N_SECONDS and \`#videoMidrollFrequency\` = '60', this would mean ' play a mid-roll every 60 seconds.'"
  videoMidrollFrequency: String!
  "The AdRuleSlotBumper for this slot. This attribute is optional and defaults to AdRuleSlotBumper#NONE."
  bumper: AdRuleSlotBumperEnum
  "The maximum duration of bumper ads within this slot. This attribute is optional and defaults to 0."
  maxBumperDuration: BigInt
  "The maximum pod duration in milliseconds for this slot. This attribute is optional and defaults to 0."
  maxPodDuration: BigInt
  "The maximum number of ads allowed in a pod in this slot. This attribute is optional and defaults to 0."
  maxAdsInPod: Int
  "ID of a BreakTemplate that defines what kinds of ads show at which positions within this slot. This field is optional and only supported on OptimizedPoddingAdRuleSlot entities."
  breakTemplateId: BigInt
}

"The BaseAdRuleSlot subtype returned if the actual type is not exposed by the requested API version."
type UnknownAdRuleSlot implements BaseAdRuleSlotInterface {
  "The AdRuleSlotBehavior for video ads for this slot. This attribute is optional and defaults to AdRuleSlotBehavior#DEFER. Indicates whether video ads are allowed for this slot, or if the decision is deferred to a lower-priority ad rule."
  slotBehavior: AdRuleSlotBehaviorEnum
  "The maximum duration in milliseconds of video ads within this slot. This attribute is optional and defaults to 0."
  maxVideoAdDuration: BigInt
  "The frequency type for video ads in this ad rule slot. This attribute is required for mid-rolls, but if this is not a mid-roll, the value is set to MidrollFrequencyType#NONE."
  videoMidrollFrequencyType: MidrollFrequencyTypeEnum!
  "The mid-roll frequency of this ad rule slot for video ads. This attribute is required for mid-rolls, but if MidrollFrequencyType is set to MidrollFrequencyType#NONE, this value should be ignored. For example, if this slot has a frequency type of MidrollFrequencyType#EVERY_N_SECONDS and \`#videoMidrollFrequency\` = '60', this would mean ' play a mid-roll every 60 seconds.'"
  videoMidrollFrequency: String!
  "The AdRuleSlotBumper for this slot. This attribute is optional and defaults to AdRuleSlotBumper#NONE."
  bumper: AdRuleSlotBumperEnum
  "The maximum duration of bumper ads within this slot. This attribute is optional and defaults to 0."
  maxBumperDuration: BigInt
  "The maximum pod duration in milliseconds for this slot. This attribute is optional and defaults to 0."
  maxPodDuration: BigInt
  "The maximum number of ads allowed in a pod in this slot. This attribute is optional and defaults to 0."
  maxAdsInPod: Int
  "ID of a BreakTemplate that defines what kinds of ads show at which positions within this slot. This field is optional and only supported on OptimizedPoddingAdRuleSlot entities."
  breakTemplateId: BigInt
}

"Updates the specified AdRule objects. @param adRules the ad rules to update @return the updated ad rules @throws ApiException if there is an error updating the ad rules"
input UpdateAdRulesInput {
  adRules: [AdRuleInput]
}

"Updates the specified AdSpot objects. @param adSpots the ad spots to update @return the updated ad spots @throws ApiException if there is an error updating the ad spots"
input UpdateAdSpotsInput {
  adSpots: [AdSpotInput]
}

"Updates the specified breakTemplate objects. @param breakTemplate the break template to update @return the updated break template"
input UpdateBreakTemplatesInput {
  breakTemplate: [BreakTemplateInput]
}

type _AdRuleConnection {
  totalCount: Int!
  nodes: [AdRule!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

type _AdSpotConnection {
  totalCount: Int!
  nodes: [AdSpot!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

type _BreakTemplateConnection {
  totalCount: Int!
  nodes: [BreakTemplate!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`AdRule\` by ID."
  _adRule(input: _SingleRecordQueryInput!): AdRule
    @findById(service: "AdRule", action: "getAdRulesByStatement")
}

extend type Query {
  "Finds multiple \`AdRule\` objects based on the optional input parameters."
  _adRules(input: _MultipleRecordsQueryInput!): _AdRuleConnection!
    @find(service: "AdRule", action: "getAdRulesByStatement")
}

extend type Query {
  "Finds a single \`AdSpot\` by ID."
  _adSpot(input: _SingleRecordQueryInput!): AdSpot
    @findById(service: "AdRule", action: "getAdSpotsByStatement")
}

extend type Query {
  "Finds multiple \`AdSpot\` objects based on the optional input parameters."
  _adSpots(input: _MultipleRecordsQueryInput!): _AdSpotConnection!
    @find(service: "AdRule", action: "getAdSpotsByStatement")
}

extend type Query {
  "Finds a single \`BreakTemplate\` by ID."
  _breakTemplate(input: _SingleRecordQueryInput!): BreakTemplate
    @findById(service: "AdRule", action: "getBreakTemplatesByStatement")
}

extend type Query {
  "Finds multiple \`BreakTemplate\` objects based on the optional input parameters."
  _breakTemplates(input: _MultipleRecordsQueryInput!): _BreakTemplateConnection!
    @find(service: "AdRule", action: "getBreakTemplatesByStatement")
}

extend type Mutation {
  "Creates new AdRule objects. @param adRules the ad rules to create @return the created ad rules with their IDs filled in"
  createAdRules(input: CreateAdRulesInput!): [AdRule]
    @soap(service: "AdRule", action: "createAdRules")
}

extend type Mutation {
  "Creates new AdSpot objects. @param adSpots the ad spots to create @return the created ad spots with their IDs filled in"
  createAdSpots(input: CreateAdSpotsInput!): [AdSpot]
    @soap(service: "AdRule", action: "createAdSpots")
}

extend type Mutation {
  "Creates new breakTemplate objects. @param breakTemplate the break template to create @return the created break template with their IDs filled in"
  createBreakTemplates(input: CreateBreakTemplatesInput!): [BreakTemplate]
    @soap(service: "AdRule", action: "createBreakTemplates")
}

extend type Query {
  "Gets an AdRulePage of AdRule objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` AdRule#id (AdRule#adRuleId beginning in v201702)   \`name\` AdRule#name   \`priority\` AdRule#priority   \`status\` AdRule#status  @param filterStatement a Publisher Query Language statement used to filter a set of ad rules @return the ad rules that match the given filter @throws ApiException if the ID of the active network does not exist or there is a backend error"
  getAdRulesByStatement(input: GetAdRulesByStatementInput!): AdRulePage
    @soap(service: "AdRule", action: "getAdRulesByStatement")
}

extend type Query {
  "Gets a AdSpotPage of AdSpot objects that satisfy the given Statement#query. @param filterStatement a Publisher Query Language statement to filter a list of ad spots @return the ad spots that match the filter"
  getAdSpotsByStatement(input: GetAdSpotsByStatementInput!): AdSpotPage
    @soap(service: "AdRule", action: "getAdSpotsByStatement")
}

extend type Query {
  "Gets a BreakTemplatePage of BreakTemplate objects that satisfy the given Statement#query. @param filterStatement a Publisher Query Language statement to filter a list of breakTemplate @return the break template that match the filter"
  getBreakTemplatesByStatement(input: GetBreakTemplatesByStatementInput!): BreakTemplatePage
    @soap(service: "AdRule", action: "getBreakTemplatesByStatement")
}

extend type Mutation {
  "Performs actions on AdRule objects that match the given Statement#query. @param adRuleAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of ad rules @return the result of the action performed"
  performAdRuleAction(input: PerformAdRuleActionInput!): UpdateResult
    @soap(service: "AdRule", action: "performAdRuleAction")
}

extend type Mutation {
  "Updates the specified AdRule objects. @param adRules the ad rules to update @return the updated ad rules @throws ApiException if there is an error updating the ad rules"
  updateAdRules(input: UpdateAdRulesInput!): [AdRule]
    @soap(service: "AdRule", action: "updateAdRules")
}

extend type Mutation {
  "Updates the specified AdSpot objects. @param adSpots the ad spots to update @return the updated ad spots @throws ApiException if there is an error updating the ad spots"
  updateAdSpots(input: UpdateAdSpotsInput!): [AdSpot]
    @soap(service: "AdRule", action: "updateAdSpots")
}

extend type Mutation {
  "Updates the specified breakTemplate objects. @param breakTemplate the break template to update @return the updated break template"
  updateBreakTemplates(input: UpdateBreakTemplatesInput!): [BreakTemplate]
    @soap(service: "AdRule", action: "updateBreakTemplates")
}

`;
