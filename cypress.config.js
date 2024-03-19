const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io',
    viewportWidth: 1024,
    viewportHeight: 768,
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
    }
  }
});
