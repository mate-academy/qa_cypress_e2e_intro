/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('User can log in', () => {
    cy.get('a').contains('Sign in').click();
    cy.get('h1').should('contain.text', 'Sign In');
    cy.get('[placeholder=Email]').type('dad@gmail.com');
    cy.get('[placeholder=Password]').type('123456');
    cy.get('.btn').click();
    cy.get('a').contains('OlHor');
  });
});
