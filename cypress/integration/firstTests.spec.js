/// <reference types="cypress" />

describe('Sign in form', () => {
  beforeEach(() =>{
    cy.visit('/')
  })
  it('should allow to log in', () => {
    cy.get('h1')
      .should('contain.text', 'conduit');

    cy.contains('Sign in')
      .click();
    
    cy.get(':nth-child(1) > .form-control')
      .type('qwe_rty@gmail.com')
      .should('have.value', 'qwe_rty@gmail.com')

    cy.get(':nth-child(2) > .form-control')
      .type('123456')
      .should('have.value', '123456')

    cy.contains('.btn', 'Sign in')
      .click()

    cy.contains('qwe_rty')
      .should('contain.text', 'qwe_rty');
  });
  
});
