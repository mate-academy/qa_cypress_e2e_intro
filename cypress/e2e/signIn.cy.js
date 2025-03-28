/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/user/login');
  });

  it('should provide an ability to log in', () => {
    cy.registerNewUser()
      .then(({ email, password, username }) => {
        cy.findByPlaceholder('Email')
          .type(email);

        cy.findByPlaceholder('Password')
          .type(password + '{Enter}');

        cy.visit('/');

        cy.contains('a', username);
      });
  });
});
