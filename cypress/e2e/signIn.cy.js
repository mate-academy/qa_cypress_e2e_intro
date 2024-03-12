/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in', () => {
    const username = 'user' + Math.round(Math.random(1000) * 100) + 'test';
    const email = username + '@gmail.com';
    const password = 'Pa$$word123';

    cy.request('POST', 'https://conduit.productionready.io/api/users', {
      user: {
        username,
        email,
        password
      }
    });

    cy.get(':nth-child(1) > .form-control')
      .type(email);

    cy.get(':nth-child(2) > .form-control')
      .type(password);

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link').should('contain.text', username);
  });
});
