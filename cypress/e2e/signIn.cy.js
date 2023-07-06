/// <reference types="cypress" />

describe('Sign In page', () => {

beforeEach(()=> {
  cy.visit ('/')
})

it('should provide an ability to log in', () => {
  cy.contains('a', 'Sign in')
    .should('exist')
    .click();

  cy.url()
    .should('include', '/login');

  cy.get('h1')
    .should('contain.text', 'Sign In');

  cy.get(':nth-child(1) > .form-control')
    .type('afgghhb@mailinator.com');

  cy.get(':nth-child(2) > .form-control')
    .type('Pa$$w0rd!');

  cy.contains('.btn', 'Sign in')
    .click();

  cy.get('a')
    .should('contain.text', 'dddjddd');
});
   });