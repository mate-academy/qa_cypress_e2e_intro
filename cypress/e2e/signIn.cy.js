/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/');
    cy.contains('.nav-link', 'Sign in').should('exist');

    cy.contains('.nav-link', 'Sign in').click();

    cy.get('[placeholder=Email]').should('exist');
    cy.get('[placeholder=Password]').should('exist');
    cy.get('[placeholder=Email]').type('yuratest1234@gmail.com');
    cy.get('[placeholder=Password]').type('123456789');

    cy.contains('.btn', 'Sign in').click();

    cy.contains('.nav-link', 'yuratest1234').should('exist');
  });
});
