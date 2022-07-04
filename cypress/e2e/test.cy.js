/// <reference types="cypress" />

const { generateUser } = require('../support/generate')

describe('User should be able to', () => {

    
    
    it('login with valid data ', () => {
      const { email, password, username } = generateUser();

      cy.request('POST', 'https://api.realworld.io/api/users', {
        user: {
            email,
            username,
            password
        } 
      });
      cy.visit('/');
      cy.contains('a', 'Sign in')
        .click();
      cy.get('[Placeholder="Email"]')
        .type(email);
      cy.get('[Placeholder="Password"]')
        .type(password);
      cy.contains('Button', 'Sign in')
        .click();
      cy.contains('a', username);
    });

    it('register with valid data', () => {
        const { email, password, username } = generateUser();

        cy.visit('/');
        cy.contains('a', 'Sign up')
          .click();
        cy.get('[Placeholder="Username"]')
          .type(username);
        cy.get('[Placeholder="Email"]')
          .type(email);
        cy.get('[Placeholder="Password"]')
          .type(password);
        cy.contains('Button', 'Sign in')
          .click();
        cy.contains('a', username);
    });
});