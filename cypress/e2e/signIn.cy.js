/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = 'gooz@gmail.com';
  const password = '1111';

  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io')

    cy.get(':nth-child(2) > .nav-link')
    .click()

    cy.get('[placeholder="Email"]')
    .type(email)

    cy.get('[placeholder="Password"]')
    .type(password)

    cy.get('.btn')
    .click()

    cy.contains('Gooz')
    .should('be.visible')
  });
});
