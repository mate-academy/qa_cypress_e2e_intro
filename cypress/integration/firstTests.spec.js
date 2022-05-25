/// <reference types="cypress" />

describe('Sign in form', () => {
  it('should allow to login', () => {
    cy.visit('https://react-redux.realworld.io/#/')

    cy.get(':nth-child(2) > .nav-link')
      .click()

    cy.url()
      .should('include', 'login?')

    cy.get(':nth-child(1) > .form-control') 
      .type('jucehesaw@mail.ua')
      .should('have.value', 'jucehesaw@mail.ua')
    
    cy.get(':nth-child(2) > .form-control')
      .type('jucehesaw')
      .should('have.value', 'jucehesaw')

    cy.get('.btn')
      .click()

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'jucehesaw')
  });
});
