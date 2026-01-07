// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates new User objects."
input CreateUsersInput {
  users: [UserInput]
}

"Gets a UserPage of User objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`email\` User#email   \`id\` User#id   \`name\` User#name   \`roleId\` User#roleId   \`rolename\` User#roleName   \`status\` \`ACTIVE\` if User#isActive is true; \`INACTIVE\` otherwise  "
input GetUsersByStatementInput {
  filterStatement: StatementInput
}

"Performs actions on User objects that match the given Statement#query."
input PerformUserActionInput {
  userAction: JSONObject
  filterStatement: StatementInput
}

"Each \`Role\` provides a user with permissions to perform specific operations in the system."
type Role {
  "The unique ID of the role. This value is readonly and is assigned by Google. Roles that are created by Google will have negative IDs."
  id: BigInt!
  "The name of the role. This value is readonly and is assigned by Google."
  name: String
  "The description of the role. This value is readonly and is assigned by Google."
  description: String
  "The status of the Role. This field is read-only and can have the values RoleStatus#ACTIVE (default) or RoleStatus#INACTIVE, which determines the visibility of the role in the UI."
  status: RoleStatusEnum
}

"Represents the status of the role, weather the role is active or inactive."
enum RoleStatusEnum {
  "The status of an active role. (i.e. visible in the UI)"
  ACTIVE
  "The status of an inactive role. (i.e. hidden in the UI)"
  INACTIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Updates the specified User objects."
input UpdateUsersInput {
  users: [UserInput]
}

"Represents a user of the system. Users may be assigned at most one Role per network. Each role provides a user with permissions to perform specific operations. Without a role, they will not be able to perform any actions."
type User implements UserRecordInterface {
  "The unique ID of the \`User\`. This attribute is readonly and is assigned by Google."
  id: BigInt!
  "The name of the \`User\`. It has a maximum length of 128 characters."
  name: String
  "The email or login of the \`User\`. In order to create a new user, you must already have a [Google Account](https://www.google.com/accounts/ManageAccount)."
  email: String
  "The unique role ID of the \`User\`. Roles that are created by Google will have negative IDs."
  roleId: BigInt
  "The name of the role assigned to the \`User\`. This attribute is readonly."
  roleName: String
  "Specifies whether or not the \`User\` is active. An inactive user cannot log in to the system or perform any operations. This attribute is read-only."
  isActive: Boolean
  "An identifier for the \`User\` that is meaningful to the publisher. This attribute is optional and has a maximum length of 255 characters."
  externalId: String
  "Whether the user is an OAuth2 service account user. This attribute is read-only. Service account users can only be added through the UI."
  isServiceAccount: Boolean
  "The long format timezone id (e.g. 'America/Los_Angeles') used in the orders and line items UI for this \`User\`. Set this to \`null\` to indicate that no such value is defined for the \`User\` - UI then defaults to using the Network's timezone. This setting only affects the UI for this user and does not in particular affect the timezone of any dates and times returned in API responses."
  ordersUiLocalTimeZoneId: String
}

"Represents a user of the system. Users may be assigned at most one Role per network. Each role provides a user with permissions to perform specific operations. Without a role, they will not be able to perform any actions."
input UserInput {
  "The name of the \`User\`. It has a maximum length of 128 characters."
  name: String
  "The email or login of the \`User\`. In order to create a new user, you must already have a [Google Account](https://www.google.com/accounts/ManageAccount)."
  email: String
  "The unique role ID of the \`User\`. Roles that are created by Google will have negative IDs."
  roleId: BigInt
  "An identifier for the \`User\` that is meaningful to the publisher. This attribute is optional and has a maximum length of 255 characters."
  externalId: String
  "The long format timezone id (e.g. 'America/Los_Angeles') used in the orders and line items UI for this \`User\`. Set this to \`null\` to indicate that no such value is defined for the \`User\` - UI then defaults to using the Network's timezone. This setting only affects the UI for this user and does not in particular affect the timezone of any dates and times returned in API responses."
  ordersUiLocalTimeZoneId: String
}

"Captures a page of User objects"
type UserPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of users contained within this page."
  results: [User]
}

"The \`UserRecord\` represents the base class from which a \`User\` is derived."
interface UserRecordInterface {
  "The unique ID of the \`User\`. This attribute is readonly and is assigned by Google."
  id: BigInt!
  "The name of the \`User\`. It has a maximum length of 128 characters."
  name: String
  "The email or login of the \`User\`. In order to create a new user, you must already have a [Google Account](https://www.google.com/accounts/ManageAccount)."
  email: String
  "The unique role ID of the \`User\`. Roles that are created by Google will have negative IDs."
  roleId: BigInt
  "The name of the role assigned to the \`User\`. This attribute is readonly."
  roleName: String
}

type _UserConnection {
  totalCount: Int!
  nodes: [User!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`User\` by ID."
  _user(input: _SingleRecordQueryInput!): User
    @findById(service: "User", action: "getUsersByStatement")
}

extend type Query {
  "Finds multiple \`User\` objects based on the optional input parameters."
  _users(input: _MultipleRecordsQueryInput!): _UserConnection!
    @find(service: "User", action: "getUsersByStatement")
}

extend type Mutation {
  "Creates new User objects."
  createUsers(input: CreateUsersInput!): [User]
    @soap(service: "User", action: "createUsers")
}

extend type Query {
  "Returns the Role objects that are defined for the users of the network."
  getAllRoles: [Role]
    @soap(service: "User", action: "getAllRoles")
}

extend type Query {
  "Returns the current User."
  getCurrentUser: User
    @soap(service: "User", action: "getCurrentUser")
}

extend type Query {
  "Gets a UserPage of User objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`email\` User#email   \`id\` User#id   \`name\` User#name   \`roleId\` User#roleId   \`rolename\` User#roleName   \`status\` \`ACTIVE\` if User#isActive is true; \`INACTIVE\` otherwise  "
  getUsersByStatement(input: GetUsersByStatementInput!): UserPage
    @soap(service: "User", action: "getUsersByStatement")
}

extend type Mutation {
  "Performs actions on User objects that match the given Statement#query."
  performUserAction(input: PerformUserActionInput!): UpdateResult
    @soap(service: "User", action: "performUserAction")
}

extend type Mutation {
  "Updates the specified User objects."
  updateUsers(input: UpdateUsersInput!): [User]
    @soap(service: "User", action: "updateUsers")
}

`;
