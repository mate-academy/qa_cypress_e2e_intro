/// <reference types="cypress" />

describe('Sign In page', () => {
  
  const email = 'baggins@qa.test';
  const password = 'Frodo123!';

  it('should provide an ability to log in', () => {
    cy.visit('/login');
    cy.get('h1').should('contain.text', 'Sign In');
    cy.findByPlaceholder('Email').type(email);
    cy.findByPlaceholder('Password').type(password);
    cy.contains('.btn', 'Sign in').click();
    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'frodobaggins');
  });
});
