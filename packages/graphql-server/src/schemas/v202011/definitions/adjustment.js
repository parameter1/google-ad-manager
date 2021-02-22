// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Takes a prospective forecast adjustment and calculates the daily ad opportunity counts corresponding to its provided volume settings. @param forecastAdjustment the prospective forecast adjustment @return a forecast adjustment matching the one passed in, but with its \`calculatedDailyAdOpportunityCounts\` field populated"
input CalculateDailyAdOpportunityCountsInput {
  forecastAdjustment: ForecastAdjustmentInput
}

"Creates new ForecastAdjustment objects. @param forecastAdjustments the forecast adjustments to create @return the persisted forecast adjustments with their IDs populated @throws ApiException if there is an error creating the forecast adjustments"
input CreateForecastAdjustmentsInput {
  forecastAdjustments: [ForecastAdjustmentInput]
}

"Creates new TrafficForecastSegment objects. @param trafficForecastSegments the traffic forecast segments to create @return the persisted traffic forecast segments with their IDs populated @throws ApiException if there is an error creating the traffic forecast segments"
input CreateTrafficForecastSegmentsInput {
  trafficForecastSegments: [TrafficForecastSegmentInput]
}

"Settings to specify daily ad opportunity counts that will be used as the expected future traffic volume for a forecast adjustment. For example: [10000, 20000, 5000] indicates expected traffic for the targeting specified on the parent traffic forecast segment of 10,000 ad opportunities for the first day, 20,000 ad opportunities for the second, and 5,000 for the third."
type DailyVolumeSettings {
  "The list of ad opportunity counts. Each value in this list represents the expected number of ad opportunities on the corresponding day of the adjustment date range. The number of values provided must match the number of days in the adjustment date range, inclusive. For example, an adjustment date range of June 5-June 7 would need 3 values in this list, one for June 5, one for June 6, and one for June 7. This attribute is required."
  adOpportunityCounts: [BigInt]!
}

"Settings to specify daily ad opportunity counts that will be used as the expected future traffic volume for a forecast adjustment. For example: [10000, 20000, 5000] indicates expected traffic for the targeting specified on the parent traffic forecast segment of 10,000 ad opportunities for the first day, 20,000 ad opportunities for the second, and 5,000 for the third."
input DailyVolumeSettingsInput {
  "The list of ad opportunity counts. Each value in this list represents the expected number of ad opportunities on the corresponding day of the adjustment date range. The number of values provided must match the number of days in the adjustment date range, inclusive. For example, an adjustment date range of June 5-June 7 would need 3 values in this list, one for June 5, one for June 6, and one for June 7. This attribute is required."
  adOpportunityCounts: [BigInt]!
}

"Provides information about the expected volume and composition of traffic over a date range for a traffic forecast segment."
type ForecastAdjustment {
  "The unique ID of the ForecastAdjustment. This field is read-only. This attribute is read-only."
  id: BigInt!
  "The ID of the parent TrafficForecastSegment. This field is required and immutable after creation. This attribute is required."
  trafficForecastSegmentId: BigInt!
  "Name of the ForecastAdjustment. This attribute is required."
  name: String!
  "The start and end date range of the adjustment. This attribute is required."
  dateRange: DateRange!
  "The status of the adjustment. Changes to this field should be made via \`performForecastAdjustmentAction\` This attribute is read-only."
  status: ForecastAdjustmentStatusEnum
  "The volume type of the adjustment. This attribute is required."
  volumeType: ForecastAdjustmentVolumeTypeEnum!
  "Whether to allow provided volume settings to increase the current forecast by more than 300%. Due to system constraints, adjusting the forecast by more than 300% may have unintended consequences for other parts of the forecast. Note that this field will not persist on the adjustment itself, and will only affect the current request."
  allowAdjustingForecastAboveRecommendedLimit: Boolean
  "The daily number of ad opportunities for each day in the adjustment date range. This field is required if \`volumeType\` is \`ForecastAdjustmentVolumeType#DAILY_VOLUME\` and ignored othewise."
  dailyVolumeSettings: DailyVolumeSettings
  "The total number of ad opportunities for the entire adjustment date range. This field is required if \`volumeType\` is \`ForecastAdjustmentVolumeType#TOTAL_VOLUME\` and ignored othewise."
  totalVolumeSettings: TotalVolumeSettings
  "The daily number of ad opportunities for each day in the adjustment date range, determined by reference to the ad opportunity volume of a historical reference period. This field is required if \`volumeType\` is \`ForecastAdjustmentVolumeType#HISTORICAL_BASIS_VOLUME\` and ignored othewise."
  historicalBasisVolumeSettings: HistoricalBasisVolumeSettings
  "The daily number of ad opportunities calculated to satisfy the provided volume settings. Each value in this list represents the calculated ad opportunities on the corresponding day of the adjustment date range. For example: for a \`dateRange\` of 2001-8-15 to 2001-8-17, this field will contain one value for 2001-8-15, one value for 2001-8-16, and one value for 2001-8-17. This field is read-only and is populated by Google after forecast adjustment creation or update. This attribute is read-only."
  calculatedDailyAdOpportunityCounts: [BigInt]
}

"Provides information about the expected volume and composition of traffic over a date range for a traffic forecast segment."
input ForecastAdjustmentInput {
  "The ID of the parent TrafficForecastSegment. This field is required and immutable after creation. This attribute is required."
  trafficForecastSegmentId: BigInt!
  "Name of the ForecastAdjustment. This attribute is required."
  name: String!
  "The start and end date range of the adjustment. This attribute is required."
  dateRange: DateRangeInput!
  "The volume type of the adjustment. This attribute is required."
  volumeType: ForecastAdjustmentVolumeTypeEnum!
  "Whether to allow provided volume settings to increase the current forecast by more than 300%. Due to system constraints, adjusting the forecast by more than 300% may have unintended consequences for other parts of the forecast. Note that this field will not persist on the adjustment itself, and will only affect the current request."
  allowAdjustingForecastAboveRecommendedLimit: Boolean
  "The daily number of ad opportunities for each day in the adjustment date range. This field is required if \`volumeType\` is \`ForecastAdjustmentVolumeType#DAILY_VOLUME\` and ignored othewise."
  dailyVolumeSettings: DailyVolumeSettingsInput
  "The total number of ad opportunities for the entire adjustment date range. This field is required if \`volumeType\` is \`ForecastAdjustmentVolumeType#TOTAL_VOLUME\` and ignored othewise."
  totalVolumeSettings: TotalVolumeSettingsInput
  "The daily number of ad opportunities for each day in the adjustment date range, determined by reference to the ad opportunity volume of a historical reference period. This field is required if \`volumeType\` is \`ForecastAdjustmentVolumeType#HISTORICAL_BASIS_VOLUME\` and ignored othewise."
  historicalBasisVolumeSettings: HistoricalBasisVolumeSettingsInput
}

"A page of ForecastAdjustmentDto objects."
type ForecastAdjustmentPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of forecast adjustments contained within this page."
  results: [ForecastAdjustment]
}

"The status of a forecast adjustment. Inactive adjustments are not applied during forecasting."
enum ForecastAdjustmentStatusEnum {
  "Indicates the current adjustment is active."
  ACTIVE
  "Indicates the current adjustment is inactive."
  INACTIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Options for how the volume settings of a ForecastAdjustment are defined."
enum ForecastAdjustmentVolumeTypeEnum {
  "Volume is defined by a series of daily ad opportunity counts."
  DAILY_VOLUME
  "Volume is defined by historical volume data."
  HISTORICAL_BASIS_VOLUME
  "Volume is defined by a single total ad opportunity count."
  TOTAL_VOLUME
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Gets a ForecastAdjustmentPage of ForecastAdjustment objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` ForecastAdjustment#id   \`trafficForecastSegmentId\` ForecastAdjustment#trafficForecastSegmentId   \`name\` ForecastAdjustment#name   \`startDate\` ForecastAdjustment#startDate   \`endDate\` ForecastAdjustment#endDate   \`status\` ForecastAdjustment#status   @param filterStatement a Publisher Query Language statement to filter a list of traffic forecast segments @return a page of forecast adjustments that match the filter"
input GetForecastAdjustmentsByStatementInput {
  filterStatement: StatementInput
}

"Gets a TrafficForecastSegmentPage of TrafficForecastSegment objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` TrafficForecastSegment#id   \`name\` TrafficForecastSegment#name   \`creationTime\` TrafficForecastSegment#creationTime   @param filterStatement a Publisher Query Language statement to filter a list of traffic forecast segments @return a page of traffic forecast segments that match the filter"
input GetTrafficForecastSegmentsByStatementInput {
  filterStatement: StatementInput
}

"Settings to specify the volume of ad opportunities per day over the ForecastAdjustment date range based on the traffic volume of a historical reference period. The daily historical traffic for the provided targeting and date range is fetched, multiplied by the provided multiplier, and used as the daily expected traffic for the adjustment. The number of days included in the historical date range does *not* need to be the same as the number of days included in the adjustment date range."
type HistoricalBasisVolumeSettings {
  "Whether the parent traffic forecast segment targeting's or the \`targeting\`'s historical volume data should be used. This attribute is required."
  useParentTrafficForecastSegmentTargeting: Boolean!
  "The targeting criteria to use as the source of the historical volume data. This field is required if \`useParentTrafficForecastSegmentTargeting\` is false and ignored otherwise."
  targeting: Targeting
  "The date range to use for the historical ad opportunity volume. This attribute is required."
  historicalDateRange: DateRange!
  "The multiplier to apply to the historical traffic volume, expressed in thousandths of a percent. For example, to set the forecasted traffic as 130% of the historical traffic, this value would be 130,000. This attribute is required."
  multiplierMilliPercent: BigInt!
}

"Settings to specify the volume of ad opportunities per day over the ForecastAdjustment date range based on the traffic volume of a historical reference period. The daily historical traffic for the provided targeting and date range is fetched, multiplied by the provided multiplier, and used as the daily expected traffic for the adjustment. The number of days included in the historical date range does *not* need to be the same as the number of days included in the adjustment date range."
input HistoricalBasisVolumeSettingsInput {
  "Whether the parent traffic forecast segment targeting's or the \`targeting\`'s historical volume data should be used. This attribute is required."
  useParentTrafficForecastSegmentTargeting: Boolean!
  "The targeting criteria to use as the source of the historical volume data. This field is required if \`useParentTrafficForecastSegmentTargeting\` is false and ignored otherwise."
  targeting: TargetingInput
  "The date range to use for the historical ad opportunity volume. This attribute is required."
  historicalDateRange: DateRangeInput!
  "The multiplier to apply to the historical traffic volume, expressed in thousandths of a percent. For example, to set the forecasted traffic as 130% of the historical traffic, this value would be 130,000. This attribute is required."
  multiplierMilliPercent: BigInt!
}

"Performs actions on ForecastAdjustment objects that match the given Statement#query. @param forecastAdjustmentAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of forecast adjustments @return the result of the action performed"
input PerformForecastAdjustmentActionInput {
  forecastAdjustmentAction: JSONObject
  filterStatement: StatementInput
}

"Settings to specify a single total traffic volume that will be used as the expected total future volume for a forecast adjustment. For example, an \`adOpportunityCount\` of 3,000 indicates a forecast goal for the targeting specified on the parent traffic forecast segment of 3,000 ad opportunities over the entire duration of the adjustment."
type TotalVolumeSettings {
  "The total ad opportunity count over the entire forecast adjustment date range. This attribute is required."
  adOpportunityCount: BigInt!
}

"Settings to specify a single total traffic volume that will be used as the expected total future volume for a forecast adjustment. For example, an \`adOpportunityCount\` of 3,000 indicates a forecast goal for the targeting specified on the parent traffic forecast segment of 3,000 ad opportunities over the entire duration of the adjustment."
input TotalVolumeSettingsInput {
  "The total ad opportunity count over the entire forecast adjustment date range. This attribute is required."
  adOpportunityCount: BigInt!
}

"An entity that defines a segment of traffic that will be adjusted or explored."
type TrafficForecastSegment {
  "The unique ID of the TrafficForecastSegment. This field is read-only and set by Google. This attribute is read-only."
  id: BigInt!
  "Name of the TrafficForecastSegment. This field must be unique among all segments for this network. This attribute is required."
  name: String!
  "The targeting that defines a segment of traffic. Targeting cannot be changed after segment creation. This attribute is required."
  targeting: Targeting!
  "The number of active forecast adjustments associated with the TrafficForecastSegment. This attribute is read-only."
  activeForecastAdjustmentCount: Int
  "The date and time that the TrafficForecastSegment was created. This attribute is read-only."
  creationDateTime: DateTime
}

"An entity that defines a segment of traffic that will be adjusted or explored."
input TrafficForecastSegmentInput {
  "Name of the TrafficForecastSegment. This field must be unique among all segments for this network. This attribute is required."
  name: String!
  "The targeting that defines a segment of traffic. Targeting cannot be changed after segment creation. This attribute is required."
  targeting: TargetingInput!
}

"A page of TrafficForecastSegmentDto objects."
type TrafficForecastSegmentPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of traffic forecast segments contained within this page."
  results: [TrafficForecastSegment]
}

"Updates the specified ForecastAdjustment objects. @param forecastAdjustments the forecast adjustments to update @return the updated forecast adjustments @throws ApiException if there is an error updating the forecast adjustments"
input UpdateForecastAdjustmentsInput {
  forecastAdjustments: [ForecastAdjustmentInput]
}

"Updates the specified TrafficForecastSegment objects. @param trafficForecastSegments the traffic forecast segments to update @return the updated traffic forecast segments @throws ApiException if there is an error updating the traffic forecast segments"
input UpdateTrafficForecastSegmentsInput {
  trafficForecastSegments: [TrafficForecastSegmentInput]
}

type _ForecastAdjustmentConnection {
  totalCount: Int!
  nodes: [ForecastAdjustment!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

type _TrafficForecastSegmentConnection {
  totalCount: Int!
  nodes: [TrafficForecastSegment!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`ForecastAdjustment\` by ID."
  _forecastAdjustment(input: _SingleRecordQueryInput!): ForecastAdjustment
    @findById(service: "Adjustment", action: "getForecastAdjustmentsByStatement")
}

extend type Query {
  "Finds multiple \`ForecastAdjustment\` objects based on the optional input parameters."
  _forecastAdjustments(input: _MultipleRecordsQueryInput!): _ForecastAdjustmentConnection!
    @find(service: "Adjustment", action: "getForecastAdjustmentsByStatement")
}

extend type Query {
  "Finds a single \`TrafficForecastSegment\` by ID."
  _trafficForecastSegment(input: _SingleRecordQueryInput!): TrafficForecastSegment
    @findById(service: "Adjustment", action: "getTrafficForecastSegmentsByStatement")
}

extend type Query {
  "Finds multiple \`TrafficForecastSegment\` objects based on the optional input parameters."
  _trafficForecastSegments(input: _MultipleRecordsQueryInput!): _TrafficForecastSegmentConnection!
    @find(service: "Adjustment", action: "getTrafficForecastSegmentsByStatement")
}

extend type Query {
  "Takes a prospective forecast adjustment and calculates the daily ad opportunity counts corresponding to its provided volume settings. @param forecastAdjustment the prospective forecast adjustment @return a forecast adjustment matching the one passed in, but with its \`calculatedDailyAdOpportunityCounts\` field populated"
  calculateDailyAdOpportunityCounts(input: CalculateDailyAdOpportunityCountsInput!): ForecastAdjustment
    @soap(service: "Adjustment", action: "calculateDailyAdOpportunityCounts")
}

extend type Mutation {
  "Creates new ForecastAdjustment objects. @param forecastAdjustments the forecast adjustments to create @return the persisted forecast adjustments with their IDs populated @throws ApiException if there is an error creating the forecast adjustments"
  createForecastAdjustments(input: CreateForecastAdjustmentsInput!): [ForecastAdjustment]
    @soap(service: "Adjustment", action: "createForecastAdjustments")
}

extend type Mutation {
  "Creates new TrafficForecastSegment objects. @param trafficForecastSegments the traffic forecast segments to create @return the persisted traffic forecast segments with their IDs populated @throws ApiException if there is an error creating the traffic forecast segments"
  createTrafficForecastSegments(input: CreateTrafficForecastSegmentsInput!): [TrafficForecastSegment]
    @soap(service: "Adjustment", action: "createTrafficForecastSegments")
}

extend type Query {
  "Gets a ForecastAdjustmentPage of ForecastAdjustment objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` ForecastAdjustment#id   \`trafficForecastSegmentId\` ForecastAdjustment#trafficForecastSegmentId   \`name\` ForecastAdjustment#name   \`startDate\` ForecastAdjustment#startDate   \`endDate\` ForecastAdjustment#endDate   \`status\` ForecastAdjustment#status   @param filterStatement a Publisher Query Language statement to filter a list of traffic forecast segments @return a page of forecast adjustments that match the filter"
  getForecastAdjustmentsByStatement(input: GetForecastAdjustmentsByStatementInput!): ForecastAdjustmentPage
    @soap(service: "Adjustment", action: "getForecastAdjustmentsByStatement")
}

extend type Query {
  "Gets a TrafficForecastSegmentPage of TrafficForecastSegment objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` TrafficForecastSegment#id   \`name\` TrafficForecastSegment#name   \`creationTime\` TrafficForecastSegment#creationTime   @param filterStatement a Publisher Query Language statement to filter a list of traffic forecast segments @return a page of traffic forecast segments that match the filter"
  getTrafficForecastSegmentsByStatement(input: GetTrafficForecastSegmentsByStatementInput!): TrafficForecastSegmentPage
    @soap(service: "Adjustment", action: "getTrafficForecastSegmentsByStatement")
}

extend type Mutation {
  "Performs actions on ForecastAdjustment objects that match the given Statement#query. @param forecastAdjustmentAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of forecast adjustments @return the result of the action performed"
  performForecastAdjustmentAction(input: PerformForecastAdjustmentActionInput!): UpdateResult
    @soap(service: "Adjustment", action: "performForecastAdjustmentAction")
}

extend type Mutation {
  "Updates the specified ForecastAdjustment objects. @param forecastAdjustments the forecast adjustments to update @return the updated forecast adjustments @throws ApiException if there is an error updating the forecast adjustments"
  updateForecastAdjustments(input: UpdateForecastAdjustmentsInput!): [ForecastAdjustment]
    @soap(service: "Adjustment", action: "updateForecastAdjustments")
}

extend type Mutation {
  "Updates the specified TrafficForecastSegment objects. @param trafficForecastSegments the traffic forecast segments to update @return the updated traffic forecast segments @throws ApiException if there is an error updating the traffic forecast segments"
  updateTrafficForecastSegments(input: UpdateTrafficForecastSegmentsInput!): [TrafficForecastSegment]
    @soap(service: "Adjustment", action: "updateTrafficForecastSegments")
}

`;
