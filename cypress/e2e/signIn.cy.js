/// <reference types="cypress" />

const { generateUser } = require("../support/generate");

describe("Sign In page", () => {
	beforeEach(() => {
		cy.visit("https://react-redux.realworld.io/#/register?_k=n6tw6u");
	});
	it("should provide an ability to log in", () => {
		const { userName, email, password } = generateUser();
		cy.request("POST", "https://conduit.productionready.io/api/users", {
			user: {
				username: userName,
				email: email,
				password: password,
			},
		});
		cy.visit("https://react-redux.realworld.io/#/login?_k=i4om43");
		cy.get('[placeholder="Email"]').type(email);
		cy.get('[placeholder="Password"]').type(password);
		cy.contains('[type="submit"]', "Sign in").click();
		cy.get(".navbar.navbar-light").should("contain.text", userName);
	});
});
