/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const userEmail = 'qwerty@gmail.com';
    const userPassword = '123';

    cy.visit('https://conduit.mate.academy/');
    cy.contains('.nav-link', 'Sign in').click();

    cy.get('input[type="email"]').type(userEmail);
    cy.get('input[type="password"]').type(userPassword);

    cy.get('button').contains('Sign in').click();

    cy.contains('a', 'qwerty', { timeout: 10000 })
      .should('be.visible');
  });
});
