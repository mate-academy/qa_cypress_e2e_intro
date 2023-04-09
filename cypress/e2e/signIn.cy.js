/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'testUser_VeronikaKondratova';
  const email = `${username}@mail.com`;
  const password = 'Password123';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in', () => {
    cy.findByPlaceholder('Email')
      .type(email);

    cy.findByPlaceholder('Password')
      .type(password);

    cy.contains('button', 'Sign in')
      .click();

    cy.assertPageUrl('/')

    cy.get('.navbar')
      .contains(username)
      .should('be.visible')
  });
});
