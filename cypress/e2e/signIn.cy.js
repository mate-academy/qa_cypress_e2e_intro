/// <reference types="cypress" />


describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const username = 'vesna23';
    const email = 'vesna23@gmail.com';
    const password = 'Vesna2023';
    cy.visit('/#/login')
    cy.get('[placeholder="Email"]')
      .type(email)
    cy.get('[placeholder="Password"]')
      .type(password);
    cy.contains('.btn', 'Sign in')
      .click();
    cy.get('.navbar')
      .should('contain', username);
  })
  });
