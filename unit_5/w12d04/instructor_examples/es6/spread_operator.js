console.log('ES6 practice: spread operator');

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr);
console.log(...arr);

const arrayOfArrays = [[9, 9, 9], [4, 5, 6]];

console.log([].concat(...arrayOfArrays));


// spread an array into an existing array
const hobbits = ['Frodo', 'Merry', 'Pippin', 'Sam'];
const mordor = ['Sauron', 'Orcs', ...hobbits, 'Saruman'];
console.log(mordor);

