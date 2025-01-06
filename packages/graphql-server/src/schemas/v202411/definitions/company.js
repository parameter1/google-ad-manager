// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Status of the MCM child publisher's Ad Manager account with respect to delegated serving. In order for the child network to be served ads for MCM, it must have accepted the invite from the parent network, and must have passed Google's policy compliance verifications."
enum AccountStatusEnum {
  "The child publisher accepted the invite, and Google found it to be compliant with its policies, i.e. no policy violations were found, and the child publisher can be served ads."
  APPROVED
  "The child publisher has closed their own account."
  CLOSED_BY_PUBLISHER
  "The child publisher accepted the invite, but was disapproved by Google for invalid activity."
  CLOSED_INVALID_ACTIVITY
  "The child publisher accepted the invite, but was disapproved by Google for violating its policies."
  CLOSED_POLICY_VIOLATION
  "The association between the parent and child publishers was deactivated by Google Ad Manager."
  DEACTIVATED_BY_AD_MANAGER
  "The child publisher has declined the invite."
  DECLINED
  "The child publisher accepted the invite, but was disapproved by Google for being a duplicate of another account."
  DISAPPROVED_DUPLICATE_ACCOUNT
  "The child publisher accepted the invite, but was disapproved as ineligible by Google."
  DISAPPROVED_INELIGIBLE
  "The invite was sent to the child publisher more than 90 days ago, due to which it has been deactivated."
  EXPIRED
  "Either the child publisher disconnected from the parent network, or the parent network withdrew the invite."
  INACTIVE
  "The child publisher has not acted on the invite from the parent."
  INVITED
  "The child publisher has accepted the invite, and is awaiting Google's policy compliance verifications."
  PENDING_GOOGLE_APPROVAL
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"A \`ChildPublisher\` represents a network being managed as part of Multiple Customer Management."
type ChildPublisher {
  "Type of delegation the parent has been approved to have over the child. This field is read-only, and set to the proposed delegation type value \`proposedDelegationType\` upon approval by the child network. The value remains null if the parent network has not been approved."
  approvedDelegationType: DelegationTypeEnum
  "Type of delegation the parent has proposed to have over the child, pending approval of the child network. Set the value of this field to the delegation type you intend this network to have over the child network. Upon approval by the child network, its value is copied to \`approvedDelegationType\`, and \`proposedDelegationType\` is set to null."
  proposedDelegationType: DelegationTypeEnum
  "Status of the delegation relationship between parent and child."
  status: DelegationStatusEnum
  "Status of the child publisher's Ad Manager account based on \`ChildPublisher#status\` as well as Google's policy verification results. This field is read-only."
  accountStatus: AccountStatusEnum
  "Network code of child network."
  childNetworkCode: String
  "The child publisher's seller ID, as specified in the parent publisher's sellers.json file. This field is only relevant for Manage Inventory child publishers."
  sellerId: String
  "The proposed revenue share that the parent publisher will receive in millipercentage (values 0 to 100000) for Manage Account proposals. For example, 15% is 15000 millipercent. For updates, this field is read-only. Use company actions to propose new revenue share agreements for existing MCM children. This field is ignored for Manage Inventory proposals."
  proposedRevenueShareMillipercent: BigInt
  "The child publisher's pending onboarding tasks. This will only be populated if the child publisher's \`AccountStatus\` is \`PENDING_GOOGLE_APPROVAL\`. This attribute is read-only."
  onboardingTasks: [OnboardingTaskEnum]
}

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
  "Specifies the address of the company. This attribute is optional and has a maximum length of 1024 characters."
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
  "Specifies the address of the company. This attribute is optional and has a maximum length of 1024 characters."
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

"Creates new Company objects."
input CreateCompaniesInput {
  companies: [CompanyInput]
}

"Status of the association between networks. When a parent network requests access, it is marked as pending. Once the child network approves, it is marked as approved."
enum DelegationStatusEnum {
  "The association request from the parent network is approved by the child network."
  APPROVED
  "The association request from the parent network is pending child network approval or rejection."
  PENDING
  "The association request from the parent network is rejected or revoked by the child network."
  REJECTED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "The association request from the parent network is withdrawn by the parent network."
  WITHDRAWN
}

"The type of delegation of the child network to the parent network in MCM."
enum DelegationTypeEnum {
  "The parent network gets complete access to the child network's account"
  MANAGE_ACCOUNT
  "A subset of the ad requests from the child are delegated to the parent, determined by the tag on the child network's web pages. The parent network does not have access to the child network, as a subset of the inventory could be owned and operated by the child network."
  MANAGE_INVENTORY
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Gets a CompanyPage of Company objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Company#id   \`name\` Company#name   \`type\` Company#type   \`lastModifiedDateTime\` Company#lastModifiedDateTime  "
input GetCompaniesByStatementInput {
  filterStatement: StatementInput
}

"Pending onboarding tasks for the child publishers that must completed before Google's policy compliance is verified."
enum OnboardingTaskEnum {
  "Setup of the child publisher's Ad Manager account."
  AD_MANAGER_ACCOUNT_SETUP
  "Creation of the child publisher's payments billing profile."
  BILLING_PROFILE_CREATION
  "Verification of the child publisher's phone number."
  PHONE_PIN_VERIFICATION
  UNKNOWN
}

"Performs actions on Company objects that match the given \`Statement\`."
input PerformCompanyActionInput {
  companyAction: JSONObject
  statement: StatementInput
}

"Updates the specified Company objects."
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
  "Creates new Company objects."
  createCompanies(input: CreateCompaniesInput!): [Company]
    @soap(service: "Company", action: "createCompanies")
}

extend type Query {
  "Gets a CompanyPage of Company objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Company#id   \`name\` Company#name   \`type\` Company#type   \`lastModifiedDateTime\` Company#lastModifiedDateTime  "
  getCompaniesByStatement(input: GetCompaniesByStatementInput!): CompanyPage
    @soap(service: "Company", action: "getCompaniesByStatement")
}

extend type Mutation {
  "Performs actions on Company objects that match the given \`Statement\`."
  performCompanyAction(input: PerformCompanyActionInput!): UpdateResult
    @soap(service: "Company", action: "performCompanyAction")
}

extend type Mutation {
  "Updates the specified Company objects."
  updateCompanies(input: UpdateCompaniesInput!): [Company]
    @soap(service: "Company", action: "updateCompanies")
}

`;
