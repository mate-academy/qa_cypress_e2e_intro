/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // 1. Visit "Sign in" page
    cy.visit('https://react-redux.realworld.io/#/login');

    // 2. Fill in email and password fields as valid data
    cy.get('input[type="email"]').type('your-email@example.com');
    cy.get('input[type="password"]').type('your-password');

    // 3. Click on [Sign In] button
    cy.get('button[type="submit"]').click();

    // 4. Assert your username appeared in "Site navigation (Header)" menu
    cy.get('.nav-item').contains('your-username').should('be.visible');
  });
});
