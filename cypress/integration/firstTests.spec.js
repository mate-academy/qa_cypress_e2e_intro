/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Login page', () => {

  it('should Login user with valid data', () => {   

    cy.visit('https://react-redux.realworld.io');   

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

});