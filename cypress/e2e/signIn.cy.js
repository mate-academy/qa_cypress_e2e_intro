/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const email = `testuser${Math.random().toString(36).substring(7)}@example.com`;
    const username = email.split('@')[0];
    const password = 'password1234';
    
    cy.visit('https://react-redux.realworld.io/#/register');

    cy.get('input[type="text"]').type(username);
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);

    cy.get('button[type="submit"]').contains('Sign in').click();

    
    //cy.get('.nav-link').contains(username).should('be.visible');

    cy.contains('Settings').click();
    cy.contains('Or click here to logout.').click();
    cy.contains('Sign in').should('be.visible');

    cy.visit('https://react-redux.realworld.io/#/login');

    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);

    cy.get('button[type="submit"]').contains('Sign in').click();

    cy.get('.nav-link').contains(username).should('be.visible');
  });
});
