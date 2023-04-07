/// <reference types="cypress" />

describe('Sign in page', () => {

  it('should allow a user to sign in with credentials', () => {

    const randomNumber = Math.floor(Math.random() * 1000)
    const username = `test_user${randomNumber}`
    const email = `${username}@hotmail.com`
    const password = 'Qwerty1!'

    cy.visit('https://react-redux.realworld.io')
    cy.contains('a', 'Sign up').click()
    cy.get('[placeholder="Username"]').type(username)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Password"]').type(password)
    cy.contains('.btn', 'Sign in').click()
    cy.contains('a', 'Settings').click()
    cy.contains('.btn', 'Or click here to logout.').click()
    cy.contains('a', 'Sign in').click()
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Password"]').type(password)
    cy.contains('.btn', 'Sign in').click()
    cy.contains('a', 'Your Feed').should('exist')
    cy.contains('a', username).should('exist')
  });
});
