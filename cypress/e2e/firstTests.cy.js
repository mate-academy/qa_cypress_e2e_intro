/// <reference types="cypress" />


describe('', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login')
  });
  
  it('Basic level/Sign In', () => {
    const userName = 'supertester';
    const userEmail = 'supertester@super.tester';
    const userPassword = 'supertester3000';

    cy.get(':nth-child(1) > .form-control')
      .type(userEmail);
    
    cy.get(':nth-child(2) > .form-control')
      .type(userPassword);

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain.text', userName)
  });
});
