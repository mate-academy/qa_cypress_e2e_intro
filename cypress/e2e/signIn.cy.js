/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
  
    cy.visit('https://react-redux.realworld.io/')
    
    cy.contains('Sign in')
      .click()
    
    cy.get('[placeholder="Email"]')
      .type('plrtuwi@qa.team')

    cy.get('[placeholder="Password"]')
      .type('hEllo123#')

    cy.contains('.btn', 'Sign in')
      .click()

    cy.get(':nth-child(4) > .nav-link')
     .should('contain', 'plrtuwi');
  });
});
