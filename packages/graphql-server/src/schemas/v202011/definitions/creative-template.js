// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Represents a file asset variable defined in a creative template.  Use AssetCreativeTemplateVariableValue to specify the value for this variable when creating TemplateCreative from the TemplateCreative."
type AssetCreativeTemplateVariable implements CreativeTemplateVariableInterface {
  "Label that is displayed to users when creating TemplateCreative from the CreativeTemplate. This attribute is required and has a maximum length of 127 characters."
  label: String!
  "Unique name used to identify the variable. This attribute is read-only and is assigned by Google, by deriving from label, when a creative template variable is created."
  uniqueName: String
  "A descriptive help text that is displayed to users along with the label. This attribute is required and has a maximum length of 255 characters."
  description: String!
  "\`true\` if this variable is required to be filled in by users when creating TemplateCreative from the CreativeTemplate."
  isRequired: Boolean
  "A set of supported mime types. This set can be empty or null if there's no constraint, meaning files of any mime types are allowed."
  mimeTypes: [AssetCreativeTemplateVariableMimeTypeEnum]
}

"Different mime type that the asset variable supports."
enum AssetCreativeTemplateVariableMimeTypeEnum {
  GIF
  JPG
  PNG
  SWF
}

"A template upon which a creative can be created."
type CreativeTemplate {
  "Uniquely identifies the \`CreativeTemplate\`. This attribute is read-only and is assigned by Google when a creative template is created."
  id: BigInt!
  "The name of the creative template. This attribute is required and has a maximum length of 255 characters."
  name: String!
  "The description of the creative template. This attribute is optional."
  description: String
  "The list of creative template variables. This attribute is required."
  variables: [CreativeTemplateVariableInterface]!
  "The snippet of the creative template, with placeholders for the associated variables. This attribute is required."
  snippet: String!
  "The status of the \`CreativeTemplate\`. This attribute is read-only and is assigned by Google."
  status: CreativeTemplateStatusEnum
  "The type of the \`CreativeTemplate\`. Publisher can only create user-defined template"
  type: CreativeTemplateTypeEnum
  "\`true\` if this creative template produces interstitial creatives."
  isInterstitial: Boolean
  "\`true\` if this creative template produces native-eligible creatives."
  isNativeEligible: Boolean
  "Whether the Creative produced is compatible for SafeFrame rendering. This attribute is optional and defaults to \`true\`."
  isSafeFrameCompatible: Boolean
}

"Captures a page of CreativeTemplate objects."
type CreativeTemplatePage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of creative templates contained within this page."
  results: [CreativeTemplate]
}

"Describes status of the creative template"
enum CreativeTemplateStatusEnum {
  "The CreativeTemplate is active"
  ACTIVE
  "The CreativeTemplate is deleted. Creatives created from this CreativeTemplate can no longer serve."
  DELETED
  "The CreativeTemplate is inactive. Users cannot create new creatives from this template, but existing ones can be edited and continue to serve"
  INACTIVE
}

"Describes type of the creative template."
enum CreativeTemplateTypeEnum {
  "Creative templates that Google defines for users to use."
  SYSTEM_DEFINED
  "Arbitrary creative templates that users can define as they see fit. Such templates are bound to a specific network and can only be used with creatives being created under the network."
  USER_DEFINED
}

"Represents a variable defined in a creative template."
interface CreativeTemplateVariableInterface {
  "Label that is displayed to users when creating TemplateCreative from the CreativeTemplate. This attribute is required and has a maximum length of 127 characters."
  label: String!
  "Unique name used to identify the variable. This attribute is read-only and is assigned by Google, by deriving from label, when a creative template variable is created."
  uniqueName: String
  "A descriptive help text that is displayed to users along with the label. This attribute is required and has a maximum length of 255 characters."
  description: String!
  "\`true\` if this variable is required to be filled in by users when creating TemplateCreative from the CreativeTemplate."
  isRequired: Boolean
}

"Gets a CreativeTemplatePage of CreativeTemplate objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CreativeTemplate#id   \`name\` CreativeTemplate#name   \`type\` CreativeTemplate#type   \`status\` CreativeTemplate#status   @param filterStatement a Publisher Query Language statement used to filter a set of creative templates. @return the creative templates that match the given filter"
input GetCreativeTemplatesByStatementInput {
  filterStatement: StatementInput
}

"Represents a list variable defined in a creative template. This is similar to StringCreativeTemplateVariable, except that there are possible choices to choose from. Use StringCreativeTemplateVariableValue to specify the value for this variable when creating a TemplateCreative from a CreativeTemplate."
type ListStringCreativeTemplateVariable implements StringCreativeTemplateVariableInterface & CreativeTemplateVariableInterface {
  "Label that is displayed to users when creating TemplateCreative from the CreativeTemplate. This attribute is required and has a maximum length of 127 characters."
  label: String!
  "Unique name used to identify the variable. This attribute is read-only and is assigned by Google, by deriving from label, when a creative template variable is created."
  uniqueName: String
  "A descriptive help text that is displayed to users along with the label. This attribute is required and has a maximum length of 255 characters."
  description: String!
  "\`true\` if this variable is required to be filled in by users when creating TemplateCreative from the CreativeTemplate."
  isRequired: Boolean
  "Default value to be filled in when creating creatives from the creative template."
  defaultValue: String
  "The values within the list users need to select from."
  choices: [ListStringCreativeTemplateVariableVariableChoice]
  "\`true\` if a user can specifiy an 'other' value. For example, if a variable called backgroundColor is defined as a list with values: red, green, blue, this boolean can be set to allow a user to enter a value not on the list such as purple."
  allowOtherChoice: Boolean
}

"Stores variable choices that users can select from"
type ListStringCreativeTemplateVariableVariableChoice {
  "Label that users can select from. This is displayed to users when creating a TemplateCreative. This attribute is intended to be more descriptive than #value. This attribute is required and has a maximum length of 255 characters."
  label: String!
  "Value that users can select from. When creating a TemplateCreative, the value in StringCreativeTemplateVariableValue should match this value, if you intend to select this value. This attribute is required and has a maximum length of 255 characters."
  value: String!
}

"Represents a long variable defined in a creative template."
type LongCreativeTemplateVariable implements CreativeTemplateVariableInterface {
  "Label that is displayed to users when creating TemplateCreative from the CreativeTemplate. This attribute is required and has a maximum length of 127 characters."
  label: String!
  "Unique name used to identify the variable. This attribute is read-only and is assigned by Google, by deriving from label, when a creative template variable is created."
  uniqueName: String
  "A descriptive help text that is displayed to users along with the label. This attribute is required and has a maximum length of 255 characters."
  description: String!
  "\`true\` if this variable is required to be filled in by users when creating TemplateCreative from the CreativeTemplate."
  isRequired: Boolean
  "Default value to be filled in when creating creatives from the creative template."
  defaultValue: BigInt
}

"Represents a string variable defined in a creative template.  Use StringCreativeTemplateVariableValue to specify the value for this variable when creating TemplateCreative from the TemplateCreative."
interface StringCreativeTemplateVariableInterface implements CreativeTemplateVariableInterface {
  "Label that is displayed to users when creating TemplateCreative from the CreativeTemplate. This attribute is required and has a maximum length of 127 characters."
  label: String!
  "Unique name used to identify the variable. This attribute is read-only and is assigned by Google, by deriving from label, when a creative template variable is created."
  uniqueName: String
  "A descriptive help text that is displayed to users along with the label. This attribute is required and has a maximum length of 255 characters."
  description: String!
  "\`true\` if this variable is required to be filled in by users when creating TemplateCreative from the CreativeTemplate."
  isRequired: Boolean
  "Default value to be filled in when creating creatives from the creative template."
  defaultValue: String
}

"Represents a url variable defined in a creative template.  Use UrlCreativeTemplateVariableValue to specify the value for this variable when creating TemplateCreative from the TemplateCreative"
type UrlCreativeTemplateVariable implements CreativeTemplateVariableInterface {
  "Label that is displayed to users when creating TemplateCreative from the CreativeTemplate. This attribute is required and has a maximum length of 127 characters."
  label: String!
  "Unique name used to identify the variable. This attribute is read-only and is assigned by Google, by deriving from label, when a creative template variable is created."
  uniqueName: String
  "A descriptive help text that is displayed to users along with the label. This attribute is required and has a maximum length of 255 characters."
  description: String!
  "\`true\` if this variable is required to be filled in by users when creating TemplateCreative from the CreativeTemplate."
  isRequired: Boolean
  "Default value to be filled in when creating creatives from the creative template."
  defaultValue: String
  "When true, if the URL is identified as from a known vendor, cache-busting macros will automatically be inserted upon save."
  isTrackingUrl: Boolean
}

type _CreativeTemplateConnection {
  totalCount: Int!
  nodes: [CreativeTemplate!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`CreativeTemplate\` by ID."
  _creativeTemplate(input: _SingleRecordQueryInput!): CreativeTemplate
    @findById(service: "CreativeTemplate", action: "getCreativeTemplatesByStatement")
}

extend type Query {
  "Finds multiple \`CreativeTemplate\` objects based on the optional input parameters."
  _creativeTemplates(input: _MultipleRecordsQueryInput!): _CreativeTemplateConnection!
    @find(service: "CreativeTemplate", action: "getCreativeTemplatesByStatement")
}

extend type Query {
  "Gets a CreativeTemplatePage of CreativeTemplate objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CreativeTemplate#id   \`name\` CreativeTemplate#name   \`type\` CreativeTemplate#type   \`status\` CreativeTemplate#status   @param filterStatement a Publisher Query Language statement used to filter a set of creative templates. @return the creative templates that match the given filter"
  getCreativeTemplatesByStatement(input: GetCreativeTemplatesByStatementInput!): CreativeTemplatePage
    @soap(service: "CreativeTemplate", action: "getCreativeTemplatesByStatement")
}

`;
