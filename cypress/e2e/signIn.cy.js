/// <reference types="cypress" />

describe('Sign In page', () => {
  userEmail = 'asiva@ukr.net';
  userPassword = 'test138';

  it('should provide an ability to log in', () => {
    cy.visit("https://react-redux.realworld.io/#/login?_k=t2h8oy");
    cy.get('input[type="email"]').type(userEmail);
    cy.get('input[type="password"]').type(userPassword);
    cy.contains('Sign In').click();
    cy.contains('a', userEmail).should('be.visible');
  });
});
