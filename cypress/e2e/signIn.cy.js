/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit(`https://react-redux.realworld.io`)
      .get('h1')
      .should('contain.text', 'conduit');

    cy.contains('a', 'Sign in')
      .click();

    cy.url()
      .should('include', '/login')

    cy.get(':nth-child(1) > .form-control')
      .type('satttinka@gmail.com')

    cy.get(':nth-child(2) > .form-control')
      .type('ljalj')

    cy.contains('.btn', 'Sign in')
      .click()

    cy.get('.navbar')
      .should('contain', 'Kris)')
  });
});
