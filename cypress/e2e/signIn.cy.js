/// <reference types="cypress" />

const logUsername = 'dsarvaaav';
const email = 'fdsfaasd13as@gmail.com';
const password = 'dsadfgafsa';

describe('my firs test', () => {
  it('should', () => {
    cy.visit('https://conduit.mate.academy/');

    cy.get(':nth-child(3) > .nav-link').click();

    cy.get(':nth-child(1) > .form-control')
      .type(logUsername);

    cy.get(':nth-child(2) > .form-control')
      .type(email);

    cy.get(':nth-child(3) > .form-control')
      .type(password);

    cy.get('.btn').click();
  });
});
