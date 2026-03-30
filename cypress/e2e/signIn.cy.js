/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/');
    cy.contains('a', 'Sign in').click();

    cy.get('input[placeholder="Email"]').type('nazar123@test.com');
    cy.get('input[placeholder="Password"]').type('12345678');

    cy.contains('button', 'Sign in').click();

    cy.contains('a', 'nazar123', { timeout: 10000 }).should('be.visible');
  });
});
