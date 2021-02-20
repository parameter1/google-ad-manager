// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Contains the AdSense configuration for an AdUnit."
type AdSenseSettings {
  "Specifies whether or not the AdUnit is enabled for serving ads from the AdSense content network. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`adSenseEnabled\`, the attribute is defaulted to \`true\`."
  adSenseEnabled: Boolean
  "Specifies the Hexadecimal border color, from \`000000\` to \`FFFFFF\`. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`borderColor\`, the attribute is defaulted to \`FFFFFF\`."
  borderColor: String
  "Specifies the Hexadecimal title color of an ad, from \`000000\` to \`FFFFFF\`. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`titleColor\`, the attribute is defaulted to \`0000FF\`."
  titleColor: String
  "Specifies the Hexadecimal background color of an ad, from \`000000\` to \`FFFFFF\`. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`backgroundColor\`, the attribute is defaulted to \`FFFFFF\`."
  backgroundColor: String
  "Specifies the Hexadecimal color of the text of an ad, from \`000000\` to \`FFFFFF\`. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`textColor\`, the attribute is defaulted to \`000000\`."
  textColor: String
  "Specifies the Hexadecimal color of the URL of an ad, from \`000000\` to \`FFFFFF\`. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`urlColor\`, the attribute is defaulted to \`008000\` ."
  urlColor: String
  "Specifies what kind of ad can be served by this AdUnit from the AdSense Content Network. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`adType\`, the attribute is defaulted to AdType#TEXT_AND_IMAGE."
  adType: AdSenseSettingsAdTypeEnum
  "Specifies the border-style of the AdUnit. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`borderStyle\`, the attribute is defaulted to BorderStyle#DEFAULT."
  borderStyle: AdSenseSettingsBorderStyleEnum
  "Specifies the font family of the AdUnit. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`fontFamily\`, the attribute is defaulted to FontFamily#DEFAULT."
  fontFamily: AdSenseSettingsFontFamilyEnum
  "Specifies the font size of the AdUnit. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`fontSize\`, the attribute is defaulted to FontSize#DEFAULT."
  fontSize: AdSenseSettingsFontSizeEnum
}

"Specifies the type of ads that can be served through this AdUnit."
enum AdSenseSettingsAdTypeEnum {
  "Allows image-only ads."
  IMAGE
  "Allows text-only ads."
  TEXT
  "Allows both text and image ads."
  TEXT_AND_IMAGE
}

"Describes the border of the HTML elements used to surround an ad displayed by the AdUnit."
enum AdSenseSettingsBorderStyleEnum {
  "Uses the default border-style of the browser."
  DEFAULT
  "Uses a cornered border-style."
  NOT_ROUNDED
  "Uses a slightly rounded border-style."
  SLIGHTLY_ROUNDED
  "Uses a rounded border-style."
  VERY_ROUNDED
}

"List of all possible font families."
enum AdSenseSettingsFontFamilyEnum {
  ARIAL
  DEFAULT
  GEORGIA
  TAHOMA
  TIMES
  VERDANA
}

"List of all possible font sizes the user can choose."
enum AdSenseSettingsFontSizeEnum {
  DEFAULT
  LARGE
  MEDIUM
  SMALL
}

"Contains the AdSense configuration for an AdUnit."
input AdSenseSettingsInput {
  "Specifies whether or not the AdUnit is enabled for serving ads from the AdSense content network. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`adSenseEnabled\`, the attribute is defaulted to \`true\`."
  adSenseEnabled: Boolean
  "Specifies the Hexadecimal border color, from \`000000\` to \`FFFFFF\`. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`borderColor\`, the attribute is defaulted to \`FFFFFF\`."
  borderColor: String
  "Specifies the Hexadecimal title color of an ad, from \`000000\` to \`FFFFFF\`. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`titleColor\`, the attribute is defaulted to \`0000FF\`."
  titleColor: String
  "Specifies the Hexadecimal background color of an ad, from \`000000\` to \`FFFFFF\`. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`backgroundColor\`, the attribute is defaulted to \`FFFFFF\`."
  backgroundColor: String
  "Specifies the Hexadecimal color of the text of an ad, from \`000000\` to \`FFFFFF\`. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`textColor\`, the attribute is defaulted to \`000000\`."
  textColor: String
  "Specifies the Hexadecimal color of the URL of an ad, from \`000000\` to \`FFFFFF\`. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`urlColor\`, the attribute is defaulted to \`008000\` ."
  urlColor: String
  "Specifies what kind of ad can be served by this AdUnit from the AdSense Content Network. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`adType\`, the attribute is defaulted to AdType#TEXT_AND_IMAGE."
  adType: AdSenseSettingsAdTypeEnum
  "Specifies the border-style of the AdUnit. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`borderStyle\`, the attribute is defaulted to BorderStyle#DEFAULT."
  borderStyle: AdSenseSettingsBorderStyleEnum
  "Specifies the font family of the AdUnit. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`fontFamily\`, the attribute is defaulted to FontFamily#DEFAULT."
  fontFamily: AdSenseSettingsFontFamilyEnum
  "Specifies the font size of the AdUnit. This attribute is optional and defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set \`fontSize\`, the attribute is defaulted to FontSize#DEFAULT."
  fontSize: AdSenseSettingsFontSizeEnum
}

"An \`AdUnit\` represents a chunk of identified inventory for the publisher. It contains all the settings that need to be associated with inventory in order to serve ads to it. An \`AdUnit\` can also be the parent of other ad units in the inventory hierarchy."
type AdUnit {
  "Uniquely identifies the \`AdUnit\`. This value is read-only and is assigned by Google when an ad unit is created. This attribute is required for updates."
  id: String!
  "The ID of the ad unit's parent. Every ad unit has a parent except for the root ad unit, which is created by Google. This attribute is required when creating the ad unit. Once the ad unit is created this value will be read-only."
  parentId: String!
  "This field is set to \`true\` if the ad unit has any children. This attribute is read-only and is populated by Google."
  hasChildren: Boolean
  "The path to this ad unit in the ad unit hierarchy represented as a list from the root to this ad unit's parent. For root ad units, this list is empty. This attribute is read-only and is populated by Google."
  parentPath: [AdUnitParent]
  "The name of the ad unit. This attribute is required and its maximum length is 255 characters. This attribute must also be case-insensitive unique."
  name: String!
  "A description of the ad unit. This value is optional and its maximum length is 65,535 characters."
  description: String
  "The value to use for the HTML link's \`target\` attribute. This value is optional and will be interpreted as TargetWindow#TOP if left blank."
  targetWindow: AdUnitTargetWindowEnum
  "The status of this ad unit. It defaults to InventoryStatus#ACTIVE. This value cannot be updated directly using InventoryService#updateAdUnit. It can only be modified by performing actions via InventoryService#performAdUnitAction."
  status: InventoryStatusEnum
  "A string used to uniquely identify the ad unit for the purposes of serving the ad. This attribute is optional and can be set during ad unit creation. If it is not provided, it will be assigned by Google based off of the inventory unit ID. Once an ad unit is created, its \`adUnitCode\` cannot be changed."
  adUnitCode: String
  "The permissible creative sizes that can be served inside this ad unit. This attribute is optional. This attribute replaces the \`sizes\` attribute."
  adUnitSizes: [AdUnitSize]
  "Whether this is an interstitial ad unit."
  isInterstitial: Boolean
  "Whether this is a native ad unit."
  isNative: Boolean
  "Whether this is a fluid ad unit."
  isFluid: Boolean
  "If this field is set to \`true\`, then the \`AdUnit\` will not be implicitly targeted when its parent is. Traffickers must explicitly target such an ad unit or else no line items will serve to it. This feature is only available for Ad Manager 360 accounts."
  explicitlyTargeted: Boolean
  "AdSense specific settings. To overwrite this, set the #adSenseSettingsSource to PropertySourceType#DIRECTLY_SPECIFIED when setting the value of this field."
  adSenseSettings: AdSenseSettings
  "Specifies the source of #adSenseSettings value. To revert an overridden value to its default, set this field to PropertySourceType#PARENT."
  adSenseSettingsSource: ValueSourceTypeEnum
  "The set of label frequency caps applied directly to this ad unit. There is a limit of 10 label frequency caps per ad unit."
  appliedLabelFrequencyCaps: [LabelFrequencyCap]
  "Contains the set of labels applied directly to the ad unit as well as those inherited from parent ad units. This field is readonly and is assigned by Google."
  effectiveLabelFrequencyCaps: [LabelFrequencyCap]
  "The set of labels applied directly to this ad unit."
  appliedLabels: [AppliedLabel]
  "Contains the set of labels applied directly to the ad unit as well as those inherited from the parent ad units. If a label has been negated, only the negated label is returned. This field is readonly and is assigned by Google."
  effectiveAppliedLabels: [AppliedLabel]
  "The IDs of all teams that this ad unit is on as well as those inherited from parent ad units. This value is read-only and is set by Google."
  effectiveTeamIds: [BigInt]
  "The IDs of all teams that this ad unit is on directly."
  appliedTeamIds: [BigInt]
  "The date and time this ad unit was last modified."
  lastModifiedDateTime: GAMDateTime
  "The smart size mode for this ad unit. This attribute is optional and defaults to SmartSizeMode#NONE for fixed sizes."
  smartSizeMode: SmartSizeModeEnum
  "The interval in seconds which ad units in mobile apps automatically refresh. Valid values are between 30 and 120 seconds. This attribute is optional and only applies to ad units in mobile apps. If this value is not set, then the mobile app ad will not refresh."
  refreshRate: Int
  "Specifies an ID for a channel in an external set-top box campaign management system. This attribute is only meaningful if #isSetTopBoxEnabled is \`true\`. This attribute is read-only."
  externalSetTopBoxChannelId: String
  "Flag that specifies whether this ad unit represents an external set-top box channel. This attribute is read-only."
  isSetTopBoxEnabled: Boolean
}

"An \`AdUnit\` represents a chunk of identified inventory for the publisher. It contains all the settings that need to be associated with inventory in order to serve ads to it. An \`AdUnit\` can also be the parent of other ad units in the inventory hierarchy."
input AdUnitInput {
  "The name of the ad unit. This attribute is required and its maximum length is 255 characters. This attribute must also be case-insensitive unique."
  name: String!
  "A description of the ad unit. This value is optional and its maximum length is 65,535 characters."
  description: String
  "The value to use for the HTML link's \`target\` attribute. This value is optional and will be interpreted as TargetWindow#TOP if left blank."
  targetWindow: AdUnitTargetWindowEnum
  "The status of this ad unit. It defaults to InventoryStatus#ACTIVE. This value cannot be updated directly using InventoryService#updateAdUnit. It can only be modified by performing actions via InventoryService#performAdUnitAction."
  status: InventoryStatusEnum
  "A string used to uniquely identify the ad unit for the purposes of serving the ad. This attribute is optional and can be set during ad unit creation. If it is not provided, it will be assigned by Google based off of the inventory unit ID. Once an ad unit is created, its \`adUnitCode\` cannot be changed."
  adUnitCode: String
  "The permissible creative sizes that can be served inside this ad unit. This attribute is optional. This attribute replaces the \`sizes\` attribute."
  adUnitSizes: [AdUnitSizeInput]
  "Whether this is an interstitial ad unit."
  isInterstitial: Boolean
  "Whether this is a native ad unit."
  isNative: Boolean
  "Whether this is a fluid ad unit."
  isFluid: Boolean
  "If this field is set to \`true\`, then the \`AdUnit\` will not be implicitly targeted when its parent is. Traffickers must explicitly target such an ad unit or else no line items will serve to it. This feature is only available for Ad Manager 360 accounts."
  explicitlyTargeted: Boolean
  "AdSense specific settings. To overwrite this, set the #adSenseSettingsSource to PropertySourceType#DIRECTLY_SPECIFIED when setting the value of this field."
  adSenseSettings: AdSenseSettingsInput
  "Specifies the source of #adSenseSettings value. To revert an overridden value to its default, set this field to PropertySourceType#PARENT."
  adSenseSettingsSource: ValueSourceTypeEnum
  "The set of label frequency caps applied directly to this ad unit. There is a limit of 10 label frequency caps per ad unit."
  appliedLabelFrequencyCaps: [LabelFrequencyCapInput]
  "Contains the set of labels applied directly to the ad unit as well as those inherited from parent ad units. This field is readonly and is assigned by Google."
  effectiveLabelFrequencyCaps: [LabelFrequencyCapInput]
  "The set of labels applied directly to this ad unit."
  appliedLabels: [AppliedLabelInput]
  "Contains the set of labels applied directly to the ad unit as well as those inherited from the parent ad units. If a label has been negated, only the negated label is returned. This field is readonly and is assigned by Google."
  effectiveAppliedLabels: [AppliedLabelInput]
  "The IDs of all teams that this ad unit is on directly."
  appliedTeamIds: [BigInt]
  "The date and time this ad unit was last modified."
  lastModifiedDateTime: GAMDateTime
  "The smart size mode for this ad unit. This attribute is optional and defaults to SmartSizeMode#NONE for fixed sizes."
  smartSizeMode: SmartSizeModeEnum
  "The interval in seconds which ad units in mobile apps automatically refresh. Valid values are between 30 and 120 seconds. This attribute is optional and only applies to ad units in mobile apps. If this value is not set, then the mobile app ad will not refresh."
  refreshRate: Int
}

"Captures a page of AdUnit objects."
type AdUnitPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of ad units contained within this page."
  results: [AdUnit]
}

"An \`AdUnitSize\` represents the size of an ad in an ad unit. This also represents the environment and companions of a particular ad in an ad unit. In most cases, it is a simple size with just a width and a height (sometimes representing an aspect ratio)."
input AdUnitSizeInput {
  "The permissible creative size that can be served inside this ad unit."
  size: SizeInput
  "The environment type of the ad unit size. The default value is EnvironmentType#BROWSER."
  environmentType: EnvironmentTypeEnum
  "The companions for this ad unit size. Companions are only valid if the environment is EnvironmentType#VIDEO_PLAYER. If the environment is EnvironmentType#BROWSER including companions results in an error."
  companions: [AdUnitSizeInput]
  "The full (including companion sizes, if applicable) display string of the size, e.g. \`'300x250'\` or \`'300x250v (180x150)'\`"
  fullDisplayString: String
  "Whether the inventory size is audio. If set to true, \`Size\` will be set to \`'1x1'\` and \`EnvironmentType\` will be set to EnvironmentType#VIDEO_PLAYER regardless of user input."
  isAudio: Boolean
}

"Creates new AdUnit objects. @param adUnits the ad units to create @return the created ad units, with their IDs filled in"
input CreateAdUnitsInput {
  adUnits: [AdUnitInput]
}

"Returns a set of all relevant AdUnitSize objects. The given Statement is currently ignored but may be honored in future versions. @param filterStatement currently ignored but may be honored in future versions @return the ad unit sizes"
input GetAdUnitSizesByStatementInput {
  filterStatement: StatementInput
}

"Gets a AdUnitPage of AdUnit objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`adUnitCode\` AdUnit#adUnitCode   \`id\` AdUnit#id   \`name\` AdUnit#name   \`parentId\` AdUnit#parentId   \`status\` AdUnit#status   \`lastModifiedDateTime\` AdUnit#lastModifiedDateTime   @param filterStatement a Publisher Query Language statement used to filter a set of ad units @return the ad units that match the given filter"
input GetAdUnitsByStatementInput {
  filterStatement: StatementInput
}

"A \`LabelFrequencyCap\` assigns a frequency cap to a label. The frequency cap will limit the cumulative number of impressions of any ad units with this label that may be shown to a particular user over a time unit."
type LabelFrequencyCap {
  "The frequency cap to be applied with this label."
  frequencyCap: FrequencyCap
  "ID of the label being capped on the AdUnit."
  labelId: BigInt
}

"A \`LabelFrequencyCap\` assigns a frequency cap to a label. The frequency cap will limit the cumulative number of impressions of any ad units with this label that may be shown to a particular user over a time unit."
input LabelFrequencyCapInput {
  "The frequency cap to be applied with this label."
  frequencyCap: FrequencyCapInput
  "ID of the label being capped on the AdUnit."
  labelId: BigInt
}

"Performs actions on AdUnit objects that match the given Statement#query. @param adUnitAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of ad units @return the result of the action performed"
input PerformAdUnitActionInput {
  adUnitAction: JSONObject
  filterStatement: StatementInput
}

"Represents smart size modes."
enum SmartSizeModeEnum {
  "Height and width are ranges."
  DYNAMIC_SIZE
  "Fixed size mode (default)."
  NONE
  "The height is fixed for the request, the width is a range."
  SMART_BANNER
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Updates the specified AdUnit objects. @param adUnits the ad units to update @return the updated ad units"
input UpdateAdUnitsInput {
  adUnits: [AdUnitInput]
}

"Identifies the source of a field's value."
enum ValueSourceTypeEnum {
  "The field's value is user specified and not inherited."
  DIRECTLY_SPECIFIED
  "The field's value is inherited from the parent object."
  PARENT
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

extend type Mutation {
  "Creates new AdUnit objects. @param adUnits the ad units to create @return the created ad units, with their IDs filled in"
  createAdUnits(input: CreateAdUnitsInput!): [AdUnit]
    @soap(service: "Inventory", action: "createAdUnits")
}

extend type Query {
  "Returns a set of all relevant AdUnitSize objects. The given Statement is currently ignored but may be honored in future versions. @param filterStatement currently ignored but may be honored in future versions @return the ad unit sizes"
  getAdUnitSizesByStatement(input: GetAdUnitSizesByStatementInput!): [AdUnitSize]
    @soap(service: "Inventory", action: "getAdUnitSizesByStatement")
}

extend type Query {
  "Gets a AdUnitPage of AdUnit objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`adUnitCode\` AdUnit#adUnitCode   \`id\` AdUnit#id   \`name\` AdUnit#name   \`parentId\` AdUnit#parentId   \`status\` AdUnit#status   \`lastModifiedDateTime\` AdUnit#lastModifiedDateTime   @param filterStatement a Publisher Query Language statement used to filter a set of ad units @return the ad units that match the given filter"
  getAdUnitsByStatement(input: GetAdUnitsByStatementInput!): AdUnitPage
    @soap(service: "Inventory", action: "getAdUnitsByStatement")
}

extend type Mutation {
  "Performs actions on AdUnit objects that match the given Statement#query. @param adUnitAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of ad units @return the result of the action performed"
  performAdUnitAction(input: PerformAdUnitActionInput!): UpdateResult
    @soap(service: "Inventory", action: "performAdUnitAction")
}

extend type Mutation {
  "Updates the specified AdUnit objects. @param adUnits the ad units to update @return the updated ad units"
  updateAdUnits(input: UpdateAdUnitsInput!): [AdUnit]
    @soap(service: "Inventory", action: "updateAdUnits")
}

`;
