/// <reference types="cypress" />

describe('Sign in page', ()=> {
  it('should provide ability to log in', () =>{
    cy.visit('https://react-redux.realworld.io/#/login?_k=oysvbs')

    cy.get(':nth-child(2) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type('tyui90@gmail.com');

    cy.get(':nth-child(2) > .form-control')
    .type('123456789testing');

    cy.get('.btn')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain.text', 'tyuio_user');
  });
});
