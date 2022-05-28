/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Your Second Test', () => {
  it('Sign up with faker', () => {
    const user = generateUser();
    
    cy.visit('/');

    cy.contains('a', 'Sign up')
    .click();
    
    cy.get('[placeholder="Username"]')
    .type(user.username)

    cy.get('[placeholder="Email"]')
    .type(user.email)

    cy.get('[placeholder="Password"]')
    .type(user.password)

    cy.contains('.btn', 'Sign in')
    .click()

    cy.contains('a', user.username)
  });
});