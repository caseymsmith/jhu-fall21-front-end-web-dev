(function(){
  "use strict"

  // Create app.js in your project and declare an Angular module to match your ng-app declaration.
  angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);

  //Go back to app.js. Declare and define a LunchCheckController. Properly inject $scope into the 
  //controller using the $inject property (shown how in video lecture) to make sure to protect your 
  //code from minification.
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.text;
    $scope.message;
    $scope.button = function(){
      if ( $scope.text === undefined ||
        $scope.text.length === 0 ) {
        $scope.message =  "Enter data first.";
    } else {

      var input = $scope.text.split(",");
      var striped = [];
      for( var i=0, j= input.length; i < j; i++ ) {
        if ( input[i].trim() !== "" ) {
          striped.push(input[i]);
        }
      }

      if ( striped.length <= 3 ) {
        $scope.message =  "Enjoy Lunch!";
      } else {
        $scope.message = "This is too much!";
      }
    }

  };
}
})();
