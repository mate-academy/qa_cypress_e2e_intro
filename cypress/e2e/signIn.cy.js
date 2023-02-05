/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit(`https://react-redux.realworld.io/#/login?_k=xwpbdz`)
     .get('h1')
     .should('contain.text', 'Sign In');  

    cy.get(':nth-child(1) > .form-control')
     .type('totoro777@mail.com')

    cy.get(':nth-child(2) > .form-control')
     .type('totoro777!');

    cy.contains('.btn', 'Sign in')
     .click();

     cy.get('.navbar')
    .should('contain.text', 'totoro777'); 

  });

});
