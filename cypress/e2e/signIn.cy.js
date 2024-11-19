/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const email = 'user1408@gmail.com';
    const password = 'user1205';
    const userName = 'user1408';

    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type(email);
    cy.get(':nth-child(2) > .form-control')
      .type(password);
    cy.get('.btn')
      .click();
    cy.get(':nth-child(4) > .nav-link').should('contain', userName);
  });
});
