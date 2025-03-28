/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
  });

const username = 'hgjukjmh'
const email = `${username}@gmail.com`
const password = '12345Qwert!'
describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=n0vz18')
    cy.get(':nth-child(1) > .form-control').type(email)
    cy.get(':nth-child(2) > .form-control').type(password)
    cy.contains('button', 'Sign in').click()
    cy.contains('a', username)
  });
});
