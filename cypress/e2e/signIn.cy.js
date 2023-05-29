/// <reference types="cypress" />

describe('Sign In page', () => {
  const userEmail = 'test_userqwe123@gmail.com';
  const userPassword = 'test_userqwe123';

  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io')
  });
  it('should provide an ability to log in', () => {
    cy.contains('a', 'Sign in')
      .click();
    cy.get('[placeholder="Email"]')
      .type(userEmail)
    cy.get('[placeholder="Password"]')
      .type(userPassword)
    cy.contains('.btn', 'Sign in')
      .click()
    cy.get('.nav-link')
      .should('contain', 'test_userqwe123');
  });
});
