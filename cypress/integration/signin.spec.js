/// <reference types="cypress" />

const { generateUser } = require("../support/generate");

describe('Sign in', () => {
    beforeEach(() => {
      cy.visit('/login');
    });
  
    it('Should alow to login by valid data', () => {
      cy.findByPlaceholder('Email')
      .type('Juwan_Smith97@hotmail.com')

      cy.findByPlaceholder('Password')
      .type('12345Qwert!')

      cy.contains('.btn','Sign in')
        .click();
    
        cy.get(':nth-child(4) > .nav-link')
        .should('contain.text', 'Alva_Haag_6551')

    });

  });
 