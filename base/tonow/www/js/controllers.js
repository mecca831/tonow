angular.module('tonow.controllers', ['ionic'])

.controller('OverviewCtrl', function($scope, $timeout) {
  console.log('OverviewCtrl Executed');
  $scope.hide = false;
  $scope.variable = "Today";
  $scope.tasks = ["Clean bathroom", "Make bread", "Something w/ someone"];
  $scope.cards = [
    {
      "day": "Today",
      "title": "This is today",
      "tasks": ["Clean bathroom", "Make bread", "Something w/ someone"]
    },
    {
      "day": "Tomorrow",
      "title": "This is tomorrow",
      "tasks": ["Buy car wipes", "Shower"]
    }
  ];

  // $scope.go = function(direction) {
  //       $scope.hide = true;
  //       $scope.past = (direction > 0);
  //
  //       $timeout(function() {
  //         $scope.variable = "Today "+direction;
  //         $scope.hide = false;
  //       }, 150);
  // }
})
