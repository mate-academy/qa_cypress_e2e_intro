/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');
    cy.get('h1')
      .should('contain.text', 'Sign in');
    cy.get('input[placeholder="Email"]')
      .type('luckezcy@gmail.com');
    cy.get('input[placeholder="Password"]')
      .type('testPassword1!');
    cy.get('button[type="submit"]')
      .click('bottom');
    cy.get('a.nav-link')
      .contains('luckezc');
  });
});
