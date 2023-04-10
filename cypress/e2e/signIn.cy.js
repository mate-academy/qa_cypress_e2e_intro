/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('[placeholder="Email"]').type('zwira@com.ua')
    cy.get('[placeholder="Password"]').type('zwira')
    cy.get('.btn').click()
    cy.contains('zwira').should('be.visible')

  });
});