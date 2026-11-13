"use strict";

const bookSelect = document.querySelector("#book-select");
const checkButton = document.querySelector("#check-button");
const result = document.querySelector("#result");
const status = document.querySelector("#status");

const catalog = {
  atlas: { title: "Атлас світу", available: true },
  novel: { title: "Загадки океану", available: false },
  guide: { title: "Путівник з космосу", available: true },
  homersimpson: { title: "Конституція України", available: false },
};

// Задания 1 и 2: Возвращаем Promise с задержкой 900 мс
function checkAvailability(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const book = catalog[code];

      if (book && book.available === true) {
        resolve(book.title);
      } else {
        reject(new Error("Книжка тимчасово недоступна"));
      }
    }, 900);
  });
}

checkButton.addEventListener("click", () => {
  checkButton.disabled = true;
  result.textContent = "Перевіряємо каталог...";
  status.className = "status status--working";
  status.textContent = "Очікування відповіді....";

  // Задания 3, 4 и 5: Обработка Promise через .then(), .catch() и .finally()
  checkAvailability(bookSelect.value)
    .then((title) => {
      result.textContent = `Книжка «${title}» доступна для замовлення.`;
      status.className = "status status--success";
      status.textContent = "є";
    })
    .catch((error) => {
      result.textContent = error.message;
      status.className = "status status--error";
      status.textContent = "Помилка";
    })
    .finally(() => {
      checkButton.disabled = false;
    });
});