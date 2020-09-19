"use strict";


// const copy = obj; // ccылка на обэъект, не копия , изменяя copy изменится и obj
// copy.a = 10;

// console.log(obj);
// console.log(copy);

const obj = {
   a: 1,
   b: 2,
   c: {
      x: 10,
      y: 20
   }
};
function copy(mainObj) {
   let objCopy = {};

   for (let key in mainObj) {
      objCopy[key] = mainObj[key];
   }
   return objCopy;
}

const newObj = copy(obj);
// newObj.a = 15;
// newObj.c.x = 12;
// console.log(obj);
// console.log(newObj);

// const add = {
//    d: 17,
//    e: 20
// };

// const clone = Object.assign({}, add);
// clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = [1, 2, 3];
const newArray = oldArray.slice();

newArray[1] = 9;

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
   blogs = ['wordpress', 'livejournal', 'blogger'],
   internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}

const num = [1, 2, 3];

log(...num);

const array = ['a', 'b'];
const newArr = [...array];
const q = {
   a: 2,
   v: 0
}

const newQ = { ...q };

console.log(newQ);