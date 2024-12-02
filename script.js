// Домашнее задание к уроку №36: “Работа с DOM”

// Задание 1: Изменение текста элемента

let messageElement = document.getElementById('message');
messageElement.textContent = 'Добро пожаловать в JavaScript!';


// Задание 2: Работа с классами элементов

let boxElements = document.getElementsByClassName('box');
for (let i = 0; i < boxElements.length; i++) {
    boxElements[i].style.backgroundColor = 'yellow';
}


// Задание 3: Использование `querySelector` и `querySelectorAll`

let textElement = document.querySelector('#text');
textElement.textContent = "Новый текст";

let boxElem = document.querySelectorAll('.box');
boxElem.forEach(elem => {
    elem.style.color = 'blue';
})


// Задание 4: Поиск и выделение элементов по классу

let listBoxElements = document.querySelectorAll(".highlight");
listBoxElements.forEach(element => {
    element.style.color = "red";
})
