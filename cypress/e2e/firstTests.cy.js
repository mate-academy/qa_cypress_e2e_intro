const { generateUser } = require('../support/generate');
/// <reference types="cypress" />

describe('Test for sign up', () => {
  it('Visit page', () => {
    const {email, password, username} = generateUser();
    cy.visit('/');
    cy.contains('a', 'Sign up')
      .click();
    cy.get('[placeholder="Username"]')
     .type(username);
    cy.get('[placeholder="Email"]')
     .type(email);
    cy.get('[placeholder="Password"]')
     .type(password);
    cy.get('.btn') 
     .click();
    cy.get(':nth-child(4) > .nav-link')
     .should('contain', username)

  });
});
