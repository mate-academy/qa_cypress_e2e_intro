const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    e2e: {
      baseUrl: 'https://react-redux.realworld.io'
    },
  },
})
