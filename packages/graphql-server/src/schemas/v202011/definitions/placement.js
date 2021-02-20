// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates new Placement objects. @param placements the placements to create @return the new placements, with their IDs filled in"
input CreatePlacementsInput {
  _: Boolean
  placements: [JSONObject]
}

"Gets a PlacementPage of Placement objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`description\` Placement#description   \`id\` Placement#id   \`name\` Placement#name   \`placementCode\` Placement#placementCode   \`status\` Placement#status   \`lastModifiedDateTime\` Placement#lastModifiedDateTime   @param filterStatement a Publisher Query Language statement used to filter a set of placements @return the placements that match the given filter"
input GetPlacementsByStatementInput {
  _: Boolean
  filterStatement: JSONObject
}

"Performs actions on Placement objects that match the given Statement#query. @param placementAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of placements @return the result of the action performed"
input PerformPlacementActionInput {
  _: Boolean
  placementAction: JSONObject
  filterStatement: JSONObject
}

"A \`Placement\` groups related \`AdUnit\` objects."
type Placement implements SiteTargetingInfoInterface {
  _: Boolean
  "Uniquely identifies the \`Placement\`. This attribute is read-only and is assigned by Google when a placement is created."
  id: BigInt!
  "The name of the \`Placement\`. This value is required and has a maximum length of 255 characters."
  name: String!
  "A description of the \`Placement\`. This value is optional and its maximum length is 65,535 characters."
  description: String
  "A string used to uniquely identify the \`Placement\` for purposes of serving the ad. This attribute is read-only and is assigned by Google when a placement is created."
  placementCode: String
  "The status of the \`Placement\`. This attribute is read-only."
  status: InventoryStatusEnum
  "The collection of \`AdUnit\` object IDs that constitute the \`Placement\`."
  targetedAdUnitIds: [String]
  "The date and time this placement was last modified."
  lastModifiedDateTime: GAMDateTime
}

"Captures a page of Placement objects."
type PlacementPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of placements contained within this page."
  results: [Placement]
}

"Contains information required for AdWords advertisers to place their ads."
interface SiteTargetingInfoInterface {
  _: Boolean
}

"Updates the specified Placement objects. @param placements the placements to update @return the updated placements"
input UpdatePlacementsInput {
  _: Boolean
  placements: [JSONObject]
}

extend type Mutation {
  "Creates new Placement objects. @param placements the placements to create @return the new placements, with their IDs filled in"
  createPlacements(input: CreatePlacementsInput!): [Placement]
    @soap(service: "Placement", action: "createPlacements")
}

extend type Query {
  "Gets a PlacementPage of Placement objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`description\` Placement#description   \`id\` Placement#id   \`name\` Placement#name   \`placementCode\` Placement#placementCode   \`status\` Placement#status   \`lastModifiedDateTime\` Placement#lastModifiedDateTime   @param filterStatement a Publisher Query Language statement used to filter a set of placements @return the placements that match the given filter"
  getPlacementsByStatement(input: GetPlacementsByStatementInput!): PlacementPage
    @soap(service: "Placement", action: "getPlacementsByStatement")
}

extend type Mutation {
  "Performs actions on Placement objects that match the given Statement#query. @param placementAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of placements @return the result of the action performed"
  performPlacementAction(input: PerformPlacementActionInput!): UpdateResult
    @soap(service: "Placement", action: "performPlacementAction")
}

extend type Mutation {
  "Updates the specified Placement objects. @param placements the placements to update @return the updated placements"
  updatePlacements(input: UpdatePlacementsInput!): [Placement]
    @soap(service: "Placement", action: "updatePlacements")
}

`;
