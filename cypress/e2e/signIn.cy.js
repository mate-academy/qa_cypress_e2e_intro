/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(()=> cy.visit('https://conduit.mate.academy/user/login'));

  it('should provide an ability to log in', () => {
  cy.url().should('contain', 'login');
  cy.get(':nth-child(1) > .form-control').type ('mate8568@ukr.net');
  cy.get(':nth-child(2) > .form-control').type ('Q1w2e3r4');
  cy.get ('.btn').click();
  
});
});

