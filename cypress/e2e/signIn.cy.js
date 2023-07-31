/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/login');

    cy.contains('Sign in')
      .should('be.visible');

    cy.get('input[type="email"]')
      .type('bdv9874@gmail.com');

    cy.get('input[type="password"]')
      .type('bdv9874');

    cy.contains('button', 'Sign in')
      .click();
  });
});
