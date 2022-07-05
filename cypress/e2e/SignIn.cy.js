/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign in ', () => {
  before(() =>{
      cy.visit('/');
      });
  it('should login', () => {
    const {email, password, username} = generateUser();
   

    cy.request('POST', 'https://api.realworld.io/api/users', {
      user:{
        email,
        username,
        password
      }
    });

    cy.visit('/');
    cy.contains('a', 'Sign in')
      .click();
    cy.get('[Placeholder = Email]')
      .type(email)
    cy.get('[Placeholder = Password]')
      .type(password)
    cy.contains('button', 'Sign in')
      .click();
    cy.contains ('a', username);
  });
});
