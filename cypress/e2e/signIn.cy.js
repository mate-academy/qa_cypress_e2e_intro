/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/');
    cy.get('nav').should('contain.text', 'Sign up');
    cy.get('nav').should('contain.text', 'Sign in');
    // Register
    cy.get('.nav-item').get('a').contains('Sign up').click();
    cy.url().should('contain', 'register');
    cy.get('nav').should('contain.text', 'Sign up');
    cy.get('body').should('exist');
    cy.get('input[placeholder="Username"]').type('JohnSmith2010');
    cy.get('input[placeholder="Email"]').type('JohnSmith2010@mail.com');
    cy.get('input[placeholder="Password"]').type('JohnSmithpassword');
    cy.get('h1.text-xs-center').click();
    // cy.get('form button').contains('Sign up').click();
    // Login
    cy.get('.nav-item').get('a').contains('Sign in').click();
    cy.url().should('contain', 'login');
    cy.get('nav').should('contain.text', 'Sign in');
    cy.get('body').should('exist');
    cy.get('input[placeholder="Email"]').type('JohnSmith2010@mail.com');
    cy.get('input[placeholder="Password"]').type('JohnSmithpassword');
    cy.get('form button').contains('Sign in').click();
    cy.get('a.nav-link').should('contain.text', 'JohnSmith2010');
  });
});
