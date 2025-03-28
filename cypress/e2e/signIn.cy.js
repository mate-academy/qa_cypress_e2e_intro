'use strict';
/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/#/login');

    cy.request('POST', 'https://api.realworld.io/api/users', {
      user: {
        username: `${faker.internet.userName()}`,
        email: `${faker.internet.email()}`,
        password: 'test123'
      }
    }).then((response) => {
      const { username, email } = response.body.user;

      cy.get(':nth-child(1) > .form-control').type(email);

      cy.get(':nth-child(2) > .form-control').type('test123');

      cy.get('.btn').click();

      cy.get(':nth-child(4) > .nav-link').should('contain.text', username);
    });
  });
});
