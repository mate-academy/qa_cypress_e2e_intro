/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => cy.visit('https://conduit.mate.academy/user/login'));

  it('should provide an ability to log in', () => {
    cy.url().should('contain', 'user/login');

    cy.get(':nth-child(1) > .form-control').type('fortest123123@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('Qwerty123.');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', 'fortest123123');
  });
});
