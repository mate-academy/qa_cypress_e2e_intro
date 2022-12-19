const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'k4mpar',
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://react-redux.realworld.io" 
  },
})
