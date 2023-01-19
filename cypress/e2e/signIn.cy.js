/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/#/login');
  });

  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control')
      .type('test###@gmail.com')
    
    cy.get(':nth-child(2) > .form-control')
      .type('123456');

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'test###');
    
    
      
  });
});
