// <reference types="cypress" />
describe('My first tests', () => {
  it('should log in and show username at the right side of the header', () => {
    ///I couldn't handle cypress.config.js
    cy.visit('https://react-redux.realworld.io');
    
    cy.get(':nth-child(2) > .nav-link')
    .click();
    cy.get(':nth-child(1) > .form-control')
    .click()
    .type("samurai@i.ua");
    cy.get(':nth-child(2) > .form-control')
    .click()
    .type("samurai");
    cy.get('.btn')
    .click();
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', "afterlife");
  });
});