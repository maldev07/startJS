"use strict";

const str = 'test';

const sliceStr = 'It is sliced string';

console.log(sliceStr.slice(3, 12));
console.log(sliceStr.substring(3, 12));
console.log(sliceStr.substr(3, 5));

//Numbers 

let test = '12.4354px';
test = parseFloat(test);
console.log(test);
console.log(typeof (test));
// let arr = [1, 23, 54, 11, 24];
// console.log(Math.min(arr));