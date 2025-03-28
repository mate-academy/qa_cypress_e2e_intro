/// <reference types="cypress" />


describe('Sign In page', () => {
  const Email = 'dazutu@mailinator.com'
  const Password = 'Qwerty12345!'
  const Username = 'Tester123451'


  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io')
  }
  )

  it('should provide an ability to log in', () => {
    cy.contains('a', 'Sign in').should('exist').click();
    cy.visit('https://react-redux.realworld.io/#/login?_k=053gmt');
    cy.get('h1')
    .should('contain', 'Sign In');
    cy.get('[placeholder=Email]')
    .type(Email);
    cy.get('[placeholder=Password]')
    .type(Password);
    cy.get('.btn').click();
    cy.get('nav')
    .should('contain', Username);
  });
});
