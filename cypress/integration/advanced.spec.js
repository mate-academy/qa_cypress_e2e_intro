/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign Up', () => {
  beforeEach(() => {
    cy.visit('/#/register')
  });
  
  it('should open Sign Up page', () => {
    cy.url()
    .should('include', '/register')
          
    cy.get('h1')
    .should('contain.text', 'Sign Up')
  });
  
  it('should register new account', () => {
    const { email, password, username } = generateUser();

    cy.get(`input[placeholder='Username']`)
    .type(username)
    .should('have.value', username)

    cy.get(`input[placeholder='Email']`)
      .type(email)
      .should('have.value', email)

    cy.get(`input[placeholder='Password']`)
      .type(password)
      .should('have.value', password)

    cy.get(`button[type='submit']`)
      .should('contain.text', 'Sign in')
      .click()

    cy.get(`a[href='#@${username}']`)
    .should('contain.text', username) 
  });
});
