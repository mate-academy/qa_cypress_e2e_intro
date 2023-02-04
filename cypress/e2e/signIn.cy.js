/// <reference types="cypress" />

describe('Sign In page', () => {
beforeEach (() => {
  cy.visit('/#login')
});
  
  it('should provide an ability to log in', () => {
    const randomNumber = Math.random().toString().slice(2, 9)
    const username = `testik${randomNumber}`;
    const email = `${username}@qa.team`;
    const password = 'SuperPa$$word123';

    cy.request('POST', 'https://conduit.productionready.io/api/users', {
      user: {
      username,  
      email,
      password
  }});

    cy.get ('[placeholder="Email"]')
    .type(email)

    cy.get ('[placeholder="Password"]')
    .type(password)

     cy.get('.btn').contains('Sign in')
     .click();

     cy.get(':nth-child(4) > .nav-link')
     .contains(`${username}`)
      });
})

