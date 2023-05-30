/// <reference types="cypress" />

describe('Sign In', () => {
  it('should visit "Sign in" page and log in successfully', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=2yktql');
    
     cy.get('input[type="email"]').type('koko321@gmail.com');
     cy.get('input[type="password"]').type('koko321');

     cy.contains('button', 'Sign in').click();

     cy.contains('.nav-link', 'koko321');
  });
});