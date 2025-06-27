/// <reference types="cypress" />

const username = 'myusername';
const email = 'myuseremail@gmail.com';
const password = 'mypassword1234';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/');
    cy.contains('a', 'Sign in')
      .should('exist').click();

    cy.url().should('include', '/login');
    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('[placeholder=Email]')
      .type(`${email}`);

    cy.get('[placeholder=Password]')
      .type(`${password}`);

    cy.contains('button', 'Sign in')
      .should('exist').click();

    cy.contains('a', `${username}`)
      .should('exist');
  });
});
