// Открытие и закрытие модального окна заказа
function openOrderModal() {
    document.getElementById('orderModal').style.display = 'block';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
}

// Открытие и закрытие модального окна авторизации
function openAuthModal() {
  document.getElementById('authModal').style.display = 'block';
}

function closeAuthModal() {
  document.getElementById('authModal').style.display = 'none';
}

// Добавляем обработчик клика на кнопку
document.getElementById('authButton').addEventListener('click', openAuthModal);

// Добавляем обработчик закрытия модального окна
document.querySelector('#authModal .close').addEventListener('click', closeAuthModal);

// Закрытие модального окна при нажатии вне его области
window.onclick = function(event) {
    const orderModal = document.getElementById('orderModal');
    const authModal = document.getElementById('authModal');
    if (event.target === orderModal) {
        closeOrderModal();
    }
    if (event.target === authModal) {
        closeAuthModal();
    }
};

// Обработка формы заказа
document.getElementById('orderForm').onsubmit = function(event) {
    event.preventDefault();
    alert('Спасибо за ваш заказ!');
    closeOrderModal();
};

// Обработка формы авторизации
document.getElementById('authForm').onsubmit = function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'user' && password === 'password') {
        alert('Авторизация успешна!');
        closeAuthModal();
    } else {
        alert('Неправильный логин или пароль');
    }
};

// Яндекс.Карта
ymaps.ready(function () {
  var map = new ymaps.Map("map", {
    center: [55.76, 37.64], // Координаты Кремля
    zoom: 10
  });
});

