/// <reference types="cypress" />

describe('Sign In page', () => {
  it.only('should provide an ability to log in', () => {
    // open page
    cy.visit('/');

    // Visit "Sign in" page.
    cy.get('.navbar a')
      .contains('Sign in')
      .click();
    cy.url()
      .should('include', '/#/');
    cy.get('h1').should('contain.text', 'Sign In');

    // Fill in email and password fields as valid data.
    cy.get('input[placeholder="Email"]')
      .type('test12345@op.pl');
    cy.get('input[placeholder="Password"]')
      .type('test123');

    // Click on [Sign In] button.
    cy.get('form button')
      .contains('Sign in')
      .click();

    // Assert your username appeared in "Site navigation (Header)" menu.
    cy.get('.navbar a')
      .should('contain', 'testop');
  });
});
