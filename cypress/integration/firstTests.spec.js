/// <reference types="cypress" />

describe ('my first test [Nataliia Solotva]', () => {
  before (() => {
    cy.visit('https://react-redux.realworld.io/')
  });
 
  it('should', () => {
    cy.contains('Sign in')
    .click()
    cy.get(':nth-child(1) > .form-control')
    .type('nataliia@qa.team');
    cy.get(':nth-child(2) > .form-control')
    .type('12345Qwert!');
    cy.get('.btn')
    .click();
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'nataliia123')
  });
});


