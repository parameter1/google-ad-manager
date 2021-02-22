// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Activities are organized within activity groups, which are sets of activities that share the same configuration. You create and manage activities from within activity groups."
type ActivityGroup {
  "The unique ID of the \`ActivityGroup\`. This attribute is readonly and is assigned by Google."
  id: BigInt!
  "The name of the \`ActivityGroup\`. This attribute is required to create an activity group and has a maximum length of 255 characters."
  name: String!
  "The company ids whose ads will be included for conversion tracking on the activities in this group. Only clicks and impressions of ads from these companies will lead to conversions on the containing activities. This attribute is required when creating an activity group. The company types allowed are: Company.Type#ADVERTISER, and Company.Type#AD_NETWORK, and Company.Type#HOUSE_ADVERTISER"
  companyIds: [BigInt]!
  "Ad Manager records view-through conversions for users who have previously viewed an Ad Manager ad within the number of days that you set here (1 to 30 days), then visits a webpage containing activity tags from this activity group. To be counted, the ad needs to belong to one of the companies associated with the activity group. This attribute is required to create an activity group."
  impressionsLookback: Int!
  "Ad Manager records click-through conversions for users who have previously clicked on an Ad Manager ad within the number of days that you set here (1 to 30 days), then visits a webpage containing activity tags from this activity group. To be counted, the ad needs to belong to one of the companies associated with the activity group. This attribute is required to create an activity group."
  clicksLookback: Int!
  "The status of this activity group. This attribute is readonly."
  status: ActivityGroupStatusEnum
}

"Activities are organized within activity groups, which are sets of activities that share the same configuration. You create and manage activities from within activity groups."
input ActivityGroupInput {
  "The name of the \`ActivityGroup\`. This attribute is required to create an activity group and has a maximum length of 255 characters."
  name: String!
  "The company ids whose ads will be included for conversion tracking on the activities in this group. Only clicks and impressions of ads from these companies will lead to conversions on the containing activities. This attribute is required when creating an activity group. The company types allowed are: Company.Type#ADVERTISER, and Company.Type#AD_NETWORK, and Company.Type#HOUSE_ADVERTISER"
  companyIds: [BigInt]!
  "Ad Manager records view-through conversions for users who have previously viewed an Ad Manager ad within the number of days that you set here (1 to 30 days), then visits a webpage containing activity tags from this activity group. To be counted, the ad needs to belong to one of the companies associated with the activity group. This attribute is required to create an activity group."
  impressionsLookback: Int!
  "Ad Manager records click-through conversions for users who have previously clicked on an Ad Manager ad within the number of days that you set here (1 to 30 days), then visits a webpage containing activity tags from this activity group. To be counted, the ad needs to belong to one of the companies associated with the activity group. This attribute is required to create an activity group."
  clicksLookback: Int!
}

"Captures a page of ActivityGroup objects."
type ActivityGroupPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of activity groups contained within this page."
  results: [ActivityGroup]
}

"The activity group status."
enum ActivityGroupStatusEnum {
  ACTIVE
  INACTIVE
}

"Creates a new ActivityGroup objects. @param activityGroups the activity groups to be created. @return the created activity groups with their IDs filled in."
input CreateActivityGroupsInput {
  activityGroups: [ActivityGroupInput]
}

"Gets an ActivityGroupPage of ActivityGroup objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` ActivityGroup#id   \`name\` ActivityGroup#name   \`impressionsLookback\` ActivityGroup#impressionsLookback   \`clicksLookback\` ActivityGroup#clicksLookback   \`status\` ActivityGroup#status   @param filterStatement a statement used to filter a set of activity groups @return the activity groups that match the given filter"
input GetActivityGroupsByStatementInput {
  filterStatement: StatementInput
}

"Updates the specified ActivityGroup objects. @param activityGroups the activity groups to update. @return the updated activity groups."
input UpdateActivityGroupsInput {
  activityGroups: [ActivityGroupInput]
}

type _ActivityGroupConnection {
  totalCount: Int!
  nodes: [ActivityGroup!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`ActivityGroup\` by ID."
  _activityGroup(input: _SingleRecordQueryInput!): ActivityGroup
    @findById(service: "ActivityGroup", action: "getActivityGroupsByStatement")
}

extend type Query {
  "Finds multiple \`ActivityGroup\` objects based on the optional input parameters."
  _activityGroups(input: _MultipleRecordsQueryInput!): _ActivityGroupConnection!
    @find(service: "ActivityGroup", action: "getActivityGroupsByStatement")
}

extend type Mutation {
  "Creates a new ActivityGroup objects. @param activityGroups the activity groups to be created. @return the created activity groups with their IDs filled in."
  createActivityGroups(input: CreateActivityGroupsInput!): [ActivityGroup]
    @soap(service: "ActivityGroup", action: "createActivityGroups")
}

extend type Query {
  "Gets an ActivityGroupPage of ActivityGroup objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` ActivityGroup#id   \`name\` ActivityGroup#name   \`impressionsLookback\` ActivityGroup#impressionsLookback   \`clicksLookback\` ActivityGroup#clicksLookback   \`status\` ActivityGroup#status   @param filterStatement a statement used to filter a set of activity groups @return the activity groups that match the given filter"
  getActivityGroupsByStatement(input: GetActivityGroupsByStatementInput!): ActivityGroupPage
    @soap(service: "ActivityGroup", action: "getActivityGroupsByStatement")
}

extend type Mutation {
  "Updates the specified ActivityGroup objects. @param activityGroups the activity groups to update. @return the updated activity groups."
  updateActivityGroups(input: UpdateActivityGroupsInput!): [ActivityGroup]
    @soap(service: "ActivityGroup", action: "updateActivityGroups")
}

`;
