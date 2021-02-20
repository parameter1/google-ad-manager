// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"A \`ContentBundle\` is a grouping of individual Content. A \`ContentBundle\` is defined as including the \`Content\` that match certain filter rules, along with the option to explicitly include or exclude certain \`Content\` IDs."
type ContentBundle {
  "ID that uniquely identifies the \`ContentBundle\`. This attribute is read-only and is assigned by Google when a content bundle is created."
  id: BigInt!
  "The name of the \`ContentBundle\`. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "The ContentBundleStatus of the \`ContentBundle\`. This attribute is read-only and defaults to ContentBundleStatus#INACTIVE."
  status: ContentBundleStatusEnum
  "The date and time at which this content bundle was last modified. New content that matches this bundle will not update this field. This attribute is read-only."
  lastModifiedDateTime: GAMDateTime
}

"A \`ContentBundle\` is a grouping of individual Content. A \`ContentBundle\` is defined as including the \`Content\` that match certain filter rules, along with the option to explicitly include or exclude certain \`Content\` IDs."
input ContentBundleInput {
  "The name of the \`ContentBundle\`. This attribute is required and has a maximum length of 255 characters."
  name: String!
}

"Captures a page of ContentBundle objects."
type ContentBundlePage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of content bundles contained within this page."
  results: [ContentBundle]
}

"Status for \`ContentBundle\` objects."
enum ContentBundleStatusEnum {
  "The object is active and stats are collected."
  ACTIVE
  "The object has been archived."
  ARCHIVED
  "The object is no longer active and no stats collected."
  INACTIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Creates new ContentBundle objects. @param contentBundles the content bundles to create @return the created content bundles with their IDs filled in"
input CreateContentBundlesInput {
  contentBundles: [ContentBundleInput]
}

"Gets a ContentBundlePage of ContentBundle objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` ContentBundle#id   \`name\` ContentBundle#name   \`status\` ContentBundle#status   @param filterStatement a Publisher Query Language statement used to filter a set of content bundles @return the content bundles that match the given filter"
input GetContentBundlesByStatementInput {
  filterStatement: StatementInput
}

"Performs actions on ContentBundle objects that match the given Statement#query. @param contentBundleAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of content bundles @return the result of the action performed"
input PerformContentBundleActionInput {
  contentBundleAction: JSONObject
  filterStatement: StatementInput
}

"Updates the specified ContentBundle objects. @param contentBundles the content bundles to update @return the updated content bundles"
input UpdateContentBundlesInput {
  contentBundles: [ContentBundleInput]
}

extend type Mutation {
  "Creates new ContentBundle objects. @param contentBundles the content bundles to create @return the created content bundles with their IDs filled in"
  createContentBundles(input: CreateContentBundlesInput!): [ContentBundle]
    @soap(service: "ContentBundle", action: "createContentBundles")
}

extend type Query {
  "Gets a ContentBundlePage of ContentBundle objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` ContentBundle#id   \`name\` ContentBundle#name   \`status\` ContentBundle#status   @param filterStatement a Publisher Query Language statement used to filter a set of content bundles @return the content bundles that match the given filter"
  getContentBundlesByStatement(input: GetContentBundlesByStatementInput!): ContentBundlePage
    @soap(service: "ContentBundle", action: "getContentBundlesByStatement")
}

extend type Mutation {
  "Performs actions on ContentBundle objects that match the given Statement#query. @param contentBundleAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of content bundles @return the result of the action performed"
  performContentBundleAction(input: PerformContentBundleActionInput!): UpdateResult
    @soap(service: "ContentBundle", action: "performContentBundleAction")
}

extend type Mutation {
  "Updates the specified ContentBundle objects. @param contentBundles the content bundles to update @return the updated content bundles"
  updateContentBundles(input: UpdateContentBundlesInput!): [ContentBundle]
    @soap(service: "ContentBundle", action: "updateContentBundles")
}

`;
