// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates new Team objects. The following fields are required:  Team#name  @param teams the teams to create @return the created teams with their IDs filled in"
input CreateTeamsInput {
  teams: [JSONObject]
}

"Gets a \`TeamPage\` of \`Team\` objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Team#id   \`name\` Team#name   \`description\` Team#description   @param filterStatement a Publisher Query Language statement used to filter a set of teams. @return the teams that match the given filter"
input GetTeamsByStatementInput {
  filterStatement: JSONObject
}

"Performs actions on Team objects that match the given Statement#query. @param teamAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of teams @return the result of the action performed"
input PerformTeamActionInput {
  teamAction: JSONObject
  filterStatement: JSONObject
}

"A \`Team\` defines a grouping of users and what entities they have access to. Users are added to teams with UserTeamAssociation objects."
type Team {
  "The unique ID of the \`Team\`. This value is readonly and is assigned by Google. Teams that are created by Google will have negative IDs."
  id: BigInt!
  "The name of the \`Team\`. This value is required to create a team and has a maximum length of 106 characters."
  name: String!
  "The description of the \`Team\`. This value is optional and has a maximum length of 255 characters."
  description: String
  "The status of the Team. This value can be TeamStatus#ACTIVE (default) or TeamStatus#INACTIVE and determines the visibility of the team in the UI."
  status: TeamStatusEnum
  "Whether or not users on this team have access to all companies. If this value is true, then an error will be thrown if an attempt is made to associate this team with a Company."
  hasAllCompanies: Boolean
  "Whether or not users on this team have access to all inventory. If this value is true, then an error will be thrown if an attempt is made to associate this team with an AdUnit."
  hasAllInventory: Boolean
  "The default access to orders, for users on this team."
  teamAccessType: TeamAccessTypeEnum
}

"Captures a page of Team objects."
type TeamPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of teams contained within this page."
  results: [Team]
}

"Represents the status of a team, whether it is active or inactive."
enum TeamStatusEnum {
  "The status of an active team. (i.e. visible in the UI)"
  ACTIVE
  "The status of an inactive team. (i.e. hidden in the UI)"
  INACTIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Updates the specified Team objects. @param teams the teams to update @return the updated teams"
input UpdateTeamsInput {
  teams: [JSONObject]
}

extend type Mutation {
  "Creates new Team objects. The following fields are required:  Team#name  @param teams the teams to create @return the created teams with their IDs filled in"
  createTeams(input: CreateTeamsInput!): [Team]
    @soap(service: "Team", action: "createTeams")
}

extend type Query {
  "Gets a \`TeamPage\` of \`Team\` objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Team#id   \`name\` Team#name   \`description\` Team#description   @param filterStatement a Publisher Query Language statement used to filter a set of teams. @return the teams that match the given filter"
  getTeamsByStatement(input: GetTeamsByStatementInput!): TeamPage
    @soap(service: "Team", action: "getTeamsByStatement")
}

extend type Mutation {
  "Performs actions on Team objects that match the given Statement#query. @param teamAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of teams @return the result of the action performed"
  performTeamAction(input: PerformTeamActionInput!): UpdateResult
    @soap(service: "Team", action: "performTeamAction")
}

extend type Mutation {
  "Updates the specified Team objects. @param teams the teams to update @return the updated teams"
  updateTeams(input: UpdateTeamsInput!): [Team]
    @soap(service: "Team", action: "updateTeams")
}

`;
