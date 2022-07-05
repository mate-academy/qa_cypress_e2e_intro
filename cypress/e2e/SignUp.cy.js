/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign up ', () => {
  before(() =>{
      cy.visit('/');
      });
  it('registration', () => {
    const {email, password, username} = generateUser();
    
    cy.contains('a', 'Sign up')
      .click();
    cy.get('[Placeholder = Username]')
      .type(username)
    cy.get('[Placeholder = Email]')
      .type(email)
    cy.get('[Placeholder = Password]')
      .type(password)
    cy.contains('button', 'Sign in')
      .click();
    cy.contains ('a', username);
  });
});
