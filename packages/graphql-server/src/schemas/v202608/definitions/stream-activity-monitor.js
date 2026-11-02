// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Contains debugging information for a single ad break in a stream."
type AdBreak {
  "The root ad responses to the \`adRequest\`. If this is a staged request, there may be two root ad responses - one for the prefetch stage and another if there is a follow up request at the ad break. A VAST redirect response triggers another ad request (that is not recorded), and thus a response for that request, which is why there can be multiple ad responses nested within an ad response. For more information, see https://support.google.com/admanager/answer/7009058"
  rootAdResponses: [AdResponse]
  "Contains information about the creatives that were served in the ad break, such as the ad system that served them and whether they were transcoded by Truman already."
  adDecisionCreatives: [AdDecisionCreative]
  "1-based index of this pod within the whole stream."
  podNum: Int
  "Pod number of the ad break, for 'ad break specific' records like AdRequest, AdResponse, AdDecision, etc. This field is only used for Linear streams."
  linearAbsolutePodNum: Int
  "The duration in milliseconds of the entire ad break, from when content stops playing until it resumes."
  adBreakDurationMillis: BigInt
  "The sum of the durations in milliseconds of the ads within this ad break. If the ad break is 60 seconds and two 25 second ads are returned in an ad response the filled time would be 50000 milliseconds."
  filledDurationMillis: BigInt
  "The amount of ad time in milliseconds a user actually sees. If the ad break is 60 seconds and two 25 second ads are returned but one of these ads wasn't transcoded so a slate was used, the served time would be 25 seconds."
  servedDurationMillis: BigInt
  "The date and time this ad break started (the time the ad request was made)."
  startDateTime: DateTime
  "The offset of the ad break within the content in milliseconds. Used for VOD sessions only."
  startTimeOffsetMillis: BigInt
  "Any error that occurred while attempting to stitch the ad break into the stream."
  samError: SamError
  "For break type MIDROLL, the 1-based index of the mid-roll position. Only applies to VOD VMAP ad breaks."
  midrollIndex: Int
  "Whether ads were decisioned for this ad break."
  decisionedAds: Boolean
  "The list of tracking events associated with this ad break."
  trackingEvents: [TrackingEvent]
}

"Contains debugging information about a creative that was served during an ad break."
type AdDecisionCreative {
  "The position of the ad within the ad break."
  sequence: Int
  "The duration of the slate if this creative is a slate, 0 if this is an ad."
  slateDurationMills: BigInt
  "The duration of the creative, 0 if this is a slate."
  creativeDurationMills: BigInt
  "Information about the transcoded creative."
  creativeTranscode: CreativeTranscode
  "Google-owned user-facing universal identifier for the creative. Will only be populated if the creative was successfully acquired."
  googleVideoId: String
  "Information about any error associated with this creative, or null if there was no error."
  samError: SamError
  "Whether this creative is transcoded."
  isTranscoded: Boolean
  "Whether this creative was dropped from the AdDecision during serving."
  isDropped: Boolean
}

"Contains debugging information from an ad response, which is the response to an ad request that contains the creatives that should be served into the ad break. The response can either be a VAST Inline, which contains an actual creative from an ad server, a VAST Redirect, which contains a redirect URL that should be pinged via another VAST ad request, or a VMAP response."
type AdResponse {
  "The ad tag URL."
  requestUrl: String
  "Whether the request associated with this ad response is VMAP."
  isVmapRequest: Boolean
  "The contents of the response body."
  responseBody: String
  "The subsequent ad responses that were triggered due to a VAST redirect in this ad response."
  redirectResponses: [AdResponse]
  "Information about any generic error that occurred."
  samError: SamError
  "Information about any errors that occurred while parsing the ad response."
  adErrors: [SamError]
}

"Contains information needed to identify a Truman creative transcode."
type CreativeTranscode {
  "The ad system that the creative is associated with."
  adServer: String
  "The IdType that describes the type of \`creativeId\`."
  creativeIdType: CreativeTranscodeIdTypeEnum
  "An ID (either an ad ID, a creative ID, or a concatenation of the two) that identifies a creative."
  creativeId: String
}

"The type of the \`creativeId\`."
enum CreativeTranscodeIdTypeEnum {
  "An ad server-defined identifier string for the ad."
  AD_ID
  "ID value is a projection of the URL of the highest bitrate mediafile found in the response."
  CANONICALIZED_MEDIA_URI
  "Identifies the ad with which the creative is served."
  CREATIVE_ADID
  "ID value is either the 'adId' attribute in the VAST/Ad/Inline/Creative element, the 'id' attribute in the VAST/Ad/Inline/Creative, or the 'id' attribute in the VAST/Ad element."
  CREATIVE_ADID_WITH_FALLBACK
  "An ad server-defined identifier for the creative."
  CREATIVE_ID
  "ID value is the Google Video Registry ID"
  GV_REGISTRY_ID
  "The path of the URL of the highest bitrate mediafile found in the response."
  MEDIA_URI
  "ID value is the path of the URL of the highest bitrate mediafile found in the response."
  MEDIA_URI_HASH
  "The path of the URL of the highest bitrate mediafile found in the response."
  MEDIA_URI_PATH
  "Universal Ad ID creative identifier defined in the VAST 4.0 spec."
  UNIVERSAL_AD_ID
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "The ID type is unknown."
  UNKNOWN_ID_TYPE
}

"Returns the logging information for a DAI session. A DAI session can be identified by it's session id or debug key. The session ID must be registered via the \`registerSessionsForMonitoring\` method before it can be accessed. There may be some delay before the session is available. The number of sessions requested is limited to 25. The following fields are supported for filtering:    Entity property PQL filter    Session id   'sessionId'     Debug key   'debugKey'    "
input GetSamSessionsByStatementInput {
  statement: StatementInput
}

"Contains linear specific debugging information about the request that happens once per session from the video player to retrieve the streaming URL chunks that are constantly updated as the stream progresses."
type LinearStreamCreateRequest implements StreamCreateRequestInterface {
  "The ad request URL."
  url: String
  "The user agent (i.e. device) the session is on."
  userAgent: String
  "Indicates how ad tracking URLs are pinged."
  reportingType: ReportingTypeEnum
  "The LiveStreamEvent event code."
  liveStreamEventAssetKey: String
  "The LiveStreamEvent event name."
  eventName: String
  "The LiveStreamEvent event id."
  liveStreamEventId: BigInt
  "The date and time the event started."
  eventStartDateTime: DateTime
  "The date and time the event ended."
  eventEndDateTime: DateTime
  "Whether the stream has prefetch enabled."
  prefetchEnabled: Boolean
  "Whether this stream has pod trimming enabled."
  podTrimmingEnabled: Boolean
}

"Registers the specified list of \`sessionIds\` for monitoring. Once the session IDs have been registered, all logged information about the sessions will be persisted and can be viewed via the Ad Manager UI. A session ID is a unique identifier of a single user watching a live stream event."
input RegisterSessionsForMonitoringInput {
  sessionIds: [String]
}

""
enum ReportingTypeEnum {
  AD_MEDIA
  CLIENT
  DISABLED
  SERVER
  UNKNOWN
}

"Contains information about an error that occurred during a SAM session."
type SamError {
  "The type of error that occurred."
  samErrorType: SamErrorTypeEnum
  "Any details about the error that ocurred."
  errorDetails: String
}

""
enum SamErrorTypeEnum {
  AD_BREAK_TYPE_NOT_SUPPORTED
  AD_BREAK_WITHOUT_AD_POD
  AD_POD_DROPPED_BUMPER_ERROR
  AD_POD_DROPPED_EMPTY_ADS
  AD_POD_DROPPED_INCOMPATIBLE_TIMEOFFSET
  AD_POD_DROPPED_TO_MANY_AD_PODS
  AD_POD_DROPPED_UNSUPPORTED_TYPE
  AD_REQUEST_ERROR
  AD_REQUEST_TIMEOUT
  AD_TAG_PARSE_ERROR
  CANNOT_FIND_MEDIA_FILE_PATH
  CANNOT_FIND_UNIQUE_TRANSCODE_ID
  CUSTOM_AD_SOURCE_IN_VMAP
  DUPLICATE_AD_TAG
  EXCEEDS_MAX_FILLER
  FAILED_PING
  FOLLOW_REDIRECTS_IS_FALSE
  INTERNAL_ERROR
  INVALID_AD_SEQUENCE_NUMBER
  INVALID_VMAP_RESPONSE
  MAX_WRAPPER_DEPTH_REACHED
  MISSING_INLINE_ELEMENTS
  NEITHER_AD_SOURCE_NOR_TRACKING
  NO_AD_BREAKS_IN_VMAP
  NO_VALID_MEDIAFILES_FOUND
  SKIPPABLE_AD_NOT_SUPPORTED
  TRANSCODING_IN_PROGRESS
  UNKNOWN
  UNKNOWN_ERROR
  UNSUPPORTED_AD_SYSTEM
  UNSUPPORTED_VAST_VERSION
  VAST_PARSE_ERROR
  VMAP_PARSE_ERROR
}

"Contains the debugging information that was logged for a Stream Activity Monitor (SAM) session. This object will grow and get updated over the course of the stream."
type SamSession {
  "The UUID that uniquely identifies this session."
  sessionId: String
  "Whether this is a VOD session."
  isVodSession: Boolean
  "The initial request from the video player to retrieve the streaming URL chunks that are updated as the stream progresses."
  streamCreateRequest: StreamCreateRequestInterface
  "The list of debugging information that occurred at each ad break in the stream."
  adBreaks: [AdBreak]
  "The date and time the session started."
  startDateTime: DateTime
  "The duration of the session in milliseconds. For live this is calculated by subtracting the timestamp on the oldest log from the timestamp on the newest log. For VOD this is the total duration of the content plus the ads that have been inserted."
  sessionDurationMillis: BigInt
  "The duration of the content in milliseconds. This is for VOD debugging only."
  contentDurationMillis: BigInt
}

"Contains debugging information about the request that usually happens once per session from the video player to retrieve the streaming URL chunks that are constantly updated as the stream progresses."
interface StreamCreateRequestInterface {
  "The ad request URL."
  url: String
  "The user agent (i.e. device) the session is on."
  userAgent: String
  "Indicates how ad tracking URLs are pinged."
  reportingType: ReportingTypeEnum
}

"A \`TrackingEvent\` contains information about an event that triggered a URL to get pinged. For example, a VAST response could contain a URL to ping if an ad is clicked on. For VAST redirects there may be multiple tracking events for a single event because every ad server involved will get pinged."
type TrackingEvent {
  pings: [TrackingEventPing]
}

"Contains a URI that was pinged and indicates if there was an error during the ping."
type TrackingEventPing {
  uri: String
  hasError: Boolean
}

"Contains debugging information about the request that usually happens once per session from the video player to retrieve the streaming URL chunks that are constantly updated as the stream progresses."
type VodStreamCreateRequest implements StreamCreateRequestInterface {
  "The ad request URL."
  url: String
  "The user agent (i.e. device) the session is on."
  userAgent: String
  "Indicates how ad tracking URLs are pinged."
  reportingType: ReportingTypeEnum
  "The content source ID associated with the session."
  contentSourceId: BigInt
  "The video ID associated with the session."
  videoId: String
  "The Ad Manager content ID associated with the session."
  contentId: BigInt
  "The content name associated with the session."
  contentName: String
  "The customer provided session title, only set for pod serving sessions."
  podServingSessionTitle: String
  "The cue points of the content associated with the session."
  cuePoints: [BigInt]
}

extend type Query {
  "Returns the logging information for a DAI session. A DAI session can be identified by it's session id or debug key. The session ID must be registered via the \`registerSessionsForMonitoring\` method before it can be accessed. There may be some delay before the session is available. The number of sessions requested is limited to 25. The following fields are supported for filtering:    Entity property PQL filter    Session id   'sessionId'     Debug key   'debugKey'    "
  getSamSessionsByStatement(input: GetSamSessionsByStatementInput!): [SamSession]
    @soap(service: "StreamActivityMonitor", action: "getSamSessionsByStatement")
}

extend type Query {
  "Registers the specified list of \`sessionIds\` for monitoring. Once the session IDs have been registered, all logged information about the sessions will be persisted and can be viewed via the Ad Manager UI. A session ID is a unique identifier of a single user watching a live stream event."
  registerSessionsForMonitoring(input: RegisterSessionsForMonitoringInput!): [String]
    @soap(service: "StreamActivityMonitor", action: "registerSessionsForMonitoring")
}

`;
