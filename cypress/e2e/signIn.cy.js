/// <reference types="cypress" />

// const { use } = require("chai");

describe('Sign In page', () => {
  const email = 'o@gmail.com'
  const password = 'asdasdasd'
  const username = 'asd123asd123'
  
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/')
    .get(':nth-child(2) > .nav-link').click()
    .get('[placeholder="Email"]').type(email)
    .get('[placeholder="Password"]').type(password)
    .get('.btn').click()
    
    .get('a').contains(username).should('have.text', username);
  });
});
