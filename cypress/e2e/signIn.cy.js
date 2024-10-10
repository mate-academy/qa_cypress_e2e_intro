describe('Sign In Test', () => {
  it('Should log in with valid credentials', () => {
    // Відвідуємо сторінку входу
    cy.visit('https://conduit.mate.academy/user/login');

    // Заповнюємо поля для email та пароля
    cy.get('input[type="email"]').type('khrystinamariana@gmail.com');
    cy.get('input[type="password"]').type('Sova26!');

    // Натискаємо кнопку "Sign in"
    cy.get('button[type="submit"]').click();

    // Перевіряємо, що ім'я користувача з'явилось в навігаційному меню (хедері)
    cy.get('.navbar').should('contain', 'sova26');
  });
});
