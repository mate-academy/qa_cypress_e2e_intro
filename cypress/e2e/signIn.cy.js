/// <reference types="cypress" />
const assert = require('assert');

describe('Sign In page', () => {
  it('should log in and display username in the header', () => {
    const baseUrl =
      Cypress.env('BASE_URL') || Cypress.env('BACKUP_URL');
    const expectedName = Cypress.env('USER_NAME');

    // Guard required env vars
    const requiredEnv = [
      'USER_EMAIL',
      'USER_PASSWORD',
      'USER_NAME',
      'BASE_URL'
    ];

    requiredEnv.forEach((key) => {
      const value = Cypress.env(key);
      const message = `Cypress.env(${key}) is defined`;
      assert.strictEqual(typeof value, 'string', message);
      assert.notStrictEqual(value, '', message);
    });

    // Intercept login API
    cy.intercept('POST', '**/users/login').as('loginRequest');

    // Visit homepage (main or backup)
    cy.visit(baseUrl);

    // Click "Sign in" link specifically
    cy.contains('a', 'Sign in').click();

    // Fill credentials
    cy.get('input[type="email"]').type(Cypress.env('USER_EMAIL'));
    cy.get('input[type="password"]').type(
      Cypress.env('USER_PASSWORD'),
      { log: false }
    );

    // Submit login
    cy.get('button[type="submit"]').contains('Sign in').click();

    // Assert login request response
    cy.wait('@loginRequest').then(({ response }) => {
      assert.strictEqual(response.statusCode, 200);
      assert.strictEqual(response.body.user.username, expectedName);
    });

    // Assert username appears in navbar link
    cy.get('nav').contains('a', expectedName)
      .should('be.visible');
  });
});
