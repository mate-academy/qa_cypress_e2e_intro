describe("Sign in page", () => {
  it("should login user with register credentials", () => {
    cy.visit("https://react-redux.realworld.io/#/?_k=1n3us2");

    cy.get(":nth-child(2) > .nav-link").click();

    cy.get(":nth-child(1) > .form-control").type("yuhr.test+10@gmail.com");

    cy.get(":nth-child(2) > .form-control").type("!q2w3e4R");

    cy.get(".btn").click();

    cy.get(":nth-child(4) > .nav-link").should("contain", "Olololo");
  });
});
