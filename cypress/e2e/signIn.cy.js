/* eslint-disable cypress/unsafe-to-chain-command */
/// <reference types="cypress" />

describe('Sign in', () => {
  before(() => {
    cy.visit('/');
  });
  it('should sign in with valid data', () => {
    cy.contains('a', 'Sign in')
      .should('exist');

    cy.contains('Sign in').click()
      .should('exist');

    cy.url()
      .should('include', '/login');

    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.get(':nth-child(1) > .form-control')
      .type('neon100@gmail.com');

    cy.get(':nth-child(2) > .form-control')
      .type('neon100');

    cy.contains('.btn', 'Sign in')
      .should('exist');

    cy.get('.btn').click()
      .should('exist');

    cy.contains('a', 'neon100')
      .should('contains.text', 'neon100');
  });
});
