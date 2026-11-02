// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

extend type Query {
  "Returns the download URL String for the MCM Manage Inventory SupplyChain diagnostics report. The report is refreshed twice daily."
  getMcmSupplyChainDiagnosticsDownloadUrl: String
    @soap(service: "AdsTxt", action: "getMcmSupplyChainDiagnosticsDownloadUrl")
}

`;
