/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/');

    cy.contains('a', 'Sign in').click();

    // I registered this email before running the tests

    cy.get('[placeholder=Email]').type('something@gmail.com');
    cy.get('[placeholder=Password]').type('Test1234');
    cy.contains('button', 'Sign in').click();

    cy.contains('a', 'Your Feed');
  });
});
