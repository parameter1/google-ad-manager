// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

""
enum ConsentTypeEnum {
  DENIED
  GRANTED
  UNKNOWN
  UNSET
}

"Returns a list of SegmentPopulationResults for the given \`batchUploadIds\`."
input GetSegmentPopulationResultsByIdsInput {
  batchUploadIds: [BigInt]
}

""
type IdError {
  index: BigInt
  errorType: IdErrorIdErrorTypeEnum
}

""
enum IdErrorIdErrorTypeEnum {
  INVALID_PUBLISHER_PROVIDED_ID_FORMAT
  UNKNOWN
}

""
enum IdentifierTypeEnum {
  PUBLISHER_PROVIDED_IDENTIFIER
  UNKNOWN
}

"Performs an action on the uploads denoted by \`batchUploadIds\`."
input PerformSegmentPopulationActionInput {
  action: JSONObject
  batchUploadIds: [BigInt]
}

"A request to upload identifiers to an AudienceSegment."
input SegmentPopulationRequestInput {
  "The ID of the batch that will process identifiers. If not specified, it will be provided by Google. The same ID can be used in subsequent requests to group them together as part of the same batch."
  batchUploadId: BigInt
  "The ID of the segment to populate. This segment must be active."
  segmentId: BigInt
  "Whether the identifiers should be added or removed."
  isDeletion: Boolean
  "The type of identifier being operated upon."
  identifierType: IdentifierTypeEnum
  "The identifiers to upload. This field may have a maximum size of 100,000 elements."
  ids: [String]
  "Consent type gathered for all identifiers in this request."
  consentType: ConsentTypeEnum
}

"Response returned by SegmentPopulationService"
type SegmentPopulationResponse {
  "The batch ID used to look up the results."
  batchUploadId: BigInt
  "Individual identifier errors."
  idErrors: [IdError]
}

"The results of a SegmentPopulationRequest."
type SegmentPopulationResults {
  "The batch ID to look up the results."
  batchUploadId: BigInt
  "The segment ID associated with the segment population job."
  segmentId: BigInt
  "The current status of the upload request."
  status: SegmentPopulationStatusEnum
  "The number of IDs that were processed successfully."
  numSuccessfulIdsProcessed: BigInt
  "Identifiers with errors."
  errors: [IdError]
}

""
enum SegmentPopulationStatusEnum {
  EXPIRED
  FAILED
  PREPARING
  PROCESSING
  SUCCESS
  UNKNOWN
}

"Updates identifiers in an audience segment. The returned SegmentPopulationRequest#batchUploadId can be used in subsequent requests to group them together as part of the same batch. The identifiers associated with a batch will not be processed until #performSegmentPopulationAction is called with a ProcessAction. The batch will expire if ProcessAction is not called within the TTL of 5 days."
input UpdateSegmentMembershipsInput {
  updateRequest: SegmentPopulationRequestInput
}

extend type Query {
  "Returns a list of SegmentPopulationResults for the given \`batchUploadIds\`."
  getSegmentPopulationResultsByIds(input: GetSegmentPopulationResultsByIdsInput!): [SegmentPopulationResults]
    @soap(service: "SegmentPopulation", action: "getSegmentPopulationResultsByIds")
}

extend type Mutation {
  "Performs an action on the uploads denoted by \`batchUploadIds\`."
  performSegmentPopulationAction(input: PerformSegmentPopulationActionInput!): UpdateResult
    @soap(service: "SegmentPopulation", action: "performSegmentPopulationAction")
}

extend type Mutation {
  "Updates identifiers in an audience segment. The returned SegmentPopulationRequest#batchUploadId can be used in subsequent requests to group them together as part of the same batch. The identifiers associated with a batch will not be processed until #performSegmentPopulationAction is called with a ProcessAction. The batch will expire if ProcessAction is not called within the TTL of 5 days."
  updateSegmentMemberships(input: UpdateSegmentMembershipsInput!): SegmentPopulationResponse
    @soap(service: "SegmentPopulation", action: "updateSegmentMemberships")
}

`;
