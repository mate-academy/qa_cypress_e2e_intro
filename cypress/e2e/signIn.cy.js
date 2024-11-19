/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=dhqgo5');
    cy.get(':nth-child(1) > .form-control').type('oneTwo1234@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('oneTwo1234');
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', 'oneTwo1234');
  });
});

