/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow user to login', () => {
    const email = 'qatester234@gmail.com';
    const password = 'qaqaqa123qa';

    cy.get('[href="#login"]')
      .click();

    cy.get('[placeholder=Email')
      .type(email);

    cy.get('[placeholder=Password')
      .type(password);

    cy.contains('[type="submit"]', 'Sign in')
      .click();

    cy.get('.navbar')
      .should('contain', 'qatester234');
  });
});
