/// <reference types="cypress" />

describe('SignIn Page', () => {
  it('should open SignIn Page', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
  });
  it('should input email', () => {
    cy.get(':nth-child(1) > .form-control')
    .type('mail@mail.mail')
  });
  it('should input password', () => {
    cy.get(':nth-child(2) > .form-control')
    .type('password')
  });
  it('should click SIgnIn', () => {
    cy.get('.btn')
    .click()
  });
  it('should contain user321user', () => {
    cy.get(':nth-child(4) > .nav-link')
    cy.contains('user321user')
  })
});
