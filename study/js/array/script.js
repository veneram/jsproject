'use strict';

const arr = [1, 22, 13, 6, 8];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// // console.log(arr.length); // 5 

// // console.log(arr); // [ 1, 2, 3, 6, 8 ]

// // Callback function; i - luboe imya, index massiva; item - znachenie massiva; arr - massiv 
// arr.forEach(function (item, i, arr) {

//     console.log(`${i}: ${item} inside massiv ${arr}`);

// });

// // arr.pop();

// // arr.push(10);

// //Perebrat elementy 1 sposob:

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }


// //Perebrat elementy 2 sposob:

// for (let value of arr) {
//     console.log(value);
// }

// // Sdelat massiv na osnovanii strok
// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products);

// Skleil obratno v stroky
const str = prompt("", "");
const products = str.split(", ");
console.log(products.join('; '));