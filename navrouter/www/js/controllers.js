angular.module('MapApp.controllers', [])

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('todo');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  
})



.controller('CalculatorController', function($scope, CalculatorService) {
 
    $scope.doSquare = function() {
        $scope.answer = CalculatorService.square($scope.number1);
    }
 
    $scope.doCube = function(num) {
        $scope.answer = CalculatorService.cube(num);
    }
	
});

