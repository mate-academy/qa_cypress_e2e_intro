/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Visit the Sign In page
    cy.visit('https://react-redux.realworld.io/#/login');

    // Fill in email and password fields with valid data
    cy.get('input[type="email"]').type('qaalex100@gmail.com');
    cy.get('input[type="password"]').type('123qtv');

    // Click on Sign In button
    cy.contains('button', 'Sign in').click();

    // Assert username in navigation menu
    cy.get('.nav-item')
      .contains('100alex').should('exist');
  });
});
