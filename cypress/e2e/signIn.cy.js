/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const existingUsername = 'vlad';
    const existingEmail = 'vlad@gmail.com';
    const existingPassword = 'vlad1234';

    cy.visit('/user/login');

    cy.contains('h1', 'Sign in').should('be.visible');

    cy.get('input[type="email"]').type(existingEmail);
    cy.get('input[type="password"]').type(existingPassword);
    cy.get('.btn').click();

    cy.contains(`a[href="/profile/${existingUsername}"]`, existingUsername).should('be.visible');
  });
});
