console.log('app.js');

const btn = document.querySelector('#btn');


const clickCounter = (function() {

  let clicks = 0;

  const incrementClicks = function() {
    clicks++;
    console.log(clicks);
  }

  return incrementClicks;

})();

btn.addEventListener('click', clickCounter);
