/// <reference types="cypress" />
describe('Sigh In page', () => {
  // const username = 'user'+Math.floor(Math.random(1000)*10000);
  // const email = username+'@mail.com';
  // const password = 'Test12test'
  it('Visit "Sign in" page', () => {
    cy.visit('https://react-redux.realworld.io')
      .contains('Sign in')
      .click();
  });
  it('Fill login and password fields as valid data', () => {
    cy.get(':nth-child(1) > .form-control')
      .type('testrun1@qa.team');
      cy.get(':nth-child(2) > .form-control')
      .type('testrun');
  });
  it('Click [Sign In] button', () => {
    cy.get('.btn')
      .contains('Sign in')
      .click();
  });
  it('Assert your username appeared in "Site navigation (Header)" menu', () => {
    cy.get('nav')
      .should('contain.text','testrun');
  });
});
