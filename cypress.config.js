const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://conduit.mate.academy',
    viewportHeight: 768,
    viewportWidth: 1366
  }
});
