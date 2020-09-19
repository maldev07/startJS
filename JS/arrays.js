// const arr = [1, 2, 3, 6, 8];

// arr.pop();
// arr.push(10);

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }
// console.log(arr);

// for (let value of arr) {
//    console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//    console.log(`${i}: ${item} in Array ${arr}`);
// });

// const str = 'fgdfbgfdfdbdfbdsvdfbdfbdfbdfbdfbdfbdfbdfbdfbdfbdfbdf';
// let arr = [];
// arr = str.split(''); // из строки в массив
// let str2 = arr.join('');  // из массива в строку
// let str3 = arr.sort().join('');
// console.log(str3); 

// const arr2 = [2, 42, 54, 278, 101, 23, 1, 22];
// arr2.sort(sortBy);
// console.log(arr2);


// function sortBy(a, b) {
//    return a - b;
// }

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = arr1;

arr2.pop();

console.log(arr1, arr2);
