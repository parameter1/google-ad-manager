// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"An activity is a specific user action that an advertiser wants to track, such as the completion of a purchase or a visit to a webpage. You create and manage activities in Ad Manager. When a user performs the action after seeing an advertiser's ad, that's a conversion. For example, you set up an activity in Ad Manager to track how many users visit an advertiser's promotional website after viewing or clicking on an ad. When a user views an ad, then visits the page, that's one conversion."
type Activity {
  "The unique ID of the \`Activity\`. This value is readonly and is assigned by Google."
  id: BigInt!
  "The ID of the ActivityGroup that this Activity belongs to."
  activityGroupId: BigInt
  "The name of the \`Activity\`. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The URL of the webpage where the tags from this activity will be placed. This attribute is optional."
  expectedURL: String
  "The status of this activity. This attribute is readonly."
  status: ActivityStatusEnum
  "The activity type. This attribute is optional and defaults to Activity.Type#PAGE_VIEWS"
  type: ActivityTypeEnum
}

"An activity is a specific user action that an advertiser wants to track, such as the completion of a purchase or a visit to a webpage. You create and manage activities in Ad Manager. When a user performs the action after seeing an advertiser's ad, that's a conversion. For example, you set up an activity in Ad Manager to track how many users visit an advertiser's promotional website after viewing or clicking on an ad. When a user views an ad, then visits the page, that's one conversion."
input ActivityInput {
  "The ID of the ActivityGroup that this Activity belongs to."
  activityGroupId: BigInt
  "The name of the \`Activity\`. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The URL of the webpage where the tags from this activity will be placed. This attribute is optional."
  expectedURL: String
  "The activity type. This attribute is optional and defaults to Activity.Type#PAGE_VIEWS"
  type: ActivityTypeEnum
}

"Captures a page of Activity objects."
type ActivityPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of activities contained within this page."
  results: [Activity]
}

"The activity status."
enum ActivityStatusEnum {
  ACTIVE
  INACTIVE
}

"The activity type."
enum ActivityTypeEnum {
  "Tracks conversions where the user has installed an Android application. This is a counter type."
  ANDROID_APPLICATION_DOWNLOADS
  "Tracks conversions for visits to a webpage, but only counts one conversion per user per user session. Session length is set by the advertiser. This is a counter type."
  CUSTOM
  "Tracks conversions for visits to a webpage, but only counts one conversion per user per day, even if a user visits the page multiple times. This is a counter type."
  DAILY_VISITS
  "Tracks conversions where the user has installed an iOS application. This is a counter type."
  IOS_APPLICATION_DOWNLOADS
  "Tracks conversions where the user has made a purchase, the monetary value of each purchase, plus the number of items that were purchased and the order ID. This is a sales type."
  ITEMS_PURCHASED
  "Tracks conversions for each visit to a webpage. This is a counter type."
  PAGE_VIEWS
  "Tracks conversions where the user has made a purchase, the monetary value of each purchase, plus the order ID (but not the number of items purchased). This is a sales type."
  TRANSACTIONS
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Creates a new Activity objects."
input CreateActivitiesInput {
  activities: [ActivityInput]
}

"Gets an ActivityPage of Activity objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Activity#id   \`name\` Activity#name   \`expectedURL\` Activity#expectedURL   \`status\` Activity#status   \`activityGroupId\` Activity#activityGroupId  "
input GetActivitiesByStatementInput {
  filterStatement: StatementInput
}

"Updates the specified Activity objects."
input UpdateActivitiesInput {
  activities: [ActivityInput]
}

type _ActivityConnection {
  totalCount: Int!
  nodes: [Activity!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds multiple \`Activity\` objects based on the optional input parameters."
  _activities(input: _MultipleRecordsQueryInput!): _ActivityConnection!
    @find(service: "Activity", action: "getActivitiesByStatement")
}

extend type Query {
  "Finds a single \`Activity\` by ID."
  _activity(input: _SingleRecordQueryInput!): Activity
    @findById(service: "Activity", action: "getActivitiesByStatement")
}

extend type Mutation {
  "Creates a new Activity objects."
  createActivities(input: CreateActivitiesInput!): [Activity]
    @soap(service: "Activity", action: "createActivities")
}

extend type Query {
  "Gets an ActivityPage of Activity objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Activity#id   \`name\` Activity#name   \`expectedURL\` Activity#expectedURL   \`status\` Activity#status   \`activityGroupId\` Activity#activityGroupId  "
  getActivitiesByStatement(input: GetActivitiesByStatementInput!): ActivityPage
    @soap(service: "Activity", action: "getActivitiesByStatement")
}

extend type Mutation {
  "Updates the specified Activity objects."
  updateActivities(input: UpdateActivitiesInput!): [Activity]
    @soap(service: "Activity", action: "updateActivities")
}

`;
