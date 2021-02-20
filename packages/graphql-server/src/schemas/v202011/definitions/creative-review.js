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

"Gets a CreativeReviewPage of CreativeReview objects that satisfy the given Statement#query. This will allow you to review creatives that have displayed (or could have displayed) on your pages or apps in the last 30 days. To ensure that you are always reviewing the most important creatives first, the CreativeReview objects are ranked according to the number of impressions that they've received. @param statement a Publisher Query Language statement used to specify the page of CreativeReview to be fetch. Only \`LIMIT\` is supported. @return the CreativeReviews that match the given filter"
input GetCreativeReviewsByStatementInput {
  statement: JSONObject
}

"Performs actions on CreativeReview objects that match the given Statement#query. You can use actions to approve (allow) or disapprove (block) creatives, as seen in the corresponding CreativeReview objects. You can also archive creatives to allow you to retrieve new CreativeReview objects while previously retrieved CreativeReview objects are in pending approval. @param creativeReviewAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of creative reviews. Only \`'WHERE id = '\` and \`'WHERE id IN '\` are supported. @return the result of the action performed"
input PerformCreativeReviewActionInput {
  creativeReviewAction: JSONObject
  filterStatement: JSONObject
}

extend type Query {
  "Gets a CreativeReviewPage of CreativeReview objects that satisfy the given Statement#query. This will allow you to review creatives that have displayed (or could have displayed) on your pages or apps in the last 30 days. To ensure that you are always reviewing the most important creatives first, the CreativeReview objects are ranked according to the number of impressions that they've received. @param statement a Publisher Query Language statement used to specify the page of CreativeReview to be fetch. Only \`LIMIT\` is supported. @return the CreativeReviews that match the given filter"
  getCreativeReviewsByStatement(input: GetCreativeReviewsByStatementInput!): CreativeReviewPage
    @soap(service: "CreativeReview", action: "getCreativeReviewsByStatement")
}

extend type Mutation {
  "Performs actions on CreativeReview objects that match the given Statement#query. You can use actions to approve (allow) or disapprove (block) creatives, as seen in the corresponding CreativeReview objects. You can also archive creatives to allow you to retrieve new CreativeReview objects while previously retrieved CreativeReview objects are in pending approval. @param creativeReviewAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of creative reviews. Only \`'WHERE id = '\` and \`'WHERE id IN '\` are supported. @return the result of the action performed"
  performCreativeReviewAction(input: PerformCreativeReviewActionInput!): UpdateResult
    @soap(service: "CreativeReview", action: "performCreativeReviewAction")
}

`;
