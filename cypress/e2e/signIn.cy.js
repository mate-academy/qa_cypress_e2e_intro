/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit ('https://react-redux.realworld.io/#/login')
    cy.get('[placeholder=Email]')
      .type ( 'bekind@hja.cgj');
    cy.get('[placeholder=Password]')
      .type ('qweqwe');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain','bekind');
  });
});
