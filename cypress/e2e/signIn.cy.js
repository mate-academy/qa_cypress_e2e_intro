/// <reference types="cypress" />

describe('Sign In flow', () => {
  const username = 'testuser123';
  const email = 'testuser123@mail.com';
  const password = 'testuser123';

  it('should sign in and show username in header', () => {
    cy.visit('https://react-redux.realworld.io/#/login');

    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);

    cy.contains('button', 'Sign in').click();

    cy.contains('nav', username).should('be.visible');
  });
});
