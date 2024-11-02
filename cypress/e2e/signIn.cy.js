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
      .type('1245676');

    cy.get('.btn')
      .click();

    cy.contains('a', 'Global Feed')
      .should('contain.text', 'Global Feed');

    cy.url().should('equal', 'https://conduit.mate.academy');
  });
});
