/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');
    cy.get('h1')
      .should('contain.text', 'Sign in');
    cy.get(':nth-child(1) > .form-control')
      .type('luckezcy@gmail.com');
    cy.get(':nth-child(2) > .form-control')
      .type('testPassword1!');
    cy.get('.btn')
      .click('bottom');
    cy.get(':nth-child(4) > .nav-link')
      .contains('luckezc');
  });
});
