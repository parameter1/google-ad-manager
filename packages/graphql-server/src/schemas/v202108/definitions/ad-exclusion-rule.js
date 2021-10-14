// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Represents an inventory blocking rule, which prevents certain ads from being served to specified ad units."
type AdExclusionRule {
  "The unique ID of the \`AdExclusionRule\`. This attribute is readonly and is assigned by Google."
  id: BigInt!
  "The name of the \`AdExclusionRule\`. This attribute is required."
  name: String
  "Whether or not the \`AdExclusionRule\` is active. An inactive rule will have no effect on adserving. This attribute is readonly."
  isActive: Boolean
  "The targeting information about which AdUnitTargeting objects this rule is in effect for. Any AdUnitTargeting objects included here will have their children included implicitly. Children of a targeted ad unit can be excluded. This attribute is required."
  inventoryTargeting: InventoryTargeting
  "Whether or not this rule blocks all ads from serving other than the labels or advertisers specified. This attribute is optional and defaults to false."
  isBlockAll: Boolean
  "The labels that will be blocked from serving. Any advertiser, order or line item with one of these labels will not serve on the relevant ad units and their children."
  blockedLabelIds: [BigInt]
  "The allowed list of labels that will not be blocked by this rule. This trumps the values of #isBlockAllLabels and #blockedLabelIds. For example, if a rule specifies a blocked label 'Cars', and an allowed label 'Sports', any ad that is labeled both 'Sports' and 'Cars' will not be blocked by this rule."
  allowedLabelIds: [BigInt]
  "The derived type of this rule: whether it is associated with labels, unified entities, or competitive groups. Because it is derived, it is also read-only, so changes made to this field will not be persisted."
  type: AdExclusionRuleTypeEnum
}

"Represents an inventory blocking rule, which prevents certain ads from being served to specified ad units."
input AdExclusionRuleInput {
  "The name of the \`AdExclusionRule\`. This attribute is required."
  name: String
  "The targeting information about which AdUnitTargeting objects this rule is in effect for. Any AdUnitTargeting objects included here will have their children included implicitly. Children of a targeted ad unit can be excluded. This attribute is required."
  inventoryTargeting: InventoryTargetingInput
  "Whether or not this rule blocks all ads from serving other than the labels or advertisers specified. This attribute is optional and defaults to false."
  isBlockAll: Boolean
  "The labels that will be blocked from serving. Any advertiser, order or line item with one of these labels will not serve on the relevant ad units and their children."
  blockedLabelIds: [BigInt]
  "The allowed list of labels that will not be blocked by this rule. This trumps the values of #isBlockAllLabels and #blockedLabelIds. For example, if a rule specifies a blocked label 'Cars', and an allowed label 'Sports', any ad that is labeled both 'Sports' and 'Cars' will not be blocked by this rule."
  allowedLabelIds: [BigInt]
}

"Represents a page of AdExclusionRule objects."
type AdExclusionRulePage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of audience segments contained within this page."
  results: [AdExclusionRule]
}

"The derived type of this rule: whether it is associated with labels, unified entities, or competitive groups."
enum AdExclusionRuleTypeEnum {
  "Rule is associated with labels and is relevant only for direct reservations."
  LABEL
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Creates new AdExclusionRule objects. @param adExclusionRules the ad exclusion rules to create @return the created rules with their IDs filled in"
input CreateAdExclusionRulesInput {
  adExclusionRules: [AdExclusionRuleInput]
}

"Gets a AdExclusionRulePage of AdExclusionRule objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` AdExclusionRule#id   \`name\` AdExclusionRule#name   \`status\` AdExclusionRule#status   @param filterStatement a Publisher Query Language statement used to filter a set of rules @return the rules that match the given filter"
input GetAdExclusionRulesByStatementInput {
  filterStatement: StatementInput
}

"Performs action on AdExclusionRule objects that satisfy the given Statement#query. @param adExclusionRuleAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of ad exclusion rules @return the result of the action performed"
input PerformAdExclusionRuleActionInput {
  adExclusionRuleAction: JSONObject
  filterStatement: StatementInput
}

"Updates the specified AdExclusionRule objects. @param adExclusionRules the ad exclusion rules to update @return the updated rules"
input UpdateAdExclusionRulesInput {
  adExclusionRules: [AdExclusionRuleInput]
}

type _AdExclusionRuleConnection {
  totalCount: Int!
  nodes: [AdExclusionRule!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`AdExclusionRule\` by ID."
  _adExclusionRule(input: _SingleRecordQueryInput!): AdExclusionRule
    @findById(service: "AdExclusionRule", action: "getAdExclusionRulesByStatement")
}

extend type Query {
  "Finds multiple \`AdExclusionRule\` objects based on the optional input parameters."
  _adExclusionRules(input: _MultipleRecordsQueryInput!): _AdExclusionRuleConnection!
    @find(service: "AdExclusionRule", action: "getAdExclusionRulesByStatement")
}

extend type Mutation {
  "Creates new AdExclusionRule objects. @param adExclusionRules the ad exclusion rules to create @return the created rules with their IDs filled in"
  createAdExclusionRules(input: CreateAdExclusionRulesInput!): [AdExclusionRule]
    @soap(service: "AdExclusionRule", action: "createAdExclusionRules")
}

extend type Query {
  "Gets a AdExclusionRulePage of AdExclusionRule objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` AdExclusionRule#id   \`name\` AdExclusionRule#name   \`status\` AdExclusionRule#status   @param filterStatement a Publisher Query Language statement used to filter a set of rules @return the rules that match the given filter"
  getAdExclusionRulesByStatement(input: GetAdExclusionRulesByStatementInput!): AdExclusionRulePage
    @soap(service: "AdExclusionRule", action: "getAdExclusionRulesByStatement")
}

extend type Mutation {
  "Performs action on AdExclusionRule objects that satisfy the given Statement#query. @param adExclusionRuleAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of ad exclusion rules @return the result of the action performed"
  performAdExclusionRuleAction(input: PerformAdExclusionRuleActionInput!): UpdateResult
    @soap(service: "AdExclusionRule", action: "performAdExclusionRuleAction")
}

extend type Mutation {
  "Updates the specified AdExclusionRule objects. @param adExclusionRules the ad exclusion rules to update @return the updated rules"
  updateAdExclusionRules(input: UpdateAdExclusionRulesInput!): [AdExclusionRule]
    @soap(service: "AdExclusionRule", action: "updateAdExclusionRules")
}

`;
