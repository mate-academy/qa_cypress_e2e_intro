/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/#/login?_k=7d9zy5');
    cy.get('input[placeholder="Email"]').type('testing123qwer@gg.com');
    cy.get('input[placeholder="Password"]').type('testing123');
    cy.get('button').contains('Sign in').click();
    cy.get('a.nav-link').should('contain.text', 'testing123qwer');
  });
});
