const btns = document.querySelectorAll('button'),
        // btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// }; // v realnix projects etot variant ne ispolzuetsya

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();
//     // console.log('Hover');
// });

let i=0;

const deleteElement = (e) => {  // arrow function
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if(i==1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) { // standart function, mozno pisat event vmesto e
    event.preventDefault();
    console.log(event.target);
});