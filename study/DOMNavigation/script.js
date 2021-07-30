// zdes ottalkivalis ot parents

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement); // dlya html
// console.log(document.body.childNodes); // uzly (nodes), kotorie yavlyautsya det'mi y body

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// // console.log(document.body.lastChild);

// // ottalkivaemsya ot absolutno lubogo elementa na stranice
// // console.log(document.querySelector('#current').parentNode); // <div class="first">..</div>
// console.log(document.querySelector('#current').parentElement); 

// console.log(document.querySelector('#current').parentNode.parentNode); 
// pokazivaet sled. parent vishe -> div.wrapper

// // console.log(document.querySelector('[data-current="3"]').nextSibling); // text node

// // console.log(document.querySelector('[data-current="3"]').previousSibling); // text node

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // <li>4</li>

// // dlya childNodes net childElement, poetomy shtoby izbavistsya ot nodes, use cycle:

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}

