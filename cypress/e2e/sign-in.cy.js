/// <reference types="cypress" />

describe('User should be able', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('to Sign In with existing credentials', () => {
    cy.contains('Sign in')
      .click();
    
    cy.get(':nth-child(1) > .form-control')
      .type('qweasd987@mail.com');
    cy.get(':nth-child(2) > .form-control')
      .type('Qweasd1!');
    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .contains('qweasd987');
    

    

  });
});
