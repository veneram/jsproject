"use strict";

let a = 5;
let b = a;

b = b + 5;

console.log(b);
console.log(a);

function copy(mainObj) {
    let objCopy = {};
    let key;

    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 12;
// console.log(newNumbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = add.e;

// console.log(add);
// console.log(clone);


const ref = add;
console.log(ref, add);
add.d = 15;

console.log(ref, add);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'ashdksdhfkjdf';

console.log(newArray);
console.log(oldArray);

//Spread operater

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournals', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

// another variant of copy obj

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 4, 6];

log (...num);

// 

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj);