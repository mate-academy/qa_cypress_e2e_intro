/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = 'test1234!@gmail.com';
  const password = 'Test1234!';

  beforeEach(() => {
    cy.visit('/user/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('input[type="email"]').type(email);

    cy.get('input[type="password"]').type(password);

    cy.get('button[type="submit"]').click();

    cy.url().should('equal', Cypress.config('baseUrl'));
  });

  it('should not Log in with wrong passowrd', () => {
    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('input[type="email"]').type(email);

    cy.get('input[type="password"]').type('xxxxxxx');

    cy.get('button[type="submit"]').click();

    cy.contains('li', 'is invalid');
  });

  it('should not Log in with wrong email', () => {
    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('input[type="email"]').type('email@xxx.xxx');

    cy.get('input[type="password"]').type(password);

    cy.get('button[type="submit"]').click();

    cy.contains('li', 'is invalid');
  });

  it('should not validate empty email', () => {
    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('input[type="password"]').type(password);

    cy.get('button[type="submit"]').click();

    cy.contains('li', 'email');

    // eslint-disable-next-line quotes
    cy.contains('li', "can't be blank");
  });

  it('should not validate empty password', () => {
    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('input[type="email"]').type(email);

    cy.get('button[type="submit"]').click();

    cy.contains('li', 'password');

    // eslint-disable-next-line quotes
    cy.contains('li', "can't be blank");
  });

  it('should not validate invalid email', () => {
    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('input[type="email"]').type('invalid_email');

    cy.get('input[type="password"]').type(password);

    cy.get('button[type="submit"]').click();

    cy.get('.error-messages').should('exist');
  });
});
