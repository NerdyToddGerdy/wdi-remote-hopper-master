console.log('ES6 practice: arrow functions');


const returnOne = () => {
  return 1;
}

const returnInput = input => {
  return input;
}

const combineArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
}

const returnOneShort = () => 1;

const returnInputShort = input => input;

const combineArraysShort = (arr1, arr2) => arr1.concat(arr2);


const arr = [1, 2, 3, 4, 5, 6];

const newArray = arr.map((elem) => {
  return elem * 10;
});

const newArrayShort = arr.map(elem => elem * 10);



