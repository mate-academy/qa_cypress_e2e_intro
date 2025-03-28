/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(`https://react-redux.realworld.io/#/login`);
  });
  it('should provide an ability to log in', () => {
    cy.get(':nth-child(1) > .form-control')
      .type('jjoohh@gmail.com');
    cy.get(':nth-child(2) > .form-control')
      .type('qwert12345');
    cy.get('.btn').click();
    cy.get('.navbar').last()
      .should('contain.text', 'ttetetetfdghfdg');
  });
});
