'use strict';

/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get('[href="#login"]')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type('tester1234@wp.pl');
    cy.get(':nth-child(2) > .form-control')
      .type('tester1234@');
    cy.contains('.btn', 'Sign in')
      .click();
    cy.get('[href="#@Tester1234"]')
      .should('contain', 'Tester1234');
  });
});
