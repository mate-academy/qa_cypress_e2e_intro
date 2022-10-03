/// <reference types="cypress" />

describe('Sign in with valid credentials', () => {
  it('should contain username at the navigation menu after successful login', () => {
    cy.visit('/login');

    cy.get(':nth-child(1) > .form-control')
      .type("tohac@mailinator.com");

    cy.get(':nth-child(2) > .form-control')
      .type("Pa$$w0rd!");

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should("contain.text", "duisveniam");
  });
});
