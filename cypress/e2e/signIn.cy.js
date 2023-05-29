/// <reference types="cypress" />
const SIGIN_URL = 'https://react-redux.realworld.io';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit(SIGIN_URL + '/#/login');
    
    cy.url().should('include', '/#/login');

    cy.get('h1')
      .should('contain.text', 'Sign In');

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
