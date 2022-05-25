/// <reference types="cypress" />
const { generateUser } = require("../support/generate");

describe("Sign in", () => {
  it("Users should log in", () => {
    cy.visit("https://react-redux.realworld.io/#/login?_k=1d0wq1");

    cy.get(":nth-child(1) > .form-control").type("test_mate1@gmail.com");

    cy.get(":nth-child(2) > .form-control").type("pa$$word!");

    cy.get(".btn").click();

    cy.get(":nth-child(4) > .nav-link").should("contain.text", "test_mate1");
  });
});

describe("Sign up", () => {
  it("Users should sign up", () => {
    const user = generateUser();

    cy.visit("https://react-redux.realworld.io/#/register?_k=a9sdtr");

    cy.get('[placeholder="Username"]').type(user.username);

    cy.get('[placeholder="Email"]').type(user.email);

    cy.get('[placeholder="Password"]').type(user.password + "{enter}");

    cy.get(`[href="#@${user.username}"]`).should("contain.text", user.username);
  });
});
