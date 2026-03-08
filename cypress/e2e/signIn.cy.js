/// <reference types="cypress" />

describe('Sign In flow', () => {
  it('should sign in and show username in header', () => {
    const email = 'testuser123@mail.com';
    const password = 'testuser123';

    cy.visit('https://react-redux.realworld.io');

    cy.contains('Sign in').click();

    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);

    cy.contains('button', 'Sign in').click();

    cy.get('nav').should('contain', 'testuser123');
  });
});
