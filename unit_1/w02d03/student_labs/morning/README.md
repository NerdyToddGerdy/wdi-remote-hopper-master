![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

<hr>
Title: Objects, OOP, and This<br>
Type: Lab<br>
Duration: 1 hr<br>
Creator: Kristyn Bryan<br>
Topics: Using objects, the keyword `this` and methods to solve problems focusing on OOP.<br>
<hr>

# Morning Lab

## Directions

Use the file `morning_answers.js` inside your `student_labs` folder for today to write objects to complete the following questions. Refer back to your class notes from today if you need help.

NOTE: Always check that your code is working before moving on!

# Exercises

## Clicker

1. Make an object called `clicker`, which has a `clickCount` property, and a `click` method.  
2. Have the `click` method increment the `clickCount` by 1 each time it is called.

## It's All About Me

1. Create an object called `myInformation`.
2. Assign to it your name, your current age, and a fact about you.
3. Inside `myInformation`, create a method called `statement` that returns a statement about you including your name, this fact, and how old you will be in 10 years.
4. Inside `myInformation`, create another function that can be used to increment the value of your age by 1 each time that you call it.
5. It's your birthday! Call this new method that you made that will increase your age.
6. Create another function that can be used to change the value of your `name`.
7. You're feeling funky and decide that your new name is `Rumpelstiltskin`. Call the method that will update your name and assign this new name. Log your object to confirm the changes.

## Greeter
1. Create an object called `greeter`.
2. Inside the `greeter` object, create a method called `hello` that takes a name as a parameter and returns a greeting message followed by the `name` parameter.

>Example:
`Oh hello there, Matthew`

3. Create another method inside `greeter` called `goodbye` that takes a name as a parameter and returns a farewell greeting followed by the `name` parameter.

>Example:
`Arrivederci, Matthew!`

4. Create a final method inside `greeter` called `whoAreYou` that takes a name as a parameter and returns "Oh right! ", followed by the `name` parameter, followed by " how could I forget...!"

>Example:
`Oh right! Matthew how could i forget...!`

5. Play around executing your functions by accessing them through the object.

## Collecting Strings

Make an object called `stringCollector`, which has:  
1. a `collection` property - an array to hold strings
2. a `collect` method which takes a string as a parameter
3. the string collector prefers the strings to be totally reversed in their collection, however, so make sure to reverse it before adding it to the collection
4. add an `admireCollection` method which prints out each string in the collection to the console, one line at a time

## ATM

Make an object called `atm` which has two properties:  
1. `totalCash`, the total amount of cash in the `atm`
2. `dispenseTwenties`, a method with takes a number of twenties and, if there is enough cash, returns the total number of cash it is giving out.  
3. If there is not enough cash, return `null` instead.

>For example, if the `atm` has `200` dollars left, the call to `dispenseTwenties(6)` should return `120`, and update the `totalCash` to `80`.  However a call to `dispenseTwenties(11)` should return `null`.

## Hungry Turtles

1. Create an object called `Leonardo`.
2. Leonardo should have a name attribute of "Leonardo", a color attribute of "Blue", and a weapon attribute of "Katana".
3. Leonardo should also have a boolean property called pizzaEaten that is initially set to false.
4. Add a method to Leonardo called eatPizza() which does the following:
    - If pizzaEaten is true, print out "Leonardo has already eaten pizza" and set pizzaEaten to false.
    - If pizzaEaten is false, print out "Leonardo is eating pizza" and set pizzaEaten to true.

## Calculator

1. Create an object called `calculator`
2. Create a property called `output`
3. Create a method inside your object that will multiply two numbers and change the `output` value to this current value. This method should also log the value of `output`.
4. Create a function that will divide two numbers. It should also change the `output` value to this current value. This method should also log the value of `output`.
5. Practice using your calculator with some pairs (10, 2), (-2, 8), (2, 2).
6. If there's additional time, add methods for `addition` and `subtraction`
