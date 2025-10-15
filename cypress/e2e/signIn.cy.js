/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should provide an ability to log in', () => {
    cy.visit('/user/login'); // this is correct url, '/login' does not exist here
    cy.findByPlaceholder('Email')
      .type(Cypress.env('USER_EMAIL'));
    cy.findByPlaceholder('Password')
      .type(Cypress.env('USER_PASSWORD'), { log: false });
    cy.contains('button', 'Sign in').click();
    cy.assertPageUrl('/');
    cy.contains('.nav-link', Cypress.env('USER_NAME')).should('be.visible');
  });
});
