/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Opening login page
    cy.visit('https://react-redux.realworld.io');
    cy.get('.navbar').contains('a', 'Sign in').click();
    // Filling data
    cy.get('input[placeholder=Email]').type('test@mail.come');
    cy.get('input[placeholder=Password]').type('1234');
    // Valideting data
    cy.get('form button').contains('Sign in').click();
    // Logged in page check
    cy.get('.navbar').should('contain.text', 'Tester_911');
  });
});
