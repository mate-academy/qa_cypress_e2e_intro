const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit.mate.academy/',
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {}
  }
});
