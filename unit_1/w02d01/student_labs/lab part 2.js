// console.log('hi');
//
// var movie = {
//   title: "L'Avventura",
//   director: "Michaelangelo Antonioni",
//   year: 1960
// }
//
// console.log(movie);
//
// var gimmeTheKey = 'title';
//
// console.log(movie[gimmeTheKey]);
//
//
// for (var key in movie) {
//   console.log(key);
//   console.log(movie[key]);
// }

//
// console.log("VVVVVVVVVVVVVVVVVVW");
//
// var keys = Object.keys(movie);
//
// console.log(keys);
//
// for (var i=0; i < keys.length; i++) {
//   console.log(movie[keys[i]]);
// }
//
// for (var i=0; i<Object.keys(movie.length); i++) {
//   console.log(movie[Object.keys(movie)[i]]);
// }

console.log(" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

var movie = {
  title: "Eraserhead", director: "DavidLynch", year: 1978
}

for (key in movie) {
  // console.log(movie);
  console.log(key);
  // console.log(movie[key]);
}

console.log("qqqqqqqqqqqqqqqqqqqqqqqqq");

var obj = {}

var movies = [
  {title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960},
  {title: "Eraserhead",director: "David Lynch", year: 1978},
  {title: "Dayereh" ,director: "Jafar Panahi", year: 2000},
  {title: "Dayereh" ,director: "Jafar Panahi", year: 2000}
]

for (var i=0; i<movies.length; i++){
  obj[movies[i].title] = 0;
}
console.log(obj);
