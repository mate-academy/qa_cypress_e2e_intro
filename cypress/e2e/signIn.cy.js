/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/');
    cy.contains('Sign in').click();
    cy.get('input[placeholder=Email]').type('vityok.nice@gmail.com');
    cy.get('input[placeholder=Password]').type('11111555');
    cy.get('button').click();
    cy.get('a.nav-link')
      .should('contain.text', 'vector');
  });
});
