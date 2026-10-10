/// <reference types="cypress" />

describe('Sign In', () => {
  it('should sign in and display the username in the header', () => {
    cy.visit('https://conduit.mate.academy/');

    cy.contains('a', 'Sign in').click();

    cy.get('input').eq(0).type(Cypress.env('email'));
    cy.get('input').eq(1).type(Cypress.env('password'), {
      log: false
    });

    cy.contains('button', 'Sign in').click();

    cy.contains('nav', Cypress.env('username')).should('be.visible');
  });
});
