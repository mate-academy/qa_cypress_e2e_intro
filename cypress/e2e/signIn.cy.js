/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.contains('Sign in').should('be.visible');

    cy.contains('Sign in').click();

    cy.get('[placeholder=Email]')
      .type('Tanya@mail.com');

    cy.get('[placeholder=Password]')
      .type('Tanya12345');

    cy.get('button').click();

    cy.contains('Tanya123').should('be.visible');
  });
});
