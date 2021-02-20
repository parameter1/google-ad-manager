// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates a new \`CreativeWrapper\` objects. The following fields are required:  CreativeWrapper#labelId CreativeWrapper#ordering CreativeWrapper#header or CreativeWrapper#footer  @param creativeWrappers the creative wrappers to create @return the creative wrappers with their IDs filled in @throws ApiException"
input CreateCreativeWrappersInput {
  creativeWrappers: [CreativeWrapperInput]
}

"A \`CreativeWrapper\` allows the wrapping of HTML snippets to be served along with \`Creative\` objects.  Creative wrappers must be associated with a LabelType#CREATIVE_WRAPPER label and applied to ad units by AdUnit#appliedLabels."
type CreativeWrapper {
  "The unique ID of the \`CreativeWrapper\`. This value is readonly and is assigned by Google."
  id: BigInt!
  "The ID of the Label which will be used to label ad units. The \`labelId\` on a creative wrapper cannot be changed once it is created."
  labelId: BigInt
  "The header HTML snippet that this creative wrapper delivers."
  htmlHeader: String
  "The footer HTML snippet that this creative wrapper delivers."
  htmlFooter: String
  "The header AMP snippet that this creative wrapper delivers."
  ampHead: String
  "The footer AMP snippet that this creative wrapper delivers."
  ampBody: String
  "The \`ThirdPartyDataDeclaration\` for this creative wrapper. It is copied to one of the underlying creatives. If the header creative is active then it is persisted there. Otherwise it is stored on the footer creative."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "If there are multiple wrappers for a creative, then \`ordering\` defines the order in which the HTML snippets are rendered."
  ordering: CreativeWrapperOrderingEnum
  "The status of the \`CreativeWrapper\`. This attribute is readonly."
  status: CreativeWrapperStatusEnum
}

"A \`CreativeWrapper\` allows the wrapping of HTML snippets to be served along with \`Creative\` objects.  Creative wrappers must be associated with a LabelType#CREATIVE_WRAPPER label and applied to ad units by AdUnit#appliedLabels."
input CreativeWrapperInput {
  "The ID of the Label which will be used to label ad units. The \`labelId\` on a creative wrapper cannot be changed once it is created."
  labelId: BigInt
  "The header HTML snippet that this creative wrapper delivers."
  htmlHeader: String
  "The footer HTML snippet that this creative wrapper delivers."
  htmlFooter: String
  "The header AMP snippet that this creative wrapper delivers."
  ampHead: String
  "The footer AMP snippet that this creative wrapper delivers."
  ampBody: String
  "The \`ThirdPartyDataDeclaration\` for this creative wrapper. It is copied to one of the underlying creatives. If the header creative is active then it is persisted there. Otherwise it is stored on the footer creative."
  thirdPartyDataDeclaration: ThirdPartyDataDeclarationInput
  "If there are multiple wrappers for a creative, then \`ordering\` defines the order in which the HTML snippets are rendered."
  ordering: CreativeWrapperOrderingEnum
}

"Defines the order in which the header and footer HTML snippets will be wrapped around the served creative. \`INNER\` snippets will be wrapped first, followed by \`NO_PREFERENCE\` and finally \`OUTER\`. If the creative needs to be wrapped with more than one snippet with the same CreativeWrapperOrdering, then the order is unspecified."
enum CreativeWrapperOrderingEnum {
  "Wrapping occurs as early as possible."
  INNER
  "Wrapping occurs after #INNER but before #OUTER"
  NO_PREFERENCE
  "Wrapping occurs after both #NO_PREFERENCE and #INNER"
  OUTER
}

"Captures a page of CreativeWrapper objects."
type CreativeWrapperPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of creative wrappers contained within this page."
  results: [CreativeWrapper]
}

"Indicates whether the \`CreativeWrapper\` is active. HTML snippets are served to creatives only when the creative wrapper is active."
enum CreativeWrapperStatusEnum {
  ACTIVE
  INACTIVE
}

"Gets a CreativeWrapperPage of CreativeWrapper objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CreativeWrapper#id   \`labelId\` CreativeWrapper#labelId   \`status\` CreativeWrapper#status   \`ordering\` CreativeWrapper#ordering   @param filterStatement a Publisher Query Language statement used to filter a set of creative wrappers. @return the creative wrappers that match the given filter"
input GetCreativeWrappersByStatementInput {
  filterStatement: StatementInput
}

"Performs actions on CreativeWrapper objects that match the given Statement#query. @param creativeWrapperAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of labels @return the result of the action performed"
input PerformCreativeWrapperActionInput {
  creativeWrapperAction: JSONObject
  filterStatement: StatementInput
}

"Updates the specified \`CreativeWrapper\` objects. @param creativeWrappers the creative wrappers to update @return the updated creative wrapper objects @throws ApiException"
input UpdateCreativeWrappersInput {
  creativeWrappers: [CreativeWrapperInput]
}

extend type Mutation {
  "Creates a new \`CreativeWrapper\` objects. The following fields are required:  CreativeWrapper#labelId CreativeWrapper#ordering CreativeWrapper#header or CreativeWrapper#footer  @param creativeWrappers the creative wrappers to create @return the creative wrappers with their IDs filled in @throws ApiException"
  createCreativeWrappers(input: CreateCreativeWrappersInput!): [CreativeWrapper]
    @soap(service: "CreativeWrapper", action: "createCreativeWrappers")
}

extend type Query {
  "Gets a CreativeWrapperPage of CreativeWrapper objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CreativeWrapper#id   \`labelId\` CreativeWrapper#labelId   \`status\` CreativeWrapper#status   \`ordering\` CreativeWrapper#ordering   @param filterStatement a Publisher Query Language statement used to filter a set of creative wrappers. @return the creative wrappers that match the given filter"
  getCreativeWrappersByStatement(input: GetCreativeWrappersByStatementInput!): CreativeWrapperPage
    @soap(service: "CreativeWrapper", action: "getCreativeWrappersByStatement")
}

extend type Mutation {
  "Performs actions on CreativeWrapper objects that match the given Statement#query. @param creativeWrapperAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of labels @return the result of the action performed"
  performCreativeWrapperAction(input: PerformCreativeWrapperActionInput!): UpdateResult
    @soap(service: "CreativeWrapper", action: "performCreativeWrapperAction")
}

extend type Mutation {
  "Updates the specified \`CreativeWrapper\` objects. @param creativeWrappers the creative wrappers to update @return the updated creative wrapper objects @throws ApiException"
  updateCreativeWrappers(input: UpdateCreativeWrappersInput!): [CreativeWrapper]
    @soap(service: "CreativeWrapper", action: "updateCreativeWrappers")
}

`;
