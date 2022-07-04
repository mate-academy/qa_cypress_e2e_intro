/// <reference types="cypress" />

describe('', () => {
  before(() => {
    
  });
  
  
  it('', () => {
   cy.visit('http://localhost:1667/#/login');
   cy.get(':nth-child(1) > .form-control')
     .type('kakoc@icloud.com')
    cy.get(':nth-child(2) > .form-control')
    .type('Asdqczes00')
    cy.get('.btn')
    .click();
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'Kakoc');
  });
});
