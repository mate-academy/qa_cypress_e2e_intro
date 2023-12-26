/// <reference types="cypress" />


describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=cjy26t')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(1) > .form-control').type('Quia1@mailinator.com')
    cy.get(':nth-child(2) > .form-control').type('Quia1')
    cy.get('.btn').click()
    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'Quia1')

  });
});