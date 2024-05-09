/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=6j0u59');
    cy.get(':nth-child(1) > .form-control').type('kateryna123@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('qwert123@');
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contains.text', 'Kateryna123');
  });
});
