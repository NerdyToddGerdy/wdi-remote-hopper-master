console.log('iife practice');

// a named IIFE
const IIFE = (function() {

  const App = 'my code';
  console.log(App);

  const fn1 = function() {
    console.log('fn1')
  }

  const fn2 = function() {
    console.log('fn2')
  }

  return {
    runFn1: fn1,
    runFn2: fn2
  }

})();

IIFE.runFn1();

IIFE.runFn2();


