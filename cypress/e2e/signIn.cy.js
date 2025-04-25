/// <reference types="cypress" />

describe('Sign In Flow', () => {
  it('should log in with valid credentials and display username in nav', () => {
    cy.visit('https://conduit.mate.academy/'); // основной сайт
    cy.contains('Sign in').click();

    // Вводим email и пароль
    cy.get('input[type="email"]').type('test001@gmail.com');
    cy.get('input[type="password"]').type('test1234');

    // Нажимаем кнопку Войти
    cy.get('button[type="submit"]').click();

    // Проверяем, что отображается имя пользователя
    cy.contains('test001').should('be.visible');
  });
});
