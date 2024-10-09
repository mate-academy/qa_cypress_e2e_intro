/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');

    cy.get(':nth-child(1) > .form-control').type('test0@i.ua');

    cy.get(':nth-child(2) > .form-control').type('1234567890');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', 'test0');
  });
});
