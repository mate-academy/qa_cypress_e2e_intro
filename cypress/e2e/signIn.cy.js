/// <reference types="cypress" />

describe('Sign In page', () => {
    beforeEach(() => {
      cy.visit('https://react-redux.realworld.io/#/login');
    });
    it('should provide an ability to log in', () => {

    cy.url().should('include', 'login');
    cy.get('input[type="email"]').type('zaxscdvfbg123456@gmail.com');
    cy.get('input[type="password"]').type('Zaxscdvfbgnh');
    cy.get('button[type="submit"]').click();
     cy.contains('Sign In').click();('zaxscdvfbgnh');
    });
  });
