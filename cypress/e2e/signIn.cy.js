/// <reference types="cypress" />

describe('Sign In page on Conduit', () => {

  it('should log in successfully and display username in header', () => {
    const email = 'naz@gmail.com';
    const password = 'qwerty';
    const username = 'naz';

    cy.visit('https://conduit.mate.academy/user/login');

    cy.get('input[placeholder="Email"]', { timeout: 10000 }).should('be.visible').type(email);
    cy.get('input[placeholder="Password"]').type(password);

    cy.contains('button', 'Sign in').click();

    cy.url().should('include', '/');

    cy.get('nav.navbar')
      .contains(username, { timeout: 10000 })
      .should('be.visible');
  });
});