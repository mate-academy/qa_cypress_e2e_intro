/// <reference types="cypress" />

describe('', () => {
  it('filling Sign In page', () => {
   cy.visit('https://react-redux.realworld.io/')
  });
   it('should open Sign In page', () => {
    cy.contains('a', 'Sign in')
    .should('exist')
    .click();
    cy.url()
    .should('include', '/login');
    cy.get('h1')
    .should('contain.text', 'Sign In');
    cy.get('[placeholder="Email"]')
    .type('sky@mailinator.com');
    cy.get('[placeholder="Password"]')
    .type('00000');
   // .pause();
     cy.contains('.btn', 'Sign in')
    .click();
    cy.contains('.nav-link', 'Olga').should('exist');
     
     });    
});