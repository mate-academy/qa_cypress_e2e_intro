const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit.mate.academy',
    viewportHeight: 820,
    viewportWidth: 500,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
    }
  }
});
