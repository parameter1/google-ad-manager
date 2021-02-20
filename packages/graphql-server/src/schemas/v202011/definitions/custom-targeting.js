// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates new CustomTargetingKey objects. The following fields are required:  CustomTargetingKey#name CustomTargetingKey#type  @param keys the custom targeting keys to update @return the updated custom targeting keys"
input CreateCustomTargetingKeysInput {
  _: Boolean
  keys: [JSONObject]
}

"Creates new CustomTargetingValue objects. The following fields are required:  CustomTargetingValue#customTargetingKeyId CustomTargetingValue#name  @param values the custom targeting values to update @return the updated custom targeting keys"
input CreateCustomTargetingValuesInput {
  _: Boolean
  values: [JSONObject]
}

"\`CustomTargetingKey\` represents a key used for custom targeting."
type CustomTargetingKey {
  "The ID of the \`CustomTargetingKey\`. This value is readonly and is populated by Google."
  id: BigInt!
  "Name of the key. This can be used for encoding . If you don't want users to be able to see potentially sensitive targeting information in the ad tags of your site, you can encode your key/values. For example, you can create key/value g1=abc to represent gender=female. Keys can contain up to 10 characters each. You can use alphanumeric characters and symbols other than the following: ', ', =, !, +, #, *, ~, ;, ^, (, ), <, >, [, ], the white space character."
  name: String
  "Descriptive name for the key."
  displayName: String
  "Indicates whether users will select from predefined values or create new targeting values, while specifying targeting criteria for a line item."
  type: CustomTargetingKeyTypeEnum
  "Indicates the type of values being passed for this key in ad requests. This field is nullable for a key until it is set, after which it cannot be reset back to null."
  valueDeclarationType: ValueDeclarationTypeEnum
  "Status of the \`CustomTargetingKey\`. This field is read-only. A key can be activated and deactivated by calling CustomTargetingService#performCustomTargetingKeyAction."
  status: CustomTargetingKeyStatusEnum
  "Reportable state of a {@CustomTargetingKey} as defined in ReportableType."
  reportableType: ReportableTypeEnum
}

"Captures a page of CustomTargetingKey objects."
type CustomTargetingKeyPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of custom targeting keys contained within this page."
  results: [CustomTargetingKey]
}

"Describes the statuses for \`CustomTargetingKey\` objects."
enum CustomTargetingKeyStatusEnum {
  "The object is active."
  ACTIVE
  "The object is no longer active."
  INACTIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Specifies the types for \`CustomTargetingKey\` objects."
enum CustomTargetingKeyTypeEnum {
  "Target audiences by adding criteria values when creating line items."
  FREEFORM
  "Target audiences by criteria values that are defined in advance."
  PREDEFINED
}

"\`CustomTargetingValue\` represents a value used for custom targeting."
type CustomTargetingValue {
  "The ID of the \`CustomTargetingKey\` for which this is the value."
  customTargetingKeyId: BigInt
  "The ID of the \`CustomTargetingValue\`. This value is readonly and is populated by Google."
  id: BigInt!
  "Name of the value. This can be used for encoding . If you don't want users to be able to see potentially sensitive targeting information in the ad tags of your site, you can encode your key/values. For example, you can create key/value g1=abc to represent gender=female. Values can contain up to 40 characters each. You can use alphanumeric characters and symbols other than the following: ', ', =, !, +, #, *, ~, ;, ^, (, ), <, >, [, ]. Values are not data-specific; all values are treated as string. For example, instead of using 'age>=18 AND <=34', try '18-34'"
  name: String
  "Descriptive name for the value."
  displayName: String
  "The way in which the CustomTargetingValue#name strings will be matched."
  matchType: CustomTargetingValueMatchTypeEnum
  "Status of the \`CustomTargetingValue\`. This field is read-only. A value can be activated and deactivated by calling CustomTargetingService#performCustomTargetingValueAction."
  status: CustomTargetingValueStatusEnum
}

"Represents the ways in which CustomTargetingValue#name strings will be matched with ad requests."
enum CustomTargetingValueMatchTypeEnum {
  "Used for lenient matching when at least one of the words in the ad request matches the targeted value. The targeting value \`car=honda\` will match to ad requests containing the word \`honda\`. So ad requests \`car=honda\` or \`car=honda civic\` or \`car=buy honda\` or \`car=how much does a honda cost\` will all have the line item delivered. This match type can not be used within an audience segment rule."
  BROAD
  "This is a combination of \`MatchType#BROAD\` and \`MatchType#PREFIX\` matching. The targeting value \`car=honda\` will match to ad requests that contain words that start with the characters in the targeted value, for example with \`car=civic hondas\`. This match type can not be used within an audience segment rule."
  BROAD_PREFIX
  "Used for 'within' matching when the string in the ad request contains the string in the targeted value. The targeting value \`car=honda\` will match with ad requests \`car=honda\`, \`car=I want a honda\`, and also with \`car=hondas for sale\`, but not with \`car=misspelled hond a\`. This match type can not be used within line item targeting."
  CONTAINS
  "Used for exact matching. For example, the targeting value \`car=honda\` will only match to the ad request \`car=honda\`."
  EXACT
  "Used for 'starts with' matching when the first few characters in the ad request match all of the characters in the targeted value. The targeting value \`car=honda\` will match to ad requests \`car=honda\` or \`car=hondas for sale\` but not to \`car=I want a honda\`."
  PREFIX
  "Used for 'ends with' matching when the last characters in the ad request match all of the characters in the targeted value. The targeting value \`car=honda\` will match with ad requests \`car=honda\` or \`car=I want a honda\` but not to \`car=hondas for sale\`. This match type can not be used within line item targeting."
  SUFFIX
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Captures a page of CustomTargetingValue objects."
type CustomTargetingValuePage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of custom targeting keys contained within this page."
  results: [CustomTargetingValue]
}

"Describes the statuses for \`CustomTargetingValue\` objects."
enum CustomTargetingValueStatusEnum {
  "The object is active."
  ACTIVE
  "The object is no longer active."
  INACTIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Gets a CustomTargetingKeyPage of CustomTargetingKey objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property    \`id\` CustomTargetingKey#id   \`name\` CustomTargetingKey#name   \`displayName\` CustomTargetingKey#displayName   \`type\` CustomTargetingKey#type   @param filterStatement a Publisher Query Language statement used to filter a set of custom targeting keys @return the custom targeting keys that match the given filter"
input GetCustomTargetingKeysByStatementInput {
  _: Boolean
  filterStatement: JSONObject
}

"Gets a CustomTargetingValuePage of CustomTargetingValue objects that satisfy the given Statement#query.  The \`WHERE\` clause in the Statement#query must always contain CustomTargetingValue#customTargetingKeyId as one of its columns in a way that it is AND'ed with the rest of the query. So, if you want to retrieve values for a known set of key ids, valid Statement#query would look like:    'WHERE customTargetingKeyId IN ('17','18','19')' retrieves all values that are associated with keys having ids 17, 18, 19.   'WHERE customTargetingKeyId = '17' AND name = 'red'' retrieves values that are associated with keys having id 17 and value name is 'red'.     The following fields are supported for filtering:    PQL Property Object Property   \`id\` CustomTargetingValue#id   \`customTargetingKeyId\` CustomTargetingValue#customTargetingKeyId   \`name\` CustomTargetingValue#name   \`displayName\` CustomTargetingValue#displayName   \`matchType\` CustomTargetingValue#matchType   @param filterStatement a Publisher Query Language statement used to filter a set of custom targeting values @return the custom targeting values that match the given filter"
input GetCustomTargetingValuesByStatementInput {
  _: Boolean
  filterStatement: JSONObject
}

"Performs actions on CustomTargetingKey objects that match the given Statement#query. @param customTargetingKeyAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of custom targeting keys @return the result of the action performed"
input PerformCustomTargetingKeyActionInput {
  _: Boolean
  customTargetingKeyAction: JSONObject
  filterStatement: JSONObject
}

"Performs actions on CustomTargetingValue objects that match the given Statement#query. @param customTargetingValueAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of ad units @return the result of the action performed"
input PerformCustomTargetingValueActionInput {
  _: Boolean
  customTargetingValueAction: JSONObject
  filterStatement: JSONObject
}

"Represents the reportable state of a custom key."
enum ReportableTypeEnum {
  "Custom dimension available for reporting in the AdManager query tool."
  CUSTOM_DIMENSION
  "Not available for reporting in the Ad Manager query tool."
  OFF
  "Available for reporting in the Ad Manager query tool."
  ON
  UNKNOWN
}

"Updates the specified CustomTargetingKey objects. @param keys the custom targeting keys to update @return the updated custom targeting keys"
input UpdateCustomTargetingKeysInput {
  _: Boolean
  keys: [JSONObject]
}

"Updates the specified CustomTargetingValue objects. @param values the custom targeting values to update @return the updated custom targeting values"
input UpdateCustomTargetingValuesInput {
  _: Boolean
  values: [JSONObject]
}

"Enum to represent the type of values that will be passed for this key."
enum ValueDeclarationTypeEnum {
  "Values are not user-related data and will be used in all ad requests."
  NON_USER_DATA
  "Values are declared as user data that will not be used in sensitive ad requests' targeting."
  USER_DATA
  "Values are declared as user identifiers that will not be used in targeting and will be encrypted in DT using a publisher-provided public key."
  USER_ID
}

extend type Mutation {
  "Creates new CustomTargetingKey objects. The following fields are required:  CustomTargetingKey#name CustomTargetingKey#type  @param keys the custom targeting keys to update @return the updated custom targeting keys"
  createCustomTargetingKeys(input: CreateCustomTargetingKeysInput!): [CustomTargetingKey]
    @soap(service: "CustomTargeting", action: "createCustomTargetingKeys")
}

extend type Mutation {
  "Creates new CustomTargetingValue objects. The following fields are required:  CustomTargetingValue#customTargetingKeyId CustomTargetingValue#name  @param values the custom targeting values to update @return the updated custom targeting keys"
  createCustomTargetingValues(input: CreateCustomTargetingValuesInput!): [CustomTargetingValue]
    @soap(service: "CustomTargeting", action: "createCustomTargetingValues")
}

extend type Query {
  "Gets a CustomTargetingKeyPage of CustomTargetingKey objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property    \`id\` CustomTargetingKey#id   \`name\` CustomTargetingKey#name   \`displayName\` CustomTargetingKey#displayName   \`type\` CustomTargetingKey#type   @param filterStatement a Publisher Query Language statement used to filter a set of custom targeting keys @return the custom targeting keys that match the given filter"
  getCustomTargetingKeysByStatement(input: GetCustomTargetingKeysByStatementInput!): CustomTargetingKeyPage
    @soap(service: "CustomTargeting", action: "getCustomTargetingKeysByStatement")
}

extend type Query {
  "Gets a CustomTargetingValuePage of CustomTargetingValue objects that satisfy the given Statement#query.  The \`WHERE\` clause in the Statement#query must always contain CustomTargetingValue#customTargetingKeyId as one of its columns in a way that it is AND'ed with the rest of the query. So, if you want to retrieve values for a known set of key ids, valid Statement#query would look like:    'WHERE customTargetingKeyId IN ('17','18','19')' retrieves all values that are associated with keys having ids 17, 18, 19.   'WHERE customTargetingKeyId = '17' AND name = 'red'' retrieves values that are associated with keys having id 17 and value name is 'red'.     The following fields are supported for filtering:    PQL Property Object Property   \`id\` CustomTargetingValue#id   \`customTargetingKeyId\` CustomTargetingValue#customTargetingKeyId   \`name\` CustomTargetingValue#name   \`displayName\` CustomTargetingValue#displayName   \`matchType\` CustomTargetingValue#matchType   @param filterStatement a Publisher Query Language statement used to filter a set of custom targeting values @return the custom targeting values that match the given filter"
  getCustomTargetingValuesByStatement(input: GetCustomTargetingValuesByStatementInput!): CustomTargetingValuePage
    @soap(service: "CustomTargeting", action: "getCustomTargetingValuesByStatement")
}

extend type Mutation {
  "Performs actions on CustomTargetingKey objects that match the given Statement#query. @param customTargetingKeyAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of custom targeting keys @return the result of the action performed"
  performCustomTargetingKeyAction(input: PerformCustomTargetingKeyActionInput!): UpdateResult
    @soap(service: "CustomTargeting", action: "performCustomTargetingKeyAction")
}

extend type Mutation {
  "Performs actions on CustomTargetingValue objects that match the given Statement#query. @param customTargetingValueAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of ad units @return the result of the action performed"
  performCustomTargetingValueAction(input: PerformCustomTargetingValueActionInput!): UpdateResult
    @soap(service: "CustomTargeting", action: "performCustomTargetingValueAction")
}

extend type Mutation {
  "Updates the specified CustomTargetingKey objects. @param keys the custom targeting keys to update @return the updated custom targeting keys"
  updateCustomTargetingKeys(input: UpdateCustomTargetingKeysInput!): [CustomTargetingKey]
    @soap(service: "CustomTargeting", action: "updateCustomTargetingKeys")
}

extend type Mutation {
  "Updates the specified CustomTargetingValue objects. @param values the custom targeting values to update @return the updated custom targeting values"
  updateCustomTargetingValues(input: UpdateCustomTargetingValuesInput!): [CustomTargetingValue]
    @soap(service: "CustomTargeting", action: "updateCustomTargetingValues")
}

`;
