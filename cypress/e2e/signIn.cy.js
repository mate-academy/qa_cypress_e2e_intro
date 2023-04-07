/// <reference types="cypress" />

describe ('Sign In page', () => {
    beforeEach(() => {
      cy.visit('https://react-redux.realworld.io/#/login')
    });
    it('should provide an ability to log in', () => {
  
      cy.get('[placeholder="Email"]')
        .type('tarrik2@qa.team')
  
      cy.get('[placeholder="Password"]')
        .type('Q223344')
  
      cy.contains('.btn', 'Sign in')
        .click();
  
      cy.get('nav')
        .should('contain.text', 'Tarik67890');
    });
  });
