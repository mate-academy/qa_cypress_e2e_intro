/// <reference types="cypress" />

describe('Sign In Flow', () => {
  it('should sign in and assert username in header', () => {
    // Visit the sign-in page
    cy.visit('https://react-redux.realworld.io/#/login');

    // Fill in email and password fields with valid data
    cy.get('input[type="email"]').type('olga@yahoo.com');
    cy.get('input[type="password"]').type('Ol123--');

    // Click on [Sign In] button
    cy.get('button[type="submit"]').click();

    // Assert username in the site navigation header
    cy.contains('.nav-link', 'olgav').should('be.visible');
  });
});
