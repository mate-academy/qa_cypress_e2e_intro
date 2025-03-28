/// <reference types="cypress" />

describe('Sign In page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io/#/?_k=n8smaz');
  });

  it('should provide an ability to log in', () => {
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('John-Wick231@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('John_Wick1');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', 'John-Wick231');
  });
});
