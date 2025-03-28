/// <reference types="cypress" />

describe('User should be able', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('to Sign In with valid credentials', () => {
    cy.get(':nth-child(2) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type('usernameTest@gmail.com');
    cy.get(':nth-child(2) > .form-control')
      .type('123qwerty!');
    cy.get('.btn')
      .click(); 

    
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'usernameTest');
  });
});
