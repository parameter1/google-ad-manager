// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Represents the buyer RFP information associated with a Proposal describing the requirements from the buyer."
type BuyerRfp {
  "CPM for the Proposal in question. Given that this field belongs to a request for proposal (for which initially a Proposal does not yet exist), this field should serve as guidance for publishers to create a Proposal with LineItems reflecting this CPM. This attribute is read-only when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  costPerUnit: Money
  "The number of impressions per day that a buyer wishes to see in the Proposal derived from the request for proposal in question. This attribute is read-only when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  units: BigInt
  "Total amount of Money available to spend on this deal. In the case of Preferred Deal, the budget is equal to the maximum amount of money a buyer is willing to spend on a given Proposal, even though the budget might not be spent entirely, as impressions are not guaranteed. This attribute is read-only when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  budget: Money
  "Currency code for this deal's budget and CPM. This attribute is read-only when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  currencyCode: String
  "The DateTime in which the proposed deal should start serving. This attribute is read-only when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  startDateTime: DateTime
  "The DateTime in which the proposed deal should end serving. This attribute is read-only when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  endDateTime: DateTime
  "A description of the proposed deal. This can be used for the buyer to tell the publisher more detailed information about the deal in question. This attribute is read-only when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  description: String
  "A list of inventory sizes in which creatives will be eventually served. This attribute is read-only when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  creativePlaceholders: [CreativePlaceholder]
  "Targeting information for the proposal in question. Currently this field only contains GeoTargeting information. This attribute is read-only when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  targeting: Targeting
  "Additional terms of the deal in question. This field can be used to state more specific targeting information for the deal, as well as any additional information regarding this deal. Given that this field belongs to a request for proposal (for which initially a Proposal does not yet exist), this field can be populated by buyers to specify additional information that they wish publishers to incorporate into the Proposal derived from this request for proposal. This attribute is read-only when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  additionalTerms: String
  "Identifies the format of the inventory or 'channel' through which the ad serves. Environments currently supported include AdExchangeEnvironment#DISPLAY, AdExchangeEnvironment#VIDEO, and AdExchangeEnvironment#MOBILE. This attribute is read-only when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  adExchangeEnvironment: AdExchangeEnvironmentEnum
  "Deal type; either Programmatic Guaranteed or Preferred Deal. This field corresponds to the type of Proposal that a buyer wishes to negotiate with a seller. This attribute is read-only when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  rfpType: RfpTypeEnum
}

"Creates new Proposal objects. For each proposal, the following fields are required:  Proposal#name  @param proposals the proposals to create @return the created proposals with their IDs filled in"
input CreateProposalsInput {
  proposals: [ProposalInput]
}

"Gets a MarketplaceCommentPage of MarketplaceComment objects that satisfy the given Statement#query. This method only returns comments already sent to Marketplace, local draft ProposalMarketplaceInfo#marketplaceComment are not included. The following fields are supported for filtering:   PQL Property Object Property   \`proposalId\` MarketplaceComment#proposalId   The query must specify a \`proposalId\`, and only supports a subset of PQL syntax: [WHERE  {AND  ...}] [ORDER BY  [ASC | DESC]] [LIMIT {[,] } | { OFFSET }]       :=  =   :=  IN  Only supports \`ORDER BY\` MarketplaceComment#creationTime. @param filterStatement a Publisher Query Language statement used to filter a set of marketplace comments @return the marketplace comments that match the given filter"
input GetMarketplaceCommentsByStatementInput {
  filterStatement: StatementInput
}

"Gets a ProposalPage of Proposal objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Proposal#id   \`dfpOrderId\` Proposal#dfpOrderId   \`name\` Proposal#name   \`status\` Proposal#status   \`isArchived\` Proposal#isArchived    \`approvalStatus\` Only applicable for proposals using sales management  Proposal#approvalStatus   \`lastModifiedDateTime\` Proposal#lastModifiedDateTime    \`thirdPartyAdServerId\`  Only applicable for non-programmatic proposals using sales management   Proposal#thirdPartyAdServerId    \`customThirdPartyAdServerName\`  Only applicable for non-programmatic proposals using sales management   Proposal#customThirdPartyAdServerName   \`hasOfflineErrors\` Proposal#hasOfflineErrors   \`isProgrammatic\` Proposal#isProgrammatic    \`negotiationStatus\` Only applicable for programmatic proposals  ProposalMarketplaceInfo#negotiationStatus   @param filterStatement a Publisher Query Language statement used to filter a set of proposals @return the proposals that match the given filter"
input GetProposalsByStatementInput {
  filterStatement: StatementInput
}

"A comment associated with a programmatic Proposal that has been sent to Marketplace."
type MarketplaceComment {
  "The unique ID of the Proposal the comment belongs to."
  proposalId: BigInt
  "The comment made on the Proposal."
  comment: String
  "The creation DateTime of this \`MarketplaceComment\`."
  creationTime: DateTime
  "Indicates whether the \`MarketplaceComment\` was created by seller."
  createdBySeller: Boolean
}

"Captures a page of MarketplaceComment objects."
type MarketplaceCommentPage {
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of results contained within this page."
  results: [MarketplaceComment]
}

"The role (buyer or seller) that performed an action in the negotiation of a \`Proposal\`."
enum NegotiationRoleEnum {
  BUYER
  SELLER
  UNKNOWN
}

"Represents the proposal's negotiation status for Marketplace."
enum NegotiationStatusEnum {
  "Indicates that a Proposal has been updated by the seller and is awaiting buyer approval."
  AWAITING_BUYER_REVIEW
  "Indicates that a Proposal has been updated by the buyer and is awaiting seller approval."
  AWAITING_SELLER_REVIEW
  "Indicates that a new Proposal has been created by the buyer and is awaiting seller action."
  BUYER_INITIATED
  "Indicates that negotiations for the Proposal have been cancelled."
  CANCELLED
  "Indicates that the Proposal has been accepted by both the buyer and the seller."
  FINALIZED
  "Indicates that the seller has accepted the Proposal and is awaiting the buyer's acceptance."
  ONLY_SELLER_ACCEPTED
  "Indicates that a new Proposal has been created by the seller and has not been sent to Marketplace yet."
  SELLER_INITIATED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Performs actions on Proposal objects that match the given Statement#query. The following fields are also required when submitting proposals for approval:  Proposal#advertiser Proposal#primarySalesperson Proposal#primaryTraffickerId  @param proposalAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of proposals @return the result of the action performed"
input PerformProposalActionInput {
  proposalAction: JSONObject
  filterStatement: StatementInput
}

"A \`Proposal\` represents an agreement between an interactive advertising seller and a buyer that specifies the details of an advertising campaign."
type Proposal {
  "The unique ID of the \`Proposal\`. This attribute is read-only."
  id: BigInt!
  "Flag that specifies whether this \`Proposal\` is for programmatic deals. This value is default to \`false\`."
  isProgrammatic: Boolean
  "The unique ID of corresponding Order. This will be \`null\` if the \`Proposal\` has not been pushed to Ad Manager. This attribute is read-only."
  dfpOrderId: BigInt
  "The name of the \`Proposal\`. This value has a maximum length of 255 characters. This value is copied to Order#name when the proposal turns into an order. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration. This attribute is required."
  name: String
  "The date and time at which the order and line items associated with the \`Proposal\` are eligible to begin serving. This attribute is derived from the proposal line item of the proposal which has the earliest ProposalLineItem#startDateTime. This attribute will be null, if this proposal has no related line items, or none of its line items have a start time. This attribute is read-only."
  startDateTime: DateTime
  "The date and time at which the order and line items associated with the \`Proposal\` stop being served. This attribute is derived from the proposal line item of the proposal which has the latest ProposalLineItem#endDateTime. This attribute will be null, if this proposal has no related line items, or none of its line items have an end time. This attribute is read-only."
  endDateTime: DateTime
  "The status of the \`Proposal\`. This attribute is read-only."
  status: ProposalStatusEnum
  "The archival status of the \`Proposal\`. This attribute is read-only."
  isArchived: Boolean
  "The advertiser, to which this \`Proposal\` belongs, and a set of Contact objects associated with the advertiser. The ProposalCompanyAssociation#type of this attribute should be ProposalCompanyAssociationType#ADVERTISER. This attribute is required when the proposal turns into an order, and its ProposalCompanyAssociation#companyId will be copied to Order#advertiserId. This attribute becomes readonly once the \`Proposal\` has been pushed."
  advertiser: ProposalCompanyAssociation
  "List of agencies and the set of Contact objects associated with each agency. This attribute is optional. A \`Proposal\` only has at most one Company with ProposalCompanyAssociationType#PRIMARY_AGENCY type, but a Company can appear more than once with different ProposalCompanyAssociationType values. If primary agency exists, its ProposalCompanyAssociation#companyId will be copied to Order#agencyId when the proposal turns into an order."
  agencies: [ProposalCompanyAssociation]
  "Provides any additional notes that may annotate the \`Proposal\`. This attribute is optional and has a maximum length of 65,535 characters. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  internalNotes: String
  "The primary salesperson who brokered the transaction with the #advertiser. This attribute is required when the proposal turns into an order. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  primarySalesperson: SalespersonSplit
  "List of unique IDs of User objects who are the sales planners of the \`Proposal\`. This attribute is optional. A proposal could have 8 sales planners at most. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  salesPlannerIds: [BigInt]
  "The unique ID of the User who is primary trafficker and is responsible for trafficking the \`Proposal\`. This attribute is required when the proposal turns into an order, and will be copied to Order#primaryTraffickerId . This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  primaryTraffickerId: BigInt
  "users who are the seller's contacts. This attribute is applicable when:using programmatic guaranteed, using sales management.using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  sellerContactIds: [BigInt]
  "The IDs of all teams that the \`Proposal\` is on directly. This attribute is optional. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  appliedTeamIds: [BigInt]
  "The values of the custom fields associated with the \`Proposal\`. This attribute is optional. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The set of labels applied directly to the \`Proposal\`. This attribute is optional."
  appliedLabels: [AppliedLabel]
  "Contains the set of labels applied directly to the proposal as well as those inherited ones. If a label has been negated, only the negated label is returned. This attribute is read-only."
  effectiveAppliedLabels: [AppliedLabel]
  "The currency code of this \`Proposal\`. This attribute is optional and defaults to network's currency code."
  currencyCode: String
  "The exchange rate from the #currencyCode to the network's currency. The value is stored as the exchange rate times 10,000,000,000 truncated to a long. This attribute is assigned by Google when first created or updated with #refreshExchangeRate set to \`true\`. This attribute is ignored if the feature is not enabled. This attribute is read-only."
  exchangeRate: BigInt
  "Set this field to \`true\` to update the #exchangeRate to the latest exchange rate when updating the proposal. This attribute is optional and defaults to \`false\`. This attribute is ignored if the feature is not enabled."
  refreshExchangeRate: Boolean
  "Indicates whether the proposal has been sold, i.e., corresponds to whether the status of an Order is OrderStatus#APPROVED or OrderStatus#PAUSED. This attribute is read-only."
  isSold: Boolean
  "The date and time this \`Proposal\` was last modified. This attribute is read-only."
  lastModifiedDateTime: DateTime
  "The marketplace info of this proposal if it has a corresponding order in Marketplace. This attribute is applicable when:using programmatic guaranteed, using sales management.using programmatic guaranteed, not using sales management."
  marketplaceInfo: ProposalMarketplaceInfo
  "The buyer RFP associated with this \`Proposal\`, which is optional. This field will be null if the proposal is not initiated from RFP. This attribute is applicable when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  buyerRfp: BuyerRfp
  "Whether a Proposal contains a BuyerRfp field. If this field is true, it indicates that the Proposal in question orignated from a buyer. This attribute is applicable when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  hasBuyerRfp: Boolean
}

"A \`ProposalCompanyAssociation\` represents a Company associated with the Proposal and a set of Contact objects belonging to the company."
type ProposalCompanyAssociation {
  "The unique ID of the Company associated with the Proposal. This attribute is required."
  companyId: BigInt
  "The association type of the Company and Proposal. This attribute is required."
  type: ProposalCompanyAssociationTypeEnum
  "List of unique IDs for Contact objects of the Company."
  contactIds: [BigInt]
}

"A \`ProposalCompanyAssociation\` represents a Company associated with the Proposal and a set of Contact objects belonging to the company."
input ProposalCompanyAssociationInput {
  "The unique ID of the Company associated with the Proposal. This attribute is required."
  companyId: BigInt
  "The association type of the Company and Proposal. This attribute is required."
  type: ProposalCompanyAssociationTypeEnum
  "List of unique IDs for Contact objects of the Company."
  contactIds: [BigInt]
}

"Describes the type of a Company associated with a Proposal."
enum ProposalCompanyAssociationTypeEnum {
  "The company is advertiser."
  ADVERTISER
  "The company is a billing agency."
  BILLING_AGENCY
  "The company is a branding agency."
  BRANDING_AGENCY
  "The company is other type of agency."
  OTHER_AGENCY
  "The company is a primary agency."
  PRIMARY_AGENCY
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"A \`Proposal\` represents an agreement between an interactive advertising seller and a buyer that specifies the details of an advertising campaign."
input ProposalInput {
  "Flag that specifies whether this \`Proposal\` is for programmatic deals. This value is default to \`false\`."
  isProgrammatic: Boolean
  "The name of the \`Proposal\`. This value has a maximum length of 255 characters. This value is copied to Order#name when the proposal turns into an order. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration. This attribute is required."
  name: String
  "The advertiser, to which this \`Proposal\` belongs, and a set of Contact objects associated with the advertiser. The ProposalCompanyAssociation#type of this attribute should be ProposalCompanyAssociationType#ADVERTISER. This attribute is required when the proposal turns into an order, and its ProposalCompanyAssociation#companyId will be copied to Order#advertiserId. This attribute becomes readonly once the \`Proposal\` has been pushed."
  advertiser: ProposalCompanyAssociationInput
  "List of agencies and the set of Contact objects associated with each agency. This attribute is optional. A \`Proposal\` only has at most one Company with ProposalCompanyAssociationType#PRIMARY_AGENCY type, but a Company can appear more than once with different ProposalCompanyAssociationType values. If primary agency exists, its ProposalCompanyAssociation#companyId will be copied to Order#agencyId when the proposal turns into an order."
  agencies: [ProposalCompanyAssociationInput]
  "Provides any additional notes that may annotate the \`Proposal\`. This attribute is optional and has a maximum length of 65,535 characters. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  internalNotes: String
  "The primary salesperson who brokered the transaction with the #advertiser. This attribute is required when the proposal turns into an order. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  primarySalesperson: SalespersonSplitInput
  "List of unique IDs of User objects who are the sales planners of the \`Proposal\`. This attribute is optional. A proposal could have 8 sales planners at most. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  salesPlannerIds: [BigInt]
  "The unique ID of the User who is primary trafficker and is responsible for trafficking the \`Proposal\`. This attribute is required when the proposal turns into an order, and will be copied to Order#primaryTraffickerId . This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  primaryTraffickerId: BigInt
  "users who are the seller's contacts. This attribute is applicable when:using programmatic guaranteed, using sales management.using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  sellerContactIds: [BigInt]
  "The IDs of all teams that the \`Proposal\` is on directly. This attribute is optional. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  appliedTeamIds: [BigInt]
  "The values of the custom fields associated with the \`Proposal\`. This attribute is optional. This attribute can be configured as editable after the proposal has been submitted. Please check with your network administrator for editable fields configuration."
  customFieldValues: [JSONObject]
  "The set of labels applied directly to the \`Proposal\`. This attribute is optional."
  appliedLabels: [AppliedLabelInput]
  "The currency code of this \`Proposal\`. This attribute is optional and defaults to network's currency code."
  currencyCode: String
  "Set this field to \`true\` to update the #exchangeRate to the latest exchange rate when updating the proposal. This attribute is optional and defaults to \`false\`. This attribute is ignored if the feature is not enabled."
  refreshExchangeRate: Boolean
  "The marketplace info of this proposal if it has a corresponding order in Marketplace. This attribute is applicable when:using programmatic guaranteed, using sales management.using programmatic guaranteed, not using sales management."
  marketplaceInfo: ProposalMarketplaceInfoInput
  "Whether a Proposal contains a BuyerRfp field. If this field is true, it indicates that the Proposal in question orignated from a buyer. This attribute is applicable when:using programmatic guaranteed, not using sales management.using preferred deals, not using sales management."
  hasBuyerRfp: Boolean
}

"Marketplace info for a proposal with a corresponding order in Marketplace."
type ProposalMarketplaceInfo {
  "Whether the non-free-editable fields of a Proposal are opened for edit. A proposal that is open for edit will not receive buyer updates from Marketplace. If the buyer updates the proposal while this is open for local editing, Google will set #isNewVersionFromBuyer to \`true\`. You will then need to call DiscardProposalDrafts to revert your edits to get the buyer's latest changes. This attribute is read-only."
  hasLocalVersionEdits: Boolean
  "The negotiation status of the Proposal. This attribute is read-only."
  negotiationStatus: NegotiationStatusEnum
  "The comment on the Proposal to be sent to the buyer."
  marketplaceComment: String
  "The NegotiationRole that paused the \`Proposal\`, i.e. NegotiationRole#seller or NegotiationRole#buyer, or \`null\` when the proposal is not paused. This attribute is read-only."
  pausedBy: NegotiationRoleEnum
  "The reason for pausing the \`Proposal\`, provided by the \`pauseRole\`. It is \`null\` when the \`Proposal\` is not paused. This attribute is read-only."
  pauseReason: String
  "Indicates that the buyer has made updates to the proposal on Marketplace. This attribute is only meaningful if the proposal is open for edit (i.e., #hasLocalVersionEdits is \`true\`) This attribute is read-only."
  isNewVersionFromBuyer: Boolean
  "The Authorized Buyers ID of the buyer that this \`Proposal\` is being negotiated with. This attribute is required."
  buyerAccountId: BigInt
  "The ID used to represent Display & Video 360 client buyer partner ID (if Display & Video 360) or Authorized Buyers client buyer account ID. This field is readonly and assigned by Google. This attribute is read-only."
  partnerClientId: String
}

"Marketplace info for a proposal with a corresponding order in Marketplace."
input ProposalMarketplaceInfoInput {
  "The comment on the Proposal to be sent to the buyer."
  marketplaceComment: String
  "The Authorized Buyers ID of the buyer that this \`Proposal\` is being negotiated with. This attribute is required."
  buyerAccountId: BigInt
}

"Captures a page of Proposal objects."
type ProposalPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of proposals contained within this page."
  results: [Proposal]
}

"Describes the Proposal status."
enum ProposalStatusEnum {
  "Indicates that the Proposal has been approved and is ready to serve."
  APPROVED
  "Indicates that the Proposal has just been created or retracted but no approval has been requested yet."
  DRAFT
  "Indicates that a request for approval has been made for the Proposal."
  PENDING_APPROVAL
  "Indicates that the Proposal has been rejected in the approval workflow."
  REJECTED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Details describing why a Proposal was retracted."
input RetractionDetailsInput {
  "The ID of the reason for why the Proposal was retracted."
  retractionReasonId: BigInt
  "Comments on why the Proposal was retracted. This field is optional and has a maximum length of 1023 characters."
  comments: String
}

"Decribes the type of BuyerRfp."
enum RfpTypeEnum {
  "Indicates the BuyerRfp is a Preferred Deal RFP."
  PREFERRED_DEAL
  "Indicates the BuyerRfp is a Programmatic Guaranteed RFP."
  PROGRAMMATIC_GUARANTEED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"A \`SalespersonSplit\` represents a salesperson and their split."
type SalespersonSplit {
  "The unique ID of the User responsible for the sales of the Proposal. This attribute is required."
  userId: BigInt
  "The split can be attributed to the salesperson. The percentage value is stored as millipercents, and must be multiples of 10 with the range from 0 to 100000. The default value is 0."
  split: Int
}

"A \`SalespersonSplit\` represents a salesperson and their split."
input SalespersonSplitInput {
  "The unique ID of the User responsible for the sales of the Proposal. This attribute is required."
  userId: BigInt
  "The split can be attributed to the salesperson. The percentage value is stored as millipercents, and must be multiples of 10 with the range from 0 to 100000. The default value is 0."
  split: Int
}

"Updates the specified Proposal objects. @param proposals the proposals to update @return the updated proposals"
input UpdateProposalsInput {
  proposals: [ProposalInput]
}

type _MarketplaceCommentConnection {
  totalCount: Int!
  nodes: [MarketplaceComment!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

type _ProposalConnection {
  totalCount: Int!
  nodes: [Proposal!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`MarketplaceComment\` by ID."
  _marketplaceComment(input: _SingleRecordQueryInput!): MarketplaceComment
    @findById(service: "Proposal", action: "getMarketplaceCommentsByStatement")
}

extend type Query {
  "Finds multiple \`MarketplaceComment\` objects based on the optional input parameters."
  _marketplaceComments(input: _MultipleRecordsQueryInput!): _MarketplaceCommentConnection!
    @find(service: "Proposal", action: "getMarketplaceCommentsByStatement")
}

extend type Query {
  "Finds a single \`Proposal\` by ID."
  _proposal(input: _SingleRecordQueryInput!): Proposal
    @findById(service: "Proposal", action: "getProposalsByStatement")
}

extend type Query {
  "Finds multiple \`Proposal\` objects based on the optional input parameters."
  _proposals(input: _MultipleRecordsQueryInput!): _ProposalConnection!
    @find(service: "Proposal", action: "getProposalsByStatement")
}

extend type Mutation {
  "Creates new Proposal objects. For each proposal, the following fields are required:  Proposal#name  @param proposals the proposals to create @return the created proposals with their IDs filled in"
  createProposals(input: CreateProposalsInput!): [Proposal]
    @soap(service: "Proposal", action: "createProposals")
}

extend type Query {
  "Gets a MarketplaceCommentPage of MarketplaceComment objects that satisfy the given Statement#query. This method only returns comments already sent to Marketplace, local draft ProposalMarketplaceInfo#marketplaceComment are not included. The following fields are supported for filtering:   PQL Property Object Property   \`proposalId\` MarketplaceComment#proposalId   The query must specify a \`proposalId\`, and only supports a subset of PQL syntax: [WHERE  {AND  ...}] [ORDER BY  [ASC | DESC]] [LIMIT {[,] } | { OFFSET }]       :=  =   :=  IN  Only supports \`ORDER BY\` MarketplaceComment#creationTime. @param filterStatement a Publisher Query Language statement used to filter a set of marketplace comments @return the marketplace comments that match the given filter"
  getMarketplaceCommentsByStatement(input: GetMarketplaceCommentsByStatementInput!): MarketplaceCommentPage
    @soap(service: "Proposal", action: "getMarketplaceCommentsByStatement")
}

extend type Query {
  "Gets a ProposalPage of Proposal objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Proposal#id   \`dfpOrderId\` Proposal#dfpOrderId   \`name\` Proposal#name   \`status\` Proposal#status   \`isArchived\` Proposal#isArchived    \`approvalStatus\` Only applicable for proposals using sales management  Proposal#approvalStatus   \`lastModifiedDateTime\` Proposal#lastModifiedDateTime    \`thirdPartyAdServerId\`  Only applicable for non-programmatic proposals using sales management   Proposal#thirdPartyAdServerId    \`customThirdPartyAdServerName\`  Only applicable for non-programmatic proposals using sales management   Proposal#customThirdPartyAdServerName   \`hasOfflineErrors\` Proposal#hasOfflineErrors   \`isProgrammatic\` Proposal#isProgrammatic    \`negotiationStatus\` Only applicable for programmatic proposals  ProposalMarketplaceInfo#negotiationStatus   @param filterStatement a Publisher Query Language statement used to filter a set of proposals @return the proposals that match the given filter"
  getProposalsByStatement(input: GetProposalsByStatementInput!): ProposalPage
    @soap(service: "Proposal", action: "getProposalsByStatement")
}

extend type Mutation {
  "Performs actions on Proposal objects that match the given Statement#query. The following fields are also required when submitting proposals for approval:  Proposal#advertiser Proposal#primarySalesperson Proposal#primaryTraffickerId  @param proposalAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of proposals @return the result of the action performed"
  performProposalAction(input: PerformProposalActionInput!): UpdateResult
    @soap(service: "Proposal", action: "performProposalAction")
}

extend type Mutation {
  "Updates the specified Proposal objects. @param proposals the proposals to update @return the updated proposals"
  updateProposals(input: UpdateProposalsInput!): [Proposal]
    @soap(service: "Proposal", action: "updateProposals")
}

`;
