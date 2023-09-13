/// <reference types="cypress" />

describe('Sign In page', () => {
  
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  const email = 'rozmazninmykhailo@gmail.com';
  const password = 'con21CON4633';
  const username = 'mykhailorozmaznin'; 

  it('should provide an ability to log in', () => {
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type(email);
    cy.get(':nth-child(2) > .form-control').type(password);
    cy.get('.btn').click();

    cy.get('[class="nav-link"]').should('contain', username)
   });

});
