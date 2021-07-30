'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const wrapper = document.querySelector('.wrapper');
const circles = document.getElementsByClassName('circle');
// const hearts = document.querySelectorAll('.heart');
const hearts = wrapper.querySelectorAll('.heart'); // search inside only wrapper
// hearts.forEach(item => {
//     console.log(item);
// });
const oneHeart = document.querySelector('.heart');



// console.dir(box); // element v kachestve objecta, vse svoistva uvidim

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// 1. ustarevshei variant:

// for (let i=0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor ='blue';
// }

// 2 variant:

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


const div = document.createElement('div');
const text = document.createTextNode('I was here');

div.classList.add('black');

// document.body.append(div);

wrapper.append(div);
// wrapper.appendChild(div); - old version

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[0]); // - old version, now is prepend, before, after

// circles[0].remove();
//wrapper.removeChild(hearts[1]); // - old version

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); // - old version

div.innerHTML = "<h1>Hello World</h1>"; // mozno ispolzovat html tags

// div.textContent = "Hello"; // zdes tolko text

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');
