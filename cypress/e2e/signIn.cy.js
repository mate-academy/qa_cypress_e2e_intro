/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/#/login');
  });

  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control').type('Tempor@gmail.com');

    cy.get(':nth-child(2) > .form-control').type('Makcim_10');

    cy.get('.btn').click();

    cy.get('.nav-link').should('contain.text', 'Tempor');
  });
});
