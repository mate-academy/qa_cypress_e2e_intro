/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login')
      .get('h1.text-xs-center')
      .should('contain.text', 'Sign in');

    cy.get('[type="email"]')
      .type('test420@mail.com');

    cy.get('[type="password"]')
      .type('Test1234!');

    cy.get('[type="submit"]')
      .should('contain.text', 'Sign in')
      .click();

    cy.get('.navbar')
      .should('contain.text', 'test420');
  });
});
