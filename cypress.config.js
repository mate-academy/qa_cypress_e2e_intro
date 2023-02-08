const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '81iw88',
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://react-redux.realworld.io'
  },
})
