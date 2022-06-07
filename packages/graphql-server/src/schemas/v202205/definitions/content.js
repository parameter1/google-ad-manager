// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Contains information about Content from the CMS it was ingested from."
type CmsContent {
  "The ID of the Content Source associated with the CMS in Ad Manager. This attribute is read-only."
  id: BigInt!
  "The display name of the CMS this content is in. This attribute is read-only."
  displayName: String
  "The ID of the Content in the CMS. This ID will be a 3rd party ID, usually the ID of the content in a CMS (Content Management System). This attribute is read-only."
  cmsContentId: String
}

"A \`Content\` represents video metadata from a publisher's Content Management System (CMS) that has been synced to Ad Manager.  Video line items can be targeted to \`Content\` to indicate what ads should match when the \`Content\` is being played."
type Content {
  "Uniquely identifies the \`Content\`. This attribute is read-only and is assigned by Google when the content is created."
  id: BigInt!
  "The name of the \`Content\`. This attribute is read-only."
  name: String
  "The status of this \`Content\`. This attribute is read-only."
  status: ContentStatusEnum
  "Whether the content status was defined by the user, or by the source CMS from which the content was ingested. This attribute is read-only."
  statusDefinedBy: ContentStatusDefinedByEnum
  "The current DAI ingest status of the HLS media for the \`content\`. This attribute is read-only and is null if the content is not eligible for dynamic ad insertion or if the content does not have HLS media."
  hlsIngestStatus: DaiIngestStatusEnum
  "The list of any errors that occurred during the most recent DAI ingestion process of the HLS media. This attribute is read-only and will be null if the #hlsIngestStatus is DaiIngestStatus#STATUS_SUCCESS or if the content is not eligible for dynamic ad insertion or if the content does not have HLS media."
  hlsIngestErrors: [DaiIngestError]
  "The date and time at which this content's HLS media was last ingested for DAI. This attribute is read-only and will be null if the content is not eligible for dynamic ad insertion or if the content does not have HLS media."
  lastHlsIngestDateTime: DateTime
  "The current DAI ingest status of the DASH media for the \`content\`. This attribute is read-only and is null if the content is not eligible for dynamic ad insertion or if the content does not have DASH media."
  dashIngestStatus: DaiIngestStatusEnum
  "The list of any errors that occurred during the most recent DAI ingestion process of the DASH media. This attribute is read-only and will be null if the #hlsIngestStatus is DaiIngestStatus#STATUS_SUCCESS or if the content is not eligible for dynamic ad insertion or if the content does not have DASH media."
  dashIngestErrors: [DaiIngestError]
  "The date and time at which this content's DASH media was last ingested for DAI. This attribute is read-only and will be null if the content is not eligible for dynamic ad insertion or if the content does not have DASH media."
  lastDashIngestDateTime: DateTime
  "The date and time at which this content was published. This attribute is read-only."
  importDateTime: DateTime
  "The date and time at which this content was last modified. The last modified date time will always be updated when a ContentBundle association is changed, but will not always be updated when a CmsMetadataValue value is changed. This attribute is read-only."
  lastModifiedDateTime: DateTime
  "Information about the content from the CMS it was ingested from. This attribute is read-only."
  cmsSources: [CmsContent]
  "IDs of the ContentBundle of which this content is a member. This attribute is read-only."
  contentBundleIds: [BigInt]
  "A collection of CmsMetadataValue IDs that are associated with this content. This attribute is read-only."
  cmsMetadataValueIds: [BigInt]
  "The duration of the content in milliseconds. This attribute is read-only."
  duration: BigInt
}

"Captures a page of \`Content\` objects."
type ContentPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of content contained within this page."
  results: [Content]
}

"Describes who defined the effective status of the \`Content\`."
enum ContentStatusDefinedByEnum {
  "Indicates that the status of the \`Content\` is defined by the CMS."
  CMS
  "Indicates that the status of the \`Content\` is defined by the user."
  USER
}

"Describes the status of a Content object."
enum ContentStatusEnum {
  "Indicates the Content has been created and is eligible to have ads served against it."
  ACTIVE
  "Indicates the Content has been archived; user-visible."
  ARCHIVED
  "Indicates the Content has been deactivated and cannot have ads served against it."
  INACTIVE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Represents an error associated with a DAI content's status."
type DaiIngestError {
  "The error associated with the content."
  reason: DaiIngestErrorReasonEnum
  "The field, if any, that triggered the error."
  trigger: String
}

"Describes what caused the DAI content to fail during the ingestion process."
enum DaiIngestErrorReasonEnum {
  "Error parsing an AAC file while splitting the content. The trigger for this error is the variant URL and the cue-point separated by a semi-colon, e.g. 'www.variant2.com;5000'."
  AAC_PARSE_ERROR
  "Error splitting an AAC segment. The trigger for this error is the variant URL and the cue-point separated by a semi-colon, e.g. 'www.variant2.com;5000'."
  AAC_SPLIT_ERROR
  "Error parsing an AC-3 file while splitting the content. The trigger for this error is the variant URL and the cue-point separated by a semi-colon, e.g. 'www.variant2.com;5000'."
  AC3_PARSE_ERROR
  "Error splitting an AC-3 segment. The trigger for this error is the variant URL and the cue-point separated by a semi-colon, e.g. 'www.variant2.com;5000'."
  AC3_SPLIT_ERROR
  "Error parsing ADTS while splitting the content. The trigger for this error is the variant URL and the cue-point separated by a semi-colon, e.g. 'www.variant2.com;5000'."
  ADTS_PARSE_ERROR
  "The ad break tags in the preconditioned content are not in the same locations across all variant playlists."
  AD_BREAK_TAGS_INCONSISTENT_ACROSS_VARIANTS
  "There are multiple subtitles files at the closed caption URI, and none of them match the language defined in the feed. The trigger for this error is language in the feed."
  CANNOT_DETERMINE_CORRECT_SUBTITLES_FOR_LANGUAGE
  "A chapter time for the content is outside of the range of the content's duration. The trigger for this error is the chapter time (a parsable long representing the time in ms) that is out of bounds."
  CHAPTER_TIME_OUT_OF_BOUNDS
  "Closed captions for a content should be unique by 'language + name'."
  CLOSED_CAPTIONS_WITH_DUPLICATE_KEYS
  "The common subtitle characteristics values listed in the HLS spec are: 1)'public.accessibility.transcribes-spoken-dialog', 2)'public.accessibility.describes-music-and-sound', 3)'public.easy-to-read';"
  CLOSED_CAPTION_CHARACTERISTICS_VALUE_UNEXPECTED
  "The subtitle language code should not contain '$$$$$'."
  CLOSED_CAPTION_LANGUAGE_VALUE_INVALID
  "The subtitle name should not contain '$$$$$'."
  CLOSED_CAPTION_NAME_VALUE_INVALID
  "The content has chapter times but the content's source has no CDN settings for midrolls. There is no trigger for this error."
  CONTENT_HAS_CHAPTER_TIMES_BUT_NO_MIDROLL_SETTINGS
  "The content has midrolls but there was no split content config on the CDN configuration for that content so the content was not conditioned. There is no trigger for this error."
  CONTENT_HAS_MIDROLLS_BUT_NO_SPLIT_CONTENT_CONFIG
  "The content has midrolls but the source the content was ingested from has mid-rolls disabled, so the content was not conditioned. There is no trigger for this error."
  CONTENT_HAS_MIDROLLS_BUT_SOURCE_HAS_MIDROLLS_DISABLED
  "There was an error while trying to fetch the HLS from the specified ingest URL. The trigger for this error is the ingest URL specified in the publisher's feed."
  COULD_NOT_FETCH_HLS
  "Error fetching the media files from the URLs specified in the master HLS playlist. The trigger for this error is a media playlist URL within the publisher's HLS playlist that could not be fetched."
  COULD_NOT_FETCH_MEDIA
  "There was an error while trying to fetch the subtitles from the specified closed caption url. The trigger for this error is the closed caption URL specified in the publisher's feed."
  COULD_NOT_FETCH_SUBTITLES
  "Uploading split media segments failed due to an authentication error."
  COULD_NOT_UPLOAD_SPLIT_MEDIA_AUTHENTICATION_FAILED
  "Uploading spit media segments failed due to a connection error."
  COULD_NOT_UPLOAD_SPLIT_MEDIA_CONNECTION_FAILED
  "Uploading split media segments failed due to a write error."
  COULD_NOT_UPLOAD_SPLIT_MEDIA_WRITE_FAILED
  "Error caused by the number of PTS being a different value than the number of cue points + 1."
  CUE_POINT_COUNT_DOES_NOT_MATCH_PTS_COUNT
  "Error parsing an E-AC-3 file while splitting the content. The trigger for this error is the variant URL and the cue-point separated by a semi-colon, e.g. 'www.variant2.com;5000'."
  EAC3_PARSE_ERROR
  "Error splitting an E-AC-3 segment. The trigger for this error is the variant URL and the cue-point separated by a semi-colon, e.g. 'www.variant2.com;5000'."
  EAC3_SPLIT_ERROR
  "An internal error occurred while conditioning the content. There is no trigger for this error."
  INTERNAL_ERROR
  "The closed caption URL provided in the publisher's content source feed is invalid. The trigger for this error is the closed caption URL specified in the publisher's feed."
  INVALID_CLOSED_CAPTION_URL
  "Error caused by an invalid encryption key. The trigger for this error is a media playlist URL within the publisher's HLS playlist that has the invalid encryption key."
  INVALID_ENCRYPTION_KEY
  "The ingest URL provided in the publisher's content source feed is invalid. The trigger for this error is the ingest URL specified in the publisher's feed."
  INVALID_INGEST_URL
  "The media from the publisher's CDN is malformed and cannot be conditioned. The trigger for this error is a media playlist URL within the publisher's HLS playlist that is malformed."
  MALFORMED_MEDIA_BYTES
  "There is bad/missing/malformed data in a media playlist. The trigger for this error is the URL that points to the malformed media playlist."
  MALFORMED_MEDIA_PLAYLIST
  "There is bad/missing/malformed data in a subtitles file. The trigger for this error is the URL that points to the malformed subtitles."
  MALFORMED_SUBTITLES
  "There is no closed caption URL for a content in the publisher's content source feed. There is no trigger for this error."
  MISSING_CLOSED_CAPTION_URL
  "One of the subtitles from the closed caption URL is missing a language. The trigger for this error is the closed caption URL that does not have a language associated with it."
  MISSING_SUBTITLE_LANGUAGE
  "Multiple ways of denoting ad breaks were detected in a media playlist (e.g. placement opportunity tags, cue markers, etc.)"
  MIXED_AD_BREAK_TAGS
  "Encountered multiple elementary streams of the same media type (audio, video) within a transport stream. The trigger for this error is the variant URL and the cue-point separated by a semi-colon, e.g. 'www.variant2.com;5000'."
  MULTIPLE_ELEMENTARY_STREAMS_OF_SAME_MEDIA_TYPE_IN_TS
  "No CDN configuration found for the content. The trigger for this error is the content's master playlist URI."
  NO_CDN_CONFIGURATION_FOUND
  "Error splitting because there were no i-frames near the target split point. The trigger for this error is the variant URL and the cue-point separated by a semi-colon, e.g. 'www.variant2.com;5000'."
  NO_IFRAMES_NEAR_CUE_POINT
  "The playlist does not have a starting PTS value. The trigger for this error is the master playlist URI."
  PLAYIST_HAS_NO_STARTING_PTS_VALUE
  "Variants in a playlist do not have the same number of discontinuities. The trigger for this error is the master playlist URI."
  PLAYLISTS_HAVE_DIFFERENT_NUMBER_OF_DISCONTINUITIES
  "The PTS at a discontinuity varies too much between the different variants. The trigger for this error is the master playlist URI."
  PLAYLIST_DISCONTINUITY_PTS_VALUES_DIFFER_TOO_MUCH
  "A playlist item has a URL that does not begin with the ingest common path provided in the DAI settings. The trigger for this error is the playlist item URL."
  PLAYLIST_ITEM_URL_DOES_NOT_MATCH_INGEST_COMMON_PATH
  "A media segment has no PTS. The trigger for this error is the segment data URI."
  SEGMENT_HAS_NO_PTS
  "The language in the subtitles file does not match the language specified in the feed. The trigger for this error is the feed language and the parsed language separated by a semi-colon, e.g. 'en;sp'."
  SUBTITLE_LANGUAGE_DOES_NOT_MATCH_LANGUAGE_IN_FEED
  "Error parsing a TS file while splitting the content. The trigger for this error is the variant URL and the cue-point separated by a semi-colon, e.g. 'www.variant2.com;5000'."
  TS_PARSE_ERROR
  "Error splitting a TS file while splitting the content. The trigger for this error is the variant URL and the cue-point separated by a semi-colon, e.g. 'www.variant2.com;5000'."
  TS_SPLIT_ERROR
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "Encountered an unsupported container format while splitting the content. The trigger for this error is the variant URL and the cue-point separated by a semi-colon, e.g. 'www.variant2.com;5000'."
  UNSUPPORTED_CONTAINER_FORMAT
  "Encountered an unsupported TS media format while splitting the content. The trigger for this error is the variant URL and the cue-point separated by a semi-colon, e.g. 'www.variant2.com;5000'."
  UNSUPPORTED_TS_MEDIA_FORMAT
}

"The status of the DAI ingestion process. Only content with a status of #SUCCESS will be available for dynamic ad insertion."
enum DaiIngestStatusEnum {
  "There was a non-fatal issue during the DAI ingestion proccess and the content is not available for dynamic ad insertion."
  FAILURE
  "The content was successfully ingested for DAI."
  SUCCESS
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "There was a non-fatal issue during the DAI ingestion proccess."
  WARNING
}

"Gets a ContentPage of Content objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Content#id   \`status\` Content#status   \`name\` Content#name   \`lastModifiedDateTime\` Content#lastModifiedDateTime   \`lastDaiIngestDateTime\` Content#lastDaiIngestDateTime   \`daiIngestStatus\` Content#daiIngestStatus   @param statement a Publisher Query Language statement used to filter a set of content @return the content that matches the given filter"
input GetContentByStatementInput {
  statement: StatementInput
}

type _ContentConnection {
  totalCount: Int!
  nodes: [Content!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`Content\` by ID."
  _content(input: _SingleRecordQueryInput!): Content
    @findById(service: "Content", action: "getContentByStatement")
}

extend type Query {
  "Finds multiple \`Content\` objects based on the optional input parameters."
  _contents(input: _MultipleRecordsQueryInput!): _ContentConnection!
    @find(service: "Content", action: "getContentByStatement")
}

extend type Query {
  "Gets a ContentPage of Content objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Content#id   \`status\` Content#status   \`name\` Content#name   \`lastModifiedDateTime\` Content#lastModifiedDateTime   \`lastDaiIngestDateTime\` Content#lastDaiIngestDateTime   \`daiIngestStatus\` Content#daiIngestStatus   @param statement a Publisher Query Language statement used to filter a set of content @return the content that matches the given filter"
  getContentByStatement(input: GetContentByStatementInput!): ContentPage
    @soap(service: "Content", action: "getContentByStatement")
}

`;
