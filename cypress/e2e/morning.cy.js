/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Sign In page', () => {
  const registerUsername = faker.location.streetAddress();
  const username = 'Eltest523';
  const password = 'Qwer12!';
  beforeEach(() => {
    cy.visit('/');
  });

  it('should provide an ability to log in', () => {
    cy.get('#login2').click();

    cy.get('#loginusername').type(username);

    cy.get('#loginpassword').type(password);

    cy.get('button').contains('Log in').click();

    cy.get('#narvbarx').should('contain.text', `${username}`);
  });

  it('should provide an ability to add product to cart', () => {
    cy.get('.hrefch').contains('Samsung galaxy s6').click();

    cy.get('.btn').contains('Add to cart').click();

    cy.on('window:alert', (string) => {
      expect(string).to.equal('Product added');
    });

    cy.get('#cartur').click();

    cy.get('.table-responsive').should('contain', 'Samsung galaxy s6');
  });

  it('should provide an ability to sign up', () => {
    cy.get('#signin2').click();

    cy.get('#sign-username').type(registerUsername);

    cy.get('#sign-password').type(password);

    cy.get('button').contains('Sign up').click();

    cy.on('window:alert', (string) => {
      expect(string).to.equal('Sign up successful.');
    });
  });
});
