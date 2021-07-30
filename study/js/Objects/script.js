'use strict';

const options = {
    name: 'test',
    with: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test"); // sozdali Method, kot. rabotaet vnutri options
    }
};

options.makeTest();

// Destructurization of object
const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length); // - kolichestvo znachenei v objekte, luche chem cherez counter

// console.log(options['colors']['border']);

// delete options.name; // udalit svoistvo

// console.log(options);

// Perebrat vse svoistva

// for(let key in options) {
//     console.log (`Свойство ${key} имеет значение ${options[key]}`);
// } // no colors pokazivaet ne pravilno

let counter = 0; // shtoby uznat kolichestvo kluchei/svoistv objekta
// perebor vnutri perebora
for(let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log (`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        } 
    } else {
        console.log (`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);