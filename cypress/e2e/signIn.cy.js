/// <reference types="cypress" />

describe('Sign In Flow (Stable for SPA)', () => {
  const email = 'dyvakaleksandr370@gmail.com';
  const password = 'da0990454512';
  const username = 'dyvakalexandr';

  it('logs in successfully and shows username in the navigation', () => {
    // 1️⃣ Открываем главную страницу
    cy.visit('https://conduit.mate.academy/');

    // 2️⃣ Ждём появления ссылки Sign in и кликаем
    cy.contains('Sign in').should('be.visible').click();

    // 3️⃣ Дожидаемся, пока страница логина полностью отрендерится
    cy.contains('Sign in').should('be.visible');

    // 4️⃣ Вводим email и пароль, ориентируясь на placeholder
    cy.get('input[placeholder="Email"]').should('be.visible').type(email);
    cy.get('input[placeholder="Password"]').should('be.visible').type(password);

    // 5️⃣ Кликаем кнопку Sign in
    cy.get('button').contains('Sign in').should('be.enabled').click();

    // 6️⃣ Дожидаемся появления имени пользователя в навигации
    cy.get('nav').contains(username).should('be.visible');
  });
});
