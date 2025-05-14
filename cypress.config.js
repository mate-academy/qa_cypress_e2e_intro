/* eslint-disable max-len */
const { defineConfig } = require('cypress');
const { addMatchImageSnapshotPlugin } = require('@emerson-eps/cypress-image-snapshot/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: `https://react-redux.realworld.io`,
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
      return config;
    }
  }
});
