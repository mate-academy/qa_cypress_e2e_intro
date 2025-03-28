/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {

    const email = 'test1307@gmail.com';
    const password = 'test1307@gmail.com';
    const username = 'test1307';

    cy.visit("https://react-redux.realworld.io");

    cy.get(':nth-child(2) > .nav-link')
      .click();

    cy.get(':nth-child(1) > .form-control')
      .type(email);
    cy.get(':nth-child(2) > .form-control')
      .type(password);
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', username);

  });

});
