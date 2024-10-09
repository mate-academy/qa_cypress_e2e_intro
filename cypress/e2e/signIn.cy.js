/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.url().should('contain', '/login');

    cy.get(':nth-child(1) > .form-control').type('oaao@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('1234qaz');

    cy.get('.btn').click();

    cy.get('.navbar').should('contain', 'try');
  });
});
