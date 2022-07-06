/// <reference types="cypress" />

describe('', () => {
  it('', () => {
    cy.visit ('https://react-redux.realworld.io/#/login?_k=ks2hqr')

    cy.get(':nth-child(1) > .form-control')
    .type ('12345555@gmail.com')

    cy.get(':nth-child(2) > .form-control')
    .type ('12345Qwerty!')

    cy.get('.btn')
    .click ()
    
    cy.get(':nth-child(4) > .nav-link')
    .should ('contain , 12345555@gmail.com');



    
  });
});
