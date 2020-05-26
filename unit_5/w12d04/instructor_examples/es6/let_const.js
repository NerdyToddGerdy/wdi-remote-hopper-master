console.log('ES6 practice: let and const');

 if (true) {
   let message = 'chillin in the cut'
 }
 console.log(message);


 for (var i=0; i < 100; i++) {}
 // after the loop:
 console.log(i);


{
  let a = 'chillin';
  {
    console.log(a);
  }
}



// constants can still be mutated
const obj = { name: 'Sonny Jim' };
obj.dad = 'Dougie';
console.log(obj);

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

