/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit ('https://react-redux.realworld.io')
    cy.get (':nth-child(2) > .nav-link').click()

    cy.get ('[placeholder="Email"]')
    .type('join@qa.team')

    cy.get ('[placeholder="Password"]')
    .type('qwerty12')
      
    cy.get('.btn')
    .click()

    cy.contains('willl')
    .should('be.visible')
  });
});
