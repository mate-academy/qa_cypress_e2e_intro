/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=q7o83v')
  });
  it('should provide an ability to log in', () => {
    cy.contains('Sign In');
    cy.get(':nth-child(1) > .form-control')
      .type('qw@qamar.com');
    cy.get(':nth-child(2) > .form-control')
      .type('qwerty');
    cy.contains('.btn', 'Sign in')
      .click();

      cy.get(':nth-child(4) > .nav-link')
        .should('contain', 'vita');
  });
});
