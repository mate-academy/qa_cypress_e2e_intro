/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should exist', () => {
    cy.visit('/');
    cy.contains('a', 'Sign in')
      .should('exist').click();

    cy.url().should('include', '/login');

    cy.get('h1').should('contain.text', 'Sign In');
  });

  it('should provide an ability to log in', () => {
    cy.get('h1').should('contain.text', 'Sign In');

    cy.get('input[type="email"]')
      .should('have.attr', 'placeholder', 'Email')
      .type('yakafab333@amankro.com');

    cy.get('input[type="password"]')
      .should('have.attr', 'placeholder', 'Password')
      .type('123456');

    cy.get('button[type="submit"]').should('contain.text', 'Sign in').click();

    cy.get('a').should('contain.text', 'username123456');
  });
});
