/// <reference types="cypress" />

describe('Sign In page', () => {
  it('sign in page should be visitable', () => {
    cy.on('uncaught:exception', () => false);

    cy.visit('https://react-redux.realworld.io');

    cy.get('a').contains('Sign in').should('be.visible');

    cy.get('a').contains('Sign in').click();

    cy.url().should('include', '/login');

    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');

    cy.get('[placeholder=Email]')
      .type('pedro.pascal@gmail.com');

    cy.get('[placeholder=Password]')
      .type('test1234');

    cy.get('button').contains('Sign in').should('be.visible');

    cy.contains('button', 'Sign in').click();

    cy.get('nav').contains('Pedro').should('be.visible');
  });
});
