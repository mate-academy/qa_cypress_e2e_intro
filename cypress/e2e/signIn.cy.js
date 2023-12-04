/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // visit main page
    cy.visit('https://react-redux.realworld.io/');

    // click Sign in
    cy.get('.navbar a').contains('Sign in').click();

    // check if Sign In page
    cy.url().should('contain', '/login');
    cy.get('h1').should('contain.text', 'Sign In');

    // fill email and password
    cy.get('input[placeholder="Email"]').type('radekqa04122023@qa.com');
    cy.get('input[placeholder="Password"]').type('radekqa04122023');

    // click Sign in
    cy.get('form button').contains('Sign in').click();

    // assert if username in header
    cy.get('.navbar a').should('contain', 'radekqa04122023');
  });
});
