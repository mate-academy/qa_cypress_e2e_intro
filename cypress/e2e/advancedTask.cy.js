/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Advanced level', () => {
  
  it('should go to the Sign Up page', () => {
    cy.visit('https://react-redux.realworld.io')
  
    cy.contains('.nav-link', 'Sign up')
      .should('exist')
      .click()
  
    cy.url()
      .should('include', '/register')
  })
  
  it('shoud register new user', () => {
    const { userEmail, userPassword, userName } = generateUser();

    cy.get(':nth-child(1) > .form-control')
      .type(userName)
  
    cy.get(':nth-child(2) > .form-control')
      .type(userEmail)

    cy.get(':nth-child(3) > .form-control')
      .type(userPassword)
  
    cy.contains('.btn', 'Sign in')
      .should('exist')
      .click()

    cy.contains(':nth-child(4) > .nav-link', `${userName}`)
      .should('exist')
  });
});