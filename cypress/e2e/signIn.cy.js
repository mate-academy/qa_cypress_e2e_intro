/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io')
  });
  it('should provide an ability to log in', () => {
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('natali@pie.com');
    cy.get(':nth-child(2) > .form-control').type('QA12345678');
    cy.get('.btn').click();
    cy.get(':nth-child(4) >.nav-link').should('contain.text', 'natalipie');
  });
});
