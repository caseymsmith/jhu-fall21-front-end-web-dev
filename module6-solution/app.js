(function(){
  'use strict';

  // Create app.js in your project and declare an Angular module to match your ng-app declaration.
  angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);

  //Go back to app.js. Declare and define a LunchCheckController. Properly inject $scope into the 
  //controller using the $inject property (shown how in video lecture) to make sure to protect your 
  //code from minification.
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.message = "";
    $scope.button = function (){

    // If the message is "Enjoy!" or "Too much!", make the font color green. 
    // If the message is "Please enter data first", make the font color red.
    // If the message is "Enjoy!" or "Too much!", make the border color around the 
    // textbox green. If the message is "Please enter data first", make the border 
    // color around the textbox red.
    $scope.messageColor = "green";
    var numberOfItems = getNumberOfItems($scope.menu);
    if (numberOfItems == 0) {
      $scope.messageColor = "red";
      $scope.message = "Please enter data first";
    } else if (numberOfItems <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.messageColor = "red";
      $scope.message = "Too much!";
    }
  };

  // Implement this case item 1, item2,,item3 or this case item 1, item2, ,item3 as not 
  // counting an 'empty' item towards the count of how many items there are in the list. 
  // Please make sure to put a comment somewhere next to the input textbox stating that 
  // you do NOT consider an empty item, i.e., , , as an item towards to the count, so 
  // whoever is grading your assignment doesn't erroneously mark that as an error.
  function getNumberOfItems(menu){
    if(!menu){ 
      return 0; 
    }

    var menuArray = menu.split(',');
    var menuArrayLength = menuArray.length;

    for (var i = 0; i < menuArray.length; i++){
      var trimmedInput = menuArray[i].trim();
      if(!trimmedInput) {
        menuArrayLength--;
      }
    }
    return menuArrayLength;
  }
}
})();
