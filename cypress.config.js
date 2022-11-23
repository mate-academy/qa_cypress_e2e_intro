const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'f8w227',
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: 'https://react-redux.realworld.io/#',
    setupNodeEvents(on, config) {
    },
  },
})
