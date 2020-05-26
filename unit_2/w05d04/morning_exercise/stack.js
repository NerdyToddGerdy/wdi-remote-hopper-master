"use strict";

var stack = {
  // Write your code here
  myStack: [],
  add: function(thing){
    this.myStack.push(thing);
    return thing;
  },
  peek: function(){
    return this.myStack[this.myStack.length-1];
  },
  remove: function(){
    return this.myStack.pop();
  }
}

module.exports = stack;
