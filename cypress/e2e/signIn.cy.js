/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');

    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.get('[placeholder=Email]')
      .type('User_test123@gmail.com');

    cy.get('[placeholder=Password]')
      .type('User_test123');

    cy.get('.btn').click();

    cy.contains('a', 'User_test123');
  });
});
