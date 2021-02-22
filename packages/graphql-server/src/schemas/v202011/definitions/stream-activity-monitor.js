// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

""
type AdBreak {
  rootAdResponses: [AdResponse]
  adDecisionCreatives: [AdDecisionCreative]
  podNum: Int
  linearAbsolutePodNum: Int
  adBreakDurationMillis: BigInt
  filledDurationMillis: BigInt
  servedDurationMillis: BigInt
  startDateTime: DateTime
  startTimeOffsetMillis: BigInt
  samError: SamError
  midrollIndex: Int
  decisionedAds: Boolean
  trackingEvents: [TrackingEvent]
}

""
type AdDecisionCreative {
  sequence: Int
  slateDurationMills: BigInt
  creativeDurationMills: BigInt
  creativeTranscode: CreativeTranscode
  samError: SamError
  isTranscoded: Boolean
}

""
type AdResponse {
  requestUrl: String
  isVmapRequest: Boolean
  responseBody: String
  redirectResponses: [AdResponse]
  samError: SamError
  adErrors: [SamError]
}

""
type CreativeTranscode {
  adServer: String
  creativeIdType: CreativeTranscodeIdTypeEnum
  creativeId: String
}

""
enum CreativeTranscodeIdTypeEnum {
  AD_ID
  CANONICALIZED_MEDIA_URI
  CREATIVE_ADID
  CREATIVE_ADID_WITH_FALLBACK
  CREATIVE_ID
  GV_REGISTRY_ID
  MEDIA_URI
  MEDIA_URI_HASH
  MEDIA_URI_PATH
  UNIVERSAL_AD_ID
  UNKNOWN
  UNKNOWN_ID_TYPE
}

"Returns the logging information for a DAI session. A DAI session can be identified by it's session id or debug key. The session ID must be registered via the \`registerSessionsForMonitoring\` method before it can be accessed. There may be some delay before the session is available. The number of sessions requested is limited to 25. The following fields are supported for filtering:    Entity property PQL filter    Session id   'sessionId'     Debug key   'debugKey'     @param statement PQL specifying the sessionId or debugKey to fetch logging information for. Only '=' and 'IN' expressions are supported. @throws ApiException if there is an error while fetching the logging information or if there is no SAM session is associated with any of the \`sessionIds\`."
input GetSamSessionsByStatementInput {
  statement: StatementInput
}

""
type LinearStreamCreateRequest implements StreamCreateRequestInterface {
  url: String
  userAgent: String
  liveStreamEventAssetKey: String
  eventName: String
  liveStreamEventId: BigInt
  eventStartDateTime: DateTime
  eventEndDateTime: DateTime
}

"Registers the specified list of \`sessionIds\` for monitoring. Once the session IDs have been registered, all logged information about the sessions will be persisted and can be viewed via the Ad Manager UI. A session ID is a unique identifier of a single user watching a live stream event. @param sessionIds a list of session IDs to register for monitoring @return the list of session IDs that were registered for monitoring @throws ApiException if there is an error registering any of the session IDs"
input RegisterSessionsForMonitoringInput {
  sessionIds: [String]
}

""
type SamError {
  samErrorType: SamErrorTypeEnum
  errorDetails: String
}

""
enum SamErrorTypeEnum {
  AD_BREAK_TYPE_NOT_SUPPORTED
  AD_BREAK_WITHOUT_AD_POD
  AD_POD_DROPPED_BUMPER_ERROR
  AD_POD_DROPPED_EMPTY_ADS
  AD_POD_DROPPED_TO_MANY_AD_PODS
  AD_POD_DROPPED_UNSUPPORTED_TYPE
  AD_REQUEST_ERROR
  AD_REQUEST_TIMEOUT
  AD_TAG_PARSE_ERROR
  CANNOT_FIND_MEDIA_FILE_PATH
  CANNOT_FIND_UNIQUE_TRANSCODE_ID
  CUSTOM_AD_SOURCE_IN_VMAP
  EXCEEDS_MAX_FILLER
  FAILED_PING
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

""
type SamSession {
  sessionId: String
  isVodSession: Boolean
  streamCreateRequest: StreamCreateRequestInterface
  adBreaks: [AdBreak]
  startDateTime: DateTime
  sessionDurationMillis: BigInt
  contentDurationMillis: BigInt
}

""
interface StreamCreateRequestInterface {
  url: String
  userAgent: String
}

""
type TrackingEvent {
  pings: [TrackingEventPing]
}

""
type TrackingEventPing {
  uri: String
  hasError: Boolean
}

""
type VodStreamCreateRequest implements StreamCreateRequestInterface {
  url: String
  userAgent: String
  contentSourceId: BigInt
  videoId: String
  contentId: BigInt
  contentName: String
  cuePoints: [BigInt]
}

extend type Query {
  "Returns the logging information for a DAI session. A DAI session can be identified by it's session id or debug key. The session ID must be registered via the \`registerSessionsForMonitoring\` method before it can be accessed. There may be some delay before the session is available. The number of sessions requested is limited to 25. The following fields are supported for filtering:    Entity property PQL filter    Session id   'sessionId'     Debug key   'debugKey'     @param statement PQL specifying the sessionId or debugKey to fetch logging information for. Only '=' and 'IN' expressions are supported. @throws ApiException if there is an error while fetching the logging information or if there is no SAM session is associated with any of the \`sessionIds\`."
  getSamSessionsByStatement(input: GetSamSessionsByStatementInput!): [SamSession]
    @soap(service: "StreamActivityMonitor", action: "getSamSessionsByStatement")
}

extend type Query {
  "Registers the specified list of \`sessionIds\` for monitoring. Once the session IDs have been registered, all logged information about the sessions will be persisted and can be viewed via the Ad Manager UI. A session ID is a unique identifier of a single user watching a live stream event. @param sessionIds a list of session IDs to register for monitoring @return the list of session IDs that were registered for monitoring @throws ApiException if there is an error registering any of the session IDs"
  registerSessionsForMonitoring(input: RegisterSessionsForMonitoringInput!): [String]
    @soap(service: "StreamActivityMonitor", action: "registerSessionsForMonitoring")
}

`;
