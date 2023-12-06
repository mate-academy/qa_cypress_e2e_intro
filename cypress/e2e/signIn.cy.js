/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const user = 'testexample321';
    cy.visit('/');

    cy.contains('Sign in')
      .click();

    cy.get('[placeholder="Email"]')
      .type('test@example321.com');

    cy.get('[placeholder="Password"]')
      .type('passwordExaple321');

    cy.get('button[type="submit"]')
      .click();

    cy.get('nav.navbar')
      .contains(user)
      .should('exist');
  });
});
