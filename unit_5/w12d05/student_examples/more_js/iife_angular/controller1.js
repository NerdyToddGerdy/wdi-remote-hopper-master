

  console.log('main controller loaded');

  const app = angular.module('MyApp', [])
  
  app.controller('MainController', function() {
    this.message = 'main controller';
  });
