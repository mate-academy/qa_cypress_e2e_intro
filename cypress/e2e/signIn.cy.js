/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/login');

    const email = 'testuser1@mail.com';
    const password = 'Usertest1@';

    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.get('[type=email]')
      .type(email);

    cy.get('[type=password]')
      .type(password);

    cy.get('.btn-lg')
      .click();

    cy.get('.navbar')
      .should('contain.text', 'TestUser1');
  });
});
