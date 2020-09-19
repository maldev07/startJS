"use strict";

function hello() {
   console.log('Hello');
}
hello();

function goodBy() {
   console.log('BB');
}
goodBy();

function sport() {
   console.log('football');

}
sport();

function name() {
   console.log('Vladimir');
}
name();

const arr = [1, 2, 3, 4, 56, 32],
   sorted = arr.sort(compareNum);

function compareNum(a, b) {
   return (a - b);
}

console.log(sorted);