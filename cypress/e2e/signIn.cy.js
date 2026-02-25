/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/');
    cy.contains('.nav-link', 'Sign in').should('exist');

    cy.contains('.nav-link', 'Sign in').click();

    cy.get('[placeholder=Email]').type('vitalii120296@gmail.com');
    cy.get('[placeholder=Password]').type('vitalii120296');

    cy.contains('.btn', 'Sign in').click();

    cy.contains('a', 'vitalii120296').should('exist');
  });
});
