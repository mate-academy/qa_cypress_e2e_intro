/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('https://react-redux.realworld.io')
})

describe('First Test', () => {
  it('Sign In with valid data', () => {
  cy.get (':nth-child(2) > .nav-link')
    .click()
    .get (':nth-child(1) > .form-control')
    .type ('newuser2022@gmail.com')
    .get(':nth-child(2) > .form-control')
    .type('NewUser2022')
    .get('.btn')
    .click()

  cy.get (':nth-child(4) > .nav-link')
  .should('contain', 'newuser2022')
  });
});


const { generateUser } = require('../support/generate')
describe('Second test', () => {
   it('Sign Up with faker', () => { 
const {email, password, username} = generateUser();
cy.get (':nth-child(3) > .nav-link')
  .click()
  .get(':nth-child(1) > .form-control')
  .type (username)
  .get(':nth-child(2) > .form-control')
  .type (email)
  .get(':nth-child(3) > .form-control')
  .type (password)
  .get ('.btn')
  .click ()

cy.get (':nth-child(4) > .nav-link')
  .should('contain', username)
  });
});
