/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=qu4ckk');
    cy.get(':nth-child(1) > .form-control').type('nafoid12@got.ua');
    cy.get(':nth-child(2) > .form-control').type('Qazws123');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', 'Nadiia-sole');
  });
});
