/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('User should be able', () => {

  it('to sign in with valid data', () => {
  
  const { email, password, username } = generateUser();

  cy.request('POST', 'https://api.realworld.io/api/users', {
    "user": {
      username,
      email,
      password
    }
  });

  cy.visit('/');
  
  cy.contains('a', 'Sign in')
    .click();

  cy.get('[placeholder="Email"]')
    .type(email);

  cy.get('[placeholder="Password"]')
    .type(password);

  cy.contains('.btn', 'Sign in')
    .click();

  cy.contains('.nav-link', `${username}`)
    .should('contain.text', `${username}`);

  });

  it('to sign up with valid data via Faker', () => {
  
  const { email, password, username } = generateUser();
  
  cy.visit('/');
  
  cy.contains('a', 'Sign up')
    .click();

  cy.get('[placeholder="Username"]')
    .type(username);

  cy.get('[placeholder="Email"]')
    .type(email);

  cy.get('[placeholder="Password"]')
    .type(password);

  cy.contains('.btn', 'Sign in')
    .click();

  cy.contains('.nav-link', `${username}`)
    .should('contain.text', `${username}`);

  });


});
