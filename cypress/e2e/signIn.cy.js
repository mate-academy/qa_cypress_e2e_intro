/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=qo38ok');
  });

  it('should load the sign in page', () => {
    cy.get('button[type="submit"]').contains('Sign in').should('be.visible');
  });

  it('should provide an ability to log in', () => {
    cy.get('input[type="email"]').type('zdzisia@pl.com');
    cy.get('input[type="password"]').type('Zdzisia12');
    cy.get('button[type="submit"]').click();
    cy.get('.navbar').should('contain', 'zdzisia');
  });
});
