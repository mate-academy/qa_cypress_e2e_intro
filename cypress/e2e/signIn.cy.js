/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_gitпgk=o2xc19');
  });

  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control').type('mtalgat222@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('Mtalgat22!');
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', 'mtalgat222-qatest');
  });
});
