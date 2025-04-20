/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/');

    cy.get('h1.text-xs-center')
      .should('contain.text', 'Sign in');

    cy.get('[type="email"]')
      .type('test231@gmail.com');

    cy.get('[type="password"]')
      .type('ffefe234_vfe');

    cy.get('[type="submit"]')
      .should('contain.text', 'Sign in')
      .click();

    cy.get('.navbar')
      .should('contain.text', 'test420');
  });
});
