const { gql } = require('apollo-server-express');

module.exports = gql`

extend type Query {
  "Finds a single company by ID."
  company(input: SingleRecordQueryInput!): Company
    @findById(service: "Company")
  "Finds multiple companies based on the (optional) input parameters."
  companies(input: MultipleRecordsQueryInput = {}): CompanyConnection!
    @find(service: "Company")
}

enum CompanyTypeEnum {
  "The publisher's own advertiser. When no outside advertiser buys its inventory, the publisher may run its own advertising campaigns. "
  HOUSE_ADVERTISER
  "The publisher's own agency."
  HOUSE_AGENCY
  "A business entity that buys publisher inventory to run advertising campaigns. An advertiser is optionally associated with one or more agencies."
  ADVERTISER
  "A business entity that offers services, such as advertising creation, placement, and management, to advertisers."
  AGENCY
  "A company representing multiple advertisers and agencies."
  AD_NETWORK
  "A company representing a partner."
  PARTNER
  "A company representing a child network."
  CHILD_PUBLISHER
  "A company representing a viewability provider."
  VIEWABILITY_PROVIDER
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Represents an agency, a single advertiser or an entire advertising network."
type Company {
  "Uniquely identifies the Company."
  id: BigInt!
  "The full name of the company."
  name: String!
  "Specifies what kind of company this is."
  type: CompanyTypeEnum!
  "The date and time this company was last modified."
  lastModifiedDateTime: GAMDateTime!
}

"Represents multiple companies."
type CompanyConnection {
  totalCount: Int!
  nodes: [Company!]!
  statement: StatementInfo!
  pageInfo: PageInfo!
}

`;
