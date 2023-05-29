/// <reference types="cypress" />
const email = 'test1239@gmail.com';
const password = 'Password123';
const username = '@test1239@gmail.com';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io')
  });

  test('should provide an ability to Sign in', () => {
    cy.contains('.nav-link', 'Sign in')
    .should('exist')
    .click();
    
  });

  test('should provide ability to enter password and email', () => {
    cy.get('.form-control form-control-lg', [placeholder = "Email"])
    .type(email);

    cy.get('.form-control form-control-lg', [placeholder = "Password"])
    .type(password);

  });

  test('should display the username in the header menu', () => {
    cy.get('.nav-link')
      .should('contain', username);
  });
  
});

