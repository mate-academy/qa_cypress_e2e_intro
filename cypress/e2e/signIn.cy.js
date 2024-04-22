/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(`https://react-redux.realworld.io/#/login`);
  });
  it('should provide an ability to log in', () => {
    const username = 'dtworek';
    const email = 'dtworek@qa.team';
    const passwd = 'dominik1234';

    cy.url().should('include', 'login');
    cy.get('[placeholder = "Email"]').type(email);
    cy.get('[placeholder = "Password"]').type(passwd);
    cy.get('.btn').click();
    cy.get('.navbar-light').should('contain.text', username);
  });
});
