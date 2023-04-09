/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to sign in', () => {
    cy.visit('https://react-redux.realworld.io/')
    .contains('a', 'Sign in').click()
    .get('[placeholder="Email"]').type('testqwe@mate.com')
    .get('[placeholder="Password"]').type('1')
    .get('.btn').click()
    cy.contains('testmateja').should('be.visible')
  });
});
