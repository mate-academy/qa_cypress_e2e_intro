describe('Conduit Sign in', () => {
   it('Sign in', () => {
    cy.visit ('https://react-redux.realworld.io');
   
    cy.get(':nth-child(2) > .nav-link')
      .click();

    cy.get('[placeholder="Email"]')
      .type('qaTest1@qa.team');
    cy.get('[placeholder="Password"]')
      .type('12345Qwerty');
    cy.get('.btn')
      .click();
    cy.get(':nth-child(4) > .nav-link')
      .should('contains.text', 'qaTest1'); 
  });
});
