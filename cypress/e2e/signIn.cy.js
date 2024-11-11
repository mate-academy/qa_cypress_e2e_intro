/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://conduit.mate.academy/user/login');
  });

  it('should provide an ability to log in', () => {
    cy.url()
      .should('include', '/login');
  });

  it('should be fill in the fields', () => {
    cy.get(':nth-child(1) > .form-control')
      .type('ma150269@gmail.com');

    cy.get(':nth-child(2) > .form-control')
      .type('1234');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'romaa');
  });
});
