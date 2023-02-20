/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const username = `qwerty123123123`;
    const email = `${username}@mail.com`;
    const password = 'qwerty123';

    cy.visit('/');

    cy.contains('a','Sign in').click();

    cy.get(`[placeholder="Email"]`)
      .type(email);
    cy.get(`[placeholder="Password"]`)
      .type(password + '{enter}');

    cy.contains('a', username).should('exist');
  });
});
