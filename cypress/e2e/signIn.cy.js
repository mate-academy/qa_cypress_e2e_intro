/// <reference types="cypress" />

beforeEach('My home page', () => {
  cy.visit('https://conduit.mate.academy/user/login');
});

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('[placeholder=Email]')
      .type('denis_ser@gmail.com');

    cy.get('[placeholder=Password]')
      .type('tramadol228syadu');

    cy.get('.btn')
      .click();

    cy.contains('a', 'denis_ser')
      .should('contain.text', 'denis_ser');

    cy.url().should('equal', 'https://conduit.mate.academy/');
  });
});
