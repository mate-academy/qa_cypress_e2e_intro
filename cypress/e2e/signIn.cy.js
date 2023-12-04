/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get('.navbar a').contains('Sign in').click();
    cy.get('input[type="email"]').type('kredki@kredki.com');
    cy.get('input[type ="password"]').type('kredki');
    cy.get('button[type="submit"]').click();
    cy.get('.navbar').should('contain', 'kredki');
  });
});
