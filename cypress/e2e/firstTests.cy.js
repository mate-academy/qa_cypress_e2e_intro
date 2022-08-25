/// <reference types="cypress" />

// describe('Registration page', () => {
  //   beforeEach (() => {
  //     cy.visit('https://react-redux.realworld.io');
  //   }
  //   );
  //   it('should register user with valid data', () => {
     
  
  //   });
  // });
  describe('Login page', () => {
    it('should login with valid date', () => {
      cy.visit('https://react-redux.realworld.io');

      cy.get(':nth-child(2) > .nav-link')
      .click();
     
      cy.get(':nth-child(1) > .form-control')
      .type('ramm_mann@gmail.com')

      cy.get(':nth-child(2) > .form-control')
      .type('232101Qq')

      cy.get('.btn')
      .click();

      cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'ramm_mann')
    });
  });
  