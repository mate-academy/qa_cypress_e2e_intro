/// <reference types="cypress" />

describe('Sign In', () => {
  it('should visit "Sign in" page and log in successfully', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=2yktql');

    // Check "Sign in" page
    cy.contains('h1', 'Sign In').should('be.visible');
    cy.url().should('include', '/login');
    cy.url().should('include', 'login');

    // Fill in email and password fields
    cy.get('input[type="email"]').type('matzger@gmail.com');
    cy.get('input[type="password"]').type('Me771835');

    // Click on Sign In button
    cy.contains('button', 'Sign in').click();

    // Assert that the username appears in the site navigation menu
    cy.contains('.nav-link', 'Matzger').should('be.visible');
  });
});
