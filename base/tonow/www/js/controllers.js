angular.module('tonow.controllers', ['ionic', 'tonow.services'])

.controller('OverviewCtrl', function($scope, $state, OverviewService) {
  console.log('OverviewCtrl Executed');
  $scope.hide = false;
  $scope.variable = "Today";
  $scope.tasks = ["Clean bathroom", "Make bread", "Something w/ someone"];
  cards = OverviewService.getNotes()
  $scope.cards = cards
  $scope.numCards = cards.length

  $scope.goTask = function(num) {
      $state.go('task', { number: num });
  };

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

.controller('TaskCtrl', function($scope, $stateParams, OverviewService) {
  console.log('TaskCtrl: '+$scope);
  console.log('TaskCtrl: '+$stateParams.number);
  cards = OverviewService.getNotes();
  console.log('cards: '+cards[$stateParams.number].tasks);
  $scope.card = cards[$stateParams.number];
})

.controller('LoginCtrl', function($scope, $state, LoginService) {
  console.log('LoginCtrl');

  $scope.login = function(username, password) {
    console.log(username + password);
    // authentication
    auth = LoginService.performLogin(username, password);
    if (auth.result == true) {
      $state.go('overview');
    } else {
      $state.go('login');
    }
  };

})
