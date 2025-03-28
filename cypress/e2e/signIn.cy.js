/// <reference types="cypress" />
// eslint-disable-next-line n/handle-callback-err
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('Sign In page', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=um8dk8');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('dmytro.horodchuk@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('1234');
    cy.get('.btn').click();
    // eslint-disable-next-line max-len
    cy.get(':nth-child(4) > .nav-link').should('include.text', 'dmytrohorodchuk');
  });
});
