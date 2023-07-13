/// <reference types="cypress" />

describe('Sign In Test', () => {
  it('should sign in successfully and verify username', () => {
    // Visit "Sign in" page
    cy.visit('https://react-redux.realworld.io/#/login');

    // Fill in email and password fields with valid data
    cy.get('input[type="email"]').type('snchkmelnyk+23@gmail.com');
    cy.get('input[type="password"]').type('qwerty123');

    // Click on "Sign In" button
    cy.contains('button', 'Sign in').click();

    // Assert that username appears in the "Site navigation (Header)" menu
    cy.get('.nav-link').should('contain', 'Lokus');
  });
});
