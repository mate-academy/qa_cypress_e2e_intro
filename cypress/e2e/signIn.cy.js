import LoggedInUser from "../support/pages/LoggedInUser";
import HomePage from "../support/pages/HomePage";
import { authData } from "../support/authData";
/// <reference types="cypress" />


describe('Sign In', () => {
  it('should provide an ability to sign in with email and password', () => {
    const { userName, email, password } = authData;
    const homePage = new HomePage();
    const loggedInUser = new LoggedInUser();

    homePage.visit();
    cy.login(email, password);
    loggedInUser.getHeader().should('contain', userName);
  });
   
});
