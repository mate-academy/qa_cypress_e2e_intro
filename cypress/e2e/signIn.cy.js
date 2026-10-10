/// <reference types="cypress" />

describe('Sign In', () => {
  it('should sign in and display the username in the header', () => {
    const email = Cypress.env('email') || 'han@gmail.com';
    const password = Cypress.env('password') || '12345678';
    const username = Cypress.env('username') || 'han';

    cy.visit('https://conduit.mate.academy/');

    cy.contains('a', 'Sign in').click();

    cy.get('input').eq(0).type(email);
    cy.get('input').eq(1).type(password, {
      log: false
    });

    cy.contains('button', 'Sign in').click();

    cy.contains('nav', username).should('be.visible');
  });
});
