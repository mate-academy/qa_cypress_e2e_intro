/// <reference types="cypress" />

const URL = Cypress.env('CYPRESS_URL');
const email = Cypress.env('CYPRESS_EMAIL');
const password = Cypress.env('CYPRESS_PASSWORD');
const userName = Cypress.env('CYPRESS_USER_NAME');

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit(URL);
    cy.contains('Sign in').should('be.visible').click();

    cy.get('input[placeholder="Email"]').should('be.visible').type(email);
    cy.get('input[placeholder="Password"]').should('be.visible').type(password);

    cy.get('button').contains('Sign in').should('be.enabled').click();

    cy.get('nav').contains(userName).should('be.visible');
  });
});
