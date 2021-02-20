// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Describes what should be used to fill an empty ad break during a live stream."
enum AdBreakFillTypeEnum {
  "Ad break should be filled with slate."
  SLATE
  "Ad break should be filled with underlying content."
  UNDERLYING_CONTENT
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Describes the SCTE ad break markups for a LiveStreamEvent."
enum AdBreakMarkupTypeEnum {
  "The DATERANGE (Anvato) ad break marker type. This mark up type is only applicable for HLS live streams."
  AD_BREAK_MARKUP_HLS_DATERANGE_SPLICE
  "The CUE-OUT/CUE-IN ad break marker type. This mark up type is only applicable for HLS live streams."
  AD_BREAK_MARKUP_HLS_EXT_CUE
  "The CUE (Adobe/Azure Prime Time) ad break marker type. This mark up type is only applicable for HLS live streams."
  AD_BREAK_MARKUP_HLS_PRIMETIME_SPLICE
  "The SCTE35 Binary Time Signal: Provider Ad Start/End ad break marker type. This mark up type is only applicable for HLS and DASH live streams."
  AD_BREAK_MARKUP_SCTE35_BINARY_PROVIDER_AD_START_END
  "The SCTE35 Binary Time Signal: Provider Placement Opportunity Start/End ad break marker type. This mark up type is only applicable for HLS and DASH live streams."
  AD_BREAK_MARKUP_SCTE35_BINARY_PROVIDER_PLACEMENT_OP_START_END
  "The SCTE35 Binary Splice Insert ad break marker type. This mark up type is only applicable for HLS and DASH live streams."
  AD_BREAK_MARKUP_SCTE35_BINARY_SPLICE_INSERT
  "The SCTE35 XML Splice In/Out ad break marker type. This markup type is only applicable for DASH live streams."
  AD_BREAK_MARKUP_SCTE35_XML_SPLICE_INSERT
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Indicates how the ads of the live stream should be served."
enum AdServingFormatEnum {
  "The ads are served through Google Ad Manager DAI."
  AD_MANAGER_DAI
  "The ads are served through Google Ad Manager Ad Serving."
  DIRECT
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Creates new LiveStreamEvent objects. The following fields are required:  LiveStreamEvent#name LiveStreamEvent#startDateTime LiveStreamEvent#endDateTime LiveStreamEvent#contentUrls LiveStreamEvent#adTags  @param liveStreamEvents the live stream events to create @return the created live stream events with their IDs filled in"
input CreateLiveStreamEventsInput {
  _: Boolean
  liveStreamEvents: [JSONObject]
}

"Describes how the live stream will have ads dynamically inserted into playlists."
enum DynamicAdInsertionTypeEnum {
  "Content and ads are stitched together into a unique video manifest per user."
  LINEAR
  "Provide unique ad pod segment manifests per user for the partner to stitch into the content stream."
  POD_SERVING_MANIFEST
  "The same manifest is used for all users but the ad break segment URLs are redirected to unique ad segments per user."
  POD_SERVING_REDIRECT
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Gets a LiveStreamEventPage of LiveStreamEvent objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` LiveStreamEvent#id   \`slateCreativeId\` LiveStreamEvent#slateCreativeId   \`assetKey\` LiveStreamEvent#assetKey   \`streamCreateDaiAuthenticationKeyIds\` LiveStreamEvent#streamCreateDaiAuthenticationKeyIds   \`dynamicAdInsertionType\` LiveStreamEvent#dynamicAdInsertionType   \`streamingFormat\` LiveStreamEvent#streamingFormat   \`customAssetKey\` LiveStreamEvent#customAssetKey   \`daiEncodingProfileIds\` LiveStreamEvent#daiEncodingProfileIds   \`segmentUrlAuthenticationKeyIds\` LiveStreamEvent#segmentUrlAuthenticationKeyIds   @param filterStatement a Publisher Query Language statement to filter a list of live stream events @return the live stream events that match the filter"
input GetLiveStreamEventsByStatementInput {
  _: Boolean
  filterStatement: JSONObject
}

"LiveStream settings that are specific to the HTTP live streaming (HLS) protocol."
type HlsSettings {
  "Indicates the type of the playlist associated with this live stream. The playlist type is analogous to the EXT-X-PLAYLIST-TYPE HLS tag. This field is optional and will default to PlaylistType#LIVE. This field cannot be modified after live stream creation."
  playlistType: PlaylistTypeEnum
  "The settings for the master playlist. This field is optional and if it is not set will default to a MasterPlaylistSettings with a refresh type of RefreshType#AUTOMATIC."
  masterPlaylistSettings: MasterPlaylistSettings
}

"A \`LiveStreamEvent\` encapsulates all the information necessary to enable DAI (Dynamic Ad Insertion) into a live video stream. This includes information such as the start and expected end time of the live stream, the URL of the actual content for Ad Manager to pull and insert ads into, as well as the metadata necessary to generate ad requests during the live stream."
type LiveStreamEvent {
  "The unique ID of the \`LiveStreamEvent\`. This value is read-only and is assigned by Google."
  id: BigInt!
  "The name of the \`LiveStreamEvent\`. This value is required to create a live stream event and has a maximum length of 255 characters."
  name: String!
  "The status of this \`LiveStreamEvent\`. This attribute is read-only and is assigned by Google. Live stream events are created in the LiveStreamEventStatus#PAUSED state."
  status: LiveStreamEventStatusEnum
  "The date and time this \`LiveStreamEvent\` was created. This attribute is read-only."
  creationDateTime: GAMDateTime
  "The date and time this \`LiveStreamEvent\` was last modified. This attribute is read-only."
  lastModifiedDateTime: GAMDateTime
  "The start date and time of this \`LiveStreamEvent\`. This attribute is required if the LiveStreamEvent#startDateTimeType is StartDateTimeType#USE_START_DATE_TIME and is ignored for all other values of StartDateTimeType. Modifying this attribute for an active live stream can impact traffic."
  startDateTime: GAMDateTime!
  "Specifies whether to start the LiveStreamEvent right away, in an hour, etc. This attribute is optional and defaults to StartDateTimeType#USE_START_DATE_TIME."
  startDateTimeType: StartDateTimeTypeEnum
  "The scheduled end date and time of this \`LiveStreamEvent\`. This attribute is required if \`unlimitedEndDateTime\` is false and ignored if \`unlimitedEndDateTime\` is true. Modifying this attribute for an active live stream can impact traffic."
  endDateTime: GAMDateTime!
  "Whether the LiveStreamEvent has an end time. This attribute is optional and defaults to false. If this field is true, \`endDateTime\` is ignored."
  unlimitedEndDateTime: Boolean
  "The total number of concurrent users expected to watch this live stream across all regions. This attribute is optional and default value is 0."
  totalEstimatedConcurrentUsers: BigInt
  "The list of URLs pointing to the live stream content in Content Delivery Network. This attribute is required and can be modified when the live stream is in a LiveStreamEventStatus#PAUSED state."
  contentUrls: [String]!
  "The list of Ad Manager ad tag URLs generated by the Ad Manager trafficking workflow that are associated with this live stream event. Currently, the list includes only one element: the master ad tag. This attribute is required."
  adTags: [String]!
  "This code is used in constructing a live stream event master playlist URL. This attribute is read-only and is assigned by Google. \`liveStreamEventCode\` was renamed \`assetKey\` in v201911."
  assetKey: String
  "ID corresponding to the slate for this live event. If not set, network default value will be used."
  slateCreativeId: BigInt
  "Length of the DVR window in seconds. This value is optional. If unset the default window as provided by the input encoder will be used. Modifying this value for an active live stream can impact traffic."
  dvrWindowSeconds: Int
  "Whether the live stream's requests to the IMA SDK API will be authenticated using the DAI authentication keys."
  enableDaiAuthenticationKeys: Boolean
  "The type of content that should be used to fill an empty ad break. This value is optional and defaults to AdBreakFillType#SLATE."
  adBreakFillType: AdBreakFillTypeEnum
  "The type of content that should be used to fill the time remaining in the ad break when there are not enough ads to fill the entire break. This value is optional and defaults to AdBreakFillType#SLATE. To set this field a network needs to have the 'Live stream ad break underfill type' feature enabled."
  underfillAdBreakFillType: AdBreakFillTypeEnum
  "The duration (in seconds), starting from the time the user enters the DAI stream, for which mid-roll decisioning will be skipped. This field is only applicable when an ad holiday is requested in the stream create request. This value is optional and defaults to 0."
  adHolidayDuration: BigInt
  "Whether there will be max filler duration in this live stream. If true, \`maxFillerDuration\` should be specified. This field is optional and defaults to false."
  enableMaxFillerDuration: Boolean
  "The maximum number of seconds that can be used to fill this ad pod, either with a slate or underlying content, depending on your settings. If more time needs to be filled, the ad pod will instead be dropped and the underlying content will be served."
  maxFillerDuration: BigInt
  "Whether there will be durationless ad breaks in this live stream. If true, \`defaultAdBreakDuration\` should be specified. This field is optional and defaults to false;"
  enableDurationlessAdBreaks: Boolean
  "The default ad pod duration (in seconds) that will be requested when an ad break cue-out does not specify a duration. This field is optional and defaults to 0;"
  defaultAdBreakDuration: BigInt
  "The list of DaiAuthenticationKey IDs used to authenticate stream create requests for this live stream. Modifying keys for an active live stream may break the stream for some users. Exercise caution."
  streamCreateDaiAuthenticationKeyIds: [BigInt]
  "The list of CdnConfiguration IDs that provide settings for ingesting and delivering the videos associated with this source. Modifying settings for an active live stream may break the stream for some users. Exercise caution."
  sourceContentConfigurationIds: [BigInt]
  "The settings that are specific to HTTPS live streaming (HLS) protocol. This field is optional and if it is not set will use the default HLS settings."
  hlsSettings: HlsSettings
  "Whether specific allowlisted IP addresses should be used to access this live stream. This field is optional and will default to false. To set this field a network needs to have the 'Video live allowlisted IPS enabled' feature enabled. Modifying this field for an active live stream can impact traffic."
  enableWhitelistedIps: Boolean
  "The method of dynamic ad insertion that is used to insert ads into this live stream. This attribute is optional and defaults to DynamicAdInsertionType.LINEAR. This field cannot be modified after live stream creation."
  dynamicAdInsertionType: DynamicAdInsertionTypeEnum
  "Whether the served playlists can include relative URLs. This field is optional and defaults to false. To set this field a network needs to have the 'Video live stream relative playlist URLs' feature enabled. This field can be modified when the live stream is in a LiveStreamEventStatus#PAUSED state."
  enableRelativePlaylistDelivery: Boolean
  "The streaming format of the LiveStreamEvent media. This field cannot be modified after live stream creation."
  streamingFormat: StreamingFormatEnum
  "Indicates whether the option to prefetch ad requests is enabled."
  prefetchEnabled: Boolean
  "The information needed to prefetch ad requests for an ad break."
  prefetchSettings: PrefetchSettings
  "Whether live stream placement opportunities without #EXT-CUE-IN markers should be force closed. This field is optional and defaults to false. To set this field a network needs to have the 'Video live stream forced cue in' feature enabled."
  enableForceCloseAdBreaks: Boolean
  "Whether segments shorter than 1 second at the end of an ad pod should be dropped. This field is optional and defaults to false. To set this field a network needs to have the 'Video live stream short segment dropping' feature enabled."
  enableShortSegmentDropping: Boolean
  "An additional code that can be used in constructing live stream event URLs. This field is immutable after creation and can only be set for pod serving live streams. The custom asset key may be at most 64 characters and can contain alphanumeric characters and symbols other than the following: ', ', =, !, +, #, *, ~, ;, ^, (, ), <, >, [, ], the white space character."
  customAssetKey: String
  "The list of \`DaiEncodingProfile\` IDs that will be used for this live stream event. This field only applies to pod serving events. New profile IDs can be added to running live streams. Profile IDs cannot be removed from running live streams. Modifying settings for an active live stream may break the stream for some users. Exercise caution."
  daiEncodingProfileIds: [BigInt]
  "The list of DaiAuthenticationKey IDs used to authenticate ad segment url requests for this live stream. This field only applies to pod serving events. Modifying settings for an active live stream may break the stream for some users. Exercise caution."
  segmentUrlAuthenticationKeyIds: [BigInt]
  "The formats that will be recognized as ad break start/end markers. This field is ignored if \`adBreakMarkupTypesEnabled\` is false"
  adBreakMarkups: [AdBreakMarkupTypeEnum]
  "Whether this LiveStreamEvent is specifying a subset of supported \`adBreakMarkups\`. If this field is false, all supported formats will be treated as ad break start/end markers."
  adBreakMarkupTypesEnabled: Boolean
  "Whether ads on this LiveStreamEvent are served by Google Ad Manager DAI or Google Ad Serving."
  adServingFormat: AdServingFormatEnum
}

"Captures a page of LiveStreamEvent objects."
type LiveStreamEventPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of live stream events contained within this page."
  results: [LiveStreamEvent]
}

"Describes the status of a LiveStreamEvent object."
enum LiveStreamEventStatusEnum {
  "Indicates the LiveStreamEvent has been created and is eligible for streaming."
  ACTIVE
  "Indicates that the stream is still being served, but ad insertion should be paused temporarily."
  ADS_PAUSED
  "Indicates the LiveStreamEvent has been archived."
  ARCHIVED
  "Indicates the LiveStreamEvent has been paused. This can be made #ACTIVE at later time."
  PAUSED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Settings for the HLS (HTTP Live Streaming) master playlist."
type MasterPlaylistSettings {
  "Indicates how the master playlist gets refreshed. This field is optional and defaults to RefreshType#AUTOMATIC. This field can only be modified when the live stream is in a LiveStreamEventStatus#PAUSED state."
  refreshType: RefreshTypeEnum
}

"Performs actions on LiveStreamEvent objects that match the given Statement#query. @param liveStreamEventAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of live stream events @return the result of the action performed"
input PerformLiveStreamEventActionInput {
  _: Boolean
  liveStreamEventAction: JSONObject
  filterStatement: JSONObject
}

"Describes the type of the playlist associated with this live stream. This is analagous to the EXT-X-PLAYLIST-TYPE HLS tag. Use PlaylistType.EVENT for streams with the value '#EXT-X-PLAYLIST-TYPE:EVENT' and use PlaylistType.LIVE for streams without the tag."
enum PlaylistTypeEnum {
  "The playlist is an event, which means that media segments can only be added to the end of the playlist. This allows viewers to scrub back to the beginning of the playlist."
  EVENT
  "The playlist is a live stream and there are no restrictions on whether media segments can be removed from the beginning of the playlist."
  LIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"The information needed to prefetch ad requests for an ad break."
type PrefetchSettings {
  "The duration of the part of the break to be prefetched."
  initialAdRequestDurationSeconds: Int
}

"Enumerates the different ways an HLS master playlist on a live stream will can be refreshed."
enum RefreshTypeEnum {
  "The master playlist will automatically be refreshed."
  AUTOMATIC
  "The master playlist will only be refreshed when requested."
  MANUAL
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"The LiveStreamEvent streaming format."
enum StreamingFormatEnum {
  "The format of the live stream media is MPEG-DASH."
  DASH
  "The format of the live stream media is HTTP Live Streaming."
  HLS
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Updates the specified LiveStreamEvent objects. @param liveStreamEvents the live stream events to update @return the updated live stream events @throws ApiException if there is an error updating the live stream events"
input UpdateLiveStreamEventsInput {
  _: Boolean
  liveStreamEvents: [JSONObject]
}

extend type Mutation {
  "Creates new LiveStreamEvent objects. The following fields are required:  LiveStreamEvent#name LiveStreamEvent#startDateTime LiveStreamEvent#endDateTime LiveStreamEvent#contentUrls LiveStreamEvent#adTags  @param liveStreamEvents the live stream events to create @return the created live stream events with their IDs filled in"
  createLiveStreamEvents(input: CreateLiveStreamEventsInput!): [LiveStreamEvent]
    @soap(service: "LiveStreamEvent", action: "createLiveStreamEvents")
}

extend type Query {
  "Gets a LiveStreamEventPage of LiveStreamEvent objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` LiveStreamEvent#id   \`slateCreativeId\` LiveStreamEvent#slateCreativeId   \`assetKey\` LiveStreamEvent#assetKey   \`streamCreateDaiAuthenticationKeyIds\` LiveStreamEvent#streamCreateDaiAuthenticationKeyIds   \`dynamicAdInsertionType\` LiveStreamEvent#dynamicAdInsertionType   \`streamingFormat\` LiveStreamEvent#streamingFormat   \`customAssetKey\` LiveStreamEvent#customAssetKey   \`daiEncodingProfileIds\` LiveStreamEvent#daiEncodingProfileIds   \`segmentUrlAuthenticationKeyIds\` LiveStreamEvent#segmentUrlAuthenticationKeyIds   @param filterStatement a Publisher Query Language statement to filter a list of live stream events @return the live stream events that match the filter"
  getLiveStreamEventsByStatement(input: GetLiveStreamEventsByStatementInput!): LiveStreamEventPage
    @soap(service: "LiveStreamEvent", action: "getLiveStreamEventsByStatement")
}

extend type Mutation {
  "Performs actions on LiveStreamEvent objects that match the given Statement#query. @param liveStreamEventAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of live stream events @return the result of the action performed"
  performLiveStreamEventAction(input: PerformLiveStreamEventActionInput!): UpdateResult
    @soap(service: "LiveStreamEvent", action: "performLiveStreamEventAction")
}

extend type Mutation {
  "Updates the specified LiveStreamEvent objects. @param liveStreamEvents the live stream events to update @return the updated live stream events @throws ApiException if there is an error updating the live stream events"
  updateLiveStreamEvents(input: UpdateLiveStreamEventsInput!): [LiveStreamEvent]
    @soap(service: "LiveStreamEvent", action: "updateLiveStreamEvents")
}

`;
