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

"Creates new Site objects. @param sites the sites to create @return the created sites with their IDs filled in"
input CreateSitesInput {
  _: Boolean
  sites: [JSONObject]
}

"Gets a SitePage of Site objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Site#id   \`url\` Site#url   \`childNetworkCode\` Site#childNetworkCode   \`approvalStatus\` Site#approvalStatus   \`active\` Site#active   @param filterStatement a Publisher Query Language statement used to filter a set of sites @return the sites that match the given filter"
input GetSitesByStatementInput {
  _: Boolean
  filterStatement: JSONObject
}

"Performs actions on Site objects that match the given Statement#query. @param siteAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of sites @return the result of the action performed"
input PerformSiteActionInput {
  _: Boolean
  siteAction: JSONObject
  filterStatement: JSONObject
}

""
type Site {
  id: BigInt!
  url: String
  childNetworkCode: String
  approvalStatus: ApprovalStatusEnum
  active: Boolean
}

""
type SitePage {
  totalResultSetSize: Int
  startIndex: Int
  results: [Site]
}

"Updates the specified Site objects. @param sites the sites to update @return the updated sites"
input UpdateSitesInput {
  _: Boolean
  sites: [JSONObject]
}

extend type Mutation {
  "Creates new Site objects. @param sites the sites to create @return the created sites with their IDs filled in"
  createSites(input: CreateSitesInput!): [Site]
    @soap(service: "Site", action: "createSites")
}

extend type Query {
  "Gets a SitePage of Site objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Site#id   \`url\` Site#url   \`childNetworkCode\` Site#childNetworkCode   \`approvalStatus\` Site#approvalStatus   \`active\` Site#active   @param filterStatement a Publisher Query Language statement used to filter a set of sites @return the sites that match the given filter"
  getSitesByStatement(input: GetSitesByStatementInput!): SitePage
    @soap(service: "Site", action: "getSitesByStatement")
}

extend type Mutation {
  "Performs actions on Site objects that match the given Statement#query. @param siteAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of sites @return the result of the action performed"
  performSiteAction(input: PerformSiteActionInput!): UpdateResult
    @soap(service: "Site", action: "performSiteAction")
}

extend type Mutation {
  "Updates the specified Site objects. @param sites the sites to update @return the updated sites"
  updateSites(input: UpdateSitesInput!): [Site]
    @soap(service: "Site", action: "updateSites")
}

`;
