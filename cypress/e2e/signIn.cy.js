/// <reference types="cypress" />

describe('Sign In page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=7g16bq');
  });

  it('should provide an ability to log in', () => {
    cy.url()
      .should('include', '/login')
    
    cy.get('h1')
      .should('contain.text', 'Sign In')

    cy.get(':nth-child(1) > .form-control')
      .type('Anna_Maria1234@mail.com');

    cy.get(':nth-child(2) > .form-control')
      .type('Anna_Maria1234');
    
    cy.contains('.btn', 'Sign in')
      .click();
     
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'Anna_Maria1234')
  });
});
