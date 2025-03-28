/// <reference types="cypress" />

describe('Sign In page', () => { 
  beforeEach (() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=f59md1')
  });

  it('should provide an ability to log in', () => {
   cy.get (':nth-child(1) > .form-control').type('bibobobool@gmail.com');
   cy.get (':nth-child(2) > .form-control').type('Qwer123@');
   cy.get ('.btn'). click();
   cy.get (':nth-child(4) > .nav-link').should('contain.text','bibos');
  });
});
