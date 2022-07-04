module.exports = {
  
  e2e: {
    "baseUrl": "https://react-redux.realworld.io",
    
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
}
