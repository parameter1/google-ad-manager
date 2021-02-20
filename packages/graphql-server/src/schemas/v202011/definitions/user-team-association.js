// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates new UserTeamAssociation objects. @param userTeamAssociations the user team associations to create @return the created user team associations with their IDs filled in"
input CreateUserTeamAssociationsInput {
  _: Boolean
  userTeamAssociations: [JSONObject]
}

"Gets a UserTeamAssociationPage of UserTeamAssociation objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`userId\` UserTeamAssociation#userId   \`teamId\` UserTeamAssociation#teamId   @param filterStatement a Publisher Query Language statement used to filter a set of user team associations @return the user team associations that match the given filter"
input GetUserTeamAssociationsByStatementInput {
  _: Boolean
  filterStatement: JSONObject
}

"Performs actions on UserTeamAssociation objects that match the given Statement#query. @param userTeamAssociationAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of user team associations @return the result of the action performed"
input PerformUserTeamAssociationActionInput {
  _: Boolean
  userTeamAssociationAction: JSONObject
  statement: JSONObject
}

"Updates the specified UserTeamAssociation objects. @param userTeamAssociations the user team associations to update @return the updated user team associations"
input UpdateUserTeamAssociationsInput {
  _: Boolean
  userTeamAssociations: [JSONObject]
}

"\`UserRecordTeamAssociation\` represents the association between a UserRecord and a Team."
interface UserRecordTeamAssociationInterface {
  "The Team#id of the team."
  teamId: BigInt
  "The overridden team access type. This field is \`null\` if team access type is not overridden."
  overriddenTeamAccessType: TeamAccessTypeEnum
  "The default team access type Team#teamAccessType. This field is read-only and is populated by Google."
  defaultTeamAccessType: TeamAccessTypeEnum
}

"\`UserTeamAssociation\` associates a User with a Team to provide the user access to the entities that belong to the team."
type UserTeamAssociation implements UserRecordTeamAssociationInterface {
  "The Team#id of the team."
  teamId: BigInt
  "The overridden team access type. This field is \`null\` if team access type is not overridden."
  overriddenTeamAccessType: TeamAccessTypeEnum
  "The default team access type Team#teamAccessType. This field is read-only and is populated by Google."
  defaultTeamAccessType: TeamAccessTypeEnum
  "Refers to the User#id."
  userId: BigInt
}

"Captures a page of UserTeamAssociation objects."
type UserTeamAssociationPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of user team associations contained within this page."
  results: [UserTeamAssociation]
}

extend type Mutation {
  "Creates new UserTeamAssociation objects. @param userTeamAssociations the user team associations to create @return the created user team associations with their IDs filled in"
  createUserTeamAssociations(input: CreateUserTeamAssociationsInput!): [UserTeamAssociation]
    @soap(service: "UserTeamAssociation", action: "createUserTeamAssociations")
}

extend type Query {
  "Gets a UserTeamAssociationPage of UserTeamAssociation objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`userId\` UserTeamAssociation#userId   \`teamId\` UserTeamAssociation#teamId   @param filterStatement a Publisher Query Language statement used to filter a set of user team associations @return the user team associations that match the given filter"
  getUserTeamAssociationsByStatement(input: GetUserTeamAssociationsByStatementInput!): UserTeamAssociationPage
    @soap(service: "UserTeamAssociation", action: "getUserTeamAssociationsByStatement")
}

extend type Mutation {
  "Performs actions on UserTeamAssociation objects that match the given Statement#query. @param userTeamAssociationAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of user team associations @return the result of the action performed"
  performUserTeamAssociationAction(input: PerformUserTeamAssociationActionInput!): UpdateResult
    @soap(service: "UserTeamAssociation", action: "performUserTeamAssociationAction")
}

extend type Mutation {
  "Updates the specified UserTeamAssociation objects. @param userTeamAssociations the user team associations to update @return the updated user team associations"
  updateUserTeamAssociations(input: UpdateUserTeamAssociationsInput!): [UserTeamAssociation]
    @soap(service: "UserTeamAssociation", action: "updateUserTeamAssociations")
}

`;
