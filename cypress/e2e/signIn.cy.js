/// <reference types="cypress" />

describe('Sign in page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('should provide an ability to log in', () => {
    cy.contains('Sign in')
      .click();
    cy.get('h1')
      .should('contain.text','Sign In')
    cy.get(':nth-child(1) > .form-control')
      .type('test1@qa.team')
    cy.get(':nth-child(2) > .form-control')
      .type('Test12345')
    cy.get('.btn')
      .click();
    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text','fedvdvdv')
    });
  });

