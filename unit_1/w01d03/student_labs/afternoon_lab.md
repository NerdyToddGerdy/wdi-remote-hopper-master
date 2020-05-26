![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

<hr>
Title: Arrays & Conditionals<br>
Type: Lab<br>
Duration: 1.5 hr<br>
Creator: Kristyn Bryan<br>
Topics: Using arrays, loops, and conditionals to solve problems.<br>
<hr>

# Afternoon Lab

## Directions

Use the file `afternoon_lab_solutions.js` to write arrays, loops, `if`, or `if, else` statements to complete the following questions. Refer back to your class notes from today if you need help.

## Exercises

### Easy Does It
1. Create an array that contains three quotes and store it in a variable called `quotes`.

### Random
Given the following array `var randomThings = [1, 10, "Hello", true]`

1. how do you access the 1st element in the array?

randomThings[0]

2. Change the value of `"Hello"` to `"World"`.

<<<<<<< HEAD
randomThings[2] = "World"

3. Check the value of `a` to make sure it updated the array.
=======
3. Check the value of the array to make sure it updated the array.
>>>>>>> 522aabbe2e093693afb62454665c95248d3635e8

### We've Got Class
Given the following array `var ourClass = ["Hopper", "Zoom", "Github", "Slack"]`

1. What would you write to access the 3rd element of the array?

ourClass[2];

2. Change the value of "Github" to "Octocat"

ourClass[2] = "Octocat"

3. Add a new element, "Cloud City" to the array.

ourclass.push("Cloud City")

### Mix It Up
4. Given the following array `var myArray = [5 ,10 ,500, 20]`

1. using the `push` method, add the string `"Egon"` to the end of the array.

myArray.push("Egon");

2. using a method, remove the string from the end of the array.

myArray.pop()

3. using the `unshift` method, add the string `"Bob Marley"` to the beginning of the array

myArray.unshift("Bob Marley")

4. using a different method, remove the string from the beginning of the array

myArray.shift()

5. use the reverse method on this array

myArray.reverse()

### Biggie Smalls
Write an `if..else` statement:

1. console.log `little number` if the number is entered is less than **100**

2. If the number entered is 100 or more, alert `big number`.

var num = 0
if (num <100) {
  console.log("little number")
  } else {
    console.log("big number")
  }

### Monkey in the Middle
Write an `if...else if...else` statement:

1. console.log `little number` if the number entered is less than **5**.<br>

2.  If the number entered is more than 10, log `big number`.

3. Otherwise, console.log "monkey". <br>

var num = 0;
if (num<5) {
  console.log("little number")
} else if (num>10) {
  console.log("big number")
} else {
  console.log("monkey");
}

### What's in Your Closet?

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

```javascript
var kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
var thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
```

1. What's Kristyn wearing today? Using bracket notation to access items in `kristynsCloset`, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named `kristynShoe`.

varKristyn

3. Kristyn just bought some sweet shades! Add `"raybans"` to her closet **after `"yellow knit hat"`.**

4. Kristyn spilled coffee on her hat... modify this item to read `"stained knit hat"` instead of yellow.

5. Put together an outfit for Thom! Using **bracket notation**, access the first element in Thom's `shirts` array.

6. In the same way, access one item from Thom's pants array.

7. Access one item from Thom's accessories array.

8. Log a sentence about what Thom's wearing. Example: `"Thom is looking fierce in a grey button-up, jeans and wool scarf!"`

9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to `Footie Pajamas`.
