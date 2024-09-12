/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/#/login');
  });

  it(`should provide an ability to log in`, () => {
    cy.get('h1')
      .should('contain.text', 'Sign in');

    cy.get(':nth-child(1) > .form-control')
      .type('user31@hotmail.com');

    cy.get(':nth-child(2) > .form-control')
      .type('Userpass1');

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'user31');
  });
});
