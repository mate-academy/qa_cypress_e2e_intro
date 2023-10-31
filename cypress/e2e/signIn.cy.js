/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.contains('a.nav-link', 'Sign in')
      .click();
    cy.get('[placeholder=Email]')
      .type('qlym1q@mail.com');
    cy.get('[placeholder=Password]')
      .type('AAAAAAAA');
    cy.get('button[type="submit"]')
      .click();
    cy.get('a.nav-link, [href="#qlym1q"]')
      .should('contain', 'qlym1q');
  });
});
