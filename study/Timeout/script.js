'use strict';

// const timeId = setTimeout(function() {
//     console.log('Hello');
// }, 2000);

// const timeId = setTimeout(function(timer) {
//     console.log(timer);
// }, 2000, 'Hello');
const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);


// const now = new Date();
// console.log(now);


const nowString = new Date(2020, 5, 1, 20); //new Date(year, month, date, hours, minutes, seconds, ms)
console.log(nowString);


// const now = new Date(0); //"1970-01-01T00:00:00.000Z"
// console.log(now);

// const now = new Date(-999999999); //"1969-12-20T10:13:20.001Z"
// console.log(now);

//GET
const now = new Date(); 
// console.log(now.getFullYear()); // 2021
// console.log(now.getMonth()); // 7 - s 0 vedetsya icheislenie
// console.log(now.getDate()); // - 5 - chislo dnya
// console.log(now.getDay()); // chislo nedeli - 4 Chetverg
// console.log(now.getHours()); // mestnoe vremya
// console.log(now.getUTCHours()); // vremya po UTC

// console.log(now.getTimezoneOffset()); // -120 - raznica mezdy chasovim poyasom i UTC
// console.log(now.getTime()); // 1628165090024 - kolichestvo milisecund prochedschix s 1.1.1970

// SET 

console.log(now.setHours(18, 40)); // ustanovili svoe vremya, minuty
console.log(now);


let start = new Date();
for(let i = 0; i < 100000; i++) {
    let some = i**3;
}

let end = new Date();

alert (`Cycle done for ${end - start} miliseconds`); //Cycle done for 15 miliseconds