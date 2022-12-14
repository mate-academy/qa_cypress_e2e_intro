describe('Sign in page', () => {
  it('should login user with registered credentials', () => {
    //go to the site
    cy.visit('https://react-redux.realworld.io');

    //click on the 'Sign In' link
    cy.get(':nth-child(2) > .nav-link').should('contain.text', 'Sign in').click();

    //fill the fields and click the button
    cy.get(':nth-child(1) > .form-control').type('sam123@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('samanta123');
    cy.get('.btn').should('contain.text', 'Sign in').click();
    
    //wait
    cy.wait(3000);

    //check the username existance
    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'samanta');
  })
})

