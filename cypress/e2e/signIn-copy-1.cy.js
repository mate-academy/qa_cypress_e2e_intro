describe('Sign In page', () => {
  it('should provide an ability to log in', () => { 
    cy.visit('https://react-redux.realworld.io/')
  .get('h1')
  .should('contain.text', 'conduit');

  cy.get(':nth-child(2) > .nav-link')
  .click()
  
  cy.get(':nth-child(1) > .form-control')
  .type('tyui90@gmail.com');
  
  cy.get(':nth-child(2) > .form-control') 
  .type( '123456789testing');
  
  cy.get('.btn')
  .click();

  cy.get(':nth-child(4) > .nav-link')
  .should('contain', 'tyuio_user');
  });
});