// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Information about the audio settings of an encoding profile."
type AudioSettings {
  "The RFC6381 codec string of the audio."
  codec: String
  "The bitrate of the audio, in bits per second. Required. This value must be between 8kbps and 250 Mbps."
  bitrate: BigInt
  "The number of audio channels, including low frequency channels. This value has a maximum of 8."
  channels: BigInt
  "The audio sample rate in hertz. Must be between 44kHz and 100kHz."
  sampleRateHertz: BigInt
}

"Information about the audio settings of an encoding profile."
input AudioSettingsInput {
  "The RFC6381 codec string of the audio."
  codec: String
  "The bitrate of the audio, in bits per second. Required. This value must be between 8kbps and 250 Mbps."
  bitrate: BigInt
  "The number of audio channels, including low frequency channels. This value has a maximum of 8."
  channels: BigInt
  "The audio sample rate in hertz. Must be between 44kHz and 100kHz."
  sampleRateHertz: BigInt
}

"Describes the digital media container type of the underlying media."
enum ContainerTypeEnum {
  "Fragmented MPEG-4 (fMP4) output container."
  FMP4
  "HTTP live streaming (HLS) packed audio container."
  HLS_AUDIO
  "Transport stream (TS) container."
  TS
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Creates new DaiEncodingProfile objects. @param daiEncodingProfiles the profiles to create @return the created profiles with their IDs filled in"
input CreateDaiEncodingProfilesInput {
  daiEncodingProfiles: [DaiEncodingProfileInput]
}

"A DaiEncodingProfile contains data about a publisher's encoding profiles. Ad Manager Dynamic Ad Insertion (DAI) uses the profile information about the content to select an appropriate ad transcode to play for the particular video."
type DaiEncodingProfile {
  "The unique ID of the DaiEncodingProfile. This value is read-only and is assigned by Google."
  id: BigInt!
  "The name of the DaiEncodingProfile. This value is required to create an encoding profile and may be at most 64 characters. The name field can contain alphanumeric characters and symbols other than the following: ', ', =, !, +, #, *, ~, ;, ^, (, ), <, >, [, ], the white space character."
  name: String!
  "The status of this DaiEncodingProfile. DAI encoding profiles are created in the DaiEncodingProfileStatus#ACTIVE state. The status can only be modified through the DaiEncodingProfileService#performDaiEncodingProfileAction method. Only active profiles will be allowed to be associated with live streams."
  status: DaiEncodingProfileStatusEnum
  "The variant playlist type that this DaiEncodingProfile represents."
  variantType: VariantTypeEnum
  "The digital container type of the underlying media. This is required for \`MEDIA\` and \`IFRAME\` variant types."
  containerType: ContainerTypeEnum
  "Information about the video media, if present. This field will only be set if the media contains video, or is an \`IFRAME\` variant type."
  videoSettings: VideoSettings
  "Information about the audio media, if present. This field will only be set if the media contains audio. Only \`MEDIA\` and \`IFRAME\` variant types can set audio."
  audioSettings: AudioSettings
}

"A DaiEncodingProfile contains data about a publisher's encoding profiles. Ad Manager Dynamic Ad Insertion (DAI) uses the profile information about the content to select an appropriate ad transcode to play for the particular video."
input DaiEncodingProfileInput {
  "The name of the DaiEncodingProfile. This value is required to create an encoding profile and may be at most 64 characters. The name field can contain alphanumeric characters and symbols other than the following: ', ', =, !, +, #, *, ~, ;, ^, (, ), <, >, [, ], the white space character."
  name: String!
  "The status of this DaiEncodingProfile. DAI encoding profiles are created in the DaiEncodingProfileStatus#ACTIVE state. The status can only be modified through the DaiEncodingProfileService#performDaiEncodingProfileAction method. Only active profiles will be allowed to be associated with live streams."
  status: DaiEncodingProfileStatusEnum
  "The variant playlist type that this DaiEncodingProfile represents."
  variantType: VariantTypeEnum
  "The digital container type of the underlying media. This is required for \`MEDIA\` and \`IFRAME\` variant types."
  containerType: ContainerTypeEnum
  "Information about the video media, if present. This field will only be set if the media contains video, or is an \`IFRAME\` variant type."
  videoSettings: VideoSettingsInput
  "Information about the audio media, if present. This field will only be set if the media contains audio. Only \`MEDIA\` and \`IFRAME\` variant types can set audio."
  audioSettings: AudioSettingsInput
}

"Captures a page of DaiEncodingProfile objects."
type DaiEncodingProfilePage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of profiles contained within this page."
  results: [DaiEncodingProfile]
}

"Describes the status of a DaiEncodingProfile object."
enum DaiEncodingProfileStatusEnum {
  "Indicates the DaiEncodingProfile has been created and is eligible for streaming."
  ACTIVE
  "Indicates the DaiEncodingProfile has been archived."
  ARCHIVED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Gets a DaiEncodingProfilePage of DaiEncodingProfile objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` DaiEncodingProfile#id   \`status\` DaiEncodingProfile#status   \`name\` DaiEncodingProfile#name   @param filterStatement a Publisher Query Language statement to filter a list of profiles @return the profiles that match the filter"
input GetDaiEncodingProfilesByStatementInput {
  filterStatement: StatementInput
}

"Performs actions on DaiEncodingProfile objects that match the given Statement#query. @param daiEncodingProfileAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of profiles @return the result of the action performed"
input PerformDaiEncodingProfileActionInput {
  daiEncodingProfileAction: JSONObject
  filterStatement: StatementInput
}

"Updates the specified DaiEncodingProfile objects. @param daiEncodingProfiles the content profiles to update @return the updated profiles @throws ApiException if there is an error updating the profiles"
input UpdateDaiEncodingProfilesInput {
  daiEncodingProfiles: [DaiEncodingProfileInput]
}

"Describes the variant playlist type that the profile represents."
enum VariantTypeEnum {
  "iFrame variant playlist type. iFrame playlists may: contain video or contain audio and video (i.e. video must be present)."
  IFRAME
  "Media variant playlist type. Media playlists may: contain audio only, video only, or audio and video."
  MEDIA
  "Subtitles variant playlist type."
  SUBTITLES
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Information about the video settings of an encoding profile."
type VideoSettings {
  "The RFC6381 codec string of the audio."
  codec: String
  "The bitrate of the video, in bits per second. This value must be between 32kbps and 250 Mbps."
  bitrate: BigInt
  "The frames per second of the video. This value will be truncated to three decimal places."
  framesPerSecond: Float
  "The resolution of the video, in pixels."
  resolution: Size
}

"Information about the video settings of an encoding profile."
input VideoSettingsInput {
  "The RFC6381 codec string of the audio."
  codec: String
  "The bitrate of the video, in bits per second. This value must be between 32kbps and 250 Mbps."
  bitrate: BigInt
  "The frames per second of the video. This value will be truncated to three decimal places."
  framesPerSecond: Float
  "The resolution of the video, in pixels."
  resolution: SizeInput
}

type _DaiEncodingProfileConnection {
  totalCount: Int!
  nodes: [DaiEncodingProfile!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`DaiEncodingProfile\` by ID."
  _daiEncodingProfile(input: _SingleRecordQueryInput!): DaiEncodingProfile
    @findById(service: "DaiEncodingProfile", action: "getDaiEncodingProfilesByStatement")
}

extend type Query {
  "Finds multiple \`DaiEncodingProfile\` objects based on the optional input parameters."
  _daiEncodingProfiles(input: _MultipleRecordsQueryInput!): _DaiEncodingProfileConnection!
    @find(service: "DaiEncodingProfile", action: "getDaiEncodingProfilesByStatement")
}

extend type Mutation {
  "Creates new DaiEncodingProfile objects. @param daiEncodingProfiles the profiles to create @return the created profiles with their IDs filled in"
  createDaiEncodingProfiles(input: CreateDaiEncodingProfilesInput!): [DaiEncodingProfile]
    @soap(service: "DaiEncodingProfile", action: "createDaiEncodingProfiles")
}

extend type Query {
  "Gets a DaiEncodingProfilePage of DaiEncodingProfile objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` DaiEncodingProfile#id   \`status\` DaiEncodingProfile#status   \`name\` DaiEncodingProfile#name   @param filterStatement a Publisher Query Language statement to filter a list of profiles @return the profiles that match the filter"
  getDaiEncodingProfilesByStatement(input: GetDaiEncodingProfilesByStatementInput!): DaiEncodingProfilePage
    @soap(service: "DaiEncodingProfile", action: "getDaiEncodingProfilesByStatement")
}

extend type Mutation {
  "Performs actions on DaiEncodingProfile objects that match the given Statement#query. @param daiEncodingProfileAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of profiles @return the result of the action performed"
  performDaiEncodingProfileAction(input: PerformDaiEncodingProfileActionInput!): UpdateResult
    @soap(service: "DaiEncodingProfile", action: "performDaiEncodingProfileAction")
}

extend type Mutation {
  "Updates the specified DaiEncodingProfile objects. @param daiEncodingProfiles the content profiles to update @return the updated profiles @throws ApiException if there is an error updating the profiles"
  updateDaiEncodingProfiles(input: UpdateDaiEncodingProfilesInput!): [DaiEncodingProfile]
    @soap(service: "DaiEncodingProfile", action: "updateDaiEncodingProfiles")
}

`;
