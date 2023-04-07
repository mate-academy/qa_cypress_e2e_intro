/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'test_user_23';
  const email = username + '@test.com';
  const password = '12345Test';
  

  it('should provide an ability to log in', () => {
    cy.visit("https://react-redux.realworld.io")
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Password"]').type(password)
    cy.get('.btn').click()
    cy.contains(username).should('be.visible')
    cy.contains('Settings').should('be.visible')
    cy.contains('New Post').should('be.visible')
  });
});
