/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should allow a user to sign in successfully', () => {
    // 1. Visit "Sign in" page
    cy.visit('https://react-redux.realworld.io/#/login');

    // 2. Fill in email and password fields as valid data
    // ⚠️ Use credentials of an existing user (replace below)
    const email = 'cypresstester@example.com';
    const password = 'Cypress123';
    const username = 'cypresstester';

    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);

    // 3. Click on [Sign In] button
    cy.get('button[type="submit"]').click();

    // 4. Assert username appears in the header navigation
    cy.contains('a.nav-link', username).should('be.visible');
  });
});
