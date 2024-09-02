/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/user/login');

    cy.registerNewUser().then((user) => user).as('user');
  });

  it('should provide an ability to log in', () => {
    cy
      .contains('h1', 'Sign in')
      .should('exist');

    cy.get('@user').then((user) => {
      const { email, username, password } = user;
      cy.getByPlaceholder('Email').type(email);
      cy.getByPlaceholder('Password').type(password);

      cy.submitFormByButton('Sign in');

      cy.isUserAuthenticated(username);
    });
  });
});
