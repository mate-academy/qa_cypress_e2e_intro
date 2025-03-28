/// <reference types="cypress" />

describe('Sign In page', () => {

  const email = 'anna_anna111@mail.com'
  const password = 'anna_anna111'

  it('should provide an ability to log in', () => {
    cy.visit('/');

    cy.get(':nth-child(2) > .nav-link')
      .click();

    cy.get(':nth-child(1) > .form-control')
      .type(email);

    cy.get(':nth-child(2) > .form-control')
      .type(password);

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'anna_anna111');
  });
});
