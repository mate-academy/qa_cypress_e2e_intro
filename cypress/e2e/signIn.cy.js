/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'test_name';
  const email = 'test123456789@gmail.com';
  const password = 'test1234';

  beforeEach(() => {
    cy.visit('/user/login');
    cy.get('[placeholder="Email"]').type(email);
  });

  it('should log in if data is correct', () => {
    cy.get('[placeholder="Password"]')
      .type(password);
    cy.get('[type="submit"]')
      .click();
    cy.get('[href="/profile/test_name"]')
      .should('contain.text', username);
  });

  it('should not log in if data is not correct', () => {
    cy.get('[placeholder="Password"]')
      .type(password + 'incorrect');
    cy.get('[type="submit"]')
      .click();
    cy.get('.error-messages > li')
      .should('exist');
  });
});
