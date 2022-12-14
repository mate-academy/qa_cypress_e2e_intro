/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should login user with registered credentials', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('test_cy@test.com');
    cy.get(':nth-child(2) > .form-control').type('Password1!');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', 'test_user_test');
  });
});
