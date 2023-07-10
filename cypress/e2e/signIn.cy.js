/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = 'nataliiatest@qa.team';
  const password = 'Password123';
  const username = 'nataliiatest';
  
  beforeEach(() => {
    cy.visit('/');
  })

  it('should provide an ability to log in', () => {
    cy.contains('[href="#login"]', "Sign in")
      .click();
    cy.findByPlaceholder('Email')
      .type(email);
    cy.findByPlaceholder('Password')
      .type(password);
    cy.contains('[type="submit"]', "Sign in")
      .click();
    cy.get(`[href="#@${username}"]`).should('contain.text', username);
  });
});


