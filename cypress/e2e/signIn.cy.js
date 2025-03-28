/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const email = 'somemail@gmail.com';
  const username = 'Somebody11';
  const password = 'qwerty123';

  it('should provide an ability to log in', () => {
    cy.findByPlaceholder('Email').type(email);
    cy.findByPlaceholder('Password').type(password);
    cy.get('.btn').click();
    cy.contains('a', username).should('be.visible');
  });
});
