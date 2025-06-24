const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit.mate.academy',
    viewportWidth: 1024,
    viewportHeight: 768,
    setupNodeEvents(on, config) {}
  }
});
