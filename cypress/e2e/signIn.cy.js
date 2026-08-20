/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const uniqueId = Date.now();
    const username = `qa${uniqueId}`;
    const email = `qa${uniqueId}@mail.com`;
    const password = 'asdf1234';

    cy.request('POST', '/api/users', {
      user: {
        username,
        email,
        password
      }
    });

    cy.clearCookies();

    cy.intercept('POST', '**/users/login').as('loginRequest');

    cy.visit('/user/login');

    const emailSelector =
      'input[placeholder="Email"], input[type="email"]';
    const passwordSelector =
      'input[placeholder="Password"], input[type="password"]';

    cy.get(emailSelector).should('be.visible');
    cy.get(emailSelector).clear();
    cy.get(emailSelector).type(email);

    cy.get(passwordSelector).should('be.visible');
    cy.get(passwordSelector).clear();
    cy.get(passwordSelector).type(password);

    cy.contains('button', 'Sign in')
      .should('be.visible')
      .and('be.enabled')
      .click();

    cy.wait('@loginRequest')
      .its('response.statusCode')
      .should('eq', 200);

    cy.get('nav')
      .contains('a', username)
      .should('be.visible');
  });
});
