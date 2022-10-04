/// <reference types="cypress" />

describe('SignIn Page', () => {
  it('should open SignIn Page', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
  });
  it('should input email', () => {
    cy.get(':nth-child(1) > .form-control')
    .type('ivanp@gmail.com')
  });
  it('should input password', () => {
    cy.get(':nth-child(2) > .form-control')
    .type('1234Qwerty')
  });
  it('should click SIgnIn', () => {
    cy.get('.btn')
    .click()
  });
  it('should contain IvanP', () => {
    cy.get(':nth-child(4) > .nav-link')
    cy.contains('IvanP')
  })
});
