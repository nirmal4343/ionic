var nameApp = angular.module('starter', ['ionic', 'starter.controllers']);

nameApp.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
    .state('list', {
      url: '/',
      templateUrl: 'templates/list.html',
      controller: 'ListCtrl'
    })
    .state('view', {
      url: '/movie/:movieid',
      templateUrl: 'templates/view.html',
      controller: 'ViewCtrl'
    });
 
  $urlRouterProvider.otherwise("/");
 
});
 
