/// <reference types="cypress" />

describe('Sign In page', () => {
  const userName = 'liga071';
  const password = '123123';

  it.only('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get('input[type="email"]').type(`${userName}@gmail.com`);
    cy.get('input[type="password"]').type(`${password}`);
    cy.get('button[type="submit"]').click();
    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'liga');
  });
});
