/// <reference types="cypress" />

describe('User ia able to', () => {
      before(() => {
        cy.visit('https://react-redux.realworld.io');
    });

    
       it('to Sign In with valid data', () => {
      cy.get(':nth-child(2) > .nav-link')
      .click();
      cy.get(':nth-child(1) > .form-control')
      .type ('user2025@mailinator.com');
      cy.get(':nth-child(2) > .form-control')
      .type('user2222');
      cy.get('.btn')
      .click();

      cy.get(':nth-child(4) > .nav-link')
       .should('contain', 'user2030');
  
     });
});




