/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const userName = 'cysignin';
    const email = 'cysignin@qa.team';
    const password = 'Cysignin1';

    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link').click();

    cy.get(':nth-child(1) > .form-control').type(email);

    cy.get(':nth-child(2) > .form-control').type(password);

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', userName);
  });
});
