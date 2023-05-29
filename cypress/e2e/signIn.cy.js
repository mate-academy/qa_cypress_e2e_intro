/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit({ url: 'https://react-redux.realworld.io/#/login', method: 'GET'})
    cy.get('h1')
    .should('contain', 'Sign In')
  });

  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control')
    .type('ghostmane@qa.team')


    cy.get(':nth-child(2) > .form-control')
    .type('12345');

    cy.contains('.btn', 'Sign in')
    .click();

    cy.get('.navbar')
      .should('contain', 'ghostmane1');
  });
});
