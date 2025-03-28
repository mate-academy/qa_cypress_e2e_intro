/// <reference types="cypress" />

describe('Sign In Test', () => {
  const user = {
    email: 'a1234567890@test.ua',
    password: 'a1234567890',
    username: 'a1234567890',
  };

  it('should sign in and assert username in header', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get('input[type="email"]')
      .type(user.email);
    cy.get('input[type="password"]')
      .type(user.password);
    cy.contains('button', 'Sign in')
      .click();
    cy.get('.nav-item')
      .contains('.nav-link', user.username)
      .should('be.visible');
  });
});

