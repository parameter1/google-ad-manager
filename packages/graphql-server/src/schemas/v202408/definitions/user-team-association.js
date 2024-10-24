// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates new UserTeamAssociation objects."
input CreateUserTeamAssociationsInput {
  userTeamAssociations: [UserTeamAssociationInput]
}

"Gets a UserTeamAssociationPage of UserTeamAssociation objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`userId\` UserTeamAssociation#userId   \`teamId\` UserTeamAssociation#teamId  "
input GetUserTeamAssociationsByStatementInput {
  filterStatement: StatementInput
}

"Performs actions on UserTeamAssociation objects that match the given Statement#query."
input PerformUserTeamAssociationActionInput {
  userTeamAssociationAction: JSONObject
  statement: StatementInput
}

"Updates the specified UserTeamAssociation objects."
input UpdateUserTeamAssociationsInput {
  userTeamAssociations: [UserTeamAssociationInput]
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

"\`UserTeamAssociation\` associates a User with a Team to provide the user access to the entities that belong to the team."
input UserTeamAssociationInput {
  "The Team#id of the team."
  teamId: BigInt
  "The overridden team access type. This field is \`null\` if team access type is not overridden."
  overriddenTeamAccessType: TeamAccessTypeEnum
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

type _UserTeamAssociationConnection {
  totalCount: Int!
  nodes: [UserTeamAssociation!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`UserTeamAssociation\` by ID."
  _userTeamAssociation(input: _SingleRecordQueryInput!): UserTeamAssociation
    @findById(service: "UserTeamAssociation", action: "getUserTeamAssociationsByStatement")
}

extend type Query {
  "Finds multiple \`UserTeamAssociation\` objects based on the optional input parameters."
  _userTeamAssociations(input: _MultipleRecordsQueryInput!): _UserTeamAssociationConnection!
    @find(service: "UserTeamAssociation", action: "getUserTeamAssociationsByStatement")
}

extend type Mutation {
  "Creates new UserTeamAssociation objects."
  createUserTeamAssociations(input: CreateUserTeamAssociationsInput!): [UserTeamAssociation]
    @soap(service: "UserTeamAssociation", action: "createUserTeamAssociations")
}

extend type Query {
  "Gets a UserTeamAssociationPage of UserTeamAssociation objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`userId\` UserTeamAssociation#userId   \`teamId\` UserTeamAssociation#teamId  "
  getUserTeamAssociationsByStatement(input: GetUserTeamAssociationsByStatementInput!): UserTeamAssociationPage
    @soap(service: "UserTeamAssociation", action: "getUserTeamAssociationsByStatement")
}

extend type Mutation {
  "Performs actions on UserTeamAssociation objects that match the given Statement#query."
  performUserTeamAssociationAction(input: PerformUserTeamAssociationActionInput!): UpdateResult
    @soap(service: "UserTeamAssociation", action: "performUserTeamAssociationAction")
}

extend type Mutation {
  "Updates the specified UserTeamAssociation objects."
  updateUserTeamAssociations(input: UpdateUserTeamAssociationsInput!): [UserTeamAssociation]
    @soap(service: "UserTeamAssociation", action: "updateUserTeamAssociations")
}

`;
