/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign up with valid credentials', () => {
    it('should contain username at the navigation menu after successful registation', () => {
      const user = generateUser();

      cy.visit("/register");

      cy.get(':nth-child(1) > .form-control')
        .type(user.username);

      cy.get(':nth-child(2) > .form-control')
        .type(user.email);

      cy.get(':nth-child(3) > .form-control')
        .type(user.password);

      cy.get('.btn')
        .click();
      
      cy.get(':nth-child(4) > .nav-link')
        .should("contain.text", user.username)
    });
  });