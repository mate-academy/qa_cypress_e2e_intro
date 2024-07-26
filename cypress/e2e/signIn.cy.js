/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get(':nth-child(1) > .form-control').type('QA2024test1@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('1234567890Qq');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', 'QA2024test');
  });
});
