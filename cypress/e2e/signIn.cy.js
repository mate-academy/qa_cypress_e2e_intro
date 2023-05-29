/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://react-redux.realworld.io/#/?_k=59lou9');

    
  });
});

describe('Sign In', () => {
  it('should visit "Sign in" page', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=2yktql');

    cy.contains('Sign in')
     .click();
  });
});

describe('Login Test', () => {
  it('should log in successfully', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=2yktql');

    // Fill in email and password fields
    cy.get('input[type="email"]').type('matzger@gmail.com');
    cy.get('input[type="password"]').type('Me771835');

    // Click on Sign In button
    cy.contains('button', 'Sign in').click();

    
  });
});

describe('Login Test', () => {
  it('should log in successfully', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=2yktql');

    // Fill in email and password fields
    cy.get('input[type="email"]').type('matzger@gmail.com');
    cy.get('input[type="password"]').type('Me771835');

    // Click on Sign In button
    cy.contains('button', 'Sign in').click();
    cy.contains('.nav-link', 'Matzger')

    
  });
});
