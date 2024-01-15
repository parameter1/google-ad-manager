// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates and claims mobile applications to be used for targeting in the network."
input CreateMobileApplicationsInput {
  mobileApplications: [MobileApplicationInput]
}

"Gets a mobileApplicationPage of mobile applications that satisfy the given Statement. The following fields are supported for filtering:   PQL Property Object Property   \`id\` MobileApplication#id   \`displayName\` MobileApplication#displayName   \`appStore\` MobileApplication#appStore   \`appStoreId\` MobileApplication#appStoreId   \`isArchived\` MobileApplication#isArchived  "
input GetMobileApplicationsByStatementInput {
  filterStatement: StatementInput
}

"A mobile application that has been added to or 'claimed' by the network to be used for targeting purposes. These mobile apps can come from various app stores."
type MobileApplication {
  "Uniquely identifies the mobile application. This attribute is read-only and is assigned by Google when a mobile application is claimed."
  id: BigInt!
  "Uniquely identifies the mobile application. This attribute is read-only and is assigned by Google when a mobile application is claimed. The #id field is being deprecated in favor of this new ID space."
  applicationId: BigInt
  "The display name of the mobile application. This attribute is required and has a maximum length of 255 characters."
  displayName: String
  "The app store ID of the app to claim. This attribute is required for creation and then is read-only."
  appStoreId: String
  "The app stores the mobile application belongs to. This attribute is required for creation and is mutable to allow for third party app store linking."
  appStores: [MobileApplicationStoreEnum]
  "The archival status of the mobile application. This attribute is read-only."
  isArchived: Boolean
  "The name of the application on the app store. This attribute is read-only and populated by Google."
  appStoreName: String
  "The application code used to identify the app in the SDK. This attribute is read-only and populated by Google. Note that the UI refers to this as 'App ID'."
  applicationCode: String
  "The name of the developer of the mobile application. This attribute is read-only and populated by Google."
  developerName: String
  "The platform the mobile application runs on. This attribute is read-only and populated by Google."
  platform: MobileApplicationPlatformEnum
  "Whether the mobile application is free on the app store it belongs to. This attribute is read-only and populated by Google."
  isFree: Boolean
  "The download URL of the mobile application on the app store it belongs to. This attribute is read-only and populated by Google."
  downloadUrl: String
  "The approval status for the mobile application."
  approvalStatus: MobileApplicationApprovalStatusEnum
}

"The approval status of the mobile application."
enum MobileApplicationApprovalStatusEnum {
  "The application is disapproved but has a pending review status, signaling an appeal."
  APPEALING
  "The application can serve ads."
  APPROVED
  "The application failed approval checks and it cannot serve any ads."
  DISAPPROVED
  "The application is not yet ready for review."
  DRAFT
  "The application has not yet been reviewed."
  UNCHECKED
  "Unknown approval status."
  UNKNOWN
}

"A mobile application that has been added to or 'claimed' by the network to be used for targeting purposes. These mobile apps can come from various app stores."
input MobileApplicationInput {
  "The display name of the mobile application. This attribute is required and has a maximum length of 255 characters."
  displayName: String
  "The app stores the mobile application belongs to. This attribute is required for creation and is mutable to allow for third party app store linking."
  appStores: [MobileApplicationStoreEnum]
  "The approval status for the mobile application."
  approvalStatus: MobileApplicationApprovalStatusEnum
}

"Captures a page of mobile applications."
type MobileApplicationPage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of mobile applications contained within this page."
  results: [MobileApplication]
}

"A platform a MobileApplication can run on."
enum MobileApplicationPlatformEnum {
  AMAZON_FIRETV
  ANDROID
  IOS
  LG_TV
  PLAYSTATION
  ROKU
  SAMSUNG_TV
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  XBOX
}

"A store a MobileApplication is available on."
enum MobileApplicationStoreEnum {
  AMAZON_APP_STORE
  AMAZON_FIRETV
  APPLE_ITUNES
  GOOGLE_PLAY
  LG_TV
  OPPO_APP_STORE
  PLAYSTATION
  ROKU
  SAMSUNG_APP_STORE
  SAMSUNG_TV
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  VIVO_APP_STORE
  XBOX
  XIAOMI_APP_STORE
}

"Performs an action on mobile applications."
input PerformMobileApplicationActionInput {
  mobileApplicationAction: JSONObject
  filterStatement: StatementInput
}

"Updates the specified mobile applications."
input UpdateMobileApplicationsInput {
  mobileApplications: [MobileApplicationInput]
}

type _MobileApplicationConnection {
  totalCount: Int!
  nodes: [MobileApplication!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`MobileApplication\` by ID."
  _mobileApplication(input: _SingleRecordQueryInput!): MobileApplication
    @findById(service: "MobileApplication", action: "getMobileApplicationsByStatement")
}

extend type Query {
  "Finds multiple \`MobileApplication\` objects based on the optional input parameters."
  _mobileApplications(input: _MultipleRecordsQueryInput!): _MobileApplicationConnection!
    @find(service: "MobileApplication", action: "getMobileApplicationsByStatement")
}

extend type Mutation {
  "Creates and claims mobile applications to be used for targeting in the network."
  createMobileApplications(input: CreateMobileApplicationsInput!): [MobileApplication]
    @soap(service: "MobileApplication", action: "createMobileApplications")
}

extend type Query {
  "Gets a mobileApplicationPage of mobile applications that satisfy the given Statement. The following fields are supported for filtering:   PQL Property Object Property   \`id\` MobileApplication#id   \`displayName\` MobileApplication#displayName   \`appStore\` MobileApplication#appStore   \`appStoreId\` MobileApplication#appStoreId   \`isArchived\` MobileApplication#isArchived  "
  getMobileApplicationsByStatement(input: GetMobileApplicationsByStatementInput!): MobileApplicationPage
    @soap(service: "MobileApplication", action: "getMobileApplicationsByStatement")
}

extend type Mutation {
  "Performs an action on mobile applications."
  performMobileApplicationAction(input: PerformMobileApplicationActionInput!): UpdateResult
    @soap(service: "MobileApplication", action: "performMobileApplicationAction")
}

extend type Mutation {
  "Updates the specified mobile applications."
  updateMobileApplications(input: UpdateMobileApplicationsInput!): [MobileApplication]
    @soap(service: "MobileApplication", action: "updateMobileApplications")
}

`;
