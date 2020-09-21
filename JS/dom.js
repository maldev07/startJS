'use strict';

const box = document.getElementById('box'),
   btns = document.getElementsByTagName('button'),
   boxSellector = document.querySelectorAll('button'),
   oneBtn = document.querySelector('button'),
   wrapper = document.querySelector('.wrapper'),
   circles = wrapper.querySelectorAll('.circle');

box.style.backgroundColor = 'purple';
box.style.width = '200px';
box.style.height = '200px';
btns[1].style.backgroundColor = 'green';
btns[1].style.borderColor = 'blue';

// for (let i = 0; i < btns.length; i++) {
//    btns[i].style.backgroundColor = 'white';
// }

circles.forEach(item => {
   item.style.backgroundColor = 'rgb(35, 173, 198)';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я ');

div.classList.add('box');

wrapper.prepend(div);
// circles[1].before(div);
// circles[0].after(div);
// circles[0].remove();
// circles[1].replaceWith(box);

// wrapper.insertBefore(div, circles[1]);

// wrapper.replaceChild(div, circles[1]);

div.innerHTML = '<h1>Hello world</h1>';

div.insertAdjacentHTML('afterend', '<h2>HELLO</h2>')