/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Login page', () => {

  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io'); 
  });
    
  it('should Login user with valid data', () => {   

      cy.get(':nth-child(2) > .nav-link')
        .click( )
        
        cy.get(':nth-child(1) > .form-control')
          .type('qazwsx2@i.ua');
        
        cy.get(':nth-child(2) > .form-control')
          .type('123456');

        cy.get('.btn')
          .click();

        cy.get(':nth-child(4) > .nav-link')
          .should('contain', 'qazwsx2');     

        cy.get('.navbar-brand')
        .should('contain', 'conduit');

        cy.get(':nth-child(3) > .nav-link')
          .click();

        cy.get('.btn-outline-danger')
        .click();

  });   

  it.only('Sign up with faker', () => {
    
    const user = generateUser();
             
      // cy.visit('https://react-redux.realworld.io');
    
        cy.get(':nth-child(3) > .nav-link')
          .click();
 
        cy.get(':nth-child(1) > .form-control')
          .type(user.username);
  
        cy.get(':nth-child(2) > .form-control')
          .type(user.email);
  
        cy.get(':nth-child(3) > .form-control')
          .type(user.password);
      
        cy.get('.btn')
          .click();
      
        cy.get(':nth-child(4) > .nav-link')
          .should('contain', user.username)

        });  

});