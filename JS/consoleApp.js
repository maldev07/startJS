"use strict";

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколь фильмов вы уже просмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколь фильмов вы уже просмотрели?', '');
   }
}
// start();

const personMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Какой последний фильм вы смотрели ?', ''),
         b = prompt('На сколько оцените его', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personMovieDB.movies[a] = b;
      } else {
         alert('Error');
         i--;
      }
   }
}
// rememberMyFilms();

function detectPersonalLvl() {

   if (numberOfFilms < 10) {
      alert('Вы просмотрели не очень много фильмов');
   } else if (numberOfFilms > 10 && numberOfFilms < 30) {
      alert('Вы классический зритель!');
   } else if (numberOfFilms >= 30) {
      alert('Вы киноман');
   }
}
// detectPersonalLvl();

function showMyDB() {
   if (personMovieDB.privat == false) {
      console.dir(personMovieDB);
   } else {
      console.log('Error');
   }
}
// showMyDB();


function writeYourGenres() {

   for (let i = 1; i < 4; i++) {
      personMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}
writeYourGenres();

console.log(personMovieDB.genres);
