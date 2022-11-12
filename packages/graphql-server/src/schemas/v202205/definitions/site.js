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

""
type DisapprovalReason {
  type: DisapprovalReasonTypeEnum
  details: String
}

""
input DisapprovalReasonInput {
  type: DisapprovalReasonTypeEnum
  details: String
}

""
enum DisapprovalReasonTypeEnum {
  CONTENT
  OTHER
  OWNERSHIP
  UNKNOWN
}

"Gets a SitePage of Site objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Site#id   \`url\` Site#url   \`childNetworkCode\` Site#childNetworkCode   \`approvalStatus\` Site#approvalStatus   \`active\` Site#active   \`lastModifiedApprovalStatusDateTime\`    Restriction: The \`lastModifiedApprovalStatusDateTime\` PQL property can only be used in a top-level expression scoping the \`filterStatement\` to Sites whose \`approvalStatus\` was modified on or after a specified date and time. (e.x. \`'WHERE lastModifiedApprovalStatusDateTime >= '2022-01-01T00:00:00''\`)."
input GetSitesByStatementInput {
  filterStatement: StatementInput
}

"Performs actions on Site objects that match the given Statement#query."
input PerformSiteActionInput {
  siteAction: JSONObject
  filterStatement: StatementInput
}

""
type Site {
  id: BigInt!
  url: String
  childNetworkCode: String
  approvalStatus: ApprovalStatusEnum
  active: Boolean
  disapprovalReasons: [DisapprovalReason]
}

""
input SiteInput {
  id: BigInt!
  url: String
  childNetworkCode: String
  approvalStatus: ApprovalStatusEnum
  active: Boolean
  disapprovalReasons: [DisapprovalReasonInput]
}

""
type SitePage {
  totalResultSetSize: Int
  startIndex: Int
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
  "Gets a SitePage of Site objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Site#id   \`url\` Site#url   \`childNetworkCode\` Site#childNetworkCode   \`approvalStatus\` Site#approvalStatus   \`active\` Site#active   \`lastModifiedApprovalStatusDateTime\`    Restriction: The \`lastModifiedApprovalStatusDateTime\` PQL property can only be used in a top-level expression scoping the \`filterStatement\` to Sites whose \`approvalStatus\` was modified on or after a specified date and time. (e.x. \`'WHERE lastModifiedApprovalStatusDateTime >= '2022-01-01T00:00:00''\`)."
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
