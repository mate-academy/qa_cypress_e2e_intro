/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = Cypress.env('EMAIL');
  const password = Cypress.env('PASSWORD');
  const username = Cypress.env('USERNAME');

  beforeEach(() => {
    cy.visit('/user/login');
  });

  // eslint-disable-next-line max-len
  it('should log in with valid credentials and display username in header', () => {
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('button[type="submit"]').click();

    cy.get('.nav-item a').contains(username).should('be.visible');
  });
});
