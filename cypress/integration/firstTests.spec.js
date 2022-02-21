/// <reference types="cypress" />
 
describe('Home page', () => {
  it('should login', () => {
    cy.visit('https://react-redux.realworld.io')
    .get('h1')
    .should('contain.text', 'conduit');
  
    cy.contains('Sign in')
    .click();
    cy.url()
    .should('include','/#/login');
  
    cy.get('h1')
    .should('contain.text','Sign In');
  
    cy.get(':nth-child(1) > .form-control')
    .type('guhob@mailinator.com');
    cy.get(':nth-child(2) > .form-control')
    .type('123456');
  
    cy.contains('.btn','Sign in')
    .click();
  
    cy.get(':nth-child(4) > .nav-link')
    .should('contain.text', 'Sinta');
  
    });
 });
 