/// <reference types="cypress" />;

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/user/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('h1')
      .should('contain.text', 'Sign in');

    cy.get('[placeholder=Email]')
      .type('melamori1605@gmail.com');

    cy.get('[placeholder=Password]')
      .type('123456Test!!');

    cy.get('.btn[type=submit]')
      .click();

    cy.get('.navbar-nav li:last-child .nav-link')
      .type('calculatingmodel');
  });
});
