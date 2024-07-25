/// <reference types="cypress" />

describe('Sign In page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });
  
  it('should provide an ability to log in', () => {
        
    cy.get(':nth-child(1) > .form-control').type('gutnichenkoo@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('qwerty');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', 'agent008');
  });
});
