/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io')
  })
  it('should provide an ability to log in', () => {
    cy.get(':nth-child(2) > .nav-link').click('topRight')
    cy.contains('h1', 'Sign In').should('exist');
    cy.get(':nth-child(1) > .form-control').type('test321321@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('Qwerty123')  
    cy.get('.btn').click()
    cy.get(':nth-child(4) > .nav-link').should('contain', 'user321321')

  });

});
