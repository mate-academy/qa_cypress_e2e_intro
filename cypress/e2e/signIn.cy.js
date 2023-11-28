/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');

    cy.get('input[type="email"]').type('johny.bravo@o2.pl');

    cy.get('input[type="password"]').type('Userpass1');
    cy.get('.btn').click();

    cy.get('.nav-link')
      .should('contain.text', 'Johny_Bravo');
  });
});
