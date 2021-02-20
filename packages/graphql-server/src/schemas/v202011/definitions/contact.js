// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Base class for a Contact."
interface BaseContactInterface {
  _: Boolean
}

"A \`Contact\` represents a person who is affiliated with a single Company. A contact can have a variety of contact information associated to it, and can be invited to view their company's orders, line items, creatives, and reports."
type Contact implements BaseContactInterface {
  _: Boolean
  "The unique ID of the \`Contact\`. This value is readonly and is assigned by Google."
  id: BigInt!
  "The name of the contact. This attribute is required and has a maximum length of 127 characters."
  name: String!
  "The ID of the Company that this contact is associated with. This attribute is required and immutable."
  companyId: BigInt!
  "The status of the contact. This attribute is readonly and is assigned by Google."
  status: ContactStatusEnum
  "The address of the contact. This attribute is optional and has a maximum length of 1024 characters."
  address: String
  "The cell phone number where the contact can be reached. This attribute is optional."
  cellPhone: String
  "A free-form text comment for the contact. This attribute is optional and has a maximum length of 1024 characters."
  comment: String
  "The e-mail address where the contact can be reached. This attribute is optional."
  email: String
  "The fax number where the contact can be reached. This attribute is optional."
  faxPhone: String
  "The job title of the contact. This attribute is optional and has a maximum length of 1024 characters."
  title: String
  "The work phone number where the contact can be reached. This attribute is optional."
  workPhone: String
}

"A \`Contact\` represents a person who is affiliated with a single Company. A contact can have a variety of contact information associated to it, and can be invited to view their company's orders, line items, creatives, and reports."
input ContactInput {
  "The name of the contact. This attribute is required and has a maximum length of 127 characters."
  name: String!
  "The ID of the Company that this contact is associated with. This attribute is required and immutable."
  companyId: BigInt!
  "The address of the contact. This attribute is optional and has a maximum length of 1024 characters."
  address: String
  "The cell phone number where the contact can be reached. This attribute is optional."
  cellPhone: String
  "A free-form text comment for the contact. This attribute is optional and has a maximum length of 1024 characters."
  comment: String
  "The e-mail address where the contact can be reached. This attribute is optional."
  email: String
  "The fax number where the contact can be reached. This attribute is optional."
  faxPhone: String
  "The job title of the contact. This attribute is optional and has a maximum length of 1024 characters."
  title: String
  "The work phone number where the contact can be reached. This attribute is optional."
  workPhone: String
}

"Captures a page of Contact objects."
type ContactPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of contacts contained within this page."
  results: [Contact]
}

"Describes the contact statuses."
enum ContactStatusEnum {
  "The contact was invited to see their orders, but the invitation was cancelled."
  INVITE_CANCELED
  "The contact has been invited to see their orders, but the invitation has already expired."
  INVITE_EXPIRED
  "The contact has been invited to see their orders, but has not yet accepted the invitation."
  INVITE_PENDNG
  "The contact has not been invited to see their orders."
  UNINVITED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "The contact has access to login and view their orders."
  USER_ACTIVE
  "The contact accepted an invitation to see their orders, but their access was later revoked."
  USER_DISABLED
}

"Creates new Contact objects. @param contacts the contacts to create @return the created contacts with their IDs filled in"
input CreateContactsInput {
  contacts: [ContactInput]
}

"Gets a ContactPage of Contact objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`name\` Contact#name   \`email\` Contact#email   \`id\` Contact#id   \`comment\` Contact#comment   \`companyId\` Contact#companyId   \`title\` Contact#title   \`cellPhone\` Contact#cellPhone   \`workPhone\` Contact#workPhone   \`faxPhone\` Contact#faxPhone   \`status\` Contact#status   @param filterStatement a Publisher Query Language statement used to filter a set of contacts @return the contacts that match the given filter"
input GetContactsByStatementInput {
  statement: StatementInput
}

"Updates the specified Contact objects. @param contacts the contacts to update @return the updated contacts"
input UpdateContactsInput {
  contacts: [ContactInput]
}

extend type Mutation {
  "Creates new Contact objects. @param contacts the contacts to create @return the created contacts with their IDs filled in"
  createContacts(input: CreateContactsInput!): [Contact]
    @soap(service: "Contact", action: "createContacts")
}

extend type Query {
  "Gets a ContactPage of Contact objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`name\` Contact#name   \`email\` Contact#email   \`id\` Contact#id   \`comment\` Contact#comment   \`companyId\` Contact#companyId   \`title\` Contact#title   \`cellPhone\` Contact#cellPhone   \`workPhone\` Contact#workPhone   \`faxPhone\` Contact#faxPhone   \`status\` Contact#status   @param filterStatement a Publisher Query Language statement used to filter a set of contacts @return the contacts that match the given filter"
  getContactsByStatement(input: GetContactsByStatementInput!): ContactPage
    @soap(service: "Contact", action: "getContactsByStatement")
}

extend type Mutation {
  "Updates the specified Contact objects. @param contacts the contacts to update @return the updated contacts"
  updateContacts(input: UpdateContactsInput!): [Contact]
    @soap(service: "Contact", action: "updateContacts")
}

`;
