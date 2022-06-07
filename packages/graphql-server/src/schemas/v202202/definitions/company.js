// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"A \`ChildPublisher\` represents a network being managed as part of Multiple Customer Management."
input ChildPublisherInput {
  "Type of delegation the parent has proposed to have over the child, pending approval of the child network. Set the value of this field to the delegation type you intend this network to have over the child network. Upon approval by the child network, its value is copied to \`approvedDelegationType\`, and \`proposedDelegationType\` is set to null."
  proposedDelegationType: DelegationTypeEnum
  "Status of the delegation relationship between parent and child."
  status: DelegationStatusEnum
  "Network code of child network."
  childNetworkCode: String
  "The child publisher's seller ID, as specified in the parent publisher's sellers.json file. This field is only relevant for Manage Inventory child publishers."
  sellerId: String
}

"A \`Company\` represents an agency, a single advertiser or an entire advertising network."
type Company {
  "Uniquely identifies the \`Company\`. This value is read-only and is assigned by Google when the company is created. This attribute is required for updates."
  id: BigInt!
  "The full name of the company. This attribute is required and has a maximum length of 127 characters."
  name: String
  "Specifies what kind of company this is. This attribute is required."
  type: CompanyTypeEnum
  "Specifies the address of the company. This attribute is optional and has a maximum length of 65,535 characters."
  address: String
  "Specifies the email of the company. This attribute is optional and has a maximum length of 128 characters."
  email: String
  "Specifies the fax phone number of the company. This attribute is optional and has a maximum length of 63 characters."
  faxPhone: String
  "Specifies the primary phone number of the company. This attribute is optional and has a maximum length of 63 characters."
  primaryPhone: String
  "Specifies the external ID of the company. This attribute is optional and has a maximum length of 255 characters."
  externalId: String
  "Specifies the comment of the company. This attribute is optional and has a maximum length of 1024 characters."
  comment: String
  "Specifies the company's credit status. This attribute is optional and defaults to CreditStatus#ACTIVE when basic credit status settings are enabled, and CreditStatus#ON_HOLD when advanced credit status settings are enabled."
  creditStatus: CompanyCreditStatusEnum
  "Specifies the default billing settings of this \`Company\`. This attribute is optional."
  settings: CompanySettings
  "The set of labels applied to this company."
  appliedLabels: [AppliedLabel]
  "The ID of the Contact who is acting as the primary contact for this company. This attribute is optional."
  primaryContactId: BigInt
  "The IDs of all teams that this company is on directly."
  appliedTeamIds: [BigInt]
  "Specifies the ID of the Google-recognized canonicalized form of this company. This attribute is optional."
  thirdPartyCompanyId: Int
  "The date and time this company was last modified."
  lastModifiedDateTime: DateTime
  "Info required for when Company Type is CHILD_PUBLISHER."
  childPublisher: ChildPublisher
  "Info required for when Company Type is VIEWABILITY_PROVIDER."
  viewabilityProvider: ViewabilityProvider
}

"Specifies the credit-worthiness of the company for which the publisher runs an order. By doing so, the publisher can control the running of campaigns for the company. A publisher can choose between Basic and Advanced Credit Status settings. This feature needs to be enabled in the Ad Manager web site. Also the kind of setting you need - Basic or Advanced must be configured. If Basic is enabled then, the values allowed are \`ACTIVE\` and \`INACTIVE\`. If Advanced is chosen, then all values are allowed. Choosing an Advanced setting when only the Basic feature has been enabled, or using the Basic setting without turning the feature on will result in an error."
enum CompanyCreditStatusEnum {
  "When the credit status is active, all line items in all orders belonging to the company will be served. This is a Basic as well as an Advanced Credit Status setting."
  ACTIVE
  "When the credit status of a company is marked blocked, then all active line items belonging to the company will stop serving with immediate effect. You cannot active new line items of the company nor can you create any new orders or line items belonging to the company. This is an Advanced Credit Status setting."
  BLOCKED
  "When the credit status is credit stop, the publisher cannot activate new line items of the company. However, line items that were activated before the credit status change will remain active. You cannot create any new orders or line items for the company. This is an Advanced Credit Status setting."
  CREDIT_STOP
  "When the credit status is inactive, the publisher cannot activate new line items of the company. However, line items that were activated before the credit status change will remain active. You cannot create any new orders or line items for the company. It is used to mark companies with which business is to be discontinued. Such companies are not listed in Ad Manager web site. This is a Basic as well as an Advanced Credit Status setting."
  INACTIVE
  "When the credit status is on hold, the publisher cannot activate new line items of the company. However, line items that were activated before the credit status change will remain active. You can still create orders and line items for the company. This is an Advanced Credit Status setting."
  ON_HOLD
}

"A \`Company\` represents an agency, a single advertiser or an entire advertising network."
input CompanyInput {
  "The full name of the company. This attribute is required and has a maximum length of 127 characters."
  name: String
  "Specifies what kind of company this is. This attribute is required."
  type: CompanyTypeEnum
  "Specifies the address of the company. This attribute is optional and has a maximum length of 65,535 characters."
  address: String
  "Specifies the email of the company. This attribute is optional and has a maximum length of 128 characters."
  email: String
  "Specifies the fax phone number of the company. This attribute is optional and has a maximum length of 63 characters."
  faxPhone: String
  "Specifies the primary phone number of the company. This attribute is optional and has a maximum length of 63 characters."
  primaryPhone: String
  "Specifies the external ID of the company. This attribute is optional and has a maximum length of 255 characters."
  externalId: String
  "Specifies the comment of the company. This attribute is optional and has a maximum length of 1024 characters."
  comment: String
  "Specifies the company's credit status. This attribute is optional and defaults to CreditStatus#ACTIVE when basic credit status settings are enabled, and CreditStatus#ON_HOLD when advanced credit status settings are enabled."
  creditStatus: CompanyCreditStatusEnum
  "The set of labels applied to this company."
  appliedLabels: [AppliedLabelInput]
  "The ID of the Contact who is acting as the primary contact for this company. This attribute is optional."
  primaryContactId: BigInt
  "The IDs of all teams that this company is on directly."
  appliedTeamIds: [BigInt]
  "Specifies the ID of the Google-recognized canonicalized form of this company. This attribute is optional."
  thirdPartyCompanyId: Int
  "The date and time this company was last modified."
  lastModifiedDateTime: DateTime
  "Info required for when Company Type is CHILD_PUBLISHER."
  childPublisher: ChildPublisherInput
  "Info required for when Company Type is VIEWABILITY_PROVIDER."
  viewabilityProvider: ViewabilityProviderInput
}

"Captures a page of Company objects."
type CompanyPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of companies contained within this page."
  results: [Company]
}

"Settings for a Company."
type CompanySettings {
  _: Boolean
}

"The type of the company. Once a company is created, it is not possible to change its type."
enum CompanyTypeEnum {
  "A business entity that buys publisher inventory to run advertising campaigns. An advertiser is optionally associated with one or more agencies."
  ADVERTISER
  "A company representing multiple advertisers and agencies."
  AD_NETWORK
  "A business entity that offers services, such as advertising creation, placement, and management, to advertisers."
  AGENCY
  "A company representing a child network."
  CHILD_PUBLISHER
  "The publisher's own advertiser. When no outside advertiser buys its inventory, the publisher may run its own advertising campaigns."
  HOUSE_ADVERTISER
  "The publisher's own agency."
  HOUSE_AGENCY
  "A company representing a partner."
  PARTNER
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "A company representing a viewability provider."
  VIEWABILITY_PROVIDER
}

"Creates new Company objects. @param companies the companies to create @return the created companies with their IDs filled in"
input CreateCompaniesInput {
  companies: [CompanyInput]
}

"Gets a CompanyPage of Company objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Company#id   \`name\` Company#name   \`type\` Company#type   \`lastModifiedDateTime\` Company#lastModifiedDateTime   @param filterStatement a Publisher Query Language statement used to filter a set of companies @return the companies that match the given filter"
input GetCompaniesByStatementInput {
  filterStatement: StatementInput
}

"Performs actions on Company objects that match the given \`Statement\`. @param companyAction the action to perform @param statement a PQL statement used to filter companies @return the result of the action performed @throws ApiException"
input PerformCompanyActionInput {
  companyAction: JSONObject
  statement: StatementInput
}

"Updates the specified Company objects. @param companies the companies to update @return the updated companies"
input UpdateCompaniesInput {
  companies: [CompanyInput]
}

"Information required for Company of Type VIEWABILITY_PROVIDER. It contains all of the data needed to capture viewability metrics."
type ViewabilityProvider {
  "The key for this ad verification vendor."
  vendorKey: String
  "The URL that hosts the verification script for this vendor."
  verificationScriptUrl: String
  "The parameters that will be passed to the verification script."
  verificationParameters: String
  "The URL that should be pinged if the verification script cannot be run."
  verificationRejectionTrackerUrl: String
}

"Information required for Company of Type VIEWABILITY_PROVIDER. It contains all of the data needed to capture viewability metrics."
input ViewabilityProviderInput {
  "The key for this ad verification vendor."
  vendorKey: String
  "The URL that hosts the verification script for this vendor."
  verificationScriptUrl: String
  "The parameters that will be passed to the verification script."
  verificationParameters: String
  "The URL that should be pinged if the verification script cannot be run."
  verificationRejectionTrackerUrl: String
}

type _CompanyConnection {
  totalCount: Int!
  nodes: [Company!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds multiple \`Company\` objects based on the optional input parameters."
  _companies(input: _MultipleRecordsQueryInput!): _CompanyConnection!
    @find(service: "Company", action: "getCompaniesByStatement")
}

extend type Query {
  "Finds a single \`Company\` by ID."
  _company(input: _SingleRecordQueryInput!): Company
    @findById(service: "Company", action: "getCompaniesByStatement")
}

extend type Mutation {
  "Creates new Company objects. @param companies the companies to create @return the created companies with their IDs filled in"
  createCompanies(input: CreateCompaniesInput!): [Company]
    @soap(service: "Company", action: "createCompanies")
}

extend type Query {
  "Gets a CompanyPage of Company objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Company#id   \`name\` Company#name   \`type\` Company#type   \`lastModifiedDateTime\` Company#lastModifiedDateTime   @param filterStatement a Publisher Query Language statement used to filter a set of companies @return the companies that match the given filter"
  getCompaniesByStatement(input: GetCompaniesByStatementInput!): CompanyPage
    @soap(service: "Company", action: "getCompaniesByStatement")
}

extend type Mutation {
  "Performs actions on Company objects that match the given \`Statement\`. @param companyAction the action to perform @param statement a PQL statement used to filter companies @return the result of the action performed @throws ApiException"
  performCompanyAction(input: PerformCompanyActionInput!): UpdateResult
    @soap(service: "Company", action: "performCompanyAction")
}

extend type Mutation {
  "Updates the specified Company objects. @param companies the companies to update @return the updated companies"
  updateCompanies(input: UpdateCompaniesInput!): [Company]
    @soap(service: "Company", action: "updateCompanies")
}

`;
