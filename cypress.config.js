const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://react-redux.realworld.io/#/?_k=gc7rjl',
    setupNodeEvents(on, config) {
    }
  }
});
