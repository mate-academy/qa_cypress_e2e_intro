/// <reference types="cypress" />
describe('Sign In page', () => {
  it('should log in user with registered credentials', () => {
    cy.visit('https://react-redux.realworld.io')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(1) > .form-control').type('anna213@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('anna23')
    cy.contains('.btn', 'Sign in').click()
    cy.get(':nth-child(4) > .nav-link').should('contain', 'anna23')
  });
});
