/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const username = 'first_cypress_test';
    const email = username + '@gmail.com';
    const password = 'most_secret_password';
    cy.visit('https://react-redux.realworld.io');
    cy.get('[href="#login"]')
      .click();
    cy.get('[placeholder="Email"]')
      .type(email);
    cy.get('[placeholder="Password"]')
      .type(password);
    cy.get('[type="submit"]')
      .click();
    cy.get('[class="navbar navbar-light"]')
      .should('contain.text', username);
  });
});
