/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'testqa1234';
  const password = 'Test12345678';
  
  it('should provide an ability to log in', () => {
    cy.visit('/');

    cy.get('[href="#login"]')
    .click();

    cy.get('[type="email"]')
    .type(`${username}@cc.jj`);

    cy.get('[type="password"]')
    .type(password);

    cy.get('.btn[type="submit"]')
    .click();

    cy.get('a[href="#@testqa1234"]')
    .should('contain.text', username);
  });
});
