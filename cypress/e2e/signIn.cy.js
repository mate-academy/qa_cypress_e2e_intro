/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io')
    
    .url().should('include', 'https://react-redux.realworld.io')

    cy.get(':nth-child(2) > .nav-link').should("contain.text", 'Sign in')

    cy.get(':nth-child(2) > .nav-link').click()

    .url().should('include', '/login')

    cy.get(':nth-child(1) > .form-control').click().type('testmail1234@gmail.com')

    cy.get(':nth-child(2) > .form-control').click().type('Password123@')

    cy.get('.btn').should("contain.text", 'Sign in').click()
    
    cy.get(':nth-child(4) > .nav-link').should("contain.text", 'TestUserName123')
  });
});
