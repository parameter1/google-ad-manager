// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"A CdnConfiguration encapsulates information about where and how to ingest and deliver content enabled for DAI (Dynamic Ad Insertion)."
type CdnConfiguration {
  "The unique ID of the CdnConfiguration. This value is read-only and is assigned by Google."
  id: BigInt!
  "The name of the CdnConfiguration. This value is required to create a CDN configuration and has a maximum length of 255 characters."
  name: String!
  "The type of CDN configuration represented by this CdnConfiguration. This value is required to create a CDN configuration"
  cdnConfigurationType: CdnConfigurationTypeEnum!
  "Parameters about this CDN configuration as a source of content. This facilitates fetching the original content for conditioning and delivering the original content as part of a modified stream."
  sourceContentConfiguration: SourceContentConfiguration
  "The status of the CDN configuration."
  cdnConfigurationStatus: CdnConfigurationStatusEnum
}

"A CdnConfiguration encapsulates information about where and how to ingest and deliver content enabled for DAI (Dynamic Ad Insertion)."
input CdnConfigurationInput {
  "The name of the CdnConfiguration. This value is required to create a CDN configuration and has a maximum length of 255 characters."
  name: String!
  "The type of CDN configuration represented by this CdnConfiguration. This value is required to create a CDN configuration"
  cdnConfigurationType: CdnConfigurationTypeEnum!
  "Parameters about this CDN configuration as a source of content. This facilitates fetching the original content for conditioning and delivering the original content as part of a modified stream."
  sourceContentConfiguration: SourceContentConfigurationInput
  "The status of the CDN configuration."
  cdnConfigurationStatus: CdnConfigurationStatusEnum
}

"Captures a page of CdnConfiguration objects."
type CdnConfigurationPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of CDN configurations contained within this page."
  results: [CdnConfiguration]
}

"Indicates the status of the CdnConfiguration."
enum CdnConfigurationStatusEnum {
  "The CDN configuration is in use."
  ACTIVE
  "The CDN configuration is no longer used."
  ARCHIVED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Indicates the type of CDN configuration for CdnConfiguration."
enum CdnConfigurationTypeEnum {
  "A configuration that specifies where and how LiveStreamEvent content should be ingested and delivered."
  LIVE_STREAM_SOURCE_CONTENT
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Creates new CdnConfiguration objects."
input CreateCdnConfigurationsInput {
  cdnConfigurations: [CdnConfigurationInput]
}

"Gets a CdnConfigurationPage of CdnConfiguration objects that satisfy the given Statement#query. Currently only CDN Configurations of type CdnConfigurationType#LIVE_STREAM_SOURCE_CONTENT will be returned. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CdnConfiguration#id   \`name\` CdnConfiguration#name  "
input GetCdnConfigurationsByStatementInput {
  statement: StatementInput
}

"Configuration that associates a media location with a security policy and the authentication credentials needed to access the content."
type MediaLocationSettings {
  "The name of the media location. This value is read-only and is assigned by Google."
  name: String
  "The url prefix of the media location. This value is required for a valid media location."
  urlPrefix: String!
  "The security policy and authentication credentials needed to access the content in this media location. This value is required for a valid media location."
  securityPolicy: SecurityPolicySettings!
}

"Configuration that associates a media location with a security policy and the authentication credentials needed to access the content."
input MediaLocationSettingsInput {
  "The url prefix of the media location. This value is required for a valid media location."
  urlPrefix: String!
  "The security policy and authentication credentials needed to access the content in this media location. This value is required for a valid media location."
  securityPolicy: SecurityPolicySettingsInput!
}

"Indicates the type of origin forwarding used to support Akamai authentication policies for LiveStreamEvent"
enum OriginForwardingTypeEnum {
  "Indicates that conventional origin forwarding is used."
  CONVENTIONAL
  "Indicates that origin forwarding is not being used."
  NONE
  "Indicates that origin forwarding is set up by passing an originpath query string parameter (necessary for Akamai dynamic packaging to work)"
  ORIGIN_PATH
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Performs actions on CdnConfiguration objects that match the given Statement#query. @param cdnConfigurationAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of live stream events @return the result of the action performed"
input PerformCdnConfigurationActionInput {
  cdnConfigurationAction: JSONObject
  filterStatement: StatementInput
}

"A set of security requirements to authenticate against in order to access video content. Different locations (e.g. different CDNs) can have different security policies."
type SecurityPolicySettings {
  "Type of security policy. This determines which other fields should be populated. This value is required for a valid security policy."
  securityPolicyType: SecurityPolicyTypeEnum!
  "Shared security key used to generate the Akamai HMAC token for authenticating requests. This field is only applicable when the value of #securityPolicyType is equal to SecurityPolicyType#AKAMAI and will be set to null otherwise."
  tokenAuthenticationKey: String
  "Whether the segment URLs should be signed using the #tokenAuthenticationKey on the server. This is only applicable for delivery media locations that have token authentication enabled."
  disableServerSideUrlSigning: Boolean
  "The type of origin forwarding used to support Akamai authentication policies for the master playlist. This field is not applicable to ingest locations, and is only applicable to delivery media locations with the #securityPolicyType set to SecurityPolicyType#AKAMAI. If set elsewhere it will be reset to null."
  originForwardingType: OriginForwardingTypeEnum
  "The origin path prefix provided by the publisher for the master playlist. This field is only applicable for delivery media locations with the value of #originForwardingType set to OriginForwardingType#CONVENTIONAL, and will be set to null otherwise."
  originPathPrefix: String
  "The type of origin forwarding used to support Akamai authentication policies for media playlists. This field is not applicable to ingest locations, and is only applicable to delivery media locations with the #securityPolicyType set to SecurityPolicyType#AKAMAI. Valid options are \`OriginForwardingType#NONE\` or \`OriginForwardingType#ORIGIN_PATH\`."
  mediaPlaylistOriginForwardingType: OriginForwardingTypeEnum
  "The origin path prefix provided by the publisher for the media playlists. This field is only applicable for delivery media locations with the value of #mediaPlaylistOriginForwardingType set to OriginForwardingType#CONVENTIONAL, and will be set to null otherwise."
  mediaPlaylistOriginPathPrefix: String
}

"A set of security requirements to authenticate against in order to access video content. Different locations (e.g. different CDNs) can have different security policies."
input SecurityPolicySettingsInput {
  "Type of security policy. This determines which other fields should be populated. This value is required for a valid security policy."
  securityPolicyType: SecurityPolicyTypeEnum!
  "Shared security key used to generate the Akamai HMAC token for authenticating requests. This field is only applicable when the value of #securityPolicyType is equal to SecurityPolicyType#AKAMAI and will be set to null otherwise."
  tokenAuthenticationKey: String
  "Whether the segment URLs should be signed using the #tokenAuthenticationKey on the server. This is only applicable for delivery media locations that have token authentication enabled."
  disableServerSideUrlSigning: Boolean
  "The type of origin forwarding used to support Akamai authentication policies for the master playlist. This field is not applicable to ingest locations, and is only applicable to delivery media locations with the #securityPolicyType set to SecurityPolicyType#AKAMAI. If set elsewhere it will be reset to null."
  originForwardingType: OriginForwardingTypeEnum
  "The origin path prefix provided by the publisher for the master playlist. This field is only applicable for delivery media locations with the value of #originForwardingType set to OriginForwardingType#CONVENTIONAL, and will be set to null otherwise."
  originPathPrefix: String
  "The type of origin forwarding used to support Akamai authentication policies for media playlists. This field is not applicable to ingest locations, and is only applicable to delivery media locations with the #securityPolicyType set to SecurityPolicyType#AKAMAI. Valid options are \`OriginForwardingType#NONE\` or \`OriginForwardingType#ORIGIN_PATH\`."
  mediaPlaylistOriginForwardingType: OriginForwardingTypeEnum
  "The origin path prefix provided by the publisher for the media playlists. This field is only applicable for delivery media locations with the value of #mediaPlaylistOriginForwardingType set to OriginForwardingType#CONVENTIONAL, and will be set to null otherwise."
  mediaPlaylistOriginPathPrefix: String
}

"Indicates the type of security policy associated with access to a CDN. Different security policies require different parameters in a SecurityPolicy."
enum SecurityPolicyTypeEnum {
  "Security policy for accessing content on the Akamai CDN."
  AKAMAI
  "Indicates that no authentication is necessary."
  NONE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Parameters about this CDN configuration as a source of content. This facilitates fetching the original content for conditioning and delivering the original content as part of a modified stream."
type SourceContentConfiguration {
  "Configuration for how DAI should ingest media. At ingest time, we match the url prefix of media in a stream's playlist with an ingest location and use the authentication credentials from the corresponding ingest settings to download the media. This value is required for a valid source content configuration."
  ingestSettings: MediaLocationSettings!
  "Default configuration for how DAI should deliver the non-modified media segments. At delivery time, we replace the ingest location's url prefix with the delivery location's URL prefix and use the security policy from the delivery settings to determine how DAI needs to deliver the media so that users can access it. This value is required for a valid source content configuration."
  defaultDeliverySettings: MediaLocationSettings!
}

"Parameters about this CDN configuration as a source of content. This facilitates fetching the original content for conditioning and delivering the original content as part of a modified stream."
input SourceContentConfigurationInput {
  "Configuration for how DAI should ingest media. At ingest time, we match the url prefix of media in a stream's playlist with an ingest location and use the authentication credentials from the corresponding ingest settings to download the media. This value is required for a valid source content configuration."
  ingestSettings: MediaLocationSettingsInput!
  "Default configuration for how DAI should deliver the non-modified media segments. At delivery time, we replace the ingest location's url prefix with the delivery location's URL prefix and use the security policy from the delivery settings to determine how DAI needs to deliver the media so that users can access it. This value is required for a valid source content configuration."
  defaultDeliverySettings: MediaLocationSettingsInput!
}

"Updates the specified CdnConfiguration objects."
input UpdateCdnConfigurationsInput {
  cdnConfigurations: [CdnConfigurationInput]
}

extend type Mutation {
  "Creates new CdnConfiguration objects."
  createCdnConfigurations(input: CreateCdnConfigurationsInput!): [CdnConfiguration]
    @soap(service: "CdnConfiguration", action: "createCdnConfigurations")
}

extend type Query {
  "Gets a CdnConfigurationPage of CdnConfiguration objects that satisfy the given Statement#query. Currently only CDN Configurations of type CdnConfigurationType#LIVE_STREAM_SOURCE_CONTENT will be returned. The following fields are supported for filtering:   PQL Property Object Property   \`id\` CdnConfiguration#id   \`name\` CdnConfiguration#name  "
  getCdnConfigurationsByStatement(input: GetCdnConfigurationsByStatementInput!): CdnConfigurationPage
    @soap(service: "CdnConfiguration", action: "getCdnConfigurationsByStatement")
}

extend type Mutation {
  "Performs actions on CdnConfiguration objects that match the given Statement#query. @param cdnConfigurationAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of live stream events @return the result of the action performed"
  performCdnConfigurationAction(input: PerformCdnConfigurationActionInput!): UpdateResult
    @soap(service: "CdnConfiguration", action: "performCdnConfigurationAction")
}

extend type Mutation {
  "Updates the specified CdnConfiguration objects."
  updateCdnConfigurations(input: UpdateCdnConfigurationsInput!): [CdnConfiguration]
    @soap(service: "CdnConfiguration", action: "updateCdnConfigurations")
}

`;
