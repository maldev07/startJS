"use strict";

const soldier = {
   health: 400,
   armor: 100,
   sayHello: function () {
      console.log('Hello');
   }
};

const john = Object.create(soldier);
// const john = {
//    health: 100
// };

// john.__proto__ = soldier; // старый вариант 
Object.setPrototypeOf(john, soldier); // новый(правильный) вариант 

console.log(john.armor);
john.sayHello();