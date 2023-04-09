/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io')

    cy.get(':nth-child(2) > .nav-link').click()

    cy.get('[placeholder="Email"]').type('gooz@gmail.com')

    cy.get('[placeholder="Password"]').type('1111')

    cy.get('.btn').click()

    cy.contains('Gooz').should('be.visible')
  });
});
