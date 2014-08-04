angular.module('MapApp.services', [])
//http://viralpatel.net/blogs/angularjs-service-factory-tutorial/

.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.service('MathService', function() {
    this.add = function(a, b) { return a + b };
     
    this.subtract = function(a, b) { return a - b };
     
    this.multiply = function(a, b) { return a * b };
     
    this.divide = function(a, b) { return a / b };
})
 
.service('CalculatorService', function(MathService){
     
    this.square = function(a) { return MathService.multiply(a,a); };
    this.cube = function(a) { return MathService.multiply(a, MathService.multiply(a,a)); };
 
})


.service('ContactService', function() {

    //to create unique contact id
    var uid = 1;
     
    //contacts array to hold list of all contacts
    var contacts = [{
        id: 0,
        'name': 'Viral',
            'email': 'hello@gmail.com',
            'phone': '123-2343-44'
    }];
     
    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (contact) {
        if (contact.id == null || contact.id == undefined ) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }
 
    }
 
    //simply search contacts list for given id
    //and returns the contact object if found
    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }
 
    }
     
    //iterate through contacts list and delete 
    //contact if found
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }
 
    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }

})

.service("FriendService",function( $http, $q ) {



    // Demo End
        // Return public API.
        // This is a constructor of Friend Service, we dont want to make REST call on constructor init.
        /*
        return({
            //addFriend: addFriend,
            getFriends: getFriends
            //removeFriend: removeFriend
        });
        */

        // ---
        // PUBLIC METHODS.
        // ---

        var empInformation = {};

        // I get all of the friends in the remote collection.
        this.getEmp = function getFriends() {
            //alert('getting emp');
            var request = $http({
                method: "get",
                url: "http://learnresfull-restcall.rhcloud.com/restaurent/",
                params: {
                    action: "get"
                }
            });

            return( request.then( handleSuccess, handleError ) );

        }

        // ---
        // PRIVATE METHODS.
        // ---


        // I transform the error response, unwrapping the application dta from
        // the API response payload.
        function handleError( response ) {

            // The API response from the server should be returned in a
            // nomralized format. However, if the request was not handled by the
            // server (or what not handles properly - ex. server error), then we
            // may have to normalize it on our end, as best we can.
            if (
                ! angular.isObject( response.data ) ||
                ! response.data.message
                ) {

                return( $q.reject( "An unknown error occurred." ) );

            }

            // Otherwise, use expected error message.
            return( $q.reject( response.data.message ) );

        }


        // I transform the successful response, unwrapping the application data
        // from the API response payload.
        function handleSuccess( response ) {
            //alert('data count ' + response.data[0].firstName);
            empInformation = response.data;
            return( response.data );

        }



                // I get all of the friends in the remote collection.
        this.getEmpDetails = function getEmpDetails(empId) {
            //alert('getting emp');
            var request = $http({
                method: "get",
                url: "http://learnresfull-restcall.rhcloud.com/restaurent/employee/" + empId,
                params: {
                    action: "get"
                }
            });

            return( request.then( handleEmpDetailsSuccess, handleDtlError ) );

        }

        // ---
        // PRIVATE METHODS.
        // ---


        // I transform the error response, unwrapping the application dta from
        // the API response payload.
        function handleDtlError( response ) {

            // The API response from the server should be returned in a
            // nomralized format. However, if the request was not handled by the
            // server (or what not handles properly - ex. server error), then we
            // may have to normalize it on our end, as best we can.
            if (
                ! angular.isObject( response.data ) ||
                ! response.data.message
                ) {

                return( $q.reject( "An unknown error occurred." ) );

            }

            // Otherwise, use expected error message.
            return( $q.reject( response.data.message ) );

        }


        // I transform the successful response, unwrapping the application data
        // from the API response payload.
        function handleEmpDetailsSuccess( response ) {
            return( response.data );
        }
 
});

 
