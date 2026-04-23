/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const userEmail = '123@gmail.com';
    const userPassword = '123';

    cy.visit('https://conduit.mate.academy/');
    cy.contains('.nav-link', 'Sign in').click();

    cy.get('input[type="Email"]').type(userEmail);
    cy.get('input[type="Password"]').type(userPassword);

    cy.get('button').contains('Sign in').click();

    cy.contains('a', '123', { timeout: 10000 })
      .should('be.visible');
  });
});
