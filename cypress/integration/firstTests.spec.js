/// <reference types="cypress" />

describe('Sign In test', () => {
  it('should ', () => {
    cy.visit('https://react-redux.realworld.io')
      .get('h1')
      .should('contain.text', 'conduit');

    cy.contains('Sign in')
      .click();

    
  });
});