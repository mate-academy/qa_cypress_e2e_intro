/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {

    cy.visit('https://conduit.mate.academy/user/login');

    cy.get('[placeholder=Email]').type('viktoriiap@ukr.net');
    cy.get('[placeholder=Password]').type('asdfGHJ56!$');


    cy.get('button[type="submit"]').click();

    cy.get('a.nav-link').should('contain.text', 'viktory');
  });
});
