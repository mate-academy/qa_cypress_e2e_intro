/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });

  const username = 'Barny45';
  const userEmail = 'Barny45@gmail.com';

  it('should provide an ability to log in', () => {
    cy.get('[placeholder="Email"]')
      .type(userEmail);

    cy.get('[placeholder="Password"]')
      .type('testpass45');

    cy.get('[type="submit"]')
      .click();

    cy.get(`[href="#@${username}"]`)
      .should('contain.text', username);
  });
});
