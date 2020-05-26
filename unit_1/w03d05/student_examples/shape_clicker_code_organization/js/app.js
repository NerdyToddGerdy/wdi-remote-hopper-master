console.log('uh');

// event listeners -- within window onload
$(function() {
  $('.row div').on('mouseenter', EventHandlers.onClickChangeShape);
}); // end window onload


// data and app logic
var App = {
  classNames: ['triangle', 'circle', 'square',
               'triangle-down', 'octagon', 'heart'],
  clicks: 1,
  incrementClicks: function() {
    this.clicks++;
  },
  rotateRandom: function(){
    console.log('rotating');
    return Math.floor(Math.random()*360)
  }
}

// functions that affect the DOM
var UI = {
  changeShape: function($elem) {
    $elem.attr('class', App.classNames[App.clicks]);
  }
}

// event handlers
var EventHandlers = {
  onClickChangeShape: function() {
    UI.changeShape($(this));
    $(this).css('transform','rotate('+App.rotateRandom() +'deg)')
    App.incrementClicks();
    if (App.clicks == App.classNames.length) {
      App.clicks = 0;
    }
  }
}
