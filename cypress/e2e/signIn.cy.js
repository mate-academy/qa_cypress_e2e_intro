/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/');
    // User Login
    cy.get('.nav-item').get('a').contains('Sign in').click();
    cy.url().should('contain', 'login');
    cy.get('input[placeholder="Email"]').type('JohnSmith2010@mail.com');
    cy.get('input[placeholder="Password"]').type('JohnSmithpassword');
    cy.get('form button').contains('Sign in').click();
    cy.get('a.nav-link').should('contain.text', 'JohnSmith2010');
  });
});
