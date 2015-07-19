var movieCtlrs = angular.module('starter.controllers', ['starter.services'])

movieCtlrs.controller('ListCtrl', function($scope, $http, Movies) {
 
  $scope.movie = {
    name: ''
  }
 
  $scope.searchMovieDB = function() {
 
    Movies.list($scope.movie.name, function(movies) {
      $scope.movies = movies;
    });
     
  };
});
 
movieCtlrs.controller('ViewCtrl', function($scope, $http, $stateParams, Movies) {
  Movies.find($stateParams.movieid, function(movie) {
    $scope.movie = movie;
  });
});