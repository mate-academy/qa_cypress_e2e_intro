/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/')
      .contains('Sign in')
      .click();

    cy.findByPlaceholder('Email').type('Test-user_907908@mail.com');
    cy.findByPlaceholder('Password').type('Test1234' + '{enter}');

    cy.get('[href="#@Test-user_907908"]');
  });
});
