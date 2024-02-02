const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 8000,
    baseUrl: 'http://localhost:1667',

    setupNodeEvents(on, config) {
    }
  }
});
