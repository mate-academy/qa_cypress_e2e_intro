/// <reference types="cypress" />

describe('Sign In page', () => {
  const BASE_USER = {
    name: 'test13213',
    email: 'test@test.test',
    password: 'test@test'
  };

  const FAKE_USER = {
    name: 'fake_user',
    email: 'fake_user@test.com',
    password: 'test@test1'
  };

  it('should visit on Sign in', () => {
    cy.visit('/user/login').get('h1').contains('Sign in');
  });

  it('should logs in successfully with valid credentials', () => {
    cy.login(BASE_USER);
  });

  it('shows error for invalid credentials', () => {
    cy.visit('/user/login');
    cy.get('input[type=email]').type(FAKE_USER.email);
    cy.get('input[type=password]').type(FAKE_USER.password);
    cy.get('.btn').click();
    cy.get('li').should('contain', 'email or password');
  });
});
