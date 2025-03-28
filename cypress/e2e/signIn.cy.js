/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should provide an ability to log in', () => {
    cy.contains('a', 'Sign in').click();

    cy.url().should('include', 'login');

    cy.get('[placeholder="Email"]').type('nocahol682@nongnue.com');

    cy.get('[placeholder="Password"]').type('test12345');

    cy.contains('button', 'Sign in').click();

    cy.get('.nav-link').should('contain.text', 'dima');
  });
});
