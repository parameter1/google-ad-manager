const fs = require('fs');

class GoogleServiceAccount {
  /**
   *
   * @param {object} params
   * @param {string} params.jsonKeyFilePath An absolute path to the service account JSON file
   */
  constructor({ jsonKeyFilePath } = {}) {
    if (!jsonKeyFilePath) throw new Error('The Google service account JSON file path is required.');
    this.jsonKeyFilePath = jsonKeyFilePath;
  }

  /**
   * Loads the data from the JSON service account file.
   */
  load() {
    if (!this.data) this.data = JSON.parse(fs.readFileSync(this.jsonKeyFilePath, 'utf8'));
    return this.data;
  }

  /**
   * Retrieves a value from the service account file.
   *
   * @param {string} prop
   */
  get(prop) {
    return this.load()[prop];
  }
}

module.exports = GoogleServiceAccount;
