const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit.mate.academy',
    viewportHeight: 810,
    viewportWidth: 500,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
    }
  }

});
