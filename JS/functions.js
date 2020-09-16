"use strict";

function showFirstMessage(text) {
   console.log(text);
}
showFirstMessage('Hello my friend!');


let hello = function (lirycs) {
   console.log(lirycs);
};
hello('Hi');


const calc = (a, b) => {
   return a + b;
};
console.dir(calc(5, 4));
