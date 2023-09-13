/// <reference types="cypress" />

describe('Sign In', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should Sign In', () => {
    const username = 'test123456dasdas';
    const email = 'lotar@mailinator.com';
    const password = 'testqa123!';
    cy.contains('Sign in').click()
    cy.get('h1').should('contain', 'Sign In')
    cy.url().should('include', '/login')
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Password"]').type(password)
    cy.get('.btn').click()
    cy.get('[class="nav-link"]').should('contain', username)
    cy.get('[class="nav-link active"]').should('contain', 'Your Feed')
  });

});
