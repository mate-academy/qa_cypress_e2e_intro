const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit.mate.academy',
    viewportHeight: 1200,
    setupNodeEvents(on, config) {
    }
  }
});
