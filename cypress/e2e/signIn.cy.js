/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('should provide an ability to log in', () => {
    cy.contains('Sign in')
      .click();

    cy.url()
      .should('include', '#/login');

    cy.get('h1')
    .should('contain.text', 'Sign In');

    cy.get(':nth-child(1) > .form-control')
      .type('sobaka-tester@sobaka.test');

    cy.get(':nth-child(2) > .form-control')
      .type('Qwe123@');

    cy.contains('.btn', 'Sign in')
      .click();

      cy.get(':nth-child(4) > .nav-link')
        .should('contain', 'rgrgrrg');
    });
});
