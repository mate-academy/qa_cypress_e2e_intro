const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },

    "baseUrl": "https://react-redux.realworld.io",
    "viewportWidth": 1024,
    "viewportHeight": 768
  }
});

