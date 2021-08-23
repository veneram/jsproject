'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// console.log(width, height); // 385 / 335 c box-sizing: border-box; - padding включен, Без box-sizing нет и  - высота - 405


// const width = box.offsetWidth;
// const height = box.offsetHeight;

// console.log(width, height); // 400 / 350 - как в css


const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height); // 385 1352 - тут полоса прокрутки, border не вкл

btn.addEventListener ('click', () => {
    // box.style.height = box.scrollHeight + 'px'; // так можно раскрыть невидимый текст
    console.log(box.scrollTop); // сколько текста уже отлистано
});

console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);
// console.log(style.display);


// Получение значения псевдоэлемента
const style = window.getComputedStyle(box, ':before').content;
console.log(style); 


// чтобы узнать количество пикселей которые уже отлистал пользователь

// console.log(document.documentElement.clientWidth);

console.log(document.documentElement.scrollTop);

// // можно модифицировать

// console.log(document.documentElement.scrollTop = 0);

