"use strict";

const bookSelect = document.querySelector("#book-select");
const checkButton = document.querySelector("#check-button");
const result = document.querySelector("#result");
const status = document.querySelector("#status");

const catalog = {
  atlas: { title: "Бойцовский клуб", available: true },
  novel: { title: "Воля к власти", available: false },
  guide: { title: "Майнкрафт для крутых", available: true },
};

function checkAvailability(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const book = catalog[code];

      if (book && book.available) {
        resolve(book.title);
      } else {
        reject(new Error("Книга временно недоступна"));
      }
    }, 900);
  });
}
checkButton.addEventListener("click", () => {
  checkButton.disabled = true;
  result.textContent = "Проверяем каталог...";
  status.className = "status status--working";
  status.textContent = "Ожидание ответа...";

  checkAvailability(bookSelect.value)
    .then((title) => {
      result.textContent = `Книга «${title}» доступна для выдачи.`;
      status.className = "status status--success";
      status.textContent = "Проверка завершена";
    })
    .catch((error) => {
      result.textContent = error.message;
      status.className = "status status--error";
      status.textContent = "Ошибка проверки";
    })
    .finally(() => {
      checkButton.disabled = false;
    });
});

