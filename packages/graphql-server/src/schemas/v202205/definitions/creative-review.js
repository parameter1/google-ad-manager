// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

""
type CreativeReview {
  "This attribute is read-only."
  id: String!
  "This attribute is read-only."
  reviewableUrl: String
  "This attribute is read-only."
  impressions: BigInt
}

""
type CreativeReviewPage {
  totalResultSetSize: Int
  startIndex: Int
  results: [CreativeReview]
}

"Gets a CreativeReviewPage of CreativeReview objects that satisfy the given Statement#query. This will allow you to review creatives that have displayed (or could have displayed) on your pages or apps in the last 30 days. To ensure that you are always reviewing the most important creatives first, the CreativeReview objects are ranked according to the number of impressions that they've received."
input GetCreativeReviewsByStatementInput {
  statement: StatementInput
}

"Performs actions on CreativeReview objects that match the given Statement#query. You can use actions to approve (allow) or disapprove (block) creatives, as seen in the corresponding CreativeReview objects. You can also archive creatives to allow you to retrieve new CreativeReview objects while previously retrieved CreativeReview objects are in pending approval."
input PerformCreativeReviewActionInput {
  creativeReviewAction: JSONObject
  filterStatement: StatementInput
}

type _CreativeReviewConnection {
  totalCount: Int!
  nodes: [CreativeReview!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`CreativeReview\` by ID."
  _creativeReview(input: _SingleRecordQueryInput!): CreativeReview
    @findById(service: "CreativeReview", action: "getCreativeReviewsByStatement")
}

extend type Query {
  "Finds multiple \`CreativeReview\` objects based on the optional input parameters."
  _creativeReviews(input: _MultipleRecordsQueryInput!): _CreativeReviewConnection!
    @find(service: "CreativeReview", action: "getCreativeReviewsByStatement")
}

extend type Query {
  "Gets a CreativeReviewPage of CreativeReview objects that satisfy the given Statement#query. This will allow you to review creatives that have displayed (or could have displayed) on your pages or apps in the last 30 days. To ensure that you are always reviewing the most important creatives first, the CreativeReview objects are ranked according to the number of impressions that they've received."
  getCreativeReviewsByStatement(input: GetCreativeReviewsByStatementInput!): CreativeReviewPage
    @soap(service: "CreativeReview", action: "getCreativeReviewsByStatement")
}

extend type Mutation {
  "Performs actions on CreativeReview objects that match the given Statement#query. You can use actions to approve (allow) or disapprove (block) creatives, as seen in the corresponding CreativeReview objects. You can also archive creatives to allow you to retrieve new CreativeReview objects while previously retrieved CreativeReview objects are in pending approval."
  performCreativeReviewAction(input: PerformCreativeReviewActionInput!): UpdateResult
    @soap(service: "CreativeReview", action: "performCreativeReviewAction")
}

`;
