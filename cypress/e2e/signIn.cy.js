/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');

    cy.get(':nth-child(1) > .form-control')
      .type('testdata.628@gmail.com');

    cy.get(':nth-child(2) > .form-control')
        .type('Testdata628&@');

    cy.get('.btn')
      .click();
    
    cy.get(':nth-child(4) > .nav-link')
      .contains('Test628');
  });
});
