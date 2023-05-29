/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=m07odl')

    cy.get('input[type="email"]').type('rgmregremmw@gmail.com');

    cy.get('input[type="password"]').type('88888888');

    cy.get('button[type = "submit"]').click();

    cy.contains('a', 'grrmegpregm').click();
  });
});
