const { createHash } = require('crypto');

module.exports = (contents) => createHash('sha1').update(contents).digest('hex');
