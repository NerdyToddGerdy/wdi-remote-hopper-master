![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIr-HOPPER

---
Title: ES6 Basics <br>
Type: Optional topic<br>
Duration: 2 hrs<br>
Creator: Thom Page <br>
Competencies: Basic JS, ES5<br>

---

[Comprehensive ES6 write-up](https://leanpub.com/understandinges6/read)

[Advanced ES6 write-up](https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond)

<hr>

# ES6 Basics

* **`let` and `const`**
* **arrow functions**
* **object literal syntax** and **concise method syntax**
* **arrow functions and context**


Extra stuff

* **classes**
* **default params**
* **spread operator**
* **useful methods**

<br>
<hr>

# ECMAScript

Javascript's language features are defined in a standard called ECMAScript. The standard is constantly being updated, and the shift right now is from ECMAScript 5 (ES5) to ECMAScript 2015, otherwise known as **ES6**. ES7 and ES8 are already on the way. These developments from ES6 onwards are collectively known as ESNext.

So far most browsers have support for most ES6 features. Internet Explorer, which some people still use, doesn't. For this reason, in production, client-side ES6 code is transpiled into ES5 using a transpiler like **babel**.

Most ES6 features are however good-to-go in **Node**.

<br>
<hr>

# `let` and `const`


> File: **`let_const.js`**
 
<br>

`let` and `const` are replacements for `var`. 

**Block scope.** `let` and `const` are **block-scoped** rather than function-scoped.

`var` within a block leaks out:

```javascript
if (true) {
  var num = 1;
}
console.log(num);
```

> 1


Constrain scope to a block with `const` and `let`:

```javascript
if (true) {
  const num = 1;
}
console.log(num);
```

> ReferenceError: num is not defined

```javascript
if (true) {
  let num = 1;
}
console.log(num);
```

> ReferenceError: num is not defined

<br>

### For loop blocks

With `var`, variables are function-scoped so the value is available outside the block of a for loop:

```javascript
for (var i=0; i < 10; i++) {}

console.log(i);
```
> 10

With `let` variables are block-scoped and not available outside the block.

```javascript
for (let i=0; i < 10; i++) {}

console.log(i);
```

> ReferenceError

This is good because it prevents scope pollution.

<br>

### Block scoping is passed into child blocks

This works:

```javascript
{
  let a = 'stuff'
                                                                                                                  
  {
    console.log(a);
  }
}
```
> 'stuff'

But as expected, the inner block does not pass to the outer block.

```javascript
{                                                                                                                 
  let a = 'stuff'

  {
    console.log(a);
    let b = 'can I see this stuff?'
  }

  console.log(b);
}
```
> Reference Error


<br>

### `const`: cannot reassign variables
`const` means a variable is constant and can't be changed.

```javascript
const num = 1;

num = 2;
```

> TypeError: Assignment to constant variable.

Great use for `const`: use it to declare functions (a function should never be overwritten)

Consider:

```javascript
var someFunc = function() {
	return "Hi"
}

var someFunc = null;

someFunc();
```
> TypeError: someFunc is not a function

This is just madballs. A function should never be overwritten like that.

Use `const` for all your functions:

```javascript
const returnOne = function() {
  return 1;
}

const returnOne = null;

returnOne();
```
> SyntaxError: Identifier 'returnOne' has already been declared

The function was not overwritten.


#### Rule of thumb

Always use `const` unless the value of the variable is intended to change, in which case use `let`.

<br>

### `const` and `let` can still be globally scoped

```javascript
const message1 = 'in the global scope'
let message2 = 'also in the global scope'

const printMessages = function() {
	console.log(message1);
	console.log(message2);
}

printMessages();
```
^^ This works

```javascript
{
	const message1 = 'in the global scope'
	let message2 = 'also in the global scope'
}

const printMessages = function() {
	console.log(message1);
	console.log(message2);
}

printMessages();
```
^^This would not work, because the messages are are inside a block.

<br>

### `const` and referenced datatypes

Arrays and objects are _referenced_ datatypes (more on this in immutability in the 'more javascript' optional topic. This means that you can still change the **properties** and **elements** of arrays and objects even if they were declared with `const`.

```javascript
const obj = { name: 'Sonny Jim' }

obj.dad = 'Dougie'
```
This works.

```javascript
const obj = { name: 'Sonny Jim' }

obj = { name: 'Sonny Jim' }
```
This doesn't, even if we're just reassigning the same values. Reassignment of the object itself is what is disallowed with `const`.

```javascript
const arr = [1, 2, 3];

arr.push(4);
```
^^This works.

```javascript
const arr = [1, 2, 3];

arr = [1, 2, 3, 4];
```
^^This doesn't work.

<br>
<hr>

# `() => {}` Arrow functions

> File **`arrow_functions.js`**

<br>

First, arrow functions are simplified syntax for writing functions:

```javascript
const returnOne = () => {
  return 1;
}
```

```javascript
const returnInput = (input) => {
  return input;
}
```

```javascript
const combineArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
}
```

#### Arrow functions: Implicit return for one-liners

```javascript
const printOne = () => 1;
```

```javascript
const printInput = (input) => input;
```

```javascript
const combineArrays = (arr1, arr2) => arr1.concat(arr2);
```

#### Arrow functions: Callbacks

Anonymous callbacks with arrow functions look neat.

```javascript
const arr = [1, 2, 3, 4, 5, 6];

const newArray = arr.map((elem) => {
  return elem * 10;
});
```

```javascript
const arr = [1, 2, 3, 4, 5, 6];

const sumArray = arr.reduce((sum, num) => {
  return sum += num;
});
```

```javascript
const arr = [1, 2, 3, 4, 5, 6];

const evenNums = arr.filter((elem) => {
  return elem % 2 == 0;
});
```

You could also make these with implicit returns:


```javascript
const arr = [1, 2, 3, 4, 5, 6];

const newArray = arr.map((elem) => elem * 10);
```

To go a step further, we can even remove parentheses for single parameters:


```javascript
const arr = [1, 2, 3, 4, 5, 6];

const newArray = arr.map(elem => elem * 10);
```

<br>

### Arrow functions: Fetch

> File: **`arrow_functions_fetch/app.js`**

This is quite nice with multiple callbacks and promises:

```javascript
fetch('https://api.github.com/users/singular000/repos')
 .then(response => response.json())
 .then(json => console.log(json))
 .catch(err => console.log(err))
```

<br>

### Arrow functions: Express

> File **`arrow_functions_express/server.js`**

* `npm install`

Express servers are now running with ES6 syntax:

```javascript
const express = require('express');
const app     = express();

const port    = 3001;

app.listen(port, () => console.log('running on port: ', port));
```

With routes:

```javascript
const express = require('express');
const app     = express();

const port    = 3001;

app.get('/resource', (req, res) => {
  res.send('index route');
});

app.get('/resource/:id', (req, res) => {
  res.send('show route for: ' + req.params.id);
});

app.listen(port, () => console.log('running on port: ', port));
```
<br>

#### Note

Arrow functions cannot be used as constructors. ES6 now has **classes** that you can use in place of constructors (below). 

<br>
<hr>

# Object literal shorthand

> File: **`object_literals.js`**

<br>

Old way

```javascript
const name = "Inigo Montoya";

const obj = { name: name }
```

New way

```javascript
const name = "Inigo Montoya";

const obj = { name }
```

```javascript
const name = "Inigo Montoya";
const movie = "The Princess Bride";
const age = 30;

const obj = {
	name,
	movie,
	age
}
```

With the new shorthand you'll probably see strange looking things like this:


```javascript
const obj = { name }
```

and

```javascript
const obj = { name, movie, age }
```

<br>

### Object literals: Concise method syntax

Objects methods can do away with the `key: function` syntax.

```javascript
const obj = {
  name: 'object literal with new syntax',

  printName() {
    console.log(this.name);
  },

  printNameUpperCased() {
    console.log(this.name.toUpperCase());
  }
}
```

```javascript
obj.printName();
obj.printNameUpperCased();
```

<br>
<hr>


# Arrow functions and context

> File: **`arrow_functions_context.js`**

<br>

The value of `this` is passed in to an arrow function.

Let's say we have an object with a method inside that logs the value of `this`:

```javascript
const obj = {
  name: "my object",
  runTask() {
    console.log(this);
  }
}

obj.runTask();
```
> { name: 'my object', runTask: [Function: runTask] }

We get back the object in which `runTask` is defined: "my object"

Let's say we use regular function syntax to add a setInterval inside `runTask` and console.log `this` within setInterval:

```javascript
const obj = {
  name: "my object",
  runTask() {
    console.log(this);
    setInterval(function() {
      console.log('This within setInterval: ', this);
    }, 1000);
  }
}

obj.runTask();
```

> Instead of getting back "my object", we get back the global context for setInterval.

If we want to preserve the outer context within setInterval, we can use either `self = this` or `.bind()`

```javascript
const obj = {
  name: "my object",
  runTask() {
    console.log(this);
    setInterval(function() {
      console.log('This within setInterval: ', this);
    }.bind(this), 1000);
  }
}

obj.runTask();
```

OR

```javascript
const obj = {
  name: "my object",
  runTask() {
    console.log(this);
    const self = this;
    setInterval(function() {
      console.log('This within setInterval: ', self);
    }, 1000);
  }
}

obj.runTask();
```

> This within setInterval:  { name: 'my object', runTask: [Function: runTask] }

Cool. Now how about those arrow functions...

**Arrow functions preserve the value of `this`**

```javascript
const obj = {
  name: "my object",
  runTask: function() {
    console.log(this);
    setInterval(() => {
      console.log('This within setInterval: ', this);
    }, 1000);
  }
}

obj.runTask();
```

> This within setInterval:  { name: 'my object', runTask: [Function: runTask] }

Cool, the arrow function has the value of `this` piped in from the outer context.

<br>

### Arrow functions and context: Angular

File: **`arrow_functions_angular/app.js`**

<br>

Old way using `controller = this` with an `$http` request:

```javascript
app.controller('MainController', ['$http', function($http) {

  const controller = this;
  this.APIResult = null;

  $http.get('https://api.github.com/users/singular000/repos')
   .then(function(result) {
     self.APIResult = result.data;
   });

}]);
```

New way: ES6 Arrow function - `this` is preserved

```javascript
app.controller('MainController', ['$http', function($http) {

  this.APIResult = null;

  $http.get('https://api.github.com/users/singular000/repos')
   .then((result) => {
     this.APIResult = result.data;
   });

}]);
```

Arrow function shortened version (for one-liner):

```javascript
app.controller('MainController', ['$http', function($http) {

  this.APIResult = null;

  $http.get('https://api.github.com/users/singular000/repos')
   .then(result => this.APIResult = result.data);

}]);
```

### Beware:

```javascript
app.controller('MainController', ['$http', ($http) => { }]);
```

If we begin our callback as an arrow function, the _outside_ value of this will be coming into our controller. Therefore, none of our `this`es will refer to the controller object.

Stick to 

```javascript
app.controller('MainController', ['$http', function($http) { }]);
```

<br>
<hr>

# Classes

> File: **`classes.js`**

<br>

ES6 Class syntax is a replacement for constructor functions. "Underneath the hood", however, a Class is just a constructor function.


You can make a class with nothing in it:

```javascript
class User {
	
}
```

Instantiate the class:

```
const user = new User;
```
> result is an empty object


Add in class methods ("underneath the hood" these are added to the constructor prototype, such as `User.prototype.someFunc = stuff`)

Class methods are written in **concise method syntax** that we saw earlier in object literals. There no `function` keyword, or `this`.


```javascript
class User {

  printName(name) {
    console.log(name);
  }

  printAge(age) {
    console.log(age);
  }
}

const user = new User;

user.printName('Elon');
user.printAge(45);
```

To add regular properties to the class, you need to add in a `constructor` method. It's similar to Ruby's `initialize` method.

```javascript
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
```

```javascript
class User {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName() {
    console.log(this.name);
  }


  printAge() {
    console.log(this.age);
  }
}

const user = new User('Elon', 45);
console.log(user);

user.printName();                                                                                                 
user.printAge();
```

<br>

### Classes: Extending a class

Class inheritance is straightfoward in ES6. We use `extends` syntax.

```javascript
class Admin extends User {

  constructor() {
    this.admin = true;
    this.permissionsLevel = 3;
  }

}
```

```javascript
const adminUser = new Admin;                                                                                      

console.log(adminUser);
```

We should get an error: `this` is undefined. We want `this` to pull its definition from the superclass. For that we use `super()`.

```javascript
class Admin extends User {

  constructor() {
    super();
    this.admin = true;
    this.permissionsLevel = 3;
  }

} 
```

The result should work: the Admin class is inheriting from the User superclass. But now we don't have values for name and age.

We want to pass name and age into Admin when we instantiate the Admin:

Admin class:

```javascript
constructor(name, age)
```

```javascript
const adminUser = new adminUser('Elon', 45)
```

... And we want those passed in params to be passed into the superclass so that they will be given as values to the keys in the superclass

```javascript
super(name, age)
```

```javascript
class Admin extends User {

  constructor(name, age) {
    super(name, age);
    this.admin = true;
    this.permissionsLevel = 3;
  }

}

const adminUser = new Admin('bobus', 45);                                                                         

console.log(adminUser);
```

So now we can make methods that reference `this.name` coming from the superclass, and other properties defined in the current class:

```javascript
class Admin extends User {

  constructor(name, age) {
    super(name, age);
    this.admin = true;
    this.permissionsLevel = 3;
  }

  printCredentials() {
    console.log(this.name + ' has permissions level: ' + this.permissionsLevel);                                  
  }

}

const adminUser = new Admin('bobus', 45);

console.log(adminUser);
adminUser.printCredentials();
```

<br>
<hr>

# Default params

> File: **`default_params.js`**

<br>

Give your functions default parameters. You can then have meaningful output without providing arguments.

```javascript
const sumValues = (val1=20, val2=30) => {
  console.log(val1 + val2);
}

sumValues();
```
> 50

If you provide arguments, the defaults are overridden

```javascript
const sumValues = (val1=20, val2=30) => {
  console.log(val1 + val2);
}

sumValues(9034, 888888);
```
> 897922

<br>
<hr>

# `...` Spread operator

> File: **`spread_operator.js`**

<br>

With the spread operator you can break arrays into elements:

```javascript
const arr = [1, 2, 3, 4, 5, 6];

console.log(...arr);
```
> 1 2 3 4 5 6 


Combine any number of arrays within an array

```javascript
const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];

const combinedArrays = [].concat(...arrayOfArrays);
```
> [1, 2, 3, 4, 5, 6]


Merge an existing array into a specific location in another:

```javascript
const cheeses = ['gruyere', 'sharp cheddar'];

const smorgasbord = ['tartines', ...cheeses, 'Hass avocadoes'];
```

> [ 'tartines', 'gruyere', 'sharp cheddar', 'Hass avocadoes' ]

<br>

### Use the spread operator to break up arguments

Old way

```javascript
const printCheeses = (cheese1, cheese2) => {
  console.log(cheese1);
  console.log(cheese2);
}

printCheeses('gruyere', 'sharp cheddar');
```

Another way: put the cheeses array in there

```javascript
const cheeses = ['gruyere', 'sharp cheddar'];

const printCheeses = (cheese1, cheese2) => {
  console.log(cheese1);
  console.log(cheese2);
}

printCheeses(...cheeses);
```

<br>
<hr>

# Useful Methods

* array methods
	* `.includes` 
	* `.fill`
	*  `.find`
	*  `.findIndex`
	*  `.entries`

* string methods
	* `.includes`
	* `.startsWith`
	* `.endsWith` 

* object methods
	* `.assign`

<br>
	








