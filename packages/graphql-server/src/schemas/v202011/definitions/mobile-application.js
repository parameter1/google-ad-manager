// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"Creates and claims mobile applications to be used for targeting in the network. @param mobileApplications the mobileApplications to create @return the created mobileApplications with their IDs filled in"
input CreateMobileApplicationsInput {
  mobileApplications: [MobileApplicationInput]
}

"Gets a mobileApplicationPage of mobile applications that satisfy the given Statement. The following fields are supported for filtering:   PQL Property Object Property   \`id\` MobileApplication#id   \`displayName\` MobileApplication#displayName   \`appStore\` MobileApplication#appStore   \`appStoreId\` MobileApplication#appStoreId   \`isArchived\` MobileApplication#isArchived   @param filterStatement a Publisher Query Language statement used to filter a set of mobile applications. @return the mobile applications that match the given filter"
input GetMobileApplicationsByStatementInput {
  filterStatement: StatementInput
}

"A mobile application that has been added to or 'claimed' by the network to be used for targeting purposes. These mobile apps can come from various app stores."
type MobileApplication {
  "Uniquely identifies the mobile application. This attribute is read-only and is assigned by Google when a mobile application is claimed."
  id: BigInt!
  "The display name of the mobile application. This attribute is required and has a maximum length of 255 characters."
  displayName: String!
  "The app store ID of the app to claim. This attribute is required for creation and then is read-only."
  appStoreId: String!
  "The app store the mobile application belongs to. This attribute is required for creation and then is read-only."
  appStore: MobileApplicationStoreEnum!
  "The archival status of the mobile application. This attribute is read-only."
  isArchived: Boolean
  "The name of the application on the app store. This attribute is read-only and populated by Google."
  appStoreName: String
  "The name of the developer of the mobile application. This attribute is read-only and populated by Google."
  developerName: String
  "The platform the mobile application runs on. This attribute is read-only and populated by Google."
  platform: MobileApplicationPlatformEnum
  "Whether the mobile application is free on the app store it belongs to. This attribute is read-only and populated by Google."
  isFree: Boolean
  "The download URL of the mobile application on the app store it belongs to. This attribute is read-only and populated by Google."
  downloadUrl: String
}

"A mobile application that has been added to or 'claimed' by the network to be used for targeting purposes. These mobile apps can come from various app stores."
input MobileApplicationInput {
  "The display name of the mobile application. This attribute is required and has a maximum length of 255 characters."
  displayName: String!
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
  PLAYSTATION
  ROKU
  SAMSUNG_TV
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  XBOX
}

"A store a MobileApplication is available on."
enum MobileApplicationStoreEnum {
  AMAZON_FIRETV
  APPLE_ITUNES
  GOOGLE_PLAY
  PLAYSTATION
  ROKU
  SAMSUNG_TV
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  XBOX
}

"Performs an action on mobile applications. @param mobileApplicationAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of mobile applications. @return the result of the action performed"
input PerformMobileApplicationActionInput {
  mobileApplicationAction: JSONObject
  filterStatement: StatementInput
}

"Updates the specified mobile applications. @param mobileApplications the mobile applications to be updated @return the updated mobileApplications"
input UpdateMobileApplicationsInput {
  mobileApplications: [MobileApplicationInput]
}

extend type Mutation {
  "Creates and claims mobile applications to be used for targeting in the network. @param mobileApplications the mobileApplications to create @return the created mobileApplications with their IDs filled in"
  createMobileApplications(input: CreateMobileApplicationsInput!): [MobileApplication]
    @soap(service: "MobileApplication", action: "createMobileApplications")
}

extend type Query {
  "Gets a mobileApplicationPage of mobile applications that satisfy the given Statement. The following fields are supported for filtering:   PQL Property Object Property   \`id\` MobileApplication#id   \`displayName\` MobileApplication#displayName   \`appStore\` MobileApplication#appStore   \`appStoreId\` MobileApplication#appStoreId   \`isArchived\` MobileApplication#isArchived   @param filterStatement a Publisher Query Language statement used to filter a set of mobile applications. @return the mobile applications that match the given filter"
  getMobileApplicationsByStatement(input: GetMobileApplicationsByStatementInput!): MobileApplicationPage
    @soap(service: "MobileApplication", action: "getMobileApplicationsByStatement")
}

extend type Mutation {
  "Performs an action on mobile applications. @param mobileApplicationAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of mobile applications. @return the result of the action performed"
  performMobileApplicationAction(input: PerformMobileApplicationActionInput!): UpdateResult
    @soap(service: "MobileApplication", action: "performMobileApplicationAction")
}

extend type Mutation {
  "Updates the specified mobile applications. @param mobileApplications the mobile applications to be updated @return the updated mobileApplications"
  updateMobileApplications(input: UpdateMobileApplicationsInput!): [MobileApplication]
    @soap(service: "MobileApplication", action: "updateMobileApplications")
}

`;
