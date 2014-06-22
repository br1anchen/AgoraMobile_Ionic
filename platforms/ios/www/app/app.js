// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('agoraMobile', [
  'ionic',
  'ngCordova',
  'agoraMobile.services',
  'agoraMobile.controllers',
  'agoraMobile.directives',
  'agoraMobile.filters'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login',{
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginCtrl'
    })
    .state('stage',{
      url:'/stage',
      templateUrl: 'app/stage/stage.html',
      controller: 'StageCtrl'
    });

  $urlRouterProvider.otherwise('/login');
})

angular.module('agoraMobile.directives',[]);

angular.module('agoraMobile.controllers',[]);

angular.module('agoraMobile.services',[]);

angular.module('agoraMobile.filters',[]);
