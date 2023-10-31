/// <reference types="cypress" />

const userName = 'orest iwanowski';
const email = 'anonim4uk911@gmail.com';
const password = '1234Q';

describe('Sign In page', () => {
  before(() => {
    cy.visit("https://react-redux.realworld.io");
  });
  
  it("should provide an ability to log in", () => {
    cy.get(":nth-child(2) > .nav-link")
    .click();
    cy.get(":nth-child(1) > .form-control")
    .type(email);
    cy.get(":nth-child(2) > .form-control")
    .type(password);
    cy.contains(".btn", "Sign in")
    .click();

    cy.get(":nth-child(4) > .nav-link")
    .should("contain", userName);
  });
});
