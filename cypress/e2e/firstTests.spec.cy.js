/// <reference types="cypress" />

describe('', () => {

/*   beforeEach(() => {
    cy.login(user);
  });
 */
  it('should perform successful loging', () => {
    cy.visit('/');

    cy.contains('a', 'Global Feed');
      

    cy.get(':nth-child(2) > .nav-link')
      .click();

    cy.get(':nth-child(1) > .form-control')
      .type(user1.user.email);

    cy.get(':nth-child(2) > .form-control')
     .type(user1.user.password);

    cy.contains('button', 'Sign in')
      .click();

    cy.contains(':nth-child(4) > .nav-link', "TesterTesting123");
  });
});


const user1 = { user: {
  email: "TesterTesting123@gmail.com",
  password: "TesterTesting123"
  }
};