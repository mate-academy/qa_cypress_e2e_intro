/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign up page', () => {
    it('successful registration', () => {
      cy.visit('/');
  
      cy.contains('Sign up')
        .click();
  
      cy.url()
        .should('include', '/register');

      const {username, email, password} = generateUser();
      
      cy.get(':nth-child(1) > .form-control')
        .type(username);
      
      cy.get(':nth-child(2) > .form-control')
        .type(email);

      cy.get(':nth-child(3) > .form-control')
        .type(password + '{enter}');
  
      cy.get(':nth-child(4) > .nav-link')
        .should('contain', username);
    });
  });
  