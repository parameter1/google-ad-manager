const { gql } = require('apollo-server-express');

const common = require('../../../definitions');
const company = require('./company');

module.exports = gql`

${common}

${company}

`;
