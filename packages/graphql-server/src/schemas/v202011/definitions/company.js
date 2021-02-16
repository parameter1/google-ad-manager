const { gql } = require('apollo-server-express');

module.exports = gql`

extend type Query {
  "Finds a single company by ID."
  company(input: SingleRecordQueryInput!): Company
    @findById(service: "Company", method: "getCompaniesByStatement")
  "Finds multiple companies based on the (optional) input parameters."
  companies(input: MultipleRecordsQueryInput = {}): CompanyConnection!
    @find(service: "Company", method: "getCompaniesByStatement")
}

"Represents multiple \`Company\` objects."
type CompanyConnection {
  totalCount: Int!
  nodes: [Company!]!
  statement: StatementInfo!
  pageInfo: PageInfo!
}

"A \`Company\` represents an agency, a single advertiser or an entire advertising network."
type Company {
  "Uniquely identifies the \`Company\`. This value is read-only and is assigned by Google when the company is created. This attribute is required for updates."
  id: BigInt!
  "The full name of the company. This attribute is required and has a maximum length of 127 characters."
  name: String!
  "Specifies what kind of company this is. This attribute is required."
  type: CompanyTypeEnum!
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
  lastModifiedDateTime: GAMDateTime
  "Info required for when Company Type is CHILD_PUBLISHER."
  childPublisher: ChildPublisher
  "Info required for when Company Type is VIEWABILITY_PROVIDER."
  viewabilityProvider: ViewabilityProvider
}

"Settings for a Company."
type CompanySettings {
  "Default billing cap for proposals created by the Company of type Company.Type#ADVERTISER in Sales Manager. Return null if default billing setting feature is disabled or BillingSource is BillingSource#CONTRACTED. It is allowed that all of the BillingCap, BillingSchedule, BillingSource are null when the company has no setting about these values."
  billingCap: BillingCapEnum
  "Default billing schedule for proposals created by the Company of type Company.Type#ADVERTISER in Sales Manager. Return null if default billing setting feature is disabled or BillingSource is not BillingSource#CONTRACTED. It is allowed that all of the BillingCap, BillingSchedule, BillingSource are null when the company has no setting about these values."
  billingSchedule: BillingScheduleEnum
  "Default billing source for proposals created by the Company of type Company.Type#ADVERTISER in Sales Manager. Return null if default billing setting feature is disabled. It is allowed that all of the BillingCap, BillingSchedule, BillingSource are null when the company has no setting about these values."
  billingSource: BillingSourceEnum
  "Default advertiser discount for proposals created by the Company of type Company.Type#ADVERTISER in Sales Manager. Return null if default billing setting feature is disabled or the company has no setting on this value. It presents in millipercentage (values 0 to 100000)."
  advertiserDiscount: BigInt
  "Default value added tax for proposals created by the Company of type Company.Type#ADVERTISER in Sales Manager. Return null if default billing setting feature is disabled or the company has no setting on this value. It presents in millipercentage (values 0 to 100000)."
  valueAddedTax: BigInt
  "Default agency commission for proposals associated with the Company of type Company.Type#AGENCY in Sales Manager. Return null if the default billing setting feature is disabled or the company has no setting on this value. It presents in millipercentage (values 0 to 100000)."
  agencyCommission: BigInt
}

"Represents a Label that can be applied to an entity. To negate an inherited label, create an \`AppliedLabel\` with \`labelId\` as the inherited label's ID and \`isNegated\` set to true."
type AppliedLabel {
  "The ID of a created Label."
  labelId: BigInt
  "\`isNegated\` should be set to \`true\` to negate the effects of \`labelId\`."
  isNegated: Boolean
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

"Determines how the revenue amount will be capped for each billing month. This cannot be used when BillingSource is BillingSource#CONTRACTED."
enum BillingCapEnum {
  "Use a billing source of capped actuals with a billing cap of cumulative to bill your advertiser up to a campaign's capped amount, regardless of the number of impressions that are served each month."
  CAPPED_CUMULATIVE
  "Use a billing source of capped actuals with a billing cap of cumulative per billing cycle to bill your advertiser up to a capped amount for each billing cycle of a campaign and carry forward the balance of over- or under-delivered impressions towards the number of impressions delivered in future billing cycles of the campaign."
  CAPPED_CUMULATIVE_PER_BILLING_CYCLE
  "Use a billing source of capped actuals with a billing cap of the billing cycle to bill your advertiser up to a capped amount for each billing cycle of a campaign, regardless of the number of impressions that are served."
  CAPPED_PER_BILLING_CYCLE
  "Use a billing source of capped actuals with a billing cap of cumulative per billing cycle to bill your advertiser up to a capped amount for each cycle of a campaign and carry forward the balance of over- or under-delivered impressions towards the number of impressions delivered in future cycles of the campaign."
  CAPPED_WITH_ROLLOVER_PER_BILLING_CYCLE
  "There is no cap for each billing month."
  NO_CAP
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Determines how much to bill in each billing cycle when a proposal is charged based on the contracted value. This can only be used when BillingSource is BillingSource#CONTRACTED."
enum BillingScheduleEnum {
  "Charged based on the contracted value after the last month of the campaign."
  END_OF_THE_CAMPAIGN
  "Charged based on the contracted value after the first month of the campaign."
  PREPAID
  "Use a billing source of contracted with a billing schedule of prorated to bill your advertiser proportionally based on the amount of days in each month."
  PRORATED
  "Use a billing source of contracted with a billing schedule of straightline to bill your advertiser the same amount each month, regardless of the number of days in each month."
  STRAIGHTLINE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Determines which billable numbers or delivery data (impressions, clicks, and so on) will be used for billing purposes."
enum BillingSourceEnum {
  "Charge based on the quantity of impressions, clicks, or days booked, regardless of what actually delivered."
  CONTRACTED
  "Charge based on what actually delivered, as counted by Ad Manager."
  DFP_VOLUME
  "Charge based on what actually delivered, as counted by the third party ads server."
  THIRD_PARTY_VOLUME
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
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

"Status of the MCM child publisher's Ad Manager account with respect to delegated serving. In order for the child network to be served ads for MCM, it must have accepted the invite from the parent network, and must have passed Google's policy compliance verifications."
enum AccountStatusEnum {
  "The child publisher accepted the invite, and Google found it to be compliant with its policies, i.e. no policy violations were found, and the child publisher can be served ads."
  APPROVED
  "The association between the parent and child publishers was deactivated by Google Ad Manager."
  DEACTIVATED_BY_AD_MANAGER
  "The child publisher has declined the invite."
  DECLINED
  "The child publisher accepted the invite, but was disapproved by Google for being a duplicate of another account."
  DISAPPROVED_DUPLICATE_ACCOUNT
  "The child publisher accepted the invite, but was disapproved by Google for violating its policies."
  DISAPPROVED_POLICY_VIOLATION
  "The invite was sent to the child publisher more than a month ago, due to which it has been deactivated."
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

`;
