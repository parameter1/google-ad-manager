// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"\`Network\` represents a network."
type Network {
  "The unique ID of the \`Network\`. This value is readonly and is assigned by Google."
  id: BigInt!
  "The display name of the network."
  displayName: String
  "The network code. If the current login has access to multiple networks, then the network code must be provided in the SOAP request headers for all requests. Otherwise, it is optional to provide the network code in the SOAP headers. This field is read-only."
  networkCode: String
  "The property code. This field is read-only."
  propertyCode: String
  "The time zone associated with the delivery of orders and reporting. This field is read-only."
  timeZone: String
  "The primary currency code. This field is read-only."
  currencyCode: String
  "Currencies that can be used as an alternative to the Network#currencyCode for trafficking line items."
  secondaryCurrencyCodes: [String]
  "The AdUnit#id of the top most ad unit to which descendant ad units can be added. Should be used for the AdUnit#parentId when first building inventory hierarchy. This field is read-only."
  effectiveRootAdUnitId: String
  "Whether this is a test network. This field is read-only."
  isTest: Boolean
  "The child networks that have been invited by, have approved, or have rejected this parent network for Multiple Customer Management. This field is read-only"
  childPublishers: [ChildPublisher]
}

"\`Network\` represents a network."
input NetworkInput {
  "The display name of the network."
  displayName: String
  "Currencies that can be used as an alternative to the Network#currencyCode for trafficking line items."
  secondaryCurrencyCodes: [String]
}

"Updates the specified network. Currently, only the network display name can be updated. @param network the network that needs to be updated @return the updated network"
input UpdateNetworkInput {
  network: NetworkInput
}

extend type Query {
  "Returns the list of Network objects to which the current login has access.  Intended to be used without a network code in the SOAP header when the login may have more than one network associated with it.  @return the networks to which the current login has access"
  getAllNetworks: [Network]
    @soap(service: "Network", action: "getAllNetworks")
}

extend type Query {
  "Returns the current network for which requests are being made. @return the network for which the user is currently making the request"
  getCurrentNetwork: Network
    @soap(service: "Network", action: "getCurrentNetwork")
}

extend type Query {
  "Returns the default ThirdPartyDataDeclaration for this network. If this setting has never been updated on your network, then this API response will be empty."
  getDefaultThirdPartyDataDeclaration: ThirdPartyDataDeclaration
    @soap(service: "Network", action: "getDefaultThirdPartyDataDeclaration")
}

extend type Query {
  "Creates a new blank network for testing purposes using the current login.  Each login(i.e. email address) can only have one test network. Data from any of your existing networks will not be transferred to the new test network. Once the test network is created, the test network can be used in the API by supplying the Network#networkCode in the SOAP header or by logging into the Ad Manager UI.  Test networks are limited in the following ways:  Test networks cannot serve ads. Because test networks cannot serve ads, reports will always come back without data. Since forecasting requires serving history, forecast service results will be faked. See ForecastService for more info. Test networks are, by default, Ad Manager networks and don't have any features from Ad Manager 360. To have additional features turned on, please contact your account manager.  Test networks are limited to 10,000 objects per entity type.  "
  makeTestNetwork: Network
    @soap(service: "Network", action: "makeTestNetwork")
}

extend type Mutation {
  "Updates the specified network. Currently, only the network display name can be updated. @param network the network that needs to be updated @return the updated network"
  updateNetwork(input: UpdateNetworkInput!): Network
    @soap(service: "Network", action: "updateNetwork")
}

`;
