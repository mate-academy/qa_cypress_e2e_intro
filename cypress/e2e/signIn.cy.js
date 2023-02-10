/// <reference types="cypress" />

describe('Sign In page', () => {

  it('should provide an ability to log in', () => {
    cy.visit('/');

    cy.contains('a','Sign in')
      .click();

    cy.get('[placeholder="Email"]')
      .type('daianaouldhamouda@gmail.com');

    cy.get('[placeholder="Password"]')
      .type('password');
      
    cy.contains('button', 'Sign in')
      .click();

    cy.get('.navbar')
      .should('contain.text','daiana')
  });
});
