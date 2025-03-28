/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/user/login');

    cy.get('[placeholder="Email"]')
      .type('usertest13091@mail.com');

    cy.get('[placeholder="Password"]')
      .type('test1234!');

    cy.contains('[type="submit"]', 'Sign in')
      .click();

    cy.get('.navbar.navbar-light')
      .should('contain.text', 'usertest13091');
  });
});
