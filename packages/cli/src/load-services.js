const { ROOT_API_PATH, ROOT_URI } = require('@parameter1/google-ad-manager-constants');
const loadApiInfo = require('./load-api-info');

module.exports = async ({ version } = {}) => {
  const $ = await loadApiInfo();

  const selector = `a[href*="${ROOT_API_PATH}/${version}"]`;
  const services = [];
  $(selector).each(function getService() {
    const href = $(this).attr('href').replace(`/${ROOT_API_PATH}`, ROOT_URI);
    const name = $(this).text();
    services.push({
      name,
      value: href,
    });
  });
  return services;
};
