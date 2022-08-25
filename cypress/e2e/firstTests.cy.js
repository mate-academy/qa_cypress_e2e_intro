/// <reference types="cypress" />

describe('successful login', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io')
  })
  it('should login registered user', () => {
    
    cy.get('.logo-font')
      .should('contain.text', 'conduit')

    cy.get(':nth-child(2) > .nav-link')
      .click();

    cy.url()
      .should('include', '/login')

    cy.get('h1.text-xs-center')
      .should('contain.text', 'Sign In'); 
    
    cy.get(':nth-child(1) > .form-control')
      .type('user1984@ukr.net');

    cy.get(':nth-child(2) > .form-control')
      .type('Dkqb6v349dk');  

    cy.get('.btn')
      .click();  

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'dfgsdgdf');       
  });
});
