/// <reference types="cypress" />

describe('Sign in form', () => {
  it('should be visitable', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link')
    .click();

    cy.url()
    .should('include', 'login');

    cy.get(':nth-child(1) > .form-control')
    .type('qugecah@mailinator.com')
    .should('have.value', 'qugecah@mailinator.com');

    cy.get(':nth-child(2) > .form-control')
    .type('Q12345$67a')
    .should('have.value', 'Q12345$67a');

    cy.get('.btn')
    .contains('Sign in').click();

    cy.get(':nth-child(4) > .nav-link')
    .contains('Aliquaser');
  });
  
});
