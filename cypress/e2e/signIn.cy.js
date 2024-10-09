/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');

    cy.get('h1')
      .should('contain.text', 'Sign in');

    // email entering
    cy.get('#email')
      .type('bybeg@mailinator.com');

    // password entering
    cy.get('#password')
      .type('Pa$$w0rd!');

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .contains('estetvelieaoff')
      .should('be.visible');
  });
});
