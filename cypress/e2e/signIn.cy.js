/// <reference types="cypress" />
import SignIn from "./PageObjects/signInPage";
import Header from "./PageObjects/header";

describe("Sign In page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("should provide an ability to log in", () => {
    const signIn = new SignIn();
    const header = new Header();
    signIn.setEmail("qawsed@mail.com");
    signIn.setPswd("1q2w3e4r");
    signIn.submit();
    header.checkHeaderUsername("qawsed");
  });
});
