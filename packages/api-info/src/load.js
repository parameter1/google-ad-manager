const cheerio = require('cheerio');
const fetch = require('node-fetch');
const { ROOT_URI } = require('@parameter1/google-ad-manager-constants');

let promise;

const load = async () => {
  const res = await fetch(ROOT_URI);
  const html = await res.text();
  return cheerio.load(html);
};

module.exports = async () => {
  if (!promise) promise = load();
  return promise;
};
