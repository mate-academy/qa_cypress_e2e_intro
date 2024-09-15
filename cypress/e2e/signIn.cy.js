/// <reference types="cypress" />

const { generateNewUser } = require("../support/generateNewUser");

describe('Sign In page', () => {

  it('should provide an ability to log in', () => {
    cy.signUp().then(({ username, email, password }) => {
      cy.visit('https://react-redux.realworld.io/#/login?_k=qt0jum')

      cy.findByPlaceholder('Email').type(email)
      cy.findByPlaceholder('Password').type(password)

      cy.get('form').submit()

      cy.contains('a', username).should('be.visible')
    })
  });
});
