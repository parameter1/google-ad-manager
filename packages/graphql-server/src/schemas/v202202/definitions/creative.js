// THIS FILE IS GENERATED. DO NOT EDIT.

const { gql } = require('apollo-server-express');

module.exports = gql`

"An Ad Exchange dynamic allocation creative."
type AdExchangeCreative implements HasHtmlSnippetDynamicAllocationCreativeInterface & BaseDynamicAllocationCreativeInterface & CreativeInterface {
  _: Boolean
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The code snippet (ad tag) from Ad Exchange or AdSense to traffic the dynamic allocation creative. Only valid Ad Exchange or AdSense parameters will be considered. Any extraneous HTML or JavaScript will be ignored."
  codeSnippet: String
  "Whether this creative is eligible for native ad-serving. This value is optional and defaults to \`false\`."
  isNativeEligible: Boolean
  "\`true\` if this creative is interstitial. An interstitial creative will not consider an impression served until it is fully rendered in the browser."
  isInterstitial: Boolean
  "\`true\` if this creative is eligible for all requested sizes."
  isAllowsAllRequestedSizes: Boolean
}

"The registry that an ad ID belongs to."
enum AdIdTypeEnum {
  "The ad ID is registered with ad-id.org."
  AD_ID
  "The ad ID is registered with clearcast.co.uk."
  CLEARCAST
  "The creative does not have an ad ID outside of Ad Manager."
  NONE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"An AdSense dynamic allocation creative."
type AdSenseCreative implements HasHtmlSnippetDynamicAllocationCreativeInterface & BaseDynamicAllocationCreativeInterface & CreativeInterface {
  _: Boolean
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The code snippet (ad tag) from Ad Exchange or AdSense to traffic the dynamic allocation creative. Only valid Ad Exchange or AdSense parameters will be considered. Any extraneous HTML or JavaScript will be ignored."
  codeSnippet: String
}

"A \`Creative\` intended for mobile platforms that displays an image, whose size is defined as an aspect ratio, i.e. Size#isAspectRatio. It can have multiple images whose dimensions conform to that aspect ratio."
type AspectRatioImageCreative implements HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "The images associated with this creative. The ad server will choose one based on the capabilities of the device. Each asset should have a size which is of the same aspect ratio as the Creative#size. This attribute is required and must have at least one asset."
  imageAssets: [CreativeAsset]
  "The text that is served along with the image creative, primarily for accessibility. If no suitable image size is available for the device, this text replaces the image completely. This field is optional and has a maximum length of 500 characters."
  altText: String
  "An impression tracking URL to ping when this creative is displayed. This field is optional has a maximum length of 1024 characters."
  thirdPartyImpressionUrl: String
  "Allows the actual image asset sizes to differ from the creative size. This attribute is optional."
  overrideSize: Boolean
}

"Stores values of CreativeTemplateVariable of VariableType#ASSET."
type AssetCreativeTemplateVariableValue implements BaseCreativeTemplateVariableValueInterface {
  "A uniqueName of the CreativeTemplateVariable."
  uniqueName: String
  "The associated asset. This attribute is required when creating a new \`TemplateCreative\`. To view the asset, use CreativeAsset#assetUrl."
  asset: CreativeAsset
}

"Base asset properties."
interface AssetInterface {
  _: Boolean
}

"A \`Creative\` that contains Ad Manager hosted audio ads and is served via VAST XML. This creative is read-only."
type AudioCreative implements BaseAudioCreativeInterface & HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "The expected duration of this creative in milliseconds."
  duration: Int
  "Allows the creative duration to differ from the actual asset durations. This attribute is optional."
  allowDurationOverride: Boolean
  "A map from \`ConversionEvent\` to a list of URLs that will be pinged when the event happens. This attribute is optional."
  trackingUrls: [ConversionEvent_TrackingUrlsMapEntry]
  "The IDs of the companion creatives that are associated with this creative. This attribute is optional."
  companionCreativeIds: [BigInt]
  "A comma separated key=value list of parameters that will be supplied to the creative, written into the VAST \`AdParameters\` node. This attribute is optional."
  customParameters: String
  "The ad id associated with the video as defined by the \`adIdType\` registry. This field is required if \`adIdType\` is not AdIdType#NONE."
  adId: String
  "The registry which the ad id of this creative belongs to. This field is optional and defaults to AdIdType#NONE."
  adIdType: AdIdTypeEnum
  "The type of skippable ad."
  skippableAdType: SkippableAdTypeEnum
  "An ad tag URL that will return a preview of the VAST XML response specific to this creative. This attribute is read-only."
  vastPreviewUrl: String
  "The SSL compatibility scan result of this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
  "A URL that points to the source media that will be used for transcoding."
  audioSourceUrl: String
}

"A \`Creative\` that contains externally hosted audio ads and is served via VAST XML."
type AudioRedirectCreative implements BaseAudioCreativeInterface & HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "The expected duration of this creative in milliseconds."
  duration: Int
  "Allows the creative duration to differ from the actual asset durations. This attribute is optional."
  allowDurationOverride: Boolean
  "A map from \`ConversionEvent\` to a list of URLs that will be pinged when the event happens. This attribute is optional."
  trackingUrls: [ConversionEvent_TrackingUrlsMapEntry]
  "The IDs of the companion creatives that are associated with this creative. This attribute is optional."
  companionCreativeIds: [BigInt]
  "A comma separated key=value list of parameters that will be supplied to the creative, written into the VAST \`AdParameters\` node. This attribute is optional."
  customParameters: String
  "The ad id associated with the video as defined by the \`adIdType\` registry. This field is required if \`adIdType\` is not AdIdType#NONE."
  adId: String
  "The registry which the ad id of this creative belongs to. This field is optional and defaults to AdIdType#NONE."
  adIdType: AdIdTypeEnum
  "The type of skippable ad."
  skippableAdType: SkippableAdTypeEnum
  "An ad tag URL that will return a preview of the VAST XML response specific to this creative. This attribute is read-only."
  vastPreviewUrl: String
  "The SSL compatibility scan result of this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
  "The audio creative assets."
  audioAssets: [VideoRedirectAsset]
  "The high quality mezzanine audio asset."
  mezzanineFile: VideoRedirectAsset
}

"A base type for audio creatives."
interface BaseAudioCreativeInterface implements HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "The expected duration of this creative in milliseconds."
  duration: Int
  "Allows the creative duration to differ from the actual asset durations. This attribute is optional."
  allowDurationOverride: Boolean
  "A map from \`ConversionEvent\` to a list of URLs that will be pinged when the event happens. This attribute is optional."
  trackingUrls: [ConversionEvent_TrackingUrlsMapEntry]
  "The IDs of the companion creatives that are associated with this creative. This attribute is optional."
  companionCreativeIds: [BigInt]
  "A comma separated key=value list of parameters that will be supplied to the creative, written into the VAST \`AdParameters\` node. This attribute is optional."
  customParameters: String
  "The ad id associated with the video as defined by the \`adIdType\` registry. This field is required if \`adIdType\` is not AdIdType#NONE."
  adId: String
  "The registry which the ad id of this creative belongs to. This field is optional and defaults to AdIdType#NONE."
  adIdType: AdIdTypeEnum
  "The type of skippable ad."
  skippableAdType: SkippableAdTypeEnum
  "An ad tag URL that will return a preview of the VAST XML response specific to this creative. This attribute is read-only."
  vastPreviewUrl: String
  "The SSL compatibility scan result of this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
}

"A base class for storing values of the CreativeTemplateVariable."
interface BaseCreativeTemplateVariableValueInterface {
  "A uniqueName of the CreativeTemplateVariable."
  uniqueName: String
}

"A base class for dynamic allocation creatives."
interface BaseDynamicAllocationCreativeInterface implements CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
}

"The base type for creatives that display an image."
interface BaseImageCreativeInterface implements HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "Allows the creative size to differ from the actual image asset size. This attribute is optional."
  overrideSize: Boolean
  "The primary image asset associated with this creative. This attribute is required."
  primaryImageAsset: CreativeAsset
}

"The base type for creatives that load an image asset from a specified URL."
interface BaseImageRedirectCreativeInterface implements HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "The URL where the actual asset resides. This attribute is required and has a maximum length of 1024 characters."
  imageUrl: String
}

"A \`Creative\` that is created by a Rich Media Studio."
interface BaseRichMediaStudioCreativeInterface implements CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The creative ID as known by Rich Media Studio creative. This attribute is readonly."
  studioCreativeId: BigInt
  "The creative format of the Rich Media Studio creative. This attribute is readonly."
  creativeFormat: RichMediaStudioCreativeFormatEnum
  "The type of artwork used in this creative. This attribute is readonly."
  artworkType: RichMediaStudioCreativeArtworkTypeEnum
  "The total size of all assets in bytes. This attribute is readonly."
  totalFileSize: BigInt
  "Ad tag keys. This attribute is optional and updatable."
  adTagKeys: [String]
  "Custom key values. This attribute is optional and updatable."
  customKeyValues: [String]
  "The survey URL for this creative. This attribute is optional and updatable."
  surveyUrl: String
  "The tracking URL to be triggered when an ad starts to play, whether Rich Media or backup content is displayed. Behaves like the \`/imp\` URL that DART used to track impressions. This URL can't exceed 1024 characters and must start with http:// or https://. This attribute is optional and updatable."
  allImpressionsUrl: String
  "The tracking URL to be triggered when any rich media artwork is displayed in an ad. Behaves like the \`/imp\` URL that DART used to track impressions. This URL can't exceed 1024 characters and must start with http:// or https://. This attribute is optional and updatable."
  richMediaImpressionsUrl: String
  "The tracking URL to be triggered when the Rich Media backup image is served. This attribute is optional and updatable."
  backupImageImpressionsUrl: String
  "The override CSS. You can put custom CSS code here to repair creative styling; e.g. \`tr td { background-color:#FBB; \`}. This attribute is optional and updatable."
  overrideCss: String
  "The Flash plugin version required to view this creative; e.g. \`Flash 10.2/AS 3\`. This attribute is read only."
  requiredFlashPluginVersion: String
  "The duration of the creative in milliseconds. This attribute is optional and updatable."
  duration: Int
  "The billing attribute associated with this creative. This attribute is read only."
  billingAttribute: RichMediaStudioCreativeBillingAttributeEnum
  "The list of child assets associated with this creative. This attribute is read only."
  richMediaStudioChildAssetProperties: [RichMediaStudioChildAssetProperty]
  "The SSL compatibility scan result of this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
}

"A base type for video creatives."
interface BaseVideoCreativeInterface implements HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "The expected duration of this creative in milliseconds."
  duration: Int
  "Allows the creative duration to differ from the actual asset durations. This attribute is optional."
  allowDurationOverride: Boolean
  "A map from \`ConversionEvent\` to a list of URLs that will be pinged when the event happens. This attribute is optional."
  trackingUrls: [ConversionEvent_TrackingUrlsMapEntry]
  "The IDs of the companion creatives that are associated with this creative. This attribute is optional."
  companionCreativeIds: [BigInt]
  "A comma separated key=value list of parameters that will be supplied to the creative, written into the VAST \`AdParameters\` node. This attribute is optional."
  customParameters: String
  "The ad id associated with the video as defined by the \`adIdType\` registry. This field is required if \`adIdType\` is not AdIdType#NONE."
  adId: String
  "The registry which the ad id of this creative belongs to. This field is optional and defaults to AdIdType#NONE."
  adIdType: AdIdTypeEnum
  "The type of skippable ad."
  skippableAdType: SkippableAdTypeEnum
  "An ad tag URL that will return a preview of the VAST XML response specific to this creative. This attribute is read-only."
  vastPreviewUrl: String
  "The SSL compatibility scan result of this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
}

"Click tags define click-through URLs for each exit on an HTML5 creative. An exit is any area that can be clicked that directs the browser to a landing page. Each click tag defines the click-through URL for a different exit. In Ad Manager, tracking pixels are attached to the click tags if URLs are valid."
type ClickTag {
  "Name of the click tag, follows the regex 'clickTag\d*'"
  name: String
  "URL of the click tag."
  url: String
}

"A creative that is used for tracking clicks on ads that are served directly from the customers' web servers or media servers. NOTE: The size attribute is not used for click tracking creative and it will not be persisted upon save."
type ClickTrackingCreative implements CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The click tracking URL. This attribute is required."
  clickTrackingUrl: String
}

"Creates new Creative objects. @param creatives the creatives to create @return the created creatives with their IDs filled in"
input CreateCreativesInput {
  creatives: [JSONObject]
}

"A \`CreativeAsset\` is an asset that can be used in creatives."
type CreativeAsset {
  "The ID of the asset. This attribute is generated by Google upon creation."
  assetId: BigInt
  "The content of the asset as a byte array. This attribute is required when creating the creative that contains this asset if an \`assetId\` is not provided.  When updating the content, pass a new byte array, and set \`assetId\` to null. Otherwise, this field can be null.  The \`assetByteArray\` will be \`null\` when the creative is retrieved."
  assetByteArray: String
  "The file name of the asset. This attribute is required when creating a new asset (e.g. when #assetByteArray is not null)."
  fileName: String
  "The file size of the asset in bytes. This attribute is read-only."
  fileSize: BigInt
  "A URL where the asset can be previewed at. This field is read-only and set by Google."
  assetUrl: String
  "The size of the asset. Note that this may not always reflect the actual physical size of the asset, but may reflect the expected size. This attribute is read-only and is populated by Google."
  size: Size
  "The click tags of the asset. This field is read-only."
  clickTags: [ClickTag]
  "The display density of the image. This is the ratio between a dimension in pixels of the image and the dimension in pixels that it should occupy in device-independent pixels when displayed. This attribute is optional and defaults to ONE_TO_ONE."
  imageDensity: ImageDensityEnum
}

"A \`CreativeAsset\` is an asset that can be used in creatives."
input CreativeAssetInput {
  "The ID of the asset. This attribute is generated by Google upon creation."
  assetId: BigInt
  "The content of the asset as a byte array. This attribute is required when creating the creative that contains this asset if an \`assetId\` is not provided.  When updating the content, pass a new byte array, and set \`assetId\` to null. Otherwise, this field can be null.  The \`assetByteArray\` will be \`null\` when the creative is retrieved."
  assetByteArray: String
  "The file name of the asset. This attribute is required when creating a new asset (e.g. when #assetByteArray is not null)."
  fileName: String
  "The display density of the image. This is the ratio between a dimension in pixels of the image and the dimension in pixels that it should occupy in device-independent pixels when displayed. This attribute is optional and defaults to ONE_TO_ONE."
  imageDensity: ImageDensityEnum
}

"A \`Creative\` represents the media for the ad being served. Read more about creatives on the [Ad Manager Help Center](https://support.google.com/dfp_premium/answer/3185155)."
interface CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
}

"Captures a page of Creative objects."
type CreativePage {
  "The size of the total result set to which this page belongs."
  totalResultSetSize: Int
  "The absolute index in the total result set on which this page begins."
  startIndex: Int
  "The collection of creatives contained within this page."
  results: [CreativeInterface]
}

"Represents the different types of policy violations that may be detected on a given creative. For more information about the various types of policy violations, see [here](https://support.google.com/adspolicy/answer/6008942)."
enum CreativePolicyViolationEnum {
  "The landing page contains an abusive experience. For more information see [here](https://support.google.com/webtools/answer/7347327)."
  ABUSIVE_EXPERIENCE
  "The creative has been determined as attempting to circumvent Google advertising systems."
  CIRCUMVENTING_SYSTEMS
  "The creative prompts the user to download a file. For more information see [here](https://support.google.com/admanager/answer/7513391)"
  DOWNLOAD_PROMPT_IN_CREATIVE
  "The landing page for the creative uses a dynamic DNS. For more information see [here](https://support.google.com/adspolicy/answer/6020954)."
  DYNAMIC_DNS
  "The creative has been determined as attempting to game the Google network. For more information see [here](https://support.google.com/adspolicy/answer/6020954#319)."
  GAMING_GOOGLE_NETWORK
  "The redirect url contains legally objectionable content."
  LEGALLY_BLOCKED_REDIRECT_URL
  "Malware was found in the creative. For more information see [here](https://support.google.com/adspolicy/answer/1308246)."
  MALWARE_IN_CREATIVE
  "Malware was found in the landing page. For more information see [here](https://support.google.com/adspolicy/answer/1308246)."
  MALWARE_IN_LANDING_PAGE
  "The creative misrepresents the product or service being advertised. For more information see [here](https://support.google.com/adspolicy/answer/6020955)."
  MISREPRESENTATION_OF_PRODUCT
  "OMID sdk injected by creative. < p>For more information see [here](https://support.google.com/authorizedbuyers/answer/9115752)."
  MISUSE_OF_OMID_API
  "Phishing found in creative or landing page. For more information see [here](https://support.google.com/adspolicy/answer/6020955)."
  PHISHING
  "The creative has been determined to be self clicking."
  SELF_CLICKING_CREATIVE
  "The creative has been temporarily paused while we investigate."
  TEMPORARY_PAUSE_FOR_VENDOR_INVESTIGATION
  "The creative is designed to mislead or trick the user into interacting with it. For more information see [here](https://support.google.com/adwordspolicy/answer/6020955#357)."
  TRICK_TO_CLICK
  "Unacceptable HTML5 ad. For more information see [here](https://support.google.com/adspolicy/answer/6088505#266)."
  UNACCEPTABLE_HTML_AD
  "The creative sets an unauthorized cookie on a Google domain. For more information see [here](https://support.google.com/admanager/answer/7513391)"
  UNAUTHORIZED_COOKIE_DETECTED
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "Non-allowlisted OMID verification script. For more information see [here](https://support.google.com/authorizedbuyers/answer/9115752)."
  USE_OF_NON_ALLOWLISTED_OMID_VERIFICATION_SCRIPT
}

"A \`Creative\` that contains an arbitrary HTML snippet and file assets."
type CustomCreative implements HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "The HTML snippet that this creative delivers. This attribute is required."
  htmlSnippet: String
  "A list of file assets that are associated with this creative, and can be referenced in the snippet."
  customCreativeAssets: [CustomCreativeAsset]
  "\`true\` if this custom creative is interstitial. An interstitial creative will not consider an impression served until it is fully rendered in the browser."
  isInterstitial: Boolean
  "A locked orientation for this creative to be displayed in."
  lockedOrientation: LockedOrientationEnum
  "The SSL compatibility scan result of this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
  "Whether the Creative is compatible for SafeFrame rendering. This attribute is optional and defaults to \`true\`."
  isSafeFrameCompatible: Boolean
  "A list of impression tracking URLs to ping when this creative is displayed. This field is optional."
  thirdPartyImpressionTrackingUrls: [String]
}

"A \`CustomCreativeAsset\` is an association between a CustomCreative and an asset. Any assets that are associated with a creative can be inserted into its HTML snippet."
type CustomCreativeAsset {
  "The name by which the associated asset will be referenced. For example, if the value is 'foo', then the asset can be inserted into an HTML snippet using the macro: '%%FILE:foo%%'."
  macroName: String
  "The asset. This attribute is required. To view the asset, use CreativeAsset#assetUrl."
  asset: CreativeAsset
}

"A \`CustomCreativeAsset\` is an association between a CustomCreative and an asset. Any assets that are associated with a creative can be inserted into its HTML snippet."
input CustomCreativeAssetInput {
  "The name by which the associated asset will be referenced. For example, if the value is 'foo', then the asset can be inserted into an HTML snippet using the macro: '%%FILE:foo%%'."
  macroName: String
  "The asset. This attribute is required. To view the asset, use CreativeAsset#assetUrl."
  asset: CreativeAssetInput
}

"The valid actions that a destination URL may perform if the user clicks on the ad."
enum DestinationUrlTypeEnum {
  "Start an application."
  CLICK_TO_APP
  "Make a phone call."
  CLICK_TO_CALL
  "Navigate to a web page. (a.k.a. 'Click-through URL')."
  CLICK_TO_WEB
  "Destination URL not present. Useful for video creatives where a landing page or a product isn't necessarily applicable."
  NONE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Gets a CreativePage of Creative objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Creative#id   \`name\` Creative#name   \`advertiserId\` Creative#advertiserId   \`width\` Creative#size   \`height\` Creative#size   \`lastModifiedDateTime\` Creative#lastModifiedDateTime   @param filterStatement a Publisher Query Language statement used to filter a set of creatives @return the creatives that match the given filter"
input GetCreativesByStatementInput {
  filterStatement: StatementInput
}

"A \`Creative\` that has a destination url"
interface HasDestinationUrlCreativeInterface implements CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
}

"Dynamic allocation creative with a backfill code snippet."
interface HasHtmlSnippetDynamicAllocationCreativeInterface implements BaseDynamicAllocationCreativeInterface & CreativeInterface {
  _: Boolean
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The code snippet (ad tag) from Ad Exchange or AdSense to traffic the dynamic allocation creative. Only valid Ad Exchange or AdSense parameters will be considered. Any extraneous HTML or JavaScript will be ignored."
  codeSnippet: String
}

"A \`Creative\` that contains a zipped HTML5 bundle asset, a list of third party impression trackers, and a third party click tracker."
type Html5Creative implements CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "Allows the creative size to differ from the actual HTML5 asset size. This attribute is optional."
  overrideSize: Boolean
  "Impression tracking URLs to ping when this creative is displayed. This field is optional."
  thirdPartyImpressionTrackingUrls: [String]
  "A click tracking URL to ping when this creative is clicked. This field is optional."
  thirdPartyClickTrackingUrl: String
  "A locked orientation for this creative to be displayed in."
  lockedOrientation: LockedOrientationEnum
  "The SSL compatibility scan result of this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
  "Whether the Creative is compatible for SafeFrame rendering. This attribute is optional and defaults to \`true\`."
  isSafeFrameCompatible: Boolean
  "The HTML5 asset. To preview the HTML5 asset, use the CreativeAsset#assetUrl. In this field, the CreativeAsset#assetByteArray must be a zip bundle and the CreativeAsset#fileName must have a zip extension. This attribute is required."
  html5Asset: CreativeAsset
}

"A \`Creative\` that displays an image."
type ImageCreative implements BaseImageCreativeInterface & HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "Allows the creative size to differ from the actual image asset size. This attribute is optional."
  overrideSize: Boolean
  "The primary image asset associated with this creative. This attribute is required."
  primaryImageAsset: CreativeAsset
  "Alternative text to be rendered along with the creative used mainly for accessibility. This field is optional and has a maximum length of 500 characters."
  altText: String
  "An impression tracking URL to ping when this creative is displayed. This field is optional has a maximum length of 1024 characters."
  thirdPartyImpressionUrl: String
  "The list of secondary image assets associated with this creative. This attribute is optional. Secondary image assets can be used to store different resolution versions of the primary asset for use on non-standard density screens."
  secondaryImageAssets: [CreativeAsset]
}

"Image densities."
enum ImageDensityEnum {
  "Indicates that there is a 1:1 ratio between the dimensions of the raw image and the dimensions that it should be displayed at in device-independent pixels."
  ONE_TO_ONE
  "Indicates that there is a 3:2 ratio between the dimensions of the raw image and the dimensions that it should be displayed at in device-independent pixels."
  THREE_TO_TWO
  "Indicates that there is a 2:1 ratio between the dimensions of the raw image and the dimensions that it should be displayed at in device-independent pixels."
  TWO_TO_ONE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"An overlay \`Creative\` that displays an image and is served via VAST 2.0 XML. Overlays cover part of the video content they are displayed on top of. This creative is read only prior to v201705."
type ImageOverlayCreative implements BaseImageCreativeInterface & HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "Allows the creative size to differ from the actual image asset size. This attribute is optional."
  overrideSize: Boolean
  "The primary image asset associated with this creative. This attribute is required."
  primaryImageAsset: CreativeAsset
  "The IDs of the companion creatives that are associated with this creative. This attribute is optional. This attribute is read-only."
  companionCreativeIds: [BigInt]
  "A map from \`ConversionEvent\` to a list of URLs that will be pinged when the event happens. This attribute is optional."
  trackingUrls: [ConversionEvent_TrackingUrlsMapEntry]
  "A locked orientation for this creative to be displayed in."
  lockedOrientation: LockedOrientationEnum
  "A comma separated key=value list of parameters that will be supplied to the creative, written into the VAST \`AdParameters\` node. This attribute is optional."
  customParameters: String
  "Minimum suggested duration in milliseconds. This attribute is optional."
  duration: Int
  "An ad tag URL that will return a preview of the VAST XML response specific to this creative. This attribute is read-only."
  vastPreviewUrl: String
}

"A \`Creative\` that loads an image asset from a specified URL."
type ImageRedirectCreative implements BaseImageRedirectCreativeInterface & HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "The URL where the actual asset resides. This attribute is required and has a maximum length of 1024 characters."
  imageUrl: String
  "Alternative text to be rendered along with the creative used mainly for accessibility. This field is optional and has a maximum length of 500 characters."
  altText: String
  "An impression tracking URL to ping when this creative is displayed. This field is optional has a maximum length of 1024 characters."
  thirdPartyImpressionUrl: String
}

"An overlay \`Creative\` that loads an image asset from a specified URL and is served via VAST XML. Overlays cover part of the video content they are displayed on top of. This creative is read only."
type ImageRedirectOverlayCreative implements BaseImageRedirectCreativeInterface & HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "The URL where the actual asset resides. This attribute is required and has a maximum length of 1024 characters."
  imageUrl: String
  "The size of the image asset. Note that this may differ from #size if the asset is not expected to fill the entire video player. This attribute is optional."
  assetSize: Size
  "Minimum suggested duration in milliseconds. This attribute is optional."
  duration: Int
  "The IDs of the companion creatives that are associated with this creative. This attribute is optional."
  companionCreativeIds: [BigInt]
  "A map from \`ConversionEvent\` to a list of URLs that will be pinged when the event happens. This attribute is optional."
  trackingUrls: [ConversionEvent_TrackingUrlsMapEntry]
  "A comma separated key=value list of parameters that will be supplied to the creative, written into the VAST \`AdParameters\` node. This attribute is optional."
  customParameters: String
  "An ad tag URL that will return a preview of the VAST XML response specific to this creative. This attribute is read-only."
  vastPreviewUrl: String
}

"A \`Creative\` hosted by Campaign Manager 360. Similar to third-party creatives, a Campaign Manager 360 tag is used to retrieve a creative asset. However, Campaign Manager 360 tags are not sent to the user's browser. Instead, they are processed internally within the Google Marketing Platform system.."
type InternalRedirectCreative implements CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "A locked orientation for this creative to be displayed in."
  lockedOrientation: LockedOrientationEnum
  "The asset size of an internal redirect creative. Note that this may differ from \`size\` if users set \`overrideSize\` to true. This attribute is read-only and is populated by Google."
  assetSize: Size
  "The internal redirect URL of the DFA or DART for Publishers hosted creative. This attribute is required and has a maximum length of 1024 characters."
  internalRedirectUrl: String
  "Allows the creative size to differ from the actual size specified in the internal redirect's url. This attribute is optional."
  overrideSize: Boolean
  "\`true\` if this internal redirect creative is interstitial."
  isInterstitial: Boolean
  "The SSL compatibility scan result for this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
  "A list of impression tracking URLs to ping when this creative is displayed. This field is optional."
  thirdPartyImpressionTrackingUrls: [String]
}

"A \`Creative\` that isn't supported by Google DFP, but was migrated from DART. Creatives of this type cannot be created or modified."
type LegacyDfpCreative implements CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
}

"Describes the orientation that a creative should be served with."
enum LockedOrientationEnum {
  FREE_ORIENTATION
  LANDSCAPE_ONLY
  PORTRAIT_ONLY
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Stores values of CreativeTemplateVariable of VariableType#LONG."
type LongCreativeTemplateVariableValue implements BaseCreativeTemplateVariableValueInterface {
  "A uniqueName of the CreativeTemplateVariable."
  uniqueName: String
  "The long value of CreativeTemplateVariable"
  value: BigInt
}

"Enum of supported mime types"
enum MimeTypeEnum {
  "application/x-asp"
  ASP
  "audio/aiff"
  AUDIO_AIFF
  "audio/basic"
  AUDIO_BASIC
  "audio/flac"
  AUDIO_FLAC
  "audio/mid"
  AUDIO_MID
  "audio/mpeg"
  AUDIO_MP3
  "audio/mp4"
  AUDIO_MP4
  "audio/x-mpegurl"
  AUDIO_MPEG_URL
  "audio/x-ms-wma"
  AUDIO_MS_WMA
  "audio/ogg"
  AUDIO_OGG
  "audio/x-pn-realaudio-plugin"
  AUDIO_REAL_AUDIO_PLUGIN
  "audio/x-wav"
  AUDIO_WAV
  "application/binary"
  BINARY
  "application/dash+xml"
  DASH
  "application/x-director"
  DIRECTOR
  "application/x-shockwave-flash"
  FLASH
  "application/graphicconverter"
  GRAPHIC_CONVERTER
  "image/x-win-bitmap"
  IMAGE_BITMAP
  "image/bmp"
  IMAGE_BMP
  "image/gif"
  IMAGE_GIF
  "image/jpeg"
  IMAGE_JPEG
  "image/photoshop"
  IMAGE_PHOTOSHOP
  "image/png"
  IMAGE_PNG
  "image/tiff"
  IMAGE_TIFF
  "image/vnd.wap.wbmp"
  IMAGE_WBMP
  "application/x-javascript"
  JAVASCRIPT
  "application/json"
  JSON
  "application/x-mpegURL"
  M3U8
  "application/mac-binhex40"
  MAC_BIN_HEX_40
  "application/vnd.ms-excel"
  MS_EXCEL
  "application/ms-powerpoint"
  MS_POWERPOINT
  "application/msword"
  MS_WORD
  "application/octet-stream"
  OCTET_STREAM
  "application/pdf"
  PDF
  "application/postscript"
  POSTSCRIPT
  "message/rfc822"
  RFC_822
  "application/vnd.rn-realmedia"
  RN_REAL_MEDIA
  "application/rtf"
  RTF
  "text/calendar"
  TEXT_CALENDAR
  "text/css"
  TEXT_CSS
  "text/csv"
  TEXT_CSV
  "text/html"
  TEXT_HTML
  "text/java"
  TEXT_JAVA
  "text/plain"
  TEXT_PLAIN
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  "video/3gpp"
  VIDEO_3GPP
  "video/3gpp2"
  VIDEO_3GPP2
  "video/avi"
  VIDEO_AVI
  "video/x-flv"
  VIDEO_FLV
  "video/mp4"
  VIDEO_MP4
  "video/mp4v-es"
  VIDEO_MP4V_ES
  "video/mpeg"
  VIDEO_MPEG
  "video/x-ms-asf"
  VIDEO_MS_ASF
  "video/x-ms-wm"
  VIDEO_MS_WM
  "video/x-ms-wmv"
  VIDEO_MS_WMV
  "video/x-ms-wvx"
  VIDEO_MS_WVX
  "video/ogg"
  VIDEO_OGG
  "video/x-quicktime"
  VIDEO_QUICKTIME
  "video/webm"
  VIDEO_WEBM
  "application/xaml+xml"
  XAML
  "application/xhtml+xml"
  XHTML
  "application/xml"
  XML
  "application/zip"
  ZIP
}

"Performs action on Creative objects that match the given Statement#query. @param creativeAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of creatives @return the result of the action performed"
input PerformCreativeActionInput {
  creativeAction: JSONObject
  filterStatement: StatementInput
}

"A \`Creative\` used for programmatic trafficking. This creative will be auto-created with the right approval from the buyer. This creative cannot be created through the API. This creative can be updated."
type ProgrammaticCreative implements CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
}

"An externally hosted asset."
interface RedirectAssetInterface implements AssetInterface {
  _: Boolean
  "The URL where the asset is hosted."
  redirectUrl: String
}

"Represents a child asset in \`RichMediaStudioCreative\`."
type RichMediaStudioChildAssetProperty {
  "The name of the asset as known by Rich Media Studio. This attribute is readonly."
  name: String
  "Required file type of the asset. This attribute is readonly."
  type: RichMediaStudioChildAssetPropertyTypeEnum
  "The total size of the asset in bytes. This attribute is readonly."
  totalFileSize: BigInt
  "Width of the widget in pixels. This attribute is readonly."
  width: Int
  "Height of the widget in pixels. This attribute is readonly."
  height: Int
  "The URL of the asset. This attribute is readonly."
  url: String
}

"Type of \`RichMediaStudioChildAssetProperty\`"
enum RichMediaStudioChildAssetPropertyTypeEnum {
  "The rest of the supported file types .txt, .xml, etc."
  DATA
  "SWF files"
  FLASH
  "Image files"
  IMAGE
  "FLVS and any other video file types"
  VIDEO
}

"A \`Creative\` that is created by a Rich Media Studio. You cannot create this creative, but you can update some fields of this creative."
type RichMediaStudioCreative implements BaseRichMediaStudioCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The creative ID as known by Rich Media Studio creative. This attribute is readonly."
  studioCreativeId: BigInt
  "The creative format of the Rich Media Studio creative. This attribute is readonly."
  creativeFormat: RichMediaStudioCreativeFormatEnum
  "The type of artwork used in this creative. This attribute is readonly."
  artworkType: RichMediaStudioCreativeArtworkTypeEnum
  "The total size of all assets in bytes. This attribute is readonly."
  totalFileSize: BigInt
  "Ad tag keys. This attribute is optional and updatable."
  adTagKeys: [String]
  "Custom key values. This attribute is optional and updatable."
  customKeyValues: [String]
  "The survey URL for this creative. This attribute is optional and updatable."
  surveyUrl: String
  "The tracking URL to be triggered when an ad starts to play, whether Rich Media or backup content is displayed. Behaves like the \`/imp\` URL that DART used to track impressions. This URL can't exceed 1024 characters and must start with http:// or https://. This attribute is optional and updatable."
  allImpressionsUrl: String
  "The tracking URL to be triggered when any rich media artwork is displayed in an ad. Behaves like the \`/imp\` URL that DART used to track impressions. This URL can't exceed 1024 characters and must start with http:// or https://. This attribute is optional and updatable."
  richMediaImpressionsUrl: String
  "The tracking URL to be triggered when the Rich Media backup image is served. This attribute is optional and updatable."
  backupImageImpressionsUrl: String
  "The override CSS. You can put custom CSS code here to repair creative styling; e.g. \`tr td { background-color:#FBB; \`}. This attribute is optional and updatable."
  overrideCss: String
  "The Flash plugin version required to view this creative; e.g. \`Flash 10.2/AS 3\`. This attribute is read only."
  requiredFlashPluginVersion: String
  "The duration of the creative in milliseconds. This attribute is optional and updatable."
  duration: Int
  "The billing attribute associated with this creative. This attribute is read only."
  billingAttribute: RichMediaStudioCreativeBillingAttributeEnum
  "The list of child assets associated with this creative. This attribute is read only."
  richMediaStudioChildAssetProperties: [RichMediaStudioChildAssetProperty]
  "The SSL compatibility scan result of this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
  "A locked orientation for this creative to be displayed in."
  lockedOrientation: LockedOrientationEnum
  "\`true\` if this is interstitial. An interstitial creative will not consider an impression served until it is fully rendered in the browser. This attribute is readonly."
  isInterstitial: Boolean
}

"Rich Media Studio creative artwork types."
enum RichMediaStudioCreativeArtworkTypeEnum {
  "The creative is a Flash creative."
  FLASH
  "The creative is HTML5."
  HTML5
  "The creative is Flash if available, and HTML5 otherwise."
  MIXED
}

"Rich Media Studio creative supported billing attributes.  This is determined by Rich Media Studio based on the content of the creative and is not updateable."
enum RichMediaStudioCreativeBillingAttributeEnum {
  "Applies to any RichMediaStudioCreativeFormat#FLASH_IN_FLASH, without Video."
  FLASH_IN_FLASH
  "Applies to any of these following RichMediaStudioCreativeFormat, without Video: RichMediaStudioCreativeFormat#EXPANDING, RichMediaStudioCreativeFormat#IM_EXPANDING, RichMediaStudioCreativeFormat#FLOATING, RichMediaStudioCreativeFormat#PEEL_DOWN, RichMediaStudioCreativeFormat#IN_PAGE_WITH_FLOATING"
  FLOATING_EXPANDING
  "Applies to any RichMediaStudioCreativeFormat#IN_PAGE, without Video."
  IN_PAGE
  "Applies to any creatives that includes a video."
  VIDEO
}

"Different creative format supported by Rich Media Studio creative."
enum RichMediaStudioCreativeFormatEnum {
  "Expanding creatives expand/collapse on user interaction such as mouse over. It consists of an initial, or collapsed and an expanded creative area."
  EXPANDING
  "A Flash ad that renders in a Flash environment. The adserver will serve this using VAST, but it is not a proper VAST XML ad. It's an amalgamation of the proprietary InStream protocol, rendered inside VAST so that we can capture some standard behavior such as companions."
  FLASH_IN_FLASH
  "An expanding flash ad that renders in a Flash environment. The adserver will serve this using VAST, but it is not a proper VAST XML ad. It's an amalgamation of the proprietary InStream protocol, rendered inside VAST so that we can capture some standard behavior such as companions."
  FLASH_IN_FLASH_EXPANDING
  "Floating creatives float on top of publishers page and can be closed with a close button."
  FLOATING
  "Creatives that are served in an instant messenger application such as AOL Instant Messanger or Yahoo! Messenger. This can also be used in desktop applications such as weatherbug."
  IM_EXPANDING
  "In-app creatives are served into an ad slot within a publisher's app. In-app implies that they maintain a static size, e.g, 468x60 and do not break out of these dimensions."
  IN_APP
  "In-page creatives are served into an ad slot on publishers page. In-page implies that they maintain a static size, e.g, 468x60 and do not break out of these dimensions."
  IN_PAGE
  "An In-Page with Floating creative is a dual-asset creative consisting of an in-page asset and a floating asset. This creative type lets you deliver a static primary ad to a webpage, while inviting a user to find out more through a floating asset delivered when the user interacts with the creative."
  IN_PAGE_WITH_FLOATING
  "Peel-down creatives show a glimpse of your ad in the corner of a web page. When the user interacts, the rest of the ad peels down to reveal the full message."
  PEEL_DOWN
  "The creative format is unknown or not supported in the API version in use."
  UNKNOWN
}

"The different ways a video/flash can scale."
enum ScalableTypeEnum {
  "The creative should not be scaled."
  NOT_SCALABLE
  "The creative can be scaled and its aspect-ratio must be maintained."
  RATIO_SCALABLE
  "The creative can be scaled and its aspect-ratio can be distorted."
  STRETCH_SCALABLE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"A \`Creative\` that will be served into cable set-top boxes. There are no assets for this creative type, as they are hosted by external cable systems."
type SetTopBoxCreative implements BaseVideoCreativeInterface & HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "The expected duration of this creative in milliseconds."
  duration: Int
  "Allows the creative duration to differ from the actual asset durations. This attribute is optional."
  allowDurationOverride: Boolean
  "A map from \`ConversionEvent\` to a list of URLs that will be pinged when the event happens. This attribute is optional."
  trackingUrls: [ConversionEvent_TrackingUrlsMapEntry]
  "The IDs of the companion creatives that are associated with this creative. This attribute is optional."
  companionCreativeIds: [BigInt]
  "A comma separated key=value list of parameters that will be supplied to the creative, written into the VAST \`AdParameters\` node. This attribute is optional."
  customParameters: String
  "The ad id associated with the video as defined by the \`adIdType\` registry. This field is required if \`adIdType\` is not AdIdType#NONE."
  adId: String
  "The registry which the ad id of this creative belongs to. This field is optional and defaults to AdIdType#NONE."
  adIdType: AdIdTypeEnum
  "The type of skippable ad."
  skippableAdType: SkippableAdTypeEnum
  "An ad tag URL that will return a preview of the VAST XML response specific to this creative. This attribute is read-only."
  vastPreviewUrl: String
  "The SSL compatibility scan result of this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
  "An external asset identifier that is used in the cable system. This attribute is read-only after creation."
  externalAssetId: String
  "An identifier for the provider in the cable system. This attribute is read-only after creation."
  providerId: String
  "IDs of regions where the creative is available to serve from a local cable video-on-demand server. This attribute is optional."
  availabilityRegionIds: [String]
  "The date and time that this creative can begin serving from a local cable video-on-demand server. This attribute is optional."
  licenseWindowStartDateTime: DateTime
  "The date and time that this creative can no longer be served from a local cable video-on-demand server. This attribute is optional."
  licenseWindowEndDateTime: DateTime
}

"Enum to store the creative SSL compatibility manual override. Its three states are similar to that of SslScanResult."
enum SslManualOverrideEnum {
  NOT_SSL_COMPATIBLE
  NO_OVERRIDE
  SSL_COMPATIBLE
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Enum to store the creative SSL compatibility scan result."
enum SslScanResultEnum {
  SCANNED_NON_SSL
  SCANNED_SSL
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
  UNSCANNED
}

"Stores values of CreativeTemplateVariable of VariableType#STRING and VariableType#LIST."
type StringCreativeTemplateVariableValue implements BaseCreativeTemplateVariableValueInterface {
  "A uniqueName of the CreativeTemplateVariable."
  uniqueName: String
  "The string value of CreativeTemplateVariable"
  value: String
}

"A \`Creative\` that is created by the specified creative template."
type TemplateCreative implements CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "Creative template ID that this creative is created from."
  creativeTemplateId: BigInt
  "\`true\` if this template instantiated creative is interstitial. This attribute is read-only and is assigned by Google based on the creative template."
  isInterstitial: Boolean
  "\`true\` if this template instantiated creative is eligible for native adserving. This attribute is read-only and is assigned by Google based on the creative template."
  isNativeEligible: Boolean
  "Whether the Creative is compatible for SafeFrame rendering. This attribute is read-only and is assigned by Google based on the CreativeTemplate."
  isSafeFrameCompatible: Boolean
  "The URL the user is directed to if they click on the creative. This attribute is only required if the template snippet contains the \`%u\` or \`%%DEST_URL%%\` macro. It has a maximum length of 1024 characters."
  destinationUrl: String
  "Stores values of CreativeTemplateVariable in the CreativeTemplate."
  creativeTemplateVariableValues: [BaseCreativeTemplateVariableValueInterface]
  "The SSL compatibility scan result for this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
  "A locked orientation for this creative to be displayed in."
  lockedOrientation: LockedOrientationEnum
}

"A \`Creative\` that is served by a 3rd-party vendor."
type ThirdPartyCreative implements CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The HTML snippet that this creative delivers. This attribute is required."
  snippet: String
  "The HTML snippet that this creative delivers with macros expanded. This attribute is read-only and is set by Google."
  expandedSnippet: String
  "The SSL compatibility scan result for this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
  "A locked orientation for this creative to be displayed in."
  lockedOrientation: LockedOrientationEnum
  "Whether the Creative is compatible for SafeFrame rendering. This attribute is optional and defaults to \`true\`."
  isSafeFrameCompatible: Boolean
  "A list of impression tracking URLs to ping when this creative is displayed. This field is optional."
  thirdPartyImpressionTrackingUrls: [String]
}

"A \`Creative\` that isn't supported by this version of the API. This object is readonly and when encountered should be reported on the Ad Manager API forum."
type UnsupportedCreative implements CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The creative type that is unsupported by this API version."
  unsupportedCreativeType: String
}

"Updates the specified Creative objects. @param creatives the creatives to update @return the updated creatives"
input UpdateCreativesInput {
  creatives: [JSONObject]
}

"Stores values of CreativeTemplateVariable of VariableType#URL."
type UrlCreativeTemplateVariableValue implements BaseCreativeTemplateVariableValueInterface {
  "A uniqueName of the CreativeTemplateVariable."
  uniqueName: String
  "The url value of CreativeTemplateVariable"
  value: String
}

"A \`Creative\` that points to an externally hosted VAST ad and is served via VAST XML as a VAST Wrapper."
type VastRedirectCreative implements CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL where the 3rd party VAST XML is hosted. This attribute is required."
  vastXmlUrl: String
  "The type of VAST ad that this redirects to. This attribute is required."
  vastRedirectType: VastRedirectTypeEnum
  "The duration of the VAST ad in milliseconds. This attribute is required."
  duration: Int
  "The IDs of the companion creatives that are associated with this creative. This attribute is optional."
  companionCreativeIds: [BigInt]
  "A map from \`ConversionEvent\` to a list of URLs that will be pinged when the event happens. This attribute is optional."
  trackingUrls: [ConversionEvent_TrackingUrlsMapEntry]
  "An ad tag URL that will return a preview of the VAST XML response specific to this creative. This attribute is read-only."
  vastPreviewUrl: String
  "The SSL compatibility scan result for this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
  "Whether the 3rd party VAST XML points to an audio ad. When true, VastRedirectCreative#size will always be 1x1."
  isAudio: Boolean
}

"The types of VAST ads that a VastRedirectCreative can point to."
enum VastRedirectTypeEnum {
  "The VAST XML contains only \`linear\` ads."
  LINEAR
  "The VAST XML contains both \`linear\` and \`nonlinear\` ads."
  LINEAR_AND_NON_LINEAR
  "The VAST XML contains only \`nonlinear\` ads."
  NON_LINEAR
}

"A \`Creative\` that contains Ad Manager hosted video ads and is served via VAST XML."
type VideoCreative implements BaseVideoCreativeInterface & HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "The expected duration of this creative in milliseconds."
  duration: Int
  "Allows the creative duration to differ from the actual asset durations. This attribute is optional."
  allowDurationOverride: Boolean
  "A map from \`ConversionEvent\` to a list of URLs that will be pinged when the event happens. This attribute is optional."
  trackingUrls: [ConversionEvent_TrackingUrlsMapEntry]
  "The IDs of the companion creatives that are associated with this creative. This attribute is optional."
  companionCreativeIds: [BigInt]
  "A comma separated key=value list of parameters that will be supplied to the creative, written into the VAST \`AdParameters\` node. This attribute is optional."
  customParameters: String
  "The ad id associated with the video as defined by the \`adIdType\` registry. This field is required if \`adIdType\` is not AdIdType#NONE."
  adId: String
  "The registry which the ad id of this creative belongs to. This field is optional and defaults to AdIdType#NONE."
  adIdType: AdIdTypeEnum
  "The type of skippable ad."
  skippableAdType: SkippableAdTypeEnum
  "An ad tag URL that will return a preview of the VAST XML response specific to this creative. This attribute is read-only."
  vastPreviewUrl: String
  "The SSL compatibility scan result of this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
  "A URL that points to the source media that will be used for transcoding."
  videoSourceUrl: String
}

"The video delivery type."
enum VideoDeliveryTypeEnum {
  "Video will be served through a progressive download."
  PROGRESSIVE
  "Video will be served via a streaming protocol like HLS or DASH."
  STREAMING
  "The value returned if the actual value is not exposed by the requested API version."
  UNKNOWN
}

"Metadata for a video asset."
type VideoMetadata {
  "The scalable type of the asset. This attribute is required."
  scalableType: ScalableTypeEnum
  "The duration of the asset in milliseconds. This attribute is required."
  duration: Int
  "The bit rate of the asset in kbps. If the asset can play at a range of bit rates (such as an Http Live Streaming video), then set the bit rate to zero and populate the minimum and maximum bit rate instead."
  bitRate: Int
  "The minimum bitrate of the video in kbps. Only set this if the asset can play at a range of bit rates."
  minimumBitRate: Int
  "The maximum bitrate of the video in kbps. Only set this if the asset can play at a range of bit rates."
  maximumBitRate: Int
  "The size (width and height) of the asset. This attribute is required."
  size: Size
  "The mime type of the asset. This attribute is required."
  mimeType: MimeTypeEnum
  "The delivery type of the asset. This attribute is required."
  deliveryType: VideoDeliveryTypeEnum
  "The codecs of the asset. This attribute is optional and defaults to an empty list."
  codecs: [String]
}

"Metadata for a video asset."
input VideoMetadataInput {
  "The scalable type of the asset. This attribute is required."
  scalableType: ScalableTypeEnum
  "The duration of the asset in milliseconds. This attribute is required."
  duration: Int
  "The bit rate of the asset in kbps. If the asset can play at a range of bit rates (such as an Http Live Streaming video), then set the bit rate to zero and populate the minimum and maximum bit rate instead."
  bitRate: Int
  "The minimum bitrate of the video in kbps. Only set this if the asset can play at a range of bit rates."
  minimumBitRate: Int
  "The maximum bitrate of the video in kbps. Only set this if the asset can play at a range of bit rates."
  maximumBitRate: Int
  "The size (width and height) of the asset. This attribute is required."
  size: SizeInput
  "The mime type of the asset. This attribute is required."
  mimeType: MimeTypeEnum
  "The delivery type of the asset. This attribute is required."
  deliveryType: VideoDeliveryTypeEnum
  "The codecs of the asset. This attribute is optional and defaults to an empty list."
  codecs: [String]
}

"An externally-hosted video asset."
type VideoRedirectAsset implements RedirectAssetInterface & AssetInterface {
  _: Boolean
  "The URL where the asset is hosted."
  redirectUrl: String
  "Metadata related to the asset. This attribute is required."
  metadata: VideoMetadata
}

"An externally-hosted video asset."
input VideoRedirectAssetInput {
  "The URL where the asset is hosted."
  redirectUrl: String
  "Metadata related to the asset. This attribute is required."
  metadata: VideoMetadataInput
}

"A \`Creative\` that contains externally hosted video ads and is served via VAST XML."
type VideoRedirectCreative implements BaseVideoCreativeInterface & HasDestinationUrlCreativeInterface & CreativeInterface {
  "The ID of the advertiser that owns the creative. This attribute is required."
  advertiserId: BigInt
  "Uniquely identifies the \`Creative\`. This value is read-only and is assigned by Google when the creative is created. This attribute is required for updates."
  id: BigInt!
  "The name of the creative. This attribute is required and has a maximum length of 255 characters."
  name: String
  "The Size of the creative. This attribute is required for creation and then is read-only."
  size: Size
  "The URL of the creative for previewing the media. This attribute is read-only and is assigned by Google when a creative is created."
  previewUrl: String
  "Set of policy labels detected for this creative. This attribute is read-only."
  policyLabels: [CreativePolicyViolationEnum]
  "The set of labels applied to this creative."
  appliedLabels: [AppliedLabel]
  "The date and time this creative was last modified."
  lastModifiedDateTime: DateTime
  "The values of the custom fields associated with this creative."
  customFieldValues: [BaseCustomFieldValueInterface]
  "The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically."
  thirdPartyDataDeclaration: ThirdPartyDataDeclaration
  "The URL that the user is directed to if they click on the creative. This attribute is required unless the destinationUrlType is DestinationUrlType#NONE, and has a maximum length of 1024 characters."
  destinationUrl: String
  "The action that should be performed if the user clicks on the creative. This attribute is optional and defaults to DestinationUrlType#CLICK_TO_WEB."
  destinationUrlType: DestinationUrlTypeEnum
  "The expected duration of this creative in milliseconds."
  duration: Int
  "Allows the creative duration to differ from the actual asset durations. This attribute is optional."
  allowDurationOverride: Boolean
  "A map from \`ConversionEvent\` to a list of URLs that will be pinged when the event happens. This attribute is optional."
  trackingUrls: [ConversionEvent_TrackingUrlsMapEntry]
  "The IDs of the companion creatives that are associated with this creative. This attribute is optional."
  companionCreativeIds: [BigInt]
  "A comma separated key=value list of parameters that will be supplied to the creative, written into the VAST \`AdParameters\` node. This attribute is optional."
  customParameters: String
  "The ad id associated with the video as defined by the \`adIdType\` registry. This field is required if \`adIdType\` is not AdIdType#NONE."
  adId: String
  "The registry which the ad id of this creative belongs to. This field is optional and defaults to AdIdType#NONE."
  adIdType: AdIdTypeEnum
  "The type of skippable ad."
  skippableAdType: SkippableAdTypeEnum
  "An ad tag URL that will return a preview of the VAST XML response specific to this creative. This attribute is read-only."
  vastPreviewUrl: String
  "The SSL compatibility scan result of this creative. This attribute is read-only and determined by Google."
  sslScanResult: SslScanResultEnum
  "The manual override for the SSL compatibility of this creative. This attribute is optional and defaults to SslManualOverride#NO_OVERRIDE."
  sslManualOverride: SslManualOverrideEnum
  "The video creative assets."
  videoAssets: [VideoRedirectAsset]
  "The high quality mezzanine video asset."
  mezzanineFile: VideoRedirectAsset
}

type _CreativeInterfaceConnection {
  totalCount: Int!
  nodes: [CreativeInterface!]!
  statement: _StatementInfo!
  pageInfo: _PageInfo!
}

extend type Query {
  "Finds a single \`CreativeInterface\` by ID."
  _creative(input: _SingleRecordQueryInput!): CreativeInterface
    @findById(service: "Creative", action: "getCreativesByStatement")
}

extend type Query {
  "Finds multiple \`CreativeInterface\` objects based on the optional input parameters."
  _creatives(input: _MultipleRecordsQueryInput!): _CreativeInterfaceConnection!
    @find(service: "Creative", action: "getCreativesByStatement")
}

extend type Mutation {
  "Creates new Creative objects. @param creatives the creatives to create @return the created creatives with their IDs filled in"
  createCreatives(input: CreateCreativesInput!): [CreativeInterface]
    @soap(service: "Creative", action: "createCreatives")
}

extend type Query {
  "Gets a CreativePage of Creative objects that satisfy the given Statement#query. The following fields are supported for filtering:   PQL Property Object Property   \`id\` Creative#id   \`name\` Creative#name   \`advertiserId\` Creative#advertiserId   \`width\` Creative#size   \`height\` Creative#size   \`lastModifiedDateTime\` Creative#lastModifiedDateTime   @param filterStatement a Publisher Query Language statement used to filter a set of creatives @return the creatives that match the given filter"
  getCreativesByStatement(input: GetCreativesByStatementInput!): CreativePage
    @soap(service: "Creative", action: "getCreativesByStatement")
}

extend type Mutation {
  "Performs action on Creative objects that match the given Statement#query. @param creativeAction the action to perform @param filterStatement a Publisher Query Language statement used to filter a set of creatives @return the result of the action performed"
  performCreativeAction(input: PerformCreativeActionInput!): UpdateResult
    @soap(service: "Creative", action: "performCreativeAction")
}

extend type Mutation {
  "Updates the specified Creative objects. @param creatives the creatives to update @return the updated creatives"
  updateCreatives(input: UpdateCreativesInput!): [CreativeInterface]
    @soap(service: "Creative", action: "updateCreatives")
}

`;
