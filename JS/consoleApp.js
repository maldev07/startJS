"use strict";

const personMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {
      personMovieDB.count = +prompt('Сколь фильмов вы уже просмотрели?', '');

      while (personMovieDB.count == '' || personMovieDB.count == null || isNaN(personMovieDB.count)) {
         personMovieDB.count = +prompt('Сколь фильмов вы уже просмотрели?', '');
      }
   },
   rememberMyFilms: function () {
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
   },
   detectPersonalLvl: function () {

      if (personMovieDB.count < 10) {
         alert('Вы просмотрели не очень много фильмов');
      } else if (personMovieDB.count > 10 && personMovieDB.count < 30) {
         alert('Вы классический зритель!');
      } else if (personMovieDB.count >= 30) {
         alert('Вы киноман');
      }
   },
   showMyDB: function () {
      if (personMovieDB.privat == false) {
         console.log(personMovieDB);
      } else {
         console.log('Error');
      }
   },
   writeYourGenres: function () {
      for (let i = 1; i < 2; i++) {
         let genres = prompt('Введите ваши любимые жанры').toLowerCase();
         if (genres === '' || genres == null) {
            console.log('Error');
            i--;
         } else {
            personMovieDB.genres = genres.split(',');
            personMovieDB.genres.sort();
         }
      }
      personMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });

   },
   toggleVisibleMyDB: function () {
      if (personMovieDB.privat) {
         personMovieDB.privat = false;
      } else {
         personMovieDB.privat = true;
      }
   }
};




