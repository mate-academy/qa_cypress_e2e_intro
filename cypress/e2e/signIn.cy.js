/// <reference types="cypress" />


describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit("/").get('h1').should('include.text' , 'conduit');
    cy.get(":nth-child(2) > .nav-link").click();
    cy.get(":nth-child(1) > .form-control").type("test2023@mail.com");
    cy.get(":nth-child(2) > .form-control").type("test2023");
    cy.get(".btn").click();
    cy.get(":nth-child(4) > .nav-link").should('include.text', 'test202323');
  });
});
