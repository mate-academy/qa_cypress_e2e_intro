/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {

    //Visit "Sign in" page.
    cy.visit('https://react-redux.realworld.io')
      .get(':nth-child(2) > .nav-link')

    cy.contains('Sign in')
      .click()

    cy.url()
      .should('include', '/login')

    //Fill in email and password fields as valid data.
    cy.get(':nth-child(1) > .form-control')
      .type('testUser4@gmail.com')

    cy.get(':nth-child(2) > .form-control')
      .type('Aa123456')

    //Click on [Sign In] button
    cy.contains('.btn', 'Sign in')
      .click() 

    //Assert your username appeared in "Site navigation (Header)" menu
    cy.get(':nth-child(4) > .nav-link')
    .contains('testUser4')
    
  });
});

