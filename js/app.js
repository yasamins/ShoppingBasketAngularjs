var app = angular.module('grocceryListApp', ['ngRoute']);

  //that slash means home page and then we define what template we want to load
  app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "views/groceryList.html",
      controller : "GroceryListItemsController"
  })

  .when("/addItem", {
      templateUrl : "views/addItem.html",
      controller : "GroceryListItemsController"
  })
  .otherwise({
    redirectTo: "/"
  })

});

app.controller("HomeController", ["$scope", function($scope) {
  $scope.appTitle = "Grocery List";
}]);

app.controller("GroceryListItemsController", ["$scope", function($scope) {
  $scope.groceryItems = [
   {completed: true, itemName: 'milk', date: '2017-10-01'},
   {completed: true, itemName: 'cookies', date: '2017-10-02'},
   {completed: true, itemName: 'ice cream', date: '2017-10-03'},
   {completed: true, itemName: 'cereal', date: '2017-10-05'},
   {completed: true, itemName: 'potatoes', date: '2017-10-04'},
   {completed: true, itemName: 'bread', date: '2017-10-07'},
   {completed: true, itemName: 'eggs', date: '2017-10-09'},
   {completed: true, itemName: 'tortillas', date: '2017-10-01'}

 ]

}]);
