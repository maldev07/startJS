"use strict";

function first() {
   // Do smth
   setTimeout(function () {
      console.log(1);
   }, 500);

}

function second() {
   console.log(2);
}

first();
second();

function learnJS(lang, callback) {
   console.log(`Я учу; ${lang}`);
   callback();
}

// learnJS('I study JavaScript', function () {
//    console.log('Я теперь знаю, что такое callback functions!');
// });
function done() {
   console.log('Я теперь знаю, что такое callback functions!');
}
learnJS('JS', first);