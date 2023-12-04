/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get('.navbar a').contains('Sign in').click();
    cy.get('input[placeholder="Email"]').type('paparapa@test.com');
    cy.get('input[placeholder="Password"]').type('Passw0rd');
    cy.get('form button').contains('Sign in').click();
    cy.get('.navbar a').should('contain', 'paparapa');
  });
});
