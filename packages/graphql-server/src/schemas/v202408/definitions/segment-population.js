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

""
input SegmentPopulationRequestInput {
  batchUploadId: BigInt
  segmentId: BigInt
  isDeletion: Boolean
  identifierType: IdentifierTypeEnum
  ids: [String]
  consentType: ConsentTypeEnum
}

""
type SegmentPopulationResponse {
  batchUploadId: BigInt
  idErrors: [IdError]
}

""
type SegmentPopulationResults {
  batchUploadId: BigInt
  segmentId: BigInt
  status: SegmentPopulationStatusEnum
  numSuccessfulIdsProcessed: BigInt
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
