const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 500,
    viewportHeight: 700,
    setupNodeEvents(on, config) {
    }
  }
});
