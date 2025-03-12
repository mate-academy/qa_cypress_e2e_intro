/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should visit "Home" page', () => {
    cy.get('h1')
      .should('contain.text', 'conduit');
  });

  it('should visit "Sign in" page', () => {
    cy.contains('a', 'Sign in')
      .should('exist')
      .click();

    cy.url().should('include', '/login');

    cy.get('h1')
      .should('contain.text', 'Sign in');

    cy.contains('button', 'Sign in')
      .should('exist');
  });

  it('should sign in with valid credentials', () => {
    cy.contains('a', 'Sign in')
      .click();

    cy.url().should('include', '/login');

    cy.get('input[type="email"]').type('momos@gmail.com');
    cy.get('input[type="password"]').type('170384');

    cy.contains('button', 'Sign in').click();

    cy.get('.navbar').should('contain.text', 'momos');
  });
});
