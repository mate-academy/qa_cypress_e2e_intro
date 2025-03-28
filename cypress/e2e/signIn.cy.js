/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');

    cy.get('input[type="email"]').type('tester32@gmail.com');

    cy.get('input[type="password"]').type('test123');

    cy.get('button[type="submit"]').click();

    cy.get('.nav-link').contains('miki');
  });
});
