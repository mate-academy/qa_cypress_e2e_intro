/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io')

    cy.get(':nth-child(2) > .nav-link')
      .click()

    cy.get(':nth-child(1) > .form-control')
      .type('tester007@mail.com')
    
    cy.get(':nth-child(2) > .form-control')
      .type('0123456789')

    cy.get('.btn')
      .click();

    cy.get((':nth-child(4) > .nav-link'))
      .should('contain', 'tester_007');
  });
});  
