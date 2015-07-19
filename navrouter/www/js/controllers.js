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
    }
 
 
    $scope.delete = function (id) {
 
        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }
 
 
    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
    }
})

.controller('FriendsCtrl', function($scope, FriendService) {

    // Dependency Injection, this portion of code will get execute one the menu item got clicked from side menu. NOT on PAGE LOAD
    var promise = FriendService.getEmp();
        promise.then(
        function(payload) { 
                  $scope.friends = payload
        },
        function(errorPayload) {
                  $log.error('failure loading Employee', errorPayload);
        });

})

.controller('FriendDetailCtrl', function($scope, $stateParams, FriendService) {

    // alert($stateParams.friendId);
    // Dependency Injection, this portion of code will get execute one the menu item got clicked from side menu. NOT on PAGE LOAD
    // $scope.friend =  FriendService.getTempEmp(2);
    
    var promise = FriendService.getEmpDetails($stateParams.friendId);
        promise.then(
        function(payload) { 
                  $scope.friend = payload[0]; // Only one object

        },
        function(errorPayload) {
                  $log.error('failure loading Employee', errorPayload);
        });


});



