/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Visit the Sign In page
    cy.visit('https://react-redux.realworld.io/#/login');

    // Fill in email and password fields with data
    cy.get('input[type=email]').type('kozlovskaya.h@gmail.com');
    cy.get('input[type=password]').type('Hanna1234');

    // Click on [Sign In] button
    cy.get('button[type=submit]').click();

    // Assert that the username appeared in the "Site navigation (Header)" menu
    cy.get('.nav-item', { timeout: 10000 })
      .contains('Hanna1234')
      .should('be.visible');
  });
});
