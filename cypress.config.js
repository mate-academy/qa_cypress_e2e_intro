module.exports = {
  e2e: {
    baseUrl: 'https://react-redux.realworld.io',
    env: {
      "apiUrl": "https://api.realworld.io/api",
    },
    specPattern: ['cypress/e2e/all.cy.js'],
  },
}
