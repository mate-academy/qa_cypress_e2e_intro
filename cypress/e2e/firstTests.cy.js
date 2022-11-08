/// <reference types="cypress" />

describe('My first tests', () => {
  it('should', () => {
    cy.visit('https://react-redux.realworld.io')
      .get('h1')
      .should('contain.text', 'conduit');

    cy.contains('Sign in')
      .click();

    cy.url()
      .should('include', '/login');

    cy.get('h1')
      .should('contain', 'Sign In');
  });
});
