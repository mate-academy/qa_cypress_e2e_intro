/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('User should be able to', () => {
  it('log in to the existing account', () => {
    const userData = {
      username: "Voluptatibus volupta",
      email: "foralixede@mailinator.com",
      password: "Qwerty123456",
    }
    
    const { username, email, password } = userData;

    cy.visit("#/login");

    cy.get('[placeholder="Email"')
      .type(email);

    cy.get('[placeholder="Password"')
      .type(password);

    cy.contains('.btn', "Sign in")
      .click();

    cy.get('.navbar-nav li:last-child a')
      .should('contain.text', username);
  });

  it('create an account with valid data', () => {
    cy.visit('#/register');

    const { username, email, password } = generateUser();

    cy.get('[placeholder="Username"')
    .type(username);

    cy.get('[placeholder="Email"')
    .type(email);

    cy.get('[placeholder="Password"')
    .type(password);

    cy.contains('.btn', "Sign in")
    .click();

    cy.get('.navbar-nav li:last-child a')
    .should('contain.text', username);
  })
});
