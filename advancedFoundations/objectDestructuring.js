const favouriteFilm = {
    title: "Top Gun",
    year: "1998",
    genre: "action",
    star: "Tom cruise",
    director: "Tony Scott"
}

// without destructuring 

// const title = favouriteFilm.title;
// const year = favouriteFilm.year;
// const genre = favouriteFilm.genre;
// const star = favouriteFilm.star;
// const director = favouriteFilm.director;




// with destructuring

const {title, year, genre, star, director} = favouriteFilm;


console.log(`this is my favourite movie ${title} and it was directed by ${director} and released in ${year}`);