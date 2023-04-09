/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
  const email = 'tester@email.com';
  const username = 'S1mple2';
  const password = 'SlavaUkraine123';

  it('should provide an ability to log in', () => {

    cy.visit("https://react-redux.realworld.io/#/?_k=dz8lk8");
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.get('.btn').click();
    cy.contains(username).should('be.visible');

  });
});})
 
