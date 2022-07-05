/// <reference types="cypress" />

describe('', () => {
  before(() => {
    
  });
  
  
  it('', () => {
   cy.visit('https://react-redux.realworld.io/#/login');
   cy.get(':nth-child(1) > .form-control')
     .type('kakoc.pwn@gmail.com')
    cy.get(':nth-child(2) > .form-control')
    .type('321678')
    cy.get('.btn')
    .click();
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'Kakoc');
  });
});
