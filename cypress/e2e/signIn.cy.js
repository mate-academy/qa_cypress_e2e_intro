/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const email = Cypress.env('EMAIL');
    const password = Cypress.env('PASSWORD');
    const username = Cypress.env('USERNAME');

    cy.intercept('POST', '**/users/login').as('loginRequest');

    cy.visit('/#/login');

    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="email"]').clear();
    cy.get('input[type="email"]').type(email);

    cy.get('input[type="password"]').should('be.visible');
    cy.get('input[type="password"]').clear();
    cy.get('input[type="password"]').type(password);

    cy.get('form')
      .find('button[type="submit"]')
      .should('be.visible')
      .and('be.enabled')
      .click();

    cy.wait('@loginRequest')
      .its('response.statusCode')
      .should('eq', 200);

    cy.get('nav')
      .contains('a', username)
      .should('be.visible');
  });
});
