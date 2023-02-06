/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login')
  });

  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control')
      .type('userolya@qa.team')

    cy.get(':nth-child(2) > .form-control')
      .type('Qwerty!123')

    cy.contains('.btn', 'Sign in')
      .click();

      cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'UserOlyaQA');
  });
});
