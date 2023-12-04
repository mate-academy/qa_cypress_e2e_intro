/* eslint-disable max-len */
/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in and assert username in header', () => {
    cy.visit('/');

    cy.contains('Sign in')
      .click();

    cy.get('[placeholder="Email"]')
      .type('testing@again.com');

    cy.get('[placeholder="Password"]')
      .type('testingagain17');

    cy.get('button[type="submit"]')
      .click();

    cy.get('.navbar')
      .contains('testingagain17')
      .should('exist');
  });
});
