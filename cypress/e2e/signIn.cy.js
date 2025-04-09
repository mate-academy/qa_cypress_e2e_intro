/// <reference types="cypress" />

/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.fixture('user').as('userData');
  });

  it('should provide an ability to log in', function () {
    cy.visit('https://react-redux.realworld.io');

    cy.contains('Sign in').click();

    cy.get('input[type="email"]').type(this.userData.email);
    cy.get('input[type="password"]').type(this.userData.password);

    cy.get('button[type="submit"]').click();

    cy.get('nav').should('contain', this.userData.username);
  });
});


