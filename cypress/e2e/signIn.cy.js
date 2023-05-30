/// <reference types="cypress" />

describe('Sign In page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should provide an ability to log in', () => {
    cy.get(':nth-child(2) > .nav-link')
   .click();
   cy.url() .should('include','/login');

   cy.get(':nth-child(1) > .form-control')
   .type('test36@gmail.com');
   cy.get(':nth-child(2) > .form-control')
   .type('12345678');
   cy.get('.btn')
   .click();
   cy.get(':nth-child(4) > .nav-link')
   .should('contain','test360')
  });

});
