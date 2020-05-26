const moment = require('moment');
const movies = require('./movies.js');

// “User should be able to see a list of 200 movies, sorted by releaseYear and then by title within each year.”
// "You will need to add a 'releaseYear' key to each movie object using moment.js - take the value from the existing releaseDate."

// FIRST SOLUTION
function getPopularMovies () {

  // 1. combine the results of the API requests
  const combinedResults = [].concat(...movies);

  // 2. each movie object in the results needs a releaseYear attribute added
  const addReleaseYear = (arr) => {
    return arr.map((obj) =>  {
      const formattedReleaseYear = moment(obj.releaseDate).format('YYYY');
      const newObj = Object.assign({}, obj, { releaseYear: formattedReleaseYear });
      return newObj;
    });
  }

  // 3. sort the results FIRST by year THEN by title
  // sort the incoming array in-place using the .sort method
  const sortArrayOfObjects = (arr) => {
    return arr.sort((first, next) => {

      // if the comparison of releaseYears within the sort is equivalent,
      // then compare titles instead
      if (first.releaseYear == next.releaseYear) {
        if (first.title > next.title) {
          return 1;
        } else if (first.title < next.title) {
          return -1;
        }
        return 0;
      }

      // otherwise, just return a comparison between releaseYears
      return first.releaseYear - next.releaseYear;
    });
  }

  const resultsWithReleaseYear = addReleaseYear(combinedResults);
  const sortedResults = sortArrayOfObjects(resultsWithReleaseYear);

  return sortedResults;
}



// ANOTHER SOLUTION
// The previous solution uses the .sort method and also saves all of the results
// to duplicated arrays a few times. I want to try another solution that
// doesn't use .sort, and also attempts to merge the two arrays without
// concatenating them or saving them to new locations in memory too many times.

function getPopularMovies2 () {
  // create a new array where the results will be pushed to a proper location
  const sortedArray = [];

  // function to take two arrays and merge them into a new array
  const mergeAndSortTwoArrays = (arr1, arr2) => {
    // set up a length variable set to the longest array, in case one is
    // larger than the other. Used for the for loop below to iterate over both arrays
    const length = Math.max(arr1.length, arr2.length);

    // set up a loop to iterate over both arrays
    for (let i=0; i < length; i++) {

      // only perform an action if there is a value left in array1
      // (if the loop is still going past the length of the array, no action should happen)
      if (arr1[i] !== undefined) {
        // make a new object with the 'releaseYear' property: set to the releaseDate with moment.js formatting
        let releaseYear = moment(arr1[i].releaseDate).format('YYYY');
        // let releaseYear = 1979;
        let newObj = Object.assign({}, arr1[i], { releaseYear });
        // run the helper function to place the new object within sortedArray
        insertObjectIntoArray(newObj);
      }
      // only perform an action if there is a value left in array2
      // (if the loop is still going past the length of the array, no action should happen)
      if (arr2[i] !== undefined) {
        // let releaseYear = 1979;
        let releaseYear = moment(arr2[i].releaseDate).format('YYYY');
        // make a new object with the 'releaseYear' property: set to the releaseDate with moment.js formatting
        let newObj = Object.assign({}, arr2[i], { releaseYear });
        // run the helper function to place the new object within sortedArray
        insertObjectIntoArray(newObj);
      }
    }
  } // end mergeAndSortTwoArrays

  // helper function to take an object and find a home for it within sortedArray
  const insertObjectIntoArray = (obj) => {
    // set to true once the obj is inserted
    // later, if the object has not been inserted, it will simply be pushed
    let inserted = false;
    // loop over the array of objects that have been sorted already
    for (let i=0; i < sortedArray.length; i++) {

      // if the incoming object's year is less than the current object's,
      // splice the incoming object into sortedArray and then quit the loop

      if (obj.releaseYear < sortedArray[i].releaseYear) {
        sortedArray.splice(i, 0, obj);
        inserted = true;
        break;
      }
      // if the years are equivalent, and if the incoming object's title is
      // (alphabetically) less than the current object's, splice the incoming
      // object into sortedArray and then quit the loop
      if (obj.releaseYear == sortedArray[i].releaseYear) {
        if (obj.title < sortedArray[i].title) {
          sortedArray.splice(i, 0, obj);
          inserted = true;
          break;
        }
      }
    }
    // if there are no objects within sortedArray then the above loop won't run.
    // It won't run the first time because it will be empty.
    // In this case the 'inserted' var will stay false. If false, add the incoming object.
    // Also, if the object's releaseYear is not less than any objects' within
    // sortedArray, it will not be inserted. If so, add the object to the end
    // of the array.
    if (!inserted) {
      sortedArray.push(obj);
    }
  } // end insertObjectIntoArray

  mergeAndSortTwoArrays(movies[0], movies[1]);

  return sortedArray;
}

module.exports = {
  getPopularMovies: getPopularMovies,
  getPopularMovies2: getPopularMovies2
}

