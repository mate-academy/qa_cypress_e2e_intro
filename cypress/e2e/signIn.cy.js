// <reference types="cypress" />

describe('Sign In Flow (Stable for SPA)', () => {
  const email = Cypress.env('EMAIL');
  const password = Cypress.env('PASSWORD');
  const username = Cypress.env('USERNAME');

  it('logs in successfully and shows username in the navigation', () => {
    cy.intercept('POST', '**/users/login').as('loginRequest');

    cy.visit('/#/login');

    cy.get('input[type="email"]').should('be.visible').type(email);
    cy.get('input[type="password"]').should('be.visible').type(password);
    cy.get('form').contains('button', 'Sign in').should('be.enabled').click();

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    cy.get('nav', { timeout: 10000 })
      .contains('a', username)
      .should('be.visible');
  });
});
