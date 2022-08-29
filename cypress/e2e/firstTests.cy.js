
/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign in page tests', () => {
    it('Should login the user', () => {

    cy.visit('https://react-redux.realworld.io/')
    cy.contains('Sign in')
      .click()

    cy.get('[placeholder="Email"]')
      .type('cypresstest.cypresstest@gmail.com')

    cy.get('[placeholder="Password"]')
      .type('cypresstest')
    
    cy.get('[class="btn btn-lg btn-primary pull-xs-right"]')
      .click()

    cy.contains('cypresstest1')
  });
});
