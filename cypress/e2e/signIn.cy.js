/// <reference types="cypress" />

describe('Sign In page', () => {
  const userName = 'Expectopatronum';
  const email = 'harrypo1ter@i.ua';
  const password = 'Qwerty321';

  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should sign in with correct credentials', () => {
    cy.get(':nth-child(2) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type(email);
    cy.get(':nth-child(2) > .form-control')
      .type(password);
    cy.contains('.btn', 'Sign in')
      .click();
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', userName);
  });
});
