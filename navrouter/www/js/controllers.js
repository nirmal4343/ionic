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
	
})


.controller('ContactController', function ($scope, ContactService) {
 
    $scope.contacts = ContactService.list();
 
    $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};

        ContactService.httpRestCall();
    }
 
 
    $scope.delete = function (id) {
 
        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }
 
 
    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
    }
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})



