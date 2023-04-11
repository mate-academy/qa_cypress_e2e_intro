/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login')
  });
  it('should provide an ability to log in', () => {
    cy.get('[placeholder="Email"]').type('qa123456@qa.team');
    cy.get('[placeholder="Password"]').type('qA123456');
    cy.contains('.btn', 'Sign in').click();
    cy.get('.article-preview').should('be.visible')
    cy.get(':nth-child(4) > .nav-link').contains('today').should('be.visible');
  });
});
