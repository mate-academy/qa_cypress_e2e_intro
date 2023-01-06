/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const randomNuber = Math.random().toString().slice(2,10);
    const username = `test_conduit_${randomNuber}`;
    const email = `${username}@testcomg.com`;
    const password = '123asd!Q';

    
      cy.request('POST', '/users', {
        email: email,
        password: password,
        username: username
      });

      cy.visit('/#/login');
      
      cy.get('[placeholder="Email"]')
      .type(email);

      cy.get('[placeholder="Password"]')
      .type(password);

      cy.contains('button','Sign in')
      .click();
      
      cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', username)
  });    
});

