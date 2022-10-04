/// <reference types="cypress" />

describe('My first test', () => {
  it('Should go to the main page', () => {
    cy.visit('https://react-redux.realworld.io')
  });

  it('Should click to the sign in button', () => {
    cy.contains('Sign in')
      .click()
  });

  it('Should type the text mail', () => {
    cy.get(':nth-child(1) > .form-control')
      .type('qwertyA@gmail.com')
  });  

  it('Should type a password', () => {
    cy.get(':nth-child(2) > .form-control')
    .type('qwertyA@')
  }); 
  
  it('Should click to the [Sign in] button', () => {
    cy.get('.btn')
      .click()
  });

  it('Assert your username appeared in "Site navigation (Header)" menu', () => {
    cy.get(':nth-child(4) > .nav-link')
      .contains('qwertyA')
  });  
  
});
