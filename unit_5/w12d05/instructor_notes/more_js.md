![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIr-HOPPER

---
Title: More JS <br>
Type: Optional topic<br>
Creator: Thom Page <br>
Competencies: Basic JS<br>
Topics: Benchmarking, IIFE, Closures, Immutability, Prototypes

---

# More JavaScript

* Benchmarking
* IIFE
* Closures
* Immutability
* Prototypes

<br>
<hr>

# Benchmarking

> File: **`benchmark/benchmark.js`**

Here is a problematic approach to testing code performance:

```javascript
// determine a start time
const start = (new Date()).getTime();

// some code

// determine an end time
const end = (new Date()).getTime();
```

```javascript
// log the difference
console.log('Duration: ', (end - start));
```

Let's test how long it takes to run a for loop

```javascript
const start = (new Date()).getTime();

for (let i=0; i < 100; i++) {}

const end = (new Date()).getTime();

console.log('Duration: ',  end - start); 
```

The result is `0`. And we don't know whether this is because it ran in less than a millisecond, or:

* Your OS or browser might not be able to report at a good enough threshold. 

In addition:

* The test is only run once.

* Whichever JS engine you're using could optimize your code giving a false positive.

* Margins of error aren't taken into account

Let's use a proper benchmarking tool.

<br>

### Benchmark.js

```
npm i --save-dev benchmark
```

`benchmark.js` will run your code many times and account for margins of error. The result will be how many **operations per second** your functions can perform on average.

A **higher number** of ops per second is better.

How benchmark works, according to the author:

>"ops/sec" stands for operations per second. That is how many times a test is projected to execute in a second.
A test is repeatedly executed until it reaches the minimum time needed to get a percentage uncertainty for the measurement of less than or equal to 1%. The number of iterations will vary depending on the resolution of the environment’s timer and how many times a test can execute in the minimum run time. We collect completed test runs for 5 seconds (configurable), or at least 5 runs (also configurable), and then perform statistical analysis on the sample. So, a test may be repeated 100,000 times in 50 ms (the minimum run time for most environments), and then repeated 100 times more (5 seconds). A larger sample size (in this example, 100), leads to a smaller margin of error.
We base the decision of which test is faster on more than just ops/sec by also accounting for margin of error. For example, a test with a lower ops/sec but higher margin of error may be statistically indistinguishable from a test with higher ops/sec and lower margin of error.



```javascript
const Benchmark = require('benchmark');
```


Let's put our loop into a function so we can reference it:

```javascript
const forwardForLoop = function() {
  for (let i=0; i < 100; i++) {};
}
```


Create a new Benchmark suite:

```javascript
const suite = new Benchmark.Suite;
```

Use the suite methods:

```javascript
suite
  .add('test1', forwardForLoop)
  .on('cycle', function(e) { console.log(String(e.target)) })
  .run({ 'async': true })
```

* `.add` adds a function to test, `forwardForLoop`, and we have given it the name 'test1'

* `.on('cycle', fn)` will give us a printout once the cycle is complete for `forForwardLoop`

* `.run` will run the test.

Output:

> test1 x 4,440,894 ops/sec ±0.72% (85 runs sampled)


<br>

### Compare functions

Well, this is nice, but what does it mean? What we need is something to compare it to. Let's make this a competition between functions.


For loop in reverse:

```javascript
const backwardForLoop = function() {
  for (let i=99; i >= 0; i--) {}
}
```

`.add` in the second function:

```javascript
suite
  .add('test1', forwardForLoop)                                                                                   
  .add('test2', backwardForLoop)
  .on('cycle', function(e) { console.log(String(e.target)) })
  .run({ 'async': true })
```


We can also add in some more options for feedback:

`.on('start', fn)`

`.on('complete', fn)`

```javascript
suite
  .add('test1', forwardForLoop)
  .add('test2', backwardForLoop)
  .on('start', function() { console.log('Running test...') })                                                     
  .on('cycle', function(e) { console.log(String(e.target)) })
  .on('complete', function() {
    console.log('Fastest is: ' + this.filter('fastest').map('name'))
  })
  .run({ 'async': true })
```  

<br>

### Another test

* Test which is faster: iterating over an array with `forEach` or with a for loop?

Each function will iterate over the array and destructively increment each element by 1.

```javascript
const arr = [1, 2, 3, 4, 5, 6];

const forLoopIteration = function() {
  for (let i=0; i < arr.length; i++) {
    arr[i]++;
  }
}

const forEachIteration = function() {
  arr.forEach(function(i) {
    return i++;
  })
}
```

Run the test!

For fun we can also see what happens to the array:

```javascript
.on('cycle', function(e) { console.log(String(e.target), arr) }) 
```




<br>

### A more substantial test - sorting movies

>  “User should be able to see a list of 200 movies, sorted by releaseYear and then by title within each year.”
> 
> "You will need to add a 'releaseYear' key to each movie object using moment.js - take the value from the existing releaseDate."

`test_functions.js` has two solutions to this problem. Which one is more performant?

```
npm install --save moment
```

```javascript
const Functions = require('./test_functions');
```

Running the functions:

```javascript
Functions.getPopularMovies();
Functions.getPopularMovies2();
```

Make it so one of the functions does **not** use `moment.js`, and re-run the test.

<br>
<hr>

# IIFE

> File: **`iife.js`**

<br>

One problem when dealing with huge tracts of code is namespacing and polluting the global scope. 

What if the code you write will be bundled later on into a file with other people's code? Your variables might **collide** (variable collision).

```javascript
const App = function() {
  console.log('some cool library of code');
}

App();
```

Here the variable App has been namespaced in the global scope, which could lead to potential conflicts down the road.

Another issue is that we had to call App explicitly to get it to run.

You can effectively box off a piece of code into an **Immediately Invoked Function Expression** that protects the global scope, _and_ just runs automatically.

```javascript
(function() {

  const App = 'some cool library of code';
  console.log(App);

})();
```

The App variables are safe from collision:

```javascript
(function() {

  const App = 'some cool library of code'; //safe
  console.log(App);

})();

const App = 'global scope intruder'; // annoying
console.log(App);
```

<br>

### IIFE: Arguments
You can pass the **IIFE** arguments like a regular function:


```javascript
(function( incomingMessage ) {

  const App = 'some cool library of code';
  console.log(App);
  console.log(incomingMessage);

})("This is a message");
```

```javascript
(function( callback ) {

  const App = 'some cool library of code';
  console.log(App);
  callback();

})( function() { console.log('no-name function here') } );
```

<br>

### IIFE: Named IIFE

If you want to re-call an IIFE later on down the road, you can give it a name:

```javascript
const IIFE = (function( callback ) {

  var App = 'some cool library of code';
  console.log(App);

})();
```

BUT it is _not_ a function, so you can't just invoke it

```
IIFE();
```

What we can do is use the IIFE's _return value_.

```javascript
const IIFE = (function( callback ) {

  var App = 'some cool library of code';
  console.log(App);
  return App;

})();


console.log(IIFE);
```

If the IIFE's return value is a function, then we can invoke it.

```javascript
const IIFE = (function( callback ) {

  var someFunc = function() {
    var App = 'some cool library of code';
    console.log(App);
    return App;
  }

  someFunc();

  return someFunc;

})();


IIFE();
```

<br>

### IIFE Practical application: Angular

> File: **`iife_angular/controller1.js`**

<br>

Separate Angular namespacing from other parts of the app. This `iife angular` app won't work yet. Let's say I wrote a controller and I have my variables declared in global scope:

controller1.js

```javascript
	const app = angular.module('MyApp', []) 
	
	app.controller('MainController', function() {
		this.message = 'main controller';
	}); 
```

Let's say someone else also wrote a controller and used the same variables in the global scope.

```javascript
	const app = angular.module('MyApp');
	
	app.controller('AuthController', function() {
		this.message = 'auth controller';
	});
```

Both of us were careless. _Neither_ of these controllers should be exposed in the global scope.

Wrap at least one of them in an IIFE:

```javascript
(function() {
	console.log('main controller loaded');
  
   const app = angular.module('MyApp', [])

   app.controller('MainController', function() {
     this.message = 'main controller';
   });
    
})();
```

But best practice is wrap **all** angular code in IIFEs so that nothing is exposed to the global scope. Surely someone will add some other file at some point that could conflict with global angular variables.

**EXTRA NOTE**

When loading in separate files / IIFEs, the first angular module that loads should have the options array:

```javascript
angular.module('MyApp', [])
```

All subsequent modules of the same name should omit the options array or Angular will break:

```javascript
angular.module('MyApp');
```

<br>

### IIFE and ES6 block scope

IIFEs will largely be **replaced** by ES6's block scope in the future. In a way, IIFEs are the ES5 solution to creating block scope.

```javascript
{
	const App = 'some cool library';
	console.log(App);
}

const App = 'global scope intruder';
console.log(App);
```

### Angular

```javascript
{
	const app = angular.module('MyApp', []);
	app.controller('Controller1', fn)
}

{
	const app = angular.module('MyApp');
	app.controller('Controller2', fn);
}
```

Blocks won't however replaced named IIFEs. Blocks can't have names.


<br>
<hr>

# Closures

> File: **`Closure.js`**

<br>

### Closures: Concept

JavaScript's scoping works by inner functions having **closure** over outer functions.

You can think of the inner function **closing over** the outer function and thereby having access to variables declared in that outer function.

> MDN: Functions 'remember' the environment in which they were created.
> 
> This environment consists of any local variables that were in-scope at the time that the closure was created

```javascript
const outerFunction = () => {

  const value = 1;

  const innerFunction = () => {
    console.log(value);
  }
  
  return innerfunction();

}
```

```javascript
outerFunction();
```
> 1


As expected, the inner function has access to `value` because it **encloses** `outerFunction`. `innerFunction` was executed in the immediate execution environment as `outerFunction`.

But what happens of we execute `innerFunction` _outside_ the execution of `outerFunction`? 

The inner function will permanently hold on to the values in the outer function **even after the outer function has been executed.** 

> MDN: In some programming languages, the local variables within a function exist only for the duration of that function's execution. Once makeFunc() has finished executing, you might expect that the name variable would no longer be accessible.


### Closures: Return a reference

We haven't really seen closure at work yet, but we can see closure at work like so. Make the outer function return a _reference_ (not-invoked) to the inner function:

```javascript
const outerFunction = () => {

  const value = 1;

  const innerFunction = () => {
    console.log(value);
  }

  return innerFunction;

}
```

Save an **invoked version** of the outer function to a variable, and then invoke the referenced inner function:

```javascript
const myProcess = outerFunction(); // save an invoked outer function

myProcess(); // run it (invoking the referenced inner function)
```

> 1

Here, we are running the inner function, and instead of getting back nothing (expected because the outer function has already done its business), we are getting back a value from the outer function.

<br>

### Closures: alter the outer variable

Let's add in a method that alters the outer function's variable. We will see that the **state** of the variable is maintained by the closure.

```javascript
const counter = () => {
  let num = 0;

  const inc = () => {
    console.log(++num);
  }

  return inc;
}
```

```javascript
const counterInstance = counter();

counterInstance(); // 1 
counterInstance(); // 2 : it remembered state 1
counterInstance(); // 3 : it remembered state 2
```

We can make new instances of outer function:

```javascript
const anotherCounter = counter();
anotherCounter(); // 1 ... not the same as counterInstance
anotherCounter()l // 2
```

<br>

### Closures: Return an object with methods that enclose the parent function

```javascript
const counter = () => {
  let num = 0;
  return {
    inc() { ++num },
    dec() { --num },
    get() { console.log(num) },
    reset() { num = 0 } 
  }
}
```

Here we return an object full of function references that act on the internal variable **even after the counter has been invoked**.

```javascript
const counterInstance = counter();

counterInstance.get(); // 0
counterInstance.inc(); 
counterInstance.inc(); 
counterInstance.get(); // 2 
counterInstance.dec();
counterInstance.get(); // 1
counterInstance.reset();
counterInstance.get(); // 0
```

The value of `num` is tracked the entire time.

You can invoke multiple instances of the counter that will each track **their own** values.

```javascript
const counterInstance = counter();
const counterInstance2 = counter();

counterInstance.get();
counterInstance.inc();
counterInstance.inc();
counterInstance.get(); // 2
counterInstance2.get(); // 0
```

<br>

### Closures: IIFE and closure as an event handler

> Directory **closure_counter**

<br>

Closures with IIFEs are great for removing variables from the global scope. Let's remove a globally scoped variable that we'll use in an event handler.

Remember, an event handler is a referenced function. Closures return referenced functions (either on their own or as object methods). So, event handlers and closures are a good mix.

What we want to do is log the number of clicks on a button, **without** declaring some hokey global `clicks` variable.

Bad:

```javascript
let clicks = 0;

// event handler
const updateClicks = () => {
  clicks++;
  console.log(clicks);
  // document.querySelector('#click-display').innerHTML = clicks;
} 
```

```javascript
btn.addEventHandler('click', updateClicks);
```

If we want to remove `clicks` from the global scope (after all, it should be encapsulated in the event handler), we can't put `let clicks = 0` inside the event handler because it'll reset to 0 every time it runs.

Good:

```javascript
const clickCounter = (() => {
  let clicks = 0;

  // event handler
  const incrementClicks = () => {
    clicks++;
    console.log(clicks);
    // document.querySelector('#click-display').innerHTML = clicks;
  }

  return incrementClicks;

})(); 
```

```javascript
btn.addEventListener('click', clickCounter);
```

First we set the **state** of the `click` variable by running an IIFE. 

The IIFE is returning a reference to the event handler. 

When we use `clickCounter` in the event listener, it will run the internal `incrementClicks` function.

<br>

### Closures: Provide input to the closure

Provide a value to the closure. The function will 'hold on' to that input value when making an instance.

Generator pattern:

```javascript
const countFromNumber = (i) => {
  let count = i;
  return () => {
    count++;
    console.log(count);
  }
}
```

```javascript
const foo = countFromNumber(1);
foo(); //2 
foo(); //3 
```

```javascript
const bar = countFromNumer(405);
bar(); //406
bar(); // 407
```

<br>

### Closures: Provide multiple inputs in stages

Let's do it again but with supplying initial state, and altering that state by providing
input to the inner enclosing function:


```javascript
const DoMath = (originalNum) => {

  const num1 = originalNum;

  const multiplyNum = (num2) => {
    console.log(num1 * num2);
  }

  return multiplyNum;
}
```

```javascript
const MathBox1 = DoMath(99);
MathBox1(2); // always operates on 99
MathBox1(834); // always operates on 99

// Make a new module
const MathBox2 = DoMath(Infinity);
MathBox2(2); // always operates on Infinity
MathBox2(834); // always operates on Infinity
```

<br>

### Closures: Provide default values, else provide input data

Use a closure to provide 'default values' say, to a new user. 

```javascript
const UserDefault = () => {

  const defaultName = "Inigo Montoya";
  const defaultMovie = "The Princess Bride";
  const defaultAge = 30;

  const printUserInfo = (name, movie, age) => {
    console.log(name || defaultName);
    console.log(movie || defaultMovie);
    console.log(age || defaultAge);
  }

  return printUserInfo;

}

const newUser1 = UserDefault();
const newUser2 = UserDefault();

newUser1("Dan Rather", "Real life", 85);     // Dan Rather, Real life, 85 
newUser2();                                  // Inigo Montoya, The Princess Bride, 30
```

In the counter we returned an object, in the defaultUser we set up multiple values that are **private** to the function. We can combine these to make what's called a module.

<br>


###  Closures: Module pattern

A module uses the same closure pattern, but this difference is matter of semantics. We can return object with references to the enclosing functions. This object is called a 'revealing object' -- you could also call it a public API - with publicly exposed methods as opposed to the private methods not available to the user of the API.

Closures are good for having both **private** and **public** data.

The object we return does not have references to our private inner data variables `admin` and `permissionsLevel`. Rather they are accessed through the public API.

```javascript
const User = () => {

  let admin = false;
  let permissionsLevel = 3;

  const toggleAdmin = () => {
    admin = !admin;
    console.log(admin);
  }

  const setPermissions = (num) => {
    permissionsLevel = num;
    console.log(permissionsLevel);
  }

  const publicApi = { toggleAdmin, setPermissions }

  return publicApi;
}
```

```javascript
const user1 = User();

user1.toggleAdmin();
user1.setPermissions(9);
```

If we only need our Module to be instantiated once, we can use it as an IIFE. (A named IIFE is one use-case where ES6 block-scoping will not replace IIFE).

```javascript
const User = (() => {

  let admin = false;
  let permissionsLevel = 3;

  const toggleAdmin = () => {
    admin = !admin;
    console.log(admin);
  }

  const setPermissions = (num) => {
    permissionsLevel = num;
    console.log(permissionsLevel);
  }

  const publicApi = { toggleAdmin, setPermissions }

  return publicApi;
})();
```

```javascript
User.toggleAdmin();
User.setPermissions(9);
```

The module pattern is often used for making a **library** of code to add extra functionality. 


<br>
<hr>

# Immutability

### Pure functions

[From here](http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/)

>A pure function doesn’t depend on and doesn’t modify the states of variables out of its scope.
>
>Concretely, that means a pure function always returns the same result given same parameters. Its execution doesn’t depend on the state of the system.
>
>Pure functions are a pillar of functional programming.

Say we want a function to sort an array. Should the function act destructively om the original array? Or should it return a new array?

It shouldn't mutate or alter the original data. We want the original data to be intact.

```javascript
const arr = [9, 8, 7, 6, 5]; 

const sortArray = function(input) {
  return input.sort();
}

sortArray(arr);
```

The `.sort` function si destructive: it acts on the original array. Since arrays are **referenced**, the original array will be altered.

See the value of the original array after the function has run:

```javascript
const arr = [9, 8, 7, 6, 5]; 

const sortArray = function(input) {
  return input.sort();
}

sortArray(arr);

console.log(arr); 
```
> [5, 6, 7, 8, 9]

Oops! The original was modified. How can we fix this?


It's generally preferred not to perform destructive actions on an existing **array** or **object** when performing operations on them. It's better to make a copy rather than perform destructive actions on the original.

But, simply assigning an array or object to a new variable won't work, because arrays and object are **referenced** in Javascript.

<br>

### Problem: arrays are referenced

```javascript
let arr = [1, 2, 3]; 
console.log('original array: ', arr);

let newArr = arr;
console.log('new array: ', newArr);
```

Same result. But if we alter the 'copy', the original will also have changed:

```javascript
newArr.push(7, 8, 9, 10);
console.log('new array mutated: ', newArr);

console.log('original array mutated? ', arr);
```

>new array mutated:  [ 1, 2, 3, 7, 8, 9, 10 ]
>
> original array mutated?  [ 1, 2, 3, 7, 8, 9, 10 ]

### Solution: copy the array

Use `.slice()` or `concat()` to make a copy (this is technically called a 'shallow copy').

```javascript
let arr = [1, 2, 3]; 
console.log('original array: ', arr);

let newArr = arr.slice();
console.log('new array: ', newArr);

newArr.push(7, 8, 9, 10);
console.log('new array mutated: ', newArr);

console.log('original array mutated? ', arr); 
```

>new array mutated:  [ 1, 2, 3, 7, 8, 9, 10 ]
>
> original array mutated?  [ 1, 2, 3 ]

OR

```javascript
newArr = arr.concat();

newArr = [].concat(arr);
```

For our sort function:

```javascript
const arr = [9, 8, 7, 6, 5]; 

const sortArray = function(input) {
  const newArray = input.slice();
  return newArray.sort();
}

sortArray(arr);

console.log(arr); 
```

**Arrays: `.map`, `.filter`, and `.reduce` will return new copies too.**

<br>

### Problem: objects are referenced

```javascript
var obj = { name: 'Elon', age: 45 }
console.log('original object: ', obj);

var newObj = obj;                                                                                                 
console.log('new object: ', newObj);
```

Same result. If you try alter the 'new' object:

```javascript
newObj.companies = ['Tesla', 'SpaceX', 'Boring'];
console.log('new object mutated: ', newObj);

console.log('original object mutated? ', obj); 
```

> new object mutated:  { name: 'Elon',
  age: 45,
  companies: [ 'Tesla', 'SpaceX', 'Boring' ] }
>  
> original object mutated?  { name: 'Elon',
  age: 45,
  companies: [ 'Tesla', 'SpaceX', 'Boring' ] }

### Solution: copy the object

To copy an object we can use ES6's new **Object.assign**

```javascript
var obj = { name: 'Elon', age: 45 }
console.log('original object: ', obj);

var newObj = Object.assign({}, obj);                                                                              
console.log('new object: ', newObj);

newObj.companies = ['Tesla', 'SpaceX', 'Boring'];
console.log('new object mutated: ', newObj);

console.log('original object mutated? ', obj);
```

> new object mutated:  { name: 'Elon',
  age: 45,
  companies: [ 'Tesla', 'SpaceX', 'Boring' ] }
>
> original object mutated?  { name: 'Elon', age: 45 }

You can also add the new properties directly into **Object.assign** as a third argument:

```javascript
var newObj = Object.assign({}, obj, { companies: ['Tesla', 'SpaceX', 'Boring'] });
```

<br>

### Freeze an object

```javascript
const obj = { 
  name: 'Sonny Jim',
  dad: 'Dougie'
}

Object.freeze(obj);

obj.dad = 'Cooper';
obj.mom = 'Naomi Watts';                                                                                          

console.log(obj);   
```
> { name: 'Sonny Jim', dad: 'Dougie' }

The object cannot be modified. 


### Deep copies

Deep copies are when you copy _all referenced arrays and objects_ within an array or object. 

```javascript
const arr = [1, 2, 3, 4];

const obj = {
  name: 'deep copy object',
  numbers: arr
}

const copiedObject = Object.assign({}, obj);
console.log(copiedObject);

copiedObject.numbers.push(5);

console.log('copied object array: ', copiedObject.numbers);
console.log('original array: ', arr);
```

Woops, the original array is modified when you modify the 'copied' array.

It's also possible for circular references to occur.

For deep copies look into `lodash.js` 


<br>
<hr>

# Prototypes

> File: **`prototypes/prototypes.js`**

<br>

Everything in JavaScript is an object (with some caveats).

JS primitives, **string**, **number**, **boolean** are _almost_ objects: they are wrapped in an object when you use a method on them or instantiate them using `new`.

**arrays** and **functions** are subtypes of **object**. A function is a 'callable' object.


When you make a new array:

```javascript
const arr = [];
```

This is equivalent to writing:

```javascript
const arr = new Array();
```

`new Array()` is an **object constructor** -- so your new array is an instance of an **object**.

```javascript
typeof arr // "object"
```

If you declare a 'primitive' datatype using constructors, you'll get the same result. How about:

```javascript
const str = new String('hi ya');

typeof str // "object"
```

How about:

```javascript
const num = new Number(100);

typeof num // "object"
```

Or for other built-ins, how about:

```javascript
const date = new Date();

typeof date // "object"
```

Functions are an exception, they are a special subset of Object.

```javascript
const fn = new Function();

typeof fn // "function"
```

<br>

### prototype inheritance

Every object in JavaScript has a **prototype** chain.

An object will inherit methods from another, more basic system object.

In Chrome or Firefox you can use `.__proto__` to inspect the prototype, or `Object.getPrototypeOf( objName )`

Functions, being special, have their own `.prototype` method. (But you can also call `.__proto__` on `.prototype`)

The top of the prototype chain is JavaScript's `Object.prototype` from whence all other objects are dervied. `Object.prototype` provides methods and functionality that all other objects should have, such as `.isPrototypeOf()` and `.hasOwnProperty()`.


### chain lookup

When using a method on an object, JavaScript will check that object to see if the method exists. If it doesn't, it will check that object's **prototype** object. If it's not in the prototype, it will check in the prototype's prototype and so on.

Let's use a constructor function (to construct an object). An object constructed by a constructor function will inherit from the constructor's prototype.

`has_own_property`

### constructors

```javascript
const Human = function(name, age) {
	this.name = name;
	this.age = age;
}
```

```javascript
Human.prototype.printDetails = function() {
	console.log(this.name + ' is ' + this.age);
}
```

```javascript
const alexa = new Human();
```

If we look at the alexa object, we'll see it does not have the `printDetails` method. The `printDetails` method exists on the prototype from which all `Human`s are made.

**Standard practice** when using constructor functions, it's standard practice to put methods on the prototype. The reason is that the method is only ever created **once**. If you write the method inside the constructor, the method will be created **each time** you instantiate a new object, which is a bit wasteful.

<br>
<hr>






