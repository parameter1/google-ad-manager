// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"A view of the forecast in terms of an alternative unit type. For example, a forecast for an impressions goal may include this to express the matched, available, and possible viewable impressions."
type AlternativeUnitTypeForecast {
  "The alternative unit type being presented."
  unitType: UnitTypeEnum
  "The number of units, defined by #unitType, that match the specified targeting and delivery settings."
  matchedUnits: BigInt
  "The number of units, defined by #unitType, that can be booked without affecting the delivery of any reserved line items. Exceeding this value will not cause an overbook, but lower-priority line items may not run."
  availableUnits: BigInt
  "The maximum number of units, defined by #unitType, that could be booked by taking inventory away from lower-priority line items."
  possibleUnits: BigInt
}

"Describes predicted inventory availability for a ProspectiveLineItem. Inventory has three threshold values along a line of possible inventory. From least to most, these are:  Available units -- How many units can be booked without affecting any other line items. Booking more than this number can cause lower and same priority line items to underdeliver. Possible units -- How many units can be booked without affecting any higher priority line items. Booking more than this number can cause the line item to underdeliver. Matched (forecast) units -- How many units satisfy all specified criteria.  Underdelivery is caused by overbooking. However, if more impressions are served than are predicted, the extra available inventory might enable all inventory guarantees to be met without overbooking."
type AvailabilityForecast {
  "Uniquely identifies this availability forecast. This value is read-only and is assigned by Google when the forecast is created. The attribute will be either the ID of the LineItem object it represents, or \`null\` if the forecast represents a prospective line item."
  lineItemId: BigInt
  "The unique ID for the Order object that this line item belongs to, or \`null\` if the forecast represents a prospective line item without an LineItem#orderId set."
  orderId: BigInt
  "The unit with which the goal or cap of the LineItem is defined. Will be the same value as Goal#unitType for both a set line item or a prospective one."
  unitType: UnitTypeEnum
  "The number of units, defined by Goal#unitType, that can be booked without affecting the delivery of any reserved line items. Exceeding this value will not cause an overbook, but lower priority line items may not run."
  availableUnits: BigInt
  "The number of units, defined by Goal#unitType, that have already been served if the reservation is already running."
  deliveredUnits: BigInt
  "The number of units, defined by Goal#unitType, that match the specified targeting and delivery settings."
  matchedUnits: BigInt
  "The maximum number of units, defined by Goal#unitType, that could be booked by taking inventory away from lower priority line items and some same priority line items. Please note: booking this number may cause lower priority line items and some same priority line items to underdeliver."
  possibleUnits: BigInt
  "The number of reserved units, defined by Goal#unitType, requested. This can be an absolute or percentage value."
  reservedUnits: BigInt
  "The breakdowns for each time window defined in ForecastBreakdownOptions#timeWindows. If no breakdown was requested through AvailabilityForecastOptions#breakdown, this field will be empty. If targeting breakdown was requested by ForecastBreakdownOptions#targets with no time breakdown, this list will contain a single ForecastBreakdown corresponding to the time window of the forecasted LineItem. Otherwise, each time window defined by ForecastBreakdownOptions#timeWindows will correspond to one ForecastBreakdown in the same order. Targeting breakdowns for every time window are returned in ForecastBreakdown#breakdownEntries. Some examples: For a targeting breakdown in the form of \`ForecastBreakdownOptions{targets=[IU=A, {IU=B, creative=1x1\`]}}, the #breakdowns field may look like: [ForecastBreakdown{breakdownEntries=[availableUnits=10, availbleUnits=20]}] where the entries correspond to \`{IU=A\`} and \`{IU=B, creative=1x1\`} respectively. For a time breakdown in the form of \`ForecastBreakdownOptions{timeWindows=[1am, 2am, 3am]\`}, the \`breakdowns\` field may look like: \`[ ForecastBreakdown{startTime=1am, endTime=2am, breakdownEntries=[availableUnits=10]\`, ForecastBreakdow{startTime=2am, endTime=3am, breakdownEntries=[availalbleUnits=20]} ] } where the two #ForecastBreakdown correspond to the [1am, 2am) and [2am, 3am) time windows respecively. For a two-dimensional breakdown in the form of \`ForecastBreakdownOptions{timeWindows=[1am, 2am, 3am], targets=[IU=A, IU=B]\`, the \`breakdowns\` field may look like: \`[ ForecastBreakdown{startTime=1am, endTime=2am, breakdownEntries=[availableUnits=10, availableUnits=100]\`, ForecastBreakdown{startTime=2am, endTime=3am, breakdownEntries=[availalbleUnits=20, availableUnits=200]} ] } where the first ForecastBreakdown respresents the [1am, 2am) time window with two entries for the IU A and IU B respectively; and the second ForecastBreakdown represents the [2am, 3am) time window also with two entries corresponding to the two IUs."
  breakdowns: [ForecastBreakdown]
  "The forecast result broken down by the targeting of the forecasted line item."
  targetingCriteriaBreakdowns: [TargetingCriteriaBreakdown]
  "List of contending line items for this forecast."
  contendingLineItems: [ContendingLineItem]
  "Views of this forecast, with alternative unit types."
  alternativeUnitTypeForecasts: [AlternativeUnitTypeForecast]
  "The forecast result broken down by demographics."
  demographicBreakdowns: [GrpDemographicBreakdown]
}

"Represents a single delivery data point, with both available and forecast number."
type BreakdownForecast {
  matched: BigInt
  available: BigInt
  possible: BigInt
}

"Describes contending line items for a Forecast."
type ContendingLineItem {
  "The Id of the contending line item."
  lineItemId: BigInt
  "Number of impressions contended for by both the forecasted line item and this line item, but served to this line item in the forecast simulation."
  contendingImpressions: BigInt
}

"The forecast of delivery for a list of ProspectiveLineItem objects to be reserved at the same time."
type DeliveryForecast {
  "The delivery forecasts of the forecasted line items."
  lineItemDeliveryForecasts: [LineItemDeliveryForecast]
}

"Represents the breakdown entries for a list of targetings and/or creatives."
type ForecastBreakdown {
  "The starting time of the represented breakdown."
  startTime: GAMDateTime
  "The end time of the represented breakdown."
  endTime: GAMDateTime
  "The forecast breakdown entries in the same order as in the ForecastBreakdownOptions#targets field."
  breakdownEntries: [ForecastBreakdownEntry]
}

"A single forecast breakdown entry."
type ForecastBreakdownEntry {
  "The optional name of this entry, as specified in the corresponding ForecastBreakdownTarget#name field."
  name: String
  "The forecast of this entry."
  forecast: BreakdownForecast
}

"Gets an AvailabilityForecast for an existing LineItem object. An availability forecast reports the maximum number of available units that the line item can be booked with, and also the total number of units matching the line item's targeting. Only line items having type LineItemType#SPONSORSHIP or LineItemType#STANDARD are valid. Other types will result in ReservationDetailsError.Reason#LINE_ITEM_TYPE_NOT_ALLOWED. @param lineItemId the ID of a LineItem to run the forecast on. @param forecastOptions options controlling the forecast"
input GetAvailabilityForecastByIdInput {
  lineItemId: BigInt
  forecastOptions: JSONObject
}

"Gets the availability forecast for a ProspectiveLineItem. An availability forecast reports the maximum number of available units that the line item can book, and the total number of units matching the line item's targeting. @param lineItem the prospective line item (new or existing) to be forecasted for availability @param forecastOptions options controlling the forecast"
input GetAvailabilityForecastInput {
  lineItem: JSONObject
  forecastOptions: JSONObject
}

"Gets the delivery forecast for a list of existing LineItem objects in a single delivery simulation. A delivery forecast reports the number of units that will be delivered to each line item given the line item goals and contentions from other line items. @param lineItemIds the IDs of line items to be forecasted for delivery @param forecastOptions options controlling the forecast"
input GetDeliveryForecastByIdsInput {
  lineItemIds: [BigInt]
  forecastOptions: JSONObject
}

"Gets the delivery forecast for a list of ProspectiveLineItem objects in a single delivery simulation with line items potentially contending with each other. A delivery forecast reports the number of units that will be delivered to each line item given the line item goals and contentions from other line items. @param lineItems line items to be forecasted for delivery @param forecastOptions options controlling the forecast"
input GetDeliveryForecastInput {
  lineItems: [JSONObject]
  forecastOptions: JSONObject
}

"Returns forecasted and historical traffic data for the segment of traffic specified by the provided request. Calling this endpoint programmatically is only available for Ad Manager 360 networks. @param trafficDataRequest the request specifying the segment of traffic for which data should be returned @return a dto containing forecasted and historical traffic data for the specified segment of traffic"
input GetTrafficDataInput {
  trafficDataRequest: JSONObject
}

"The age range associated with a GRP demographic forecast."
enum GrpAgeEnum {
  AGE_0_TO_17
  AGE_18_TO_24
  AGE_18_TO_49
  AGE_21_PLUS
  AGE_21_TO_34
  AGE_21_TO_44
  AGE_21_TO_49
  AGE_21_TO_54
  AGE_21_TO_64
  AGE_25_TO_34
  AGE_25_TO_49
  AGE_35_TO_44
  AGE_35_TO_49
  AGE_45_TO_54
  AGE_55_TO_64
  AGE_65_PLUS
  "When the age range is not available due to low impression levels, GRP privacy thresholds are activated and prevent us from specifying age."
  AGE_UNKNOWN
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"GRP forecast breakdown counts associated with a gender and age demographic."
type GrpDemographicBreakdown {
  "The number of units matching the demographic breakdown that can be booked without affecting the delivery of any reserved line items."
  availableUnits: BigInt
  "The number of units matching the demographic and matching specified targeting and delivery settings."
  matchedUnits: BigInt
  "The GrpUnitType associated with this demographic breakdown."
  unitType: GrpUnitTypeEnum
  "The GrpGender associated with this demographic breakdown."
  gender: GrpGenderEnum
  "The GrpAge associated with this demographic breakdown."
  age: GrpAgeEnum
}

"The demographic gender associated with a GRP demographic forecast."
enum GrpGenderEnum {
  GENDER_FEMALE
  GENDER_MALE
  "When gender is not available due to low impression levels, GRP privacy thresholds are activated and prevent us from specifying gender."
  GENDER_UNKNOWN
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Type of unit represented in a GRP demographic breakdown."
enum GrpUnitTypeEnum {
  IMPRESSIONS
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"The forecasted delivery of a ProspectiveLineItem."
type LineItemDeliveryForecast {
  "Uniquely identifies this line item delivery forecast. This value is read-only and will be either the ID of the LineItem object it represents, or \`null\` if the forecast represents a prospective line item."
  lineItemId: BigInt
  "The unique ID for the Order object that this line item belongs to, or \`null\` if the forecast represents a prospective line item without an LineItem#orderId set."
  orderId: BigInt
  "The unit with which the goal or cap of the LineItem is defined. Will be the same value as Goal#unitType for both a set line item or a prospective one."
  unitType: UnitTypeEnum
  "The number of units, defined by Goal#unitType, that will be delivered by the line item. Delivery of existing line items that are of same or lower priorities may be impacted."
  predictedDeliveryUnits: BigInt
  "The number of units, defined by Goal#unitType, that have already been served if the reservation is already running."
  deliveredUnits: BigInt
  "The number of units, defined by Goal#unitType, that match the specified LineItem#targeting and delivery settings."
  matchedUnits: BigInt
}

"A single targeting criteria breakdown result."
type TargetingCriteriaBreakdown {
  "The dimension of this breakdown"
  targetingDimension: TargetingDimensionEnum
  "The unique ID of the targeting criteria."
  targetingCriteriaId: BigInt
  "The name of the targeting criteria."
  targetingCriteriaName: String
  "When true, the breakdown is negative."
  excluded: Boolean
  "The available units for this breakdown."
  availableUnits: BigInt
  "The matched units for this breakdown."
  matchedUnits: BigInt
}

"Targeting dimension of targeting breakdowns."
enum TargetingDimensionEnum {
  AD_SIZE
  AD_UNIT
  BANDWIDTH_GROUP
  BROWSER
  BROWSER_LANGUAGE
  CONTENT
  CUSTOM_CRITERIA
  DEVICE_CAPABILITY
  DEVICE_CATEGORY
  DEVICE_MANUFACTURER
  FORECASTED_CREATIVE_RESTRICTION
  GEOGRAPHY
  MOBILE_APPLICATION
  MOBILE_CARRIER
  OPERATING_SYSTEM
  PLACEMENT
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  USER_DOMAIN
  VIDEO_POSITION
}

"Represents a chronological sequence of daily values."
type TimeSeries {
  "The date range of the time series."
  timeSeriesDateRange: DateRange
  "The daily values constituting the time series. The number of time series values must equal the number of days spanned by the time series date range, inclusive. E.g.: \`timeSeriesDateRange\` of 2001-08-15 to 2001-08-17 should contain one value for the 15th, one value for the 16th, and one value for the 17th."
  values: [BigInt]
}

"Contains forecasted and historical traffic volume data describing a segment of traffic."
type TrafficDataResponse {
  "Time series of historical traffic ad opportunity counts. This may be null if the requested date range did not contain any historical dates, or if no historical data are available for the requested traffic segment. This attribute is read-only."
  historicalTimeSeries: TimeSeries
  "Time series of forecasted traffic ad opportunity counts. This may be null if the requested date range did not contain any future dates, or if no forecasted data are available for the requested traffic segment. This attribute is read-only."
  forecastedTimeSeries: TimeSeries
  "Time series of future traffic volumes forecasted to be sold. This may be null if the requested date range did not contain any future dates, or if no sell-through data are available for the requested traffic segment. This attribute is read-only."
  forecastedAssignedTimeSeries: TimeSeries
  "The overall date range spanned by the union of all time series in the response. This is a summary field for convenience. The value will be set such that the start date is equal to the earliest start date of all time series included, and the end date is equal to the latest end date of all time series included. If all time series fields are null, this field will also be null. This attribute is read-only."
  overallDateRange: DateRange
}

extend type Query {
  "Gets the availability forecast for a ProspectiveLineItem. An availability forecast reports the maximum number of available units that the line item can book, and the total number of units matching the line item's targeting. @param lineItem the prospective line item (new or existing) to be forecasted for availability @param forecastOptions options controlling the forecast"
  getAvailabilityForecast(input: GetAvailabilityForecastInput!): AvailabilityForecast
    @soap(service: "Forecast", action: "getAvailabilityForecast")
}

extend type Query {
  "Gets an AvailabilityForecast for an existing LineItem object. An availability forecast reports the maximum number of available units that the line item can be booked with, and also the total number of units matching the line item's targeting. Only line items having type LineItemType#SPONSORSHIP or LineItemType#STANDARD are valid. Other types will result in ReservationDetailsError.Reason#LINE_ITEM_TYPE_NOT_ALLOWED. @param lineItemId the ID of a LineItem to run the forecast on. @param forecastOptions options controlling the forecast"
  getAvailabilityForecastById(input: GetAvailabilityForecastByIdInput!): AvailabilityForecast
    @soap(service: "Forecast", action: "getAvailabilityForecastById")
}

extend type Query {
  "Gets the delivery forecast for a list of ProspectiveLineItem objects in a single delivery simulation with line items potentially contending with each other. A delivery forecast reports the number of units that will be delivered to each line item given the line item goals and contentions from other line items. @param lineItems line items to be forecasted for delivery @param forecastOptions options controlling the forecast"
  getDeliveryForecast(input: GetDeliveryForecastInput!): DeliveryForecast
    @soap(service: "Forecast", action: "getDeliveryForecast")
}

extend type Query {
  "Gets the delivery forecast for a list of existing LineItem objects in a single delivery simulation. A delivery forecast reports the number of units that will be delivered to each line item given the line item goals and contentions from other line items. @param lineItemIds the IDs of line items to be forecasted for delivery @param forecastOptions options controlling the forecast"
  getDeliveryForecastByIds(input: GetDeliveryForecastByIdsInput!): DeliveryForecast
    @soap(service: "Forecast", action: "getDeliveryForecastByIds")
}

extend type Query {
  "Returns forecasted and historical traffic data for the segment of traffic specified by the provided request. Calling this endpoint programmatically is only available for Ad Manager 360 networks. @param trafficDataRequest the request specifying the segment of traffic for which data should be returned @return a dto containing forecasted and historical traffic data for the specified segment of traffic"
  getTrafficData(input: GetTrafficDataInput!): TrafficDataResponse
    @soap(service: "Forecast", action: "getTrafficData")
}

`;
