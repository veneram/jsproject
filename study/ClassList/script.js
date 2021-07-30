"use strict";
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// // console.log(btns[0].classList.length); // number of classen
// // console.log(btns[0].classList.item(1)); // позволяет получить класс который распологается под определенным индексом

// console.log(btns[1].classList.add('red', 'test'));
// // console.log(btns[0].classList.remove('blue'));

// // console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if(!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

// console.log(btns[0].className);

wrapper.addEventListener('click', (e) => {
    // if(e.target && e.target.classList.contains('blue')) // конкретно обратиться к этим элементам содержащие этот класс
    // if(e.target && e.target.tagName == "BUTTON")
    if(e.target && e.target.matches("button.red")) {
        console.log('Hi');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);