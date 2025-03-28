/// <reference types="cypress" //

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=n4nj2g');
    cy.get(':nth-child(1) > .form-control').type('Jojo123!@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('Jojo123!');
    cy.get('.btn').click();
    cy.get('[data-reactroot=""]');
  });
});
