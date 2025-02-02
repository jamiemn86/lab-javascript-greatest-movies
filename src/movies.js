// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let directors = arr.map(function (item) {
    return item.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let numbMovies = arr.filter(function (movie) {
    return movie.director === 'Steven Spielberg';
  });
  let numbMovieDramas = numbMovies.filter(function (film) {
    if (film.genre.indexOf('Drama') >= 0) return true;
    return false;
  });
  return numbMovieDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  let cleanArr = arr.filter((value) => Object.keys(value).length !== 0);
  let resultString = cleanArr.reduce((sum, { score }) => sum + score, 0);
  let resultDecimalNumber = Number(resultString);
  let numberOfMoviesTotal = arr.length;
  if (numberOfMoviesTotal === 0) return 0;
  return Number((resultDecimalNumber / numberOfMoviesTotal).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let cleanArr = arr.filter((value) => Object.keys(value).length !== 0);
  let arrDrama = cleanArr.filter(function (movie) {
    if (movie.genre.indexOf('Drama') >= 0) return true;
    return false;
  });
  let resultString = arrDrama.reduce((sum, { score }) => sum + score, 0);
  let resultDecimalNumber = Number(resultString);
  let numberOfMoviesTotal = arrDrama.length;
  if (numberOfMoviesTotal === 0) return 0;
  return Number((resultDecimalNumber / numberOfMoviesTotal).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let cleanArr = arr.filter((value) => Object.keys(value).length !== 0);
  let sortedArr = cleanArr.slice().sort((a, b) => b.year - a.year);
  let ascSortedArr = sortedArr.reverse();
  return ascSortedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let cleanArr = arr.filter((value) => Object.keys(value).length !== 0);
  let filteredTitles = cleanArr.map(function (item) {
    return item.title;
  });
  let sortedCleanArr = filteredTitles.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  if (sortedCleanArr.length < 20) {
    return sortedCleanArr;
  } else if (sortedCleanArr.length > 20) {
    arrBelow20 = sortedCleanArr.slice(0, 20);
    return arrBelow20;
  } else return sortedCleanArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
