// THIS FILE IS GENERATED. DO NOT EDIT.
const { gql } = require('apollo-server-express');

const globalDefinitions = require('../../../definitions');
const adRule = require('./ad-rule');
const adjustment = require('./adjustment');
const adsTxt = require('./ads-txt');
const audienceSegment = require('./audience-segment');
const cdnConfiguration = require('./cdn-configuration');
const cmsMetadata = require('./cms-metadata');
const common = require('./common');
const company = require('./company');
const contact = require('./contact');
const content = require('./content');
const contentBundle = require('./content-bundle');
const creative = require('./creative');
const creativeSet = require('./creative-set');
const creativeTemplate = require('./creative-template');
const creativeWrapper = require('./creative-wrapper');
const customField = require('./custom-field');
const customTargeting = require('./custom-targeting');
const daiAuthenticationKey = require('./dai-authentication-key');
const daiEncodingProfile = require('./dai-encoding-profile');
const forecast = require('./forecast');
const inventory = require('./inventory');
const label = require('./label');
const lineItem = require('./line-item');
const lineItemCreativeAssociation = require('./line-item-creative-association');
const lineItemTemplate = require('./line-item-template');
const liveStreamEvent = require('./live-stream-event');
const mobileApplication = require('./mobile-application');
const nativeStyle = require('./native-style');
const network = require('./network');
const order = require('./order');
const placement = require('./placement');
const proposal = require('./proposal');
const proposalLineItem = require('./proposal-line-item');
const publisherQueryLanguage = require('./publisher-query-language');
const report = require('./report');
const segmentPopulation = require('./segment-population');
const site = require('./site');
const streamActivityMonitor = require('./stream-activity-monitor');
const suggestedAdUnit = require('./suggested-ad-unit');
const targetingPreset = require('./targeting-preset');
const team = require('./team');
const user = require('./user');
const userTeamAssociation = require('./user-team-association');
const yieldGroup = require('./yield-group');

module.exports = gql`

${globalDefinitions}
${adRule}
${adjustment}
${adsTxt}
${audienceSegment}
${cdnConfiguration}
${cmsMetadata}
${common}
${company}
${contact}
${content}
${contentBundle}
${creative}
${creativeSet}
${creativeTemplate}
${creativeWrapper}
${customField}
${customTargeting}
${daiAuthenticationKey}
${daiEncodingProfile}
${forecast}
${inventory}
${label}
${lineItem}
${lineItemCreativeAssociation}
${lineItemTemplate}
${liveStreamEvent}
${mobileApplication}
${nativeStyle}
${network}
${order}
${placement}
${proposal}
${proposalLineItem}
${publisherQueryLanguage}
${report}
${segmentPopulation}
${site}
${streamActivityMonitor}
${suggestedAdUnit}
${targetingPreset}
${team}
${user}
${userTeamAssociation}
${yieldGroup}

`;
