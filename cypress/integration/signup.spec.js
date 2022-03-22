/// <reference types="cypress" />

const { generateUser } = require("../support/generate");
const {email, password, username } = generateUser();
describe('Sign up', () => {
    beforeEach(() => {
      cy.visit('/register');
    });
  
    it('Should alow to register a new user', () => {
      cy.findByPlaceholder('Username')
        .type(username)

      cy.findByPlaceholder('Email')
        .type(email)

      cy.findByPlaceholder('Password')
        .type(password)

      cy.contains('.btn','Sign in')
        .click();

      cy.get(':nth-child(4) > .nav-link')
        .should('contain', username)
    });
  });
