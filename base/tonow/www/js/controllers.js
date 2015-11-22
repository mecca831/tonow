angular.module('tonow.controllers', ['ionic'])

.controller('OverviewCtrl', function($scope){
  console.log('OverviewCtrl Executed');
  $scope.variable = "I am the overview!"
})
