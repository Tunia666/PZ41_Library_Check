"use strict";

const bookSelect = document.querySelector("#book-select");
const checkButton = document.querySelector("#check-button");
const result = document.querySelector("#result");
const status = document.querySelector("#status");

const catalog = {
  atlas: { title: "Атлас мира", available: true },
  novel: { title: "Загадки океана", available: false },
  guide: { title: "Путеводитель по космосу", available: true },
};

// TODO 1. Верните новый Promise. Внутри setTimeout (900 мс)
// проверьте catalog[code].available: если true — resolve(book.title),
// иначе — reject(new Error("Книга временно недоступна")) .
function checkAvailability(code) {}

checkButton.addEventListener("click", () => {
  checkButton.disabled = true;
  result.textContent = "Проверяем каталог...";
  status.className = "status status--working";
  status.textContent = "Ожидание ответа...";

  // TODO 2. Вызовите checkAvailability(bookSelect.value).
  // TODO 3. В .then() выведите сообщение об успехе в result.
  // TODO 4. В .catch() покажите error.message и оформите ошибку.
  // TODO 5. В .finally() снова включите кнопку.
});
