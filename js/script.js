let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');

let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstQuestion = prompt("Один из последних просмотренных фильмов?",''),
    secondQuestion = prompt("На сколько его оцените?",''),
    thridQuestion = prompt("Один из последних просмотренных фильмов?",''),
    fourthQuestion = prompt("На сколько его оцените?",'');

personalMovieDB.movies[firstQuestion] =  secondQuestion;   
personalMovieDB.movies[thridQuestion] =  fourthQuestion;   
console.log(personalMovieDB);