// Файл script.js

// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция для изменения цвета фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = '#f4f4f9';
}

// Функция для переключения видимости элемента по селектору
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = getComputedStyle(element).display;
        element.style.display = currentDisplay === 'none' ? 'block' : 'none';
    }
}

// Функция для изменения текста H1 на основе utm_term из URL
function updateH1FromUTM() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector('h1');

    if (h1 && utmTerm) {
        h1.textContent = utmTerm;
    }
}

// Функция для вывода текущего времени в консоль
function logCurrentTime() {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0]; // Формат ЧЧ:ММ:СС
    console.log(`Текущее время: ${timeString}`);
}

// Функция для сброса цвета фона к исходному значению
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'black';
}

// Подключение обработчика DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Вызов функций в нужном порядке
    resetBackgroundColor();
    changeBackgroundColor('lightblue');
    toggleVisibility('.content');
    updateH1FromUTM();
});

// Вызов функций, не зависящих от загрузки страницы
showMessage("Скрипт загружен!");
logCurrentTime();