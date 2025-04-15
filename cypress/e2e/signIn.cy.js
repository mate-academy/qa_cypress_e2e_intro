/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Visit the base URL or the Sign In page directly
    cy.visit('https://conduit.mate.academy/'); // Replace '/' with the actual URL path if needed

    // Click on the "Sign In" button in the navigation
    cy.get('a.nav-link[href="/user/login"]').click();

    // Fill in the email and password fields
    cy.get('input[placeholder="Email"]')
      .type('jarkko.kilpelainen@protonmail.com');
    cy.get('input[placeholder="Password"]')
      .type('jarkko.kilpelainen@protonmail.com');

    // Click the "Sign in" button
    cy.get('button[type="submit"]').click();

    // Assert that the username appears in the navigation menu
    cy.get('.nav-item .nav-link').contains('jarkkokilpe').should('be.visible'); // Replace 'testuser' with the expected username
  });
});
