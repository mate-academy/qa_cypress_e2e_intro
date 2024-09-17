/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=nh2o37');
  });

  it('should provide an ability to log in', () => {
    const Email = 'Usertest1@test.com';
    const Password = 'Password1';

    cy.url()
      .should('include', '/login');
    cy.get('h1.text-xs-center')
      .should('contain.text', 'Sign In');
    cy.get(':nth-child(1) > .form-control')
      .type(Email);
    cy.get(':nth-child(2) > .form-control')
      .type(Password);
    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'User_test1');
  });
});
