/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
});

it('should provide an ability to LOG IN', () => {
  const username = 'test__user_1';
  const email = 'test_user_1@email.com';
  const password = '123456789';
  cy.contains('Sign in')
    .click();
  cy.get('[placeholder="Email"]')
    .type(email);
  cy.get('[placeholder="Password"]')
    .type(password);
  cy.get('[type="submit"]')
    .click();
  cy.url()
    .should('contain', '/#/');
  cy.get('a')
    .contains(username)
    .should('have.text', 'test__user_1');
});
