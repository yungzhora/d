// Задание 1: Объявление переменных и условные операторы

const myName = "Алексеев Филипп Викторович"; 
const myAge = 20; 

if (myAge >= 18) {
  console.log("Вы совершеннолетний");
} else {
  console.log("Вы несовершеннолетний");
}


// Задание 2: Циклы

// Цикл for
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Цикл while
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}


// Задание 3: Работа с массивами

const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

lectures.push('Тема 4');
practices.unshift('Практика 0');

lectures.forEach(lecture => console.log("Лекция: " + lecture));
practices.forEach(practice => console.log("Практика: " + practice));

function arrayToString(arr) {
  return arr.join(', ');
}

console.log("Лекции: " + arrayToString(lectures));
console.log("Практики: " + arrayToString(practices));


// Задание 4: Манипуляции с массивами

function filterLectures(lectures) {
  return lectures.filter(lecture => lecture.startsWith('О'));
}

const filteredLectures = filterLectures(lectures);
console.log("Темы лекций, начинающиеся с \"О\": " + arrayToString(filteredLectures));

//
//
//
//
//
//
//
//
//

// Задание 1: Приветствие

let userName = prompt("Введите ваше имя:");
let userAge = parseInt(prompt("Введите ваш возраст:"));

if (userName && !isNaN(userAge)) {
  console.log("Привет, " + userName + "! Тебе " + userAge + " лет.");
} else {
  console.log("Ошибка ввода данных!");
}


// Задание 2: Проверка возраста

if (userAge >= 18) {
  console.log("Вы совершеннолетний");
} else {
  console.log("Вы несовершеннолетний");
}


// Задание 3: Угадай число

const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Угадайте число от 1 до 10:"));

if (!isNaN(guess)) {
  if (guess === secretNumber) {
    console.log("Поздравляем! Вы угадали число!");
  } else if (guess < secretNumber) {
    console.log("Загаданное число больше!");
  } else {
    console.log("Загаданное число меньше!");
  }
} else {
  console.log("Некорректный ввод!");
}


// Задание 4: Проверка пароля

const correctPassword = "12345";
let password = prompt("Введите пароль:");

if (password && password === correctPassword) {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}


// Задание 5: Простой калькулятор

let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");

if (!isNaN(num1) && !isNaN(num2)) {
  if (operator === "+") {
    console.log(num1 + num2);
  } else if (operator === "-") {
    console.log(num1 - num2);
  } else if (operator === "*") {
    console.log(num1 * num2);
  } else if (operator === "/" && num2 !== 0) {
    console.log(num1 / num2);
  } else {
    console.log("Неверный оператор");
  }
} else {
  console.log("Некорректный ввод чисел!");
}
