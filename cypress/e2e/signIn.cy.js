/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=3hrfl4');

    cy.get(':nth-child(1) > .form-control')
      .type('testing1045qa@mail.com');
    cy.get(':nth-child(2) > .form-control')
      .type('Testing1045');
    cy.get('.btn')
      .click();
      
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'testing1045qa');  
  });
});
