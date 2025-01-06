// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates new LineItemCreativeAssociation objects"
input CreateLineItemCreativeAssociationsInput {
  lineItemCreativeAssociations: [LineItemCreativeAssociationInput]
}

"Represents the NativeStyle of a Creative and its corresponding preview URL."
type CreativeNativeStylePreview {
  "The id of the NativeStyle."
  nativeStyleId: BigInt
  "The URL for previewing this creative using this particular NativeStyle"
  previewUrl: String
}

"Gets a LineItemCreativeAssociationPage of LineItemCreativeAssociation objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`creativeId\` LineItemCreativeAssociation#creativeId   \`manualCreativeRotationWeight\` LineItemCreativeAssociation#manualCreativeRotationWeight   \`destinationUrl\` LineItemCreativeAssociation#destinationUrl   \`lineItemId\` LineItemCreativeAssociation#lineItemId   \`status\` LineItemCreativeAssociation#status   \`lastModifiedDateTime\` LineItemCreativeAssociation#lastModifiedDateTime  "
input GetLineItemCreativeAssociationsByStatementInput {
  filterStatement: StatementInput
}

"Returns an insite preview URL that references the specified site URL with the specified creative from the association served to it. For Creative Set previewing you may specify the master creative Id."
input GetPreviewUrlInput {
  lineItemId: BigInt
  creativeId: BigInt
  siteUrl: String
}

"Returns a list of URLs that reference the specified site URL with the specified creative from the association served to it. For Creative Set previewing you may specify the master creative Id. Each URL corresponds to one available native style for previewing the specified creative."
input GetPreviewUrlsForNativeStylesInput {
  lineItemId: BigInt
  creativeId: BigInt
  siteUrl: String
}

"A \`LineItemCreativeAssociation\` associates a Creative or CreativeSet with a LineItem so that the creative can be served in ad units targeted by the line item."
type LineItemCreativeAssociation {
  "The ID of the LineItem to which the Creative should be associated. This attribute is required."
  lineItemId: BigInt
  "The ID of the Creative being associated with a LineItem. This attribute is required if this is an association between a line item and a creative.  This attribute is ignored if this is an association between a line item and a creative set. If this is an association between a line item and a creative, when retrieving the line item creative association, the #creativeId will be the creative's ID.  If this is an association between a line item and a creative set, when retrieving the line item creative association, the #creativeId will be the ID of the master creative."
  creativeId: BigInt
  "The ID of the CreativeSet being associated with a LineItem. This attribute is required if this is an association between a line item and a creative set. This field will be \`null\` when retrieving associations between line items and creatives not belonging to a set."
  creativeSetId: BigInt
  "The weight of the Creative. This value is only used if the line item's \`creativeRotationType\` is set to CreativeRotationType#MANUAL. This attribute is optional and defaults to 10."
  manualCreativeRotationWeight: Float
  "The sequential rotation index of the Creative. This value is used only if the associated line item's LineItem#creativeRotationType is set to CreativeRotationType#SEQUENTIAL. This attribute is optional and defaults to 1."
  sequentialCreativeRotationIndex: Int
  "Overrides the value set for LineItem#startDateTime. This value is optional and is only valid for Ad Manager 360 networks. If unset, the LineItem#startDateTime will be used."
  startDateTime: DateTime
  "Specifies whether to start serving to the \`LineItemCreativeAssociation\` right away, in an hour, etc. This attribute is optional and defaults to StartDateTimeType#USE_START_DATE_TIME."
  startDateTimeType: StartDateTimeTypeEnum
  "Overrides LineItem#endDateTime. This value is optional and is only valid for Ad Manager 360 networks. If unset, the LineItem#endDateTime will be used."
  endDateTime: DateTime
  "Overrides the value set for HasDestinationUrlCreative#destinationUrl. This value is optional and is only valid for Ad Manager 360 networks."
  destinationUrl: String
  "Overrides the value set for Creative#size, which allows the creative to be served to ad units that would otherwise not be compatible for its actual size. This value is optional."
  sizes: [Size]
  "The status of the association. This attribute is read-only."
  status: LineItemCreativeAssociationStatusEnum
  "Contains trafficking statistics for the association. This attribute is readonly and is populated by Google. This will be \`null\` in case there are no statistics for the association yet."
  stats: LineItemCreativeAssociationStats
  "The date and time this association was last modified."
  lastModifiedDateTime: DateTime
  "Specifies CreativeTargeting for this line item creative association. This attribute is optional. It should match the creative targeting specified on the corresponding CreativePlaceholder in the LineItem that is being associated with the Creative."
  targetingName: String
}

"A \`LineItemCreativeAssociation\` associates a Creative or CreativeSet with a LineItem so that the creative can be served in ad units targeted by the line item."
input LineItemCreativeAssociationInput {
  "The ID of the LineItem to which the Creative should be associated. This attribute is required."
  lineItemId: BigInt
  "The ID of the Creative being associated with a LineItem. This attribute is required if this is an association between a line item and a creative.  This attribute is ignored if this is an association between a line item and a creative set. If this is an association between a line item and a creative, when retrieving the line item creative association, the #creativeId will be the creative's ID.  If this is an association between a line item and a creative set, when retrieving the line item creative association, the #creativeId will be the ID of the master creative."
  creativeId: BigInt
  "The ID of the CreativeSet being associated with a LineItem. This attribute is required if this is an association between a line item and a creative set. This field will be \`null\` when retrieving associations between line items and creatives not belonging to a set."
  creativeSetId: BigInt
  "The weight of the Creative. This value is only used if the line item's \`creativeRotationType\` is set to CreativeRotationType#MANUAL. This attribute is optional and defaults to 10."
  manualCreativeRotationWeight: Float
  "The sequential rotation index of the Creative. This value is used only if the associated line item's LineItem#creativeRotationType is set to CreativeRotationType#SEQUENTIAL. This attribute is optional and defaults to 1."
  sequentialCreativeRotationIndex: Int
  "Overrides the value set for LineItem#startDateTime. This value is optional and is only valid for Ad Manager 360 networks. If unset, the LineItem#startDateTime will be used."
  startDateTime: DateTime
  "Specifies whether to start serving to the \`LineItemCreativeAssociation\` right away, in an hour, etc. This attribute is optional and defaults to StartDateTimeType#USE_START_DATE_TIME."
  startDateTimeType: StartDateTimeTypeEnum
  "Overrides LineItem#endDateTime. This value is optional and is only valid for Ad Manager 360 networks. If unset, the LineItem#endDateTime will be used."
  endDateTime: DateTime
  "Overrides the value set for HasDestinationUrlCreative#destinationUrl. This value is optional and is only valid for Ad Manager 360 networks."
  destinationUrl: String
  "Overrides the value set for Creative#size, which allows the creative to be served to ad units that would otherwise not be compatible for its actual size. This value is optional."
  sizes: [SizeInput]
  "The date and time this association was last modified."
  lastModifiedDateTime: DateTime
  "Specifies CreativeTargeting for this line item creative association. This attribute is optional. It should match the creative targeting specified on the corresponding CreativePlaceholder in the LineItem that is being associated with the Creative."
  targetingName: String
}

"Captures a page of LineItemCreativeAssociation objects."
type LineItemCreativeAssociationPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of line item creative associations contained within this page."
  results: [LineItemCreativeAssociation]
}

"Contains statistics such as impressions, clicks delivered and cost for LineItemCreativeAssociation objects."
type LineItemCreativeAssociationStats {
  "A Stats object that holds delivered impressions and clicks statistics."
  stats: Stats
  "A map containing Stats objects for each creative belonging to a creative set, \`null\` for non creative set associations."
  creativeSetStats: [Long_StatsMapEntry]
  "The revenue generated thus far by the creative from its association with the particular line item in the publisher's currency."
  costInOrderCurrency: Money
}

"Describes the status of the association."
enum LineItemCreativeAssociationStatusEnum {
  "The association is active and the associated Creative can be served."
  ACTIVE
  "The association is inactive and the associated Creative is ineligible for being served."
  INACTIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"This represents an entry in a map with a key of type Long and value of type Stats."
type Long_StatsMapEntry {
  key: BigInt
  value: Stats
}

"This represents an entry in a map with a key of type Long and value of type Stats."
input Long_StatsMapEntryInput {
  key: BigInt
  value: StatsInput
}

"Performs actions on LineItemCreativeAssociation objects that match the given Statement#query."
input PerformLineItemCreativeAssociationActionInput {
  lineItemCreativeAssociationAction: JSONObject
  filterStatement: StatementInput
}

"\`Stats\` contains trafficking statistics for LineItem and LineItemCreativeAssociation objects"
input StatsInput {
  "The number of impressions delivered."
  impressionsDelivered: BigInt
  "The number of clicks delivered."
  clicksDelivered: BigInt
  "The number of video completions delivered."
  videoCompletionsDelivered: BigInt
  "The number of video starts delivered."
  videoStartsDelivered: BigInt
  "The number of viewable impressions delivered."
  viewableImpressionsDelivered: BigInt
}

"Updates the specified LineItemCreativeAssociation objects"
input UpdateLineItemCreativeAssociationsInput {
  lineItemCreativeAssociations: [LineItemCreativeAssociationInput]
}

type _LineItemCreativeAssociationConnection {
  totalCount: Int!
  nodes: [LineItemCreativeAssociation!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`LineItemCreativeAssociation\` by ID."
  _lineItemCreativeAssociation(input: _SingleRecordQueryInput!): LineItemCreativeAssociation
    @findById(service: "LineItemCreativeAssociation", action: "getLineItemCreativeAssociationsByStatement")
}

extend type Query {
  "Finds multiple \`LineItemCreativeAssociation\` objects based on the optional input parameters."
  _lineItemCreativeAssociations(input: _MultipleRecordsQueryInput!): _LineItemCreativeAssociationConnection!
    @find(service: "LineItemCreativeAssociation", action: "getLineItemCreativeAssociationsByStatement")
}

extend type Mutation {
  "Creates new LineItemCreativeAssociation objects"
  createLineItemCreativeAssociations(input: CreateLineItemCreativeAssociationsInput!): [LineItemCreativeAssociation]
    @soap(service: "LineItemCreativeAssociation", action: "createLineItemCreativeAssociations")
}

extend type Query {
  "Gets a LineItemCreativeAssociationPage of LineItemCreativeAssociation objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`creativeId\` LineItemCreativeAssociation#creativeId   \`manualCreativeRotationWeight\` LineItemCreativeAssociation#manualCreativeRotationWeight   \`destinationUrl\` LineItemCreativeAssociation#destinationUrl   \`lineItemId\` LineItemCreativeAssociation#lineItemId   \`status\` LineItemCreativeAssociation#status   \`lastModifiedDateTime\` LineItemCreativeAssociation#lastModifiedDateTime  "
  getLineItemCreativeAssociationsByStatement(input: GetLineItemCreativeAssociationsByStatementInput!): LineItemCreativeAssociationPage
    @soap(service: "LineItemCreativeAssociation", action: "getLineItemCreativeAssociationsByStatement")
}

extend type Query {
  "Returns an insite preview URL that references the specified site URL with the specified creative from the association served to it. For Creative Set previewing you may specify the master creative Id."
  getPreviewUrl(input: GetPreviewUrlInput!): String
    @soap(service: "LineItemCreativeAssociation", action: "getPreviewUrl")
}

extend type Query {
  "Returns a list of URLs that reference the specified site URL with the specified creative from the association served to it. For Creative Set previewing you may specify the master creative Id. Each URL corresponds to one available native style for previewing the specified creative."
  getPreviewUrlsForNativeStyles(input: GetPreviewUrlsForNativeStylesInput!): [CreativeNativeStylePreview]
    @soap(service: "LineItemCreativeAssociation", action: "getPreviewUrlsForNativeStyles")
}

extend type Mutation {
  "Performs actions on LineItemCreativeAssociation objects that match the given Statement#query."
  performLineItemCreativeAssociationAction(input: PerformLineItemCreativeAssociationActionInput!): UpdateResult
    @soap(service: "LineItemCreativeAssociation", action: "performLineItemCreativeAssociationAction")
}

extend type Mutation {
  "Updates the specified LineItemCreativeAssociation objects"
  updateLineItemCreativeAssociations(input: UpdateLineItemCreativeAssociationsInput!): [LineItemCreativeAssociation]
    @soap(service: "LineItemCreativeAssociation", action: "updateLineItemCreativeAssociations")
}

`;
