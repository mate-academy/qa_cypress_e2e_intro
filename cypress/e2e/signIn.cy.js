/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=9da03w');

    cy.get('[placeholder=Email]').type('mart123@gmail.com');
    cy.get('[placeholder=Password]').type('Mart123!');

    cy.get('[type="submit"]').click();

    cy.contains('a', 'Marqa').should('exist');
  });
});
