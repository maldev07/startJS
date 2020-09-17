"use strict";

const obj = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: ['red', 'green', 'blue'],
   user: {
      login: 'vov07',
      password: '12345'
   },
   makeTest: function () {
      console.log('Test')
   }
};
obj.makeTest();
const { login, password } = obj.user;
console.log(login);

// console.log(obj);

// let count = 0;
// for (let key in obj) {
//    if (typeof (obj[key]) === 'object') {
//       for (let i in obj[key]) {
//          console.log(`Свойство ${i} имеет значение ${obj[key][i]}`);
//       }
//    } else {
//       console.log(`Свойство ${key} имеет значение ${obj[key]}`);
//    }
//    count++;
// }

// console.log(count);

// console.log(Object.keys(obj).length);