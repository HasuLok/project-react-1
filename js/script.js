
let numberOfFilms; 


let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
        while(numberOfFilms =="" || numberOfFilms == null ||
         isNaN(numberOfFilms)){
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
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
        
    },
    showMyDb: function () {
        if(personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
   
    },
    writeYourGenres: function () {
        for ( let i = 1; i < 2; i++) {
            let genre =prompt(`Введите ваш любимый жанр через запятую`).toLowerCase();

            if (genre == '' || genre == null){
                console.log("error");
                i--;
            }else{
                personalMovieDB.genres=genre.split(', ');
                personalMovieDB.genres.sort();
            }
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });    

            // let genre = personalMovieDB.genres[i-1]= prompt(`Ваш любимый жанр под номером  ${i}`,'');
            // if(genre  == '' || genre  === null){
            //     i--;
            // }else{
            //     personalMovieDB.genres[i-1] = genre;
            // }        
        }    
          
    },
    toggleVisibleMyDB: () =>{ 
        if(personalMovieDB.privat == false){
           personalMovieDB.privat = true;
        }else{personalMovieDB.privat = false;}
    }   
};

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDb();
console.log(personalMovieDB.privat);
// function rememberMyFilms () {
//     for (let i = 0; i < 2; i++){
//         let a = prompt("Один из последних просмотренных фильмов?",''),
//             b = prompt("На сколько его оцените?",'');
        
//         if(a != null && b != null && a != '' && b != '' && a.length < 50){
//             personalMovieDB.movies[a] = b;
//         }else{
//             console.log('error');
//             i--;
//         }
          
//     }
// }
// rememberMyFilms();

// function detectPersonalLevel () {
//     if(personalMovieDB.count < 10){
//         console.log("Просмотренно довольно мало фильмов");
//     }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//         console.log("Вы класический зритель");
//     }else if (personalMovieDB.count >= 30){
//         console.log("Вы киноман");
//     }else {
//         console.log("Произошла ошибка!");
//     }     
//     console.log(personalMovieDB);
    
// } 
// detectPersonalLevel();

//  function showMyDb() {
//      if(personalMovieDB.privat == false){
//          console.log(personalMovieDB);
//      }

//  }
//  showMyDb();



function writeYourGenres () {
    for ( let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1]= prompt(`Ваш любимый жанр 
        под номером  ${i}`,'');
    } 
}  




