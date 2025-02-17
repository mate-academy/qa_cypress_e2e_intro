const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://localhost:1667/#',
    viewportHeight: 768,
    viewportWidth: 1366
  }
});
