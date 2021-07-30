"use strict";

// touchstart - Коснулись экрана
// touchend - Палец убрали
// touchmove - Двигаем пальцем

window.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('e.targetTouches[0].pageX');
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });
});

// touches - Все пальцы которые сейчас взаимодействуют с экраном ("Коснуты" экрана)
// targetTouches - Список пальцев которые взаиможействуют с элементом
// changedTouches - Список пальцев, которые учавствуют в текущем событии