// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Gets a SuggestedAdUnitPage of SuggestedAdUnit objects that satisfy the filter query. There is a system-enforced limit of 1000 on the number of suggested ad units that are suggested at any one time.   PQL Property Object Property   \`id\` SuggestedAdUnit#id   \`numRequests\` SuggestedAdUnit#numRequests   Note: After API version 201311, the \`id\` field will only be numerical. @param filterStatement a Publisher Query Language statement used to filter a set of suggested ad units @return the suggested ad units that match the given filter"
input GetSuggestedAdUnitsByStatementInput {
  filterStatement: JSONObject
}

"Performs actions on SuggestedAdUnit objects that match the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` SuggestedAdUnit#id   \`numRequests\` SuggestedAdUnit#numRequests   @param suggestedAdUnitAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of suggested ad units @return the result of the action performed"
input PerformSuggestedAdUnitActionInput {
  suggestedAdUnitAction: JSONObject
  filterStatement: JSONObject
}

"A \`SuggestedAdUnit\` represents a suggestion for a new ad unit, based on an ad tag that has been served at least ten times in the past week, but which does not correspond to a defined ad unit. This type is read-only."
type SuggestedAdUnit {
  "The unique ID of the suggested ad unit. After API version 201311 this field will be a numerical ID. Earlier versions will return a string value which is the complete path to the suggested ad unit with path elements separated by '/' characters. This attribute is read-only and is populated by Google."
  id: String!
  "Returns the number of times the ad tag corresponding to this suggested ad unit has been served in the previous week. Suggested ad units are only created when they have been served at least ten times in that period. This attribute is read-only and is populated by Google."
  numRequests: BigInt
  "The hierarchical path from the last existing ad unit after this and all suggested parent ad units have been created. Each path element is a separate ad unit code in the returned list. This attribute is read-only and is populated by Google."
  path: [String]
  "The existing hierarchical path leading up to, and including, the parent of the first suggested ad unit in the ad unit hierarchy. The \`parentPath\` and the \`path\` make up the full path of the suggested ad unit after it is approved. This attribute is read-only and is populated by Google.  Note: The ad unit code for each of the parent ad units will not be provided. "
  parentPath: [AdUnitParent]
  "The \`target\` attribute of the underlying ad tag, as defined in the AdUnit. This attribute is read-only and is populated by Google."
  targetWindow: AdUnitTargetWindowEnum
  "The target platform for the browser that clicked the underlying ad tag. This attribute is read-only and is populated by Google."
  targetPlatform: TargetPlatformEnum
  "The target sizes associated with this \`SuggestedAdUnit\`. This attribute is read-only and is populated by Google."
  suggestedAdUnitSizes: [AdUnitSize]
}

"Contains a page of SuggestedAdUnit objects."
type SuggestedAdUnitPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of suggested ad units contained within this page."
  results: [SuggestedAdUnit]
}

"Represents the result of performing an action on SuggestedAdUnit objects."
type SuggestedAdUnitUpdateResult {
  "The ids of the AdUnit objects that were created in response to a performSuggestedAdUnitAction call."
  newAdUnitIds: [String]
  "The number of objects that were changed as a result of performing the action."
  numChanges: Int
}

"Indicates the target platform."
enum TargetPlatformEnum {
  "An universal target platform that combines mobile and desktop features."
  ANY
  "Mobile devices."
  MOBILE
  "The desktop web."
  WEB
}

extend type Query {
  "Gets a SuggestedAdUnitPage of SuggestedAdUnit objects that satisfy the filter query. There is a system-enforced limit of 1000 on the number of suggested ad units that are suggested at any one time.   PQL Property Object Property   \`id\` SuggestedAdUnit#id   \`numRequests\` SuggestedAdUnit#numRequests   Note: After API version 201311, the \`id\` field will only be numerical. @param filterStatement a Publisher Query Language statement used to filter a set of suggested ad units @return the suggested ad units that match the given filter"
  getSuggestedAdUnitsByStatement(input: GetSuggestedAdUnitsByStatementInput!): SuggestedAdUnitPage
    @soap(service: "SuggestedAdUnit", action: "getSuggestedAdUnitsByStatement")
}

extend type Mutation {
  "Performs actions on SuggestedAdUnit objects that match the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` SuggestedAdUnit#id   \`numRequests\` SuggestedAdUnit#numRequests   @param suggestedAdUnitAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of suggested ad units @return the result of the action performed"
  performSuggestedAdUnitAction(input: PerformSuggestedAdUnitActionInput!): SuggestedAdUnitUpdateResult
    @soap(service: "SuggestedAdUnit", action: "performSuggestedAdUnitAction")
}

`;
