/// <reference types="cypress" />

// const { contains } = require("cypress/types/jquery");

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should provide an ability to log in', () => {
    cy.contains('Sign in')
      .click();
    cy.get('[placeholder="Email"]')
      .type('test_user_1@email.com');
    cy.get('[placeholder="Password"]')
      .type('123456789');
    cy.get('[type="submit"]')
      .click();
    cy.url()
      .should('contain', '/#/');
    cy.get(':nth-child(4) > .nav-link')
      .should('have.attr', 'href', '#@test__user_1');
  });
});
