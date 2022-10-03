/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Your Second Test', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('Sign In with valid data', () => {
    const { username, email, password } = generateUser();

    cy.contains('Sign up')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type(username);
    cy.get(':nth-child(2) > .form-control')
    .type(email);
    cy.get(':nth-child(3) > .form-control')
    .type(password);

    cy.get('.btn')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .contains(username)
  });
});