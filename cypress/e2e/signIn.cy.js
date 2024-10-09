/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');
    cy.get(':nth-child(1) > .form-control')
      .type('test111@gmail.com');
    cy.get(':nth-child(2) > .form-control')
      .type('Test111!');
    cy.get('.btn').click();
    cy.get('.nav-link')
      .should('contain', 'test111');
  });
});
