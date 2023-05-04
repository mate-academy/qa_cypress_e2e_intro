/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in', () => {
    cy.findByPlaceholder('Email')
      .type('some_user1@mail.com');

    cy.findByPlaceholder('Password')
      .type('Password123' + '{enter}');

    cy.assertPageURL('/');

    cy.get('.navbar-nav')
      .contains('Some_user')
      .should('be.visible');
  });
});
