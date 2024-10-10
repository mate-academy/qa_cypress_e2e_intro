describe('Login Tests', () => {
  it('Should log in with valid credentials', () => {
    // Відвідуємо сторінку логіну
    cy.visit('https://the-internet.herokuapp.com/login');

    // Вводимо валідні дані
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Перевірка успішного входу
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('Should show error with invalid credentials', () => {
    // Відвідуємо сторінку логіну
    cy.visit('https://the-internet.herokuapp.com/login');

    // Вводимо неправильні дані
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    // Перевірка повідомлення про помилку
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('Should log out successfully', () => {
    // Відвідуємо сторінку логіну
    cy.visit('https://the-internet.herokuapp.com/login');

    // Вводимо валідні дані
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Натискаємо кнопку "Logout"
    cy.get('.icon-2x.icon-signout').click();

    // Перевірка успішного виходу
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
