console.log('benchmark practice');

const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const forwardForLoop = function() {
  for (let i=0; i < 100; i++){};
}

const reverseForLoop = function() {
  for (let i=99; i>=0; i--) {};
}

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

suite
  .add('test1', forLoopIteration)
  .add('test2', forEachIteration)
  .on('start', function() { console.log('Running test...') })                                                     
  .on('cycle', function(e) { console.log(String(e.target)) })
  .on('complete', function() {
        console.log('Fastest is: ' + this.filter('fastest').map('name'))
      })
  .run({ 'async': true })


