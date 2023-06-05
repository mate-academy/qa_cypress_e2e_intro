/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = 'test303@gmail.com';
  const password = '1234567890';
  const userName = 'User303QA';

  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/');
  });
  // it works
  it('should provide an ability to log in', () => {
    cy.contains('.nav-link', 'Sign in')
      .click();
    
    cy.get('[placeholder="Email"]')
      .type(email);
    
    cy.get('[placeholder="Password"]')
      .type(password);
    
    cy.contains('.btn', 'Sign in')
      .click();
    
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', userName);
  });
});
