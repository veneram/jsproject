'use strict';

let num = 20;

function showFirstMessage (text) {
    console.log(text);
    console.log(num);
}

showFirstMessage('Hello W');
console.log(num);


// FUNCTION DECLARATION: Function works before it was declare // функция работает до того как она вызвана

console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6));

function calc(a, b) {
    return (a + b);
}

function ret() {
    let num = 50;
    //
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


//FUNCTION EXPRESSION: функция работает только тогда, когда доходит поток кода, можно вызывть только после обьявления
const logger = function(){
    console.log('Hello');
};
logger();

//Arrow function expressions
const calculation = (a, b) => {
    return a + b;
};

console.log(calculation(3,4));