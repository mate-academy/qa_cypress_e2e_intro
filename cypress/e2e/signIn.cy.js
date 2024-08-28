/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get('input[type="email"][placeholder="Email"]')
      .type('testname321@gmail.com');
    cy.get('input[type="password"][placeholder="Password"]')
      .type('test321');
    cy.get('button.btn.btn-primary')
      .contains('Sign in')
      .click();
    cy.get('a.nav-link')
      .should('contain', 'testname321');
  });
});
