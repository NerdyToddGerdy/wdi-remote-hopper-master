console.log('immutability practice');

// copy an array with .slice()
// copy an object with Object.assign
// these are known as 'shallow copies' if all your are copying are primitives

// Deep copies are problematic:
const arr = [1, 2, 3, 4];

const obj = {
  name: 'deep copy object attempt',
  numbers: arr
}

const copiedObject = Object.assign({}, obj);

copiedObject.numbers.push(5, 6, 7, 8, 9);

console.log('copied array in the object: ', copiedObject.numbers);

console.log('original array: ', arr);







