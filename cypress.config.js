/* eslint-disable comma-dangle */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit.mate.academy',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {},
  },
});
