import 'dotenv';
/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = process.env.WEBSITE_EMAIL || 'indiggoo228@gmail.com';
  const password = process.env.WEBSITE_PASSWORD || '1234pass';
  const username = process.env.WEBSITE_USERNAME || 'xeomzi';

  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/');
    cy.contains('a', 'Sign in').click();
    cy.get('[placeholder=Email]').type(email);
    cy.get('[placeholder=Password]').type(password);
    cy.contains('button', 'Sign in').click();
    cy.contains('a', username);
  });
});
