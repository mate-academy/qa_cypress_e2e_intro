/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');
    cy.url().should('contain', 'https://conduit.mate.academy/user/login');
    cy.get(':nth-child(1) > .form-control').type('bubasbwdgb@wdbg.chew');
    cy.get(':nth-child(2) > .form-control').type('eigheigh383711w0');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', 'dudu');
  });
});
