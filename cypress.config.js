const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
    }
  }
});
