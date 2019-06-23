const ALL_MOVIES = getAllMovies(); //accessing movies database from function in JS2_W2_HW_Movies.js file
//console.log(ALL_MOVIES.length);

// //Movies with short titles...

const moviesWithshortTitles = ALL_MOVIES.filter(
  movie => movie.title.length <= 4
).map(movie => movie.title);
console.log(moviesWithshortTitles);

// Movies with long titles...

const moviesWithLongTitles = ALL_MOVIES.filter(
  movie => movie.title.length >= 60
).map(movie => movie.title);
console.log(moviesWithLongTitles);

// Movies made between 1980-1989...

const bw80to89 = ALL_MOVIES.filter(
  movie => movie.year >= 1980 && movie.year <= 1989
);
console.log(bw80to89);

// // Chaining...

const moviesWithRating6andAbove = ALL_MOVIES.filter(movie => movie.rating >= 6);
console.log(moviesWithRating6andAbove);

const onlyRatings = moviesWithRating6andAbove.map(movie => movie.rating);
console.log(onlyRatings);

// // Count number of movies with titles that include Benjamin, Surfer, Alien

const findMovieNamesWith = ALL_MOVIES.filter(
  movie =>
    movie.title.includes("Benjamin") ||
    movie.title.includes("Surfer") ||
    movie.title.includes("Alien")
);
console.log(findMovieNamesWith);

const foundNames = findMovieNamesWith.map(movie => movie.title);
console.log(foundNames.length); // Final count of movies

// Extra tag for good, average & bad

let ratingWithGoodTag = ALL_MOVIES.filter(movie => {
  return movie.rating >= 7;
});

ratingWithGoodTag.forEach(movie => (movie.tag = "Good")); //create tag key and assigns value

console.log(ratingWithGoodTag);

//filtered the rating greater than and equal to 4 and less than 7 ,assign tag as average

let ratingWithAverageTag = ALL_MOVIES.filter(movie => {
  return movie.rating >= 4 && movie.rating < 7;
});
ratingWithAverageTag.forEach(movie => (movie.tag = "Average"));

console.log(ratingWithAverageTag);

//filtered the rating less than 4  ,assign tag as Bad

let ratingWithBadTag = ALL_MOVIES.filter(movie => {
  return movie.rating < 4;
});

ratingWithBadTag.forEach(movie => (movie.tag = "Bad"));
console.log(ratingWithBadTag);

//first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.

const ratingHigherThanSix = ALL_MOVIES.filter(
  higherThanSixRating => higherThanSixRating.rating > 6
).map(ratingOnlyArray => ratingOnlyArray.rating);

console.log("rating higher than six " + ratingHigherThanSix);



/*Create an array of movies where a word in the title is duplicated*/

let duplicateWordsInTitle = ALL_MOVIES.filter(movie => {
  let arrayOfTitle = movie.title.split(" "); //create an array with each word from title as an element of the array
  for (
    let i = 0;
    i < arrayOfTitle.length - 1;
    i++
  ) {
    //Loop through all word except the last one
    currentWord = arrayOfTitle[i].toLowerCase(); // Convert the word to lower case to make comparision case-insensitive
    for (
      let nextIndexToCurrent = i + 1;
      nextIndexToCurrent < arrayOfTitle.length;
      nextIndexToCurrent++
    ) {
      // Loop through words ahead
      nextWordToCurrent = arrayOfTitle[nextIndexToCurrent].toLowerCase();
      if (currentWord === nextWordToCurrent) {
        // If the word matches, it is duplicated
        return true; // Return true to filter method if the word is duplicated and exit this function
      }
    }
  }
  return false; // If true was not returned, no word is duplicated, return false to filter and exit
});
const arrayDuplicateWords = duplicateWordsInTitle.map(dupli => dupli.title); //create a title array where a word is duplicated
console.log("This is the duplicated array of movies:-->  " + arrayDuplicateWords);
