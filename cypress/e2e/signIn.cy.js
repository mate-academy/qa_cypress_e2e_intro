/// <reference types="cypress" />

const { generateUser } = require("../support/generate");

describe('Sign In page', () => {
   it('should provide an ability to log in', () => {
      const { email, username, password } = generateUser();

      cy.visit('https://react-redux.realworld.io/#/register')

      cy.get('[placeholder=Username]')
         .type(username)

      cy.get('[placeholder=Email]')
         .type(email)

      cy.get('[placeholder=Password]')
         .type(password)

      cy.contains('button', 'Sign in')
         .click()

      cy.get('.navbar')
         .contains(username)
         .should('be.visible')

      cy.contains('a', 'Settings')
         .click();

      cy.contains('button', 'Or click here to logout.')
         .click()

      cy.visit('https://react-redux.realworld.io/#/login');

      cy.get('[placeholder="Email"]')
         .type(email);

      cy.get('[placeholder="Password"]')
         .type(password);
      cy.contains('button', 'Sign in')
         .click();

      cy.get('.navbar')
         .contains(username)
         .should('be.visible')
   });
});
