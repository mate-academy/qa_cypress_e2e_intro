/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=pai9rt')
  })

  it('should provide an ability to log in', () => {

    cy.get('h1')
    .should('contain.text', 'Sign In')

    cy.get('[placeholder=Email]')
    .type('test_tester@mail.com');

    cy.get('[placeholder=Password]')
    .type('Tester1234');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain.text', 'tester2468');
  });
});
