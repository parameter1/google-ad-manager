// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

""
enum ApprovalStatusEnum {
  APPROVED
  DISAPPROVED
  DRAFT
  REQUIRES_REVIEW
  UNCHECKED
  UNKNOWN
}

"Creates new Site objects."
input CreateSitesInput {
  sites: [SiteInput]
}

"Represents the reason for which Google disapproved the site."
type DisapprovalReason {
  "The type of policy violation found for the \`Site\`."
  type: DisapprovalReasonTypeEnum
  "Additional details for the disapproval of the \`Site\`."
  details: String
}

"The list of possible policy violation types for a \`Site\`."
enum DisapprovalReasonTypeEnum {
  "The site has content that violates policy."
  CONTENT
  "Generic error type."
  OTHER
  "The parent must be an authorized seller of the child network's inventory."
  OWNERSHIP
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Gets a SitePage of Site objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Site#id   \`url\` Site#url   \`childNetworkCode\` Site#childNetworkCode   \`approvalStatus\` Site#approvalStatus   \`lastModifiedApprovalStatusDateTime\`    Restriction: The \`lastModifiedApprovalStatusDateTime\` PQL property can only be used in a top-level expression scoping the \`filterStatement\` to Sites whose \`approvalStatus\` was modified on or after a specified date and time. (e.x. \`'WHERE lastModifiedApprovalStatusDateTime >= '2022-01-01T00:00:00''\`)."
input GetSitesByStatementInput {
  filterStatement: StatementInput
}

"Performs actions on Site objects that match the given Statement#query."
input PerformSiteActionInput {
  siteAction: JSONObject
  filterStatement: StatementInput
}

"A \`Site\` represents a domain owned or represented by a network. For a parent network managing other networks as part of Multiple Customer Management 'Manage Inventory' model, it could be the child's site."
type Site {
  "Uniquely identifies the \`Site\`. This value is read-only and is assigned by Google when the site is created."
  id: BigInt!
  "The URL of the \`Site\`."
  url: String
  "The Network#networkCode of the child if the \`Site\` is being managed for an MCM child network, or null if owned by this network."
  childNetworkCode: String
  "Status of the review performed on the \`Site\` by Google. This field is read-only and is assigned by Google."
  approvalStatus: ApprovalStatusEnum
  "The latest site approval status change time."
  approvalStatusUpdateTime: DateTime
  "Provides reasons for disapproving the site. It is \`null\` when the \`Site\` is not disapproved. This is field is read-only and is assigned by Google."
  disapprovalReasons: [DisapprovalReason]
}

"A \`Site\` represents a domain owned or represented by a network. For a parent network managing other networks as part of Multiple Customer Management 'Manage Inventory' model, it could be the child's site."
input SiteInput {
  "The URL of the \`Site\`."
  url: String
  "The Network#networkCode of the child if the \`Site\` is being managed for an MCM child network, or null if owned by this network."
  childNetworkCode: String
  "The latest site approval status change time."
  approvalStatusUpdateTime: DateTime
}

"Captures a page of Site objects."
type SitePage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of sites contained within this page."
  results: [Site]
}

"Updates the specified Site objects. The Site#childNetworkCode can be updated in order to 1) change the child network, 2) move a site from O&O to represented, or 3) move a site from represented to O&O."
input UpdateSitesInput {
  sites: [SiteInput]
}

type _SiteConnection {
  totalCount: Int!
  nodes: [Site!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`Site\` by ID."
  _site(input: _SingleRecordQueryInput!): Site
    @findById(service: "Site", action: "getSitesByStatement")
}

extend type Query {
  "Finds multiple \`Site\` objects based on the optional input parameters."
  _sites(input: _MultipleRecordsQueryInput!): _SiteConnection!
    @find(service: "Site", action: "getSitesByStatement")
}

extend type Mutation {
  "Creates new Site objects."
  createSites(input: CreateSitesInput!): [Site]
    @soap(service: "Site", action: "createSites")
}

extend type Query {
  "Gets a SitePage of Site objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Site#id   \`url\` Site#url   \`childNetworkCode\` Site#childNetworkCode   \`approvalStatus\` Site#approvalStatus   \`lastModifiedApprovalStatusDateTime\`    Restriction: The \`lastModifiedApprovalStatusDateTime\` PQL property can only be used in a top-level expression scoping the \`filterStatement\` to Sites whose \`approvalStatus\` was modified on or after a specified date and time. (e.x. \`'WHERE lastModifiedApprovalStatusDateTime >= '2022-01-01T00:00:00''\`)."
  getSitesByStatement(input: GetSitesByStatementInput!): SitePage
    @soap(service: "Site", action: "getSitesByStatement")
}

extend type Mutation {
  "Performs actions on Site objects that match the given Statement#query."
  performSiteAction(input: PerformSiteActionInput!): UpdateResult
    @soap(service: "Site", action: "performSiteAction")
}

extend type Mutation {
  "Updates the specified Site objects. The Site#childNetworkCode can be updated in order to 1) change the child network, 2) move a site from O&O to represented, or 3) move a site from represented to O&O."
  updateSites(input: UpdateSitesInput!): [Site]
    @soap(service: "Site", action: "updateSites")
}

`;
