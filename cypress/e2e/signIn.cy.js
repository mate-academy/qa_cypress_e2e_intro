/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const randomNumber = Date.now()
    const username = `user-${randomNumber}`
    const email = `user-${randomNumber}@example.com`
    const password = '121212Aa!'
    cy.request('POST', 'https://conduit.productionready.io/api/users', {
      "user": {
        username,
        email,
        password
      }
    })
    cy.visit('https://react-redux.realworld.io/')
    cy.contains('a', 'Sign in').click()
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Password"]').type(password)
    cy.contains('button', 'Sign in').click()
    cy.contains(':nth-child(4) > .nav-link', username)
  })
});
