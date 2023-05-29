/// <reference types="cypress" />

const baseUrl = 'https://react-redux.realworld.io';
const username = 'Cytest';
const email = '123qwe@mail.com';
const password = '123qwe@mail.com';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit(baseUrl);

    cy.contains('Sign in')
    .click();
    
    cy.get('[type = email]')
    .type(email);

    cy.get('[type = password]')
    .type(password);

    cy.get('[type = submit]')
    .click();
    
    cy.get('[class = "nav-link active"]')
    .should('contains.text', 'Your Feed');

    cy.contains(username)
    .should('contains.text', username);
  }
  
  );
});
