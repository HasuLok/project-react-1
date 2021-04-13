let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
    while(numberOfFilms =="" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
    }
}
start();


let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++){
        let a = prompt("Один из последних просмотренных фильмов?",''),
            b = prompt("На сколько его оцените?",'');
        
        if(a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
        }else{
            console.log('error');
            i--;
        }
          
    }
}
rememberMyFilms();

function detectPersonalLevel () {
    if(personalMovieDB.count < 10){
        console.log("Просмотренно довольно мало фильмов");
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы класический зритель");
    }else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка!");
    }     
    console.log(personalMovieDB);
    
} 
detectPersonalLevel();

 function showMyDb() {
     if(personalMovieDB.privat == false){
         console.log(personalMovieDB);
     }

 }
 showMyDb();



function writeYourGenres () {
    for ( let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером  ${i}`,'');
        personalMovieDB.genres[i-1]= genre;
    } 
}  
writeYourGenres ();