const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '8e6nxg',
  e2e: {
    baseUrl:'https://react-redux.realworld.io/#',
    setupNodeEvents(on, config) {
    },
  },
})
