// to string

const fontSize = 25 + 'px';
console.log(fontSize);

// to Number
//1
console.log(typeof (+'5'));
//2
console.log(typeof (Number('4')));
//3
console.log(parseFloat('15.344vdfvdvf3'));

let answ = +prompt('hello', 'dfvdfbdfbf');

console.log(typeof (answ));


// to Boolean

//1 
let bool = null;

if (bool) {
   console.log('yes');
}
bool = 1;
if (bool) {
   console.log('yes');
}
//2
console.log(Boolean(Number('24')));
console.log(typeof (Boolean('0')));