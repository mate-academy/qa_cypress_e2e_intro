/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Define valid test credentials
    const credentials = {
      email: 'testuser@example.com',
      password: 'password123', // Replace with actual valid credentials
      username: 'TestUser'
    };

    // Visit the application
    cy.visit('https://react-redux.realworld.io');

    // Navigate to the "Sign In" page
    cy.contains('a', 'Sign in').click();

    // Fill in the email and password fields
    cy.get('input[type="email"]').type(credentials.email);
    cy.get('input[type="password"]').type(credentials.password);

    // Click on the [Sign In] button
    cy.get('button[type="submit"]').click();

    // Assert that the username appears in the site navigation header
    cy.get('.navbar').should('contain', credentials.username);
  });
});
