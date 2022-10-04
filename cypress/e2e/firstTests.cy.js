/// <reference types="cypress" />

describe('SignIn Page', () => {
  it('visit SignIn Page', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
  });
  it('Input email', () => {
    cy.get(':nth-child(1) > .form-control')
    .type('bodya@bo.dya')
  });
  it('Input password', () => {
    cy.get(':nth-child(2) > .form-control')
    .type('123456')
  });
  it('Click SIgnIn', () => {
    cy.get('.btn')
    .click()
  });
  it('Contain bodya', () => {
    cy.get(':nth-child(4) > .nav-link')
    cy.contains('bodya')
  })
});

