angular.module('tonow.controllers', ['ionic', 'tonow.services'])

.controller('OverviewCtrl', function($scope, $state, OverviewService) {
  console.log('OverviewCtrl Executed');
  $scope.hide = false;
  $scope.variable = "Today";
  $scope.tasks = ["Clean bathroom", "Make bread", "Something w/ someone"];
  cards = OverviewService.getNotes()
  $scope.cards = cards
  $scope.numCards = cards.length


  $scope.addTask = function() {
    console.log('addTask');
    $state.go('task');
  };

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

.controller('TaskCtrl', function($scope) {
  console.log('TaskCtrl');
  $scope.tasks = ["Clean bathroom", "Make bread", "Something w/ someone"];

})

.controller('LoginCtrl', function($scope, $state) {
  console.log('LoginCtrl');
  $scope.tasks = ["Clean bathroom", "Make bread", "Something w/ someone"];

  $scope.login = function(username, password) {
    console.log(username + password);
    if (username == 'test' && password == 'test') {
      // authentication
      $state.go('overview');
    } else {
      $state.go('login');
    }
  };

})
