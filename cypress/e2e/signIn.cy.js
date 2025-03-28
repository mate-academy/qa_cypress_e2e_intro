/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {

    const email = 'tests123@gmail.com';
    const password = 'test123456';
    cy.visit('https://react-redux.realworld.io/#/login?_k=ve75es');
    
    cy.get(':nth-child(1) > .form-control') 
      .type(email);

    cy.get(':nth-child(2) > .form-control')
      .type(password);

    cy.get('.btn').contains('Sign in').click();
    cy.get(':nth-child(4) > .nav-link').should('contain','tests123');

  });
});
