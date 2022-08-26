describe('Sign in', () => {

  it('Login User', () => {
    cy.visit ('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link')
    .click();
    
    cy.get(':nth-child(1) > .form-control')
    .type('Ksywasobol@gmail.com');

    cy.get(':nth-child(2) > .form-control')
    .type('Ksywasobol');

    cy.get('.btn')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain','Ksywasobol');
  });
});
