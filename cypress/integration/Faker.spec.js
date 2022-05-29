/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Sign up form', () => {
  it('should allow to Sign Up by Faker', () => {
    const user = generateUser();
    cy.visit('#/register')

    cy.get('[placeholder="Username"]')
      .type(user.username)
      .should('have.value', user.username);

    cy.get('[placeholder="Email"]')
      .type(user.email)
      .should('have.value', user.email);

    cy.get('[placeholder="Password"]')
      .type(user.password)
      .should('have.value', user.password);
    
    cy.contains('.btn', 'Sign in')
      .click()

    cy.get(`[href="#@${user.username}"]`)
      .should('contain.text', user.username);
  });
});