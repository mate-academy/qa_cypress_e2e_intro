/// <reference types="cypress" />

describe('Sign Up page', () => {
  beforeEach('to page', () => {
    cy.visit('/#/register')
  })

  it('should provide an ability to register', () => {
    const rendomNum = Math.random().toString().slice(2);
    const userName = 'test_user-' + rendomNum;
    const password = 'test-1234';
    const email = userName + '@mail.com';

    cy.get('h1')
      .should('contain.text', 'Sign Up');
    
    cy.get('[placeholder="Username"]')
      .type(userName)

    cy.get('[placeholder="Email"]')
      .type(email)

    cy.get('[placeholder="Password"]')
      .type(password)

    cy.contains('.btn', 'Sign in')
      .click()
    
    cy.contains('a', `${userName}`)
      .should('exist')
  });
});
