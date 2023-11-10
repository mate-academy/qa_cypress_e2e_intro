/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = 'gafimiso@mailinator.com';
  const password = '123';
  const username = 'Repudiandae';

  beforeEach(() => {
    cy.visit('/');
  });

  it('should log in with correct credentials', () => {
    cy.get(':nth-child(2) > .nav-link')
      .click();

    cy.get(':nth-child(1) > .form-control')
      .type(email);

    cy.get(':nth-child(2) > .form-control')
      .type(password);

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', username);
  });
});
